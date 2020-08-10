import React, {useState} from 'react';
import style from './Login.module.scss';
import {Button, Form, Input} from 'antd';
import Spinner from '../../components/spinner';
import {isAuthenticated, isLoading} from '../../store/selectors';
import {login, setIsAuthenticated} from '../../store/actions/authActions';
import {connect} from 'react-redux';
import FloatLabel from '../../components/floatLabel/FloatLabel';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS} from '../../utils/constatns';
import FormErrorLocker from '../../components/form-error-locker/FormErrorLocker';
import FormLocker from '../../components/form-locker/FormLocker';

const LoginPage = ({isLoading, login}) => {

    const [{email, password}, setState] = useState({
        email: '',
        password: '',
    });

    const handleOnChange = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const handleOnClick = () => {
        login({email, password})
    };

    if (isLoading) return <Spinner/>;

    return (
        <div className={style['login-page-wrapper']}>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Please enter a valid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('No password provided.')
                        .min(8, 'Password should be 8 chars minimum.')
                        .matches(
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            'Password must contain an uppercase, a lowercase letter, numbers and symbols.'
                        )
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
                                    <FloatLabel label="Password" name="password" value={values.password}>
                                        <Input
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
