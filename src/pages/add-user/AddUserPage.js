import React, {useEffect, useState} from 'react';
import style from '../users/UsersPage.module.scss';
import PageLayout from '../../components/page-layout/PageLayout';
import * as Yup from 'yup';
import Spinner from '../../components/spinner';
import {DatePicker, Form, Input} from 'antd';
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import FloatLabel from '../../components/floatLabel/FloatLabel';
import FormErrorLocker from '../../components/form-error-locker/FormErrorLocker';
import FormLocker from '../../components/form-locker/FormLocker';
import {COLORS} from '../../utils/constatns';
import {Formik} from 'formik';
import {isAuthenticated, isLoading} from "../../store/selectors";
import {login, loginSuccess, logout, setIsAuthenticated} from "../../store/actions/authActions";
import {setLoading} from "../../store/actions/uIStateActions";
import {connect} from "react-redux";
import {createUser} from "../../store/actions/usersActions";


const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const AddUserPage = ({isLoading, createUser, logout}) => {

    const [{firstName, lastName, birthDate, email, role, address, photo}, setState] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        role: '',
        address: '',
        photo: '',
    });

    useEffect(() => {
        if(photo){
            console.log(photo);
            toBase64(photo).then(res => setState(prevState => ({...prevState, photo: res}))
        )
        }
    }, [photo])

    const handleOnChange = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const handleOnClick = () => {
        // createUser({firstName, lastName, birthDate, email, role, address, photo});
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    const handleLogout = () => {
        logout();
    };

    if (isLoading) return <Spinner/>;

    return(
        <div className={style['add-user-page-wrapper']}>
            <PageLayout handleLogout={handleLogout} >
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
                                <Form name='create-user' className='forgot-password-email'>
                                    <Form.Item>
                                        <FloatLabel label="First Name" name="firstName" value={values.firstName}>
                                            <Input
                                                id='string'
                                                onChange={customHandleChange}
                                                name="firstName"
                                                value={values.firstName}
                                                onBlur={handleBlur}
                                            />
                                        </FloatLabel>
                                        {errors.firstName && touched.firstName && (
                                            <div className="input-feedback">{errors.firstName}</div>
                                        )}
                                    </Form.Item>

                                    <Form.Item>
                                        <FloatLabel label="Last Name" name="lastName" value={values.lastName}>
                                            <Input
                                                type='string'
                                                id='lastName'
                                                onChange={customHandleChange}
                                                name="lastName"
                                                value={values.lastName}
                                                onBlur={handleBlur}
                                            />
                                        </FloatLabel>
                                        {errors.lastName && touched.lastName && (
                                            <div className="input-feedback">{errors.lastName}</div>
                                        )}
                                    </Form.Item>

                                    <Form.Item>
                                        {/*<DatePicker onChange={onChange} />*/}
                                        <FloatLabel label="" name="birthDate" value={values.birthDate}>
                                            <Input
                                                type='date'
                                                id='birthDate'
                                                onChange={customHandleChange}
                                                name="birthDate"
                                                value={values.birthDate}
                                                onBlur={handleBlur}
                                            />
                                        </FloatLabel>
                                        {errors.birthDate && touched.birthDate && (
                                            <div className="input-feedback">{errors.birthDate}</div>
                                        )}
                                    </Form.Item>

                                    <Form.Item>
                                        <FloatLabel label="Role" name="role" value={values.role}>
                                            <Input
                                                type='string'
                                                id='role'
                                                onChange={customHandleChange}
                                                name="role"
                                                value={values.role}
                                                onBlur={handleBlur}
                                            />
                                        </FloatLabel>
                                        {errors.role && touched.role && (
                                            <div className="input-feedback">{errors.role}</div>
                                        )}
                                    </Form.Item>

                                    <Form.Item>
                                        <FloatLabel label="Address" name="address" value={values.address}>
                                            <Input
                                                type='string'
                                                id='address'
                                                onChange={customHandleChange}
                                                name="address"
                                                value={values.address}
                                                onBlur={handleBlur}
                                            />
                                        </FloatLabel>
                                        {errors.address && touched.address && (
                                            <div className="input-feedback">{errors.address}</div>
                                        )}
                                    </Form.Item>

                                    <Form.Item>
                                        <FloatLabel label="Photo" name="photo" value={values.photo}>
                                            <Input
                                                type='file'
                                                id='photo'
                                                onChange={customHandleChange}
                                                name="photo"
                                                value={values.photo}
                                                onBlur={handleBlur}
                                            />
                                        </FloatLabel>
                                        {errors.photo && touched.photo && (
                                            <div className="input-feedback">{errors.photo}</div>
                                        )}
                                    </Form.Item>

                                    <div className='button-wrapper'>
                                        <button
                                            className='button'
                                            // disabled={errors.email || !values.email || errors.password || !values.password}
                                            onClick={handleOnClick}
                                        >
                                            <div className='btn-txt'>Create User</div>
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
        logout: () => dispatch(logout()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);
