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

const LoginPage = ({isLoading}) => {

    const [{confirmationCode, newPassword, username}, setState] = useState({
        confirmationCode: '',
        newPassword: '',
        username: ''
    });

    const handleOnChange = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const handleOnClick = () => {
        console.log('here');
        console.log('confirmationCode: ', confirmationCode);
        // getNewPassword({confirmationCode, newPassword, username});
    };

    if (isLoading) return <Spinner/>;

    return (
        <Formik
            initialValues={{confirmationCode: '', newPassword: '', username:''}}
            validationSchema={Yup.object().shape({
                confirmationCode: Yup.number().required('Required').typeError('Code must be a number'),
                newPassword: Yup.string()
                    .required('No password provided.')
                    .min(8, 'Password should be 8 chars minimum.')
                    .matches(
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        'Password must contain an uppercase, a lowercase letter, numbers and symbols.'
                    ),
                username: Yup.string()
                    .email('Please enter a valid email address')
                    .required('Required')
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

                if(isLoading) return  <Spinner/>;

                return (
                    <div className='flex flex-column items-center'>
                        <Form name='forgot-password-email' className='forgot-password-email'>
                            <Form.Item>
                                <FloatLabel label="Username" name="username" value={values.username}>
                                    <Input
                                        id='username'
                                        onChange={customHandleChange}
                                        name="username"
                                        value={values.username}
                                        onBlur={handleBlur}
                                        suffix={errors.username ? <FormErrorLocker /> :
                                            <FormLocker color={!dirty ? COLORS.white : COLORS.green}
                                                        opacity={!dirty ? 0.65 : 1}/>}
                                    />
                                </FloatLabel>
                                {errors.username && touched.username && (
                                    <div className="input-feedback">{errors.username}</div>
                                )}
                            </Form.Item>

                            <Form.Item>
                                <FloatLabel label="Confirmation Code" name="confirmationCode" value={values.confirmationCode}>
                                    <Input
                                        id='confirmationCode'
                                        onChange={customHandleChange}
                                        name="confirmationCode"
                                        value={values.confirmationCode}
                                        onBlur={handleBlur}
                                        suffix={errors.confirmationCode ? <FormErrorLocker/> :
                                            <FormLocker color={!dirty ? COLORS.white : COLORS.green}
                                                  opacity={!dirty ? 0.65 : 1}/>}
                                    />
                                </FloatLabel>
                                {errors.confirmationCode && touched.confirmationCode && (
                                    <div className="input-feedback">{errors.confirmationCode}</div>
                                )}
                            </Form.Item>

                            <div className='button-wrapper'>
                                <Button
                                    className='next-button'
                                    disabled={errors.newPassword || !values.newPassword}
                                    onClick={handleOnClick}
                                >
                                    OK
                                </Button>
                            </div>
                        </Form>
                    </div>

                );
            }}
        </Formik>
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
