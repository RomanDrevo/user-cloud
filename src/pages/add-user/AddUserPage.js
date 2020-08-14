import React, {useEffect, useState} from 'react';
import style from './AddUserPage.module.scss';
import PageLayout from '../../components/page-layout/PageLayout';
import * as Yup from 'yup';
import Spinner from '../../components/spinner';
import {Button, Form, Input} from 'antd';
import FloatLabel from '../../components/floatLabel/FloatLabel';
import {Formik} from 'formik';
import {getIsNotificationOpen, getNotificationMessage, isLoading} from '../../store/selectors';
import {logout} from '../../store/actions/authActions';
import {connect} from 'react-redux';
import {createUser} from '../../store/actions/usersActions';
import {openNotification, toBase64} from '../../utils/helpers';
import {NOTIFICATIONS} from '../../utils/constatns';
import {closeNotification} from '../../store/actions/uIStateActions';

const AddUserPage = (
    {
        isLoading,
        createUser,
        logout,
        isNotificationOpen,
        notificationMessage,
        closeNotification
    }) => {

    const initialState = {
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        role: '',
        address: '',
        photo: '',
    };

    const [{firstName, lastName, birthDate, email, role, address, photo}, setState] = useState(initialState);

    const clearState = () => {
        setState({ ...initialState });
    };

    useEffect(() => {
        if (photo) {
            const file = document.querySelector('input[type=file]').files[0];
            const getPhoto = async () => {
                const base64 = await toBase64(file);
                setState(prevState => ({...prevState, photo: base64}));
            };
            getPhoto();
        }
    }, [photo]);

    useEffect(() => {
        if (isNotificationOpen && notificationMessage === NOTIFICATIONS.add) {
            openNotification(notificationMessage);
            clearState();
        }
    }, [isNotificationOpen, notificationMessage]);

    useEffect(() => {
        closeNotification();
    }, []);

    const handleOnChange = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const handleOnClick = () => {
        // createUser({firstName, lastName, birthDate, email, role, address, photo});
        createUser({firstName, lastName, birthDate, email, role, address, photo});
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div className={style['add-user-page-wrapper']}>
            <PageLayout handleLogout={handleLogout}>
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
                            handleChange,
                            handleBlur,
                            isValid
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
                                                id='firstName'
                                                type='string'
                                                onChange={customHandleChange}
                                                name="firstName"
                                                value={values.firstName || ''}
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
                                        <FloatLabel label="Email" name="email" value={values.email}>
                                            <Input
                                                id='email'
                                                type='email'
                                                onChange={customHandleChange}
                                                name="email"
                                                value={values.email}
                                                onBlur={handleBlur}
                                            />
                                        </FloatLabel>
                                        {errors.email && touched.email && (
                                            <div className="input-feedback">{errors.email}</div>
                                        )}
                                    </Form.Item>

                                    <Form.Item>
                                        {/* <DatePicker onChange={onChange} />*/}
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
                                                // value={values.photo}
                                                onBlur={handleBlur}
                                            />
                                        </FloatLabel>
                                        {errors.photo && touched.photo && (
                                            <div className="input-feedback">{errors.photo}</div>
                                        )}
                                    </Form.Item>

                                    <div className='button-wrapper'>
                                        <Button
                                            className='button'
                                            disabled={!isValid || Object.keys(touched).length === 0}
                                            onClick={() => {
                                                props.resetForm({});
                                                handleOnClick();
                                            }}
                                        >
                                            <div className='btn-txt'>Create User</div>
                                        </Button>
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
        isNotificationOpen: getIsNotificationOpen(state),
        notificationMessage: getNotificationMessage(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        createUser: data => dispatch(createUser(data)),
        logout: () => dispatch(logout()),
        closeNotification: () => dispatch(closeNotification()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);
