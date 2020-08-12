import React, {useState} from 'react';
import style from '../users/UsersPage.module.scss';
import PageLayout from '../../components/page-layout/PageLayout';
import * as Yup from 'yup';
import Spinner from '../../components/spinner';
import {Form, Input} from 'antd';
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import FloatLabel from '../../components/floatLabel/FloatLabel';
import FormErrorLocker from '../../components/form-error-locker/FormErrorLocker';
import FormLocker from '../../components/form-locker/FormLocker';
import {COLORS} from '../../utils/constatns';
import {Formik} from 'formik';
import {isAuthenticated, isLoading} from "../../store/selectors";
import {login, loginSuccess, setIsAuthenticated} from "../../store/actions/authActions";
import {setLoading} from "../../store/actions/uIStateActions";
import {connect} from "react-redux";

const AddUserPage = ({isLoading}) => {

    const [{firstName, lastName, birthDate, email, role, address, photo}, setState] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        role: '',
        address: '',
        photo: '',
    });

    const handleOnChange = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const handleOnClick = () => {
        // createUser({firstName, lastName, birthDate, email, role, address, photo});
    };

    if (isLoading) return <Spinner/>;

    return(
        <div className={style['add-user-page-wrapper']}>
            <PageLayout>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        birthDate: '',
                        email: '',
                        role: '',
                        address: '',
                        photo: ''
                    }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string().required('Required'),
                        lastName: Yup.string().required('Required'),
                        birthDate: Yup.date().required('Required'),
                        role: Yup.string().required('Required'),
                        address: Yup.string().required('Required'),
                        email: Yup.string()
                            .email('Please enter a valid email address')
                            .required('Required'),
                        photo: Yup.string().required()
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
                                        <MailOutlined/>
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
                                        <LockOutlined/>
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
            </PageLayout>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: isLoading(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        createUser: data => dispatch(createUser(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);
