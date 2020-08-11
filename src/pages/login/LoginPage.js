import React, {useEffect, useState} from 'react';
import style from './Login.module.scss';
import {Form, Input} from 'antd';
import Spinner from '../../components/spinner';
import {isAuthenticated, isLoading} from '../../store/selectors';
import {login, loginSuccess, setIsAuthenticated} from '../../store/actions/authActions';
import {connect} from 'react-redux';
import FloatLabel from '../../components/floatLabel/FloatLabel';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS} from '../../utils/constatns';
import FormErrorLocker from '../../components/form-error-locker/FormErrorLocker';
import FormLocker from '../../components/form-locker/FormLocker';
import {setLoading} from '../../store/actions/uIStateActions';
import {MailOutlined, LockOutlined, CloudOutlined} from '@ant-design/icons';

const LoginPage = ({isLoading, login, isAuthenticated, history, loginSuccess}) => {

    useEffect(() => {
        const redirect = async () =>{
            setLoading(true);
            try {
                const token = await localStorage.getItem('token');
                if (token) {
                    setLoading(false);
                    loginSuccess(true);
                }
            }catch (e) {
                console.log('--er: ', e);
            }

        };

        if (isAuthenticated) {
            history.push('/');
        } else {
            redirect();
        }
    }, [isAuthenticated]);

    const [{email, password}, setState] = useState({
        email: '',
        password: '',
    });

    const handleOnChange = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const handleOnClick = () => {
        login({email, password});
    };

    if (isLoading) return <Spinner/>;

    return (
        <div className={style['login-page-wrapper']}>
            <div className='logo'>
                <CloudOutlined />
                <div className='dashed' />
                <div className='logo-text'>UserCloud</div>
            </div>

            <div className='signin-text'>Sign in</div>

            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Please enter a valid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('No password provided.')
                        .min(3, 'Password should be 3 chars minimum.')
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        handleChange,
                        handleBlur
                    } = props;

                    const customHandleChange = (e) => {
                        handleChange(e);
                        handleOnChange(e);
                    };

                    if (isLoading) return <Spinner/>;

                    return (
                        <div className='flex flex-column items-center'>
                            <Form name='forgot-password-email' className='forgot-password-email'>
                                <Form.Item>
                                    <MailOutlined />
                                    <FloatLabel label="Email" name="email" value={values.email}>
                                        <Input
                                            id='email'
                                            onChange={customHandleChange}
                                            name="email"
                                            value={values.email}
                                            onBlur={handleBlur}
                                            suffix={errors.email ? <FormErrorLocker/> :
                                                <FormLocker color={!dirty ? COLORS.white : COLORS.green}
                                                            opacity={!dirty ? 0.65 : 1}/>}
                                        />
                                    </FloatLabel>
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email}</div>
                                    )}
                                </Form.Item>

                                <Form.Item>
                                    <LockOutlined />
                                    <FloatLabel label="Password" name="password" value={values.password}>
                                        <Input
                                            type='password'
                                            id='password'
                                            onChange={customHandleChange}
                                            name="password"
                                            value={values.password}
                                            onBlur={handleBlur}
                                            suffix={errors.password ? <FormErrorLocker/> :
                                                <FormLocker color={!dirty ? COLORS.white : COLORS.green}
                                                            opacity={!dirty ? 0.65 : 1}/>}
                                        />
                                    </FloatLabel>
                                    {errors.password && touched.password && (
                                        <div className="input-feedback">{errors.password}</div>
                                    )}
                                </Form.Item>

                                <div className='button-wrapper'>
                                    <button
                                        className='button'
                                        disabled={errors.email || !values.email || errors.password || !values.password}
                                        onClick={handleOnClick}
                                    >
                                        <div className='btn-txt'>Sign In</div>
                                    </button>
                                </div>
                            </Form>
                        </div>

                    );
                }}
            </Formik>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: isLoading(state),
        isAuthenticated: isAuthenticated(state)
    };
};

function mapDispatchToProps(dispatch) {
    return {
        login: data => dispatch(login(data)),
        setIsAuthenticated: data => dispatch(setIsAuthenticated(data)),
        loginSuccess: () => dispatch(loginSuccess()),
        setLoading: data => dispatch(setLoading(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
