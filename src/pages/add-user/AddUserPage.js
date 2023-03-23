import React, {useEffect, useState} from 'react';
import style from './AddUserPage.module.scss';
import PageLayout from '../../components/page-layout/PageLayout';
import * as Yup from 'yup';
import Spinner from '../../components/spinner';
import {Button, Form, Input} from 'antd';
import FloatLabel from '../../components/floatLabel/FloatLabel';
import {Formik} from 'formik';
import {getIsNotificationOpen, getNotificationMessage, getIsLoading} from '../../store/selectors';
import {logout} from '../../store/actions/authActions';
import {connect} from 'react-redux';
import {createUser} from '../../store/actions/usersActions';
import {openNotification} from '../../utils/helpers';
import {NOTIFICATIONS} from '../../utils/constatns';
import {closeNotification} from '../../store/actions/uIStateActions';
import {useHistory} from 'react-router-dom';

const AddUserPage = (
    {
        isLoading,
        createUser,
        logout,
        isNotificationOpen,
        notificationMessage,
        closeNotification,
        ...props
    }) => {

    console.log(props);

    const history = useHistory();
    const initialState = {
        name: '',
        email: '',
        role: '',
        address: '',
    };

    const [{name, email, role, address}, setState] = useState(initialState);

    const clearState = () => {
        setState({ ...initialState });
    };

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
        createUser({name, email, role, address});
        history.push('/', {from: '/add-user'});
    };

    const handleLogout = () => {
        logout();
    };

    return (
      <div className={style['add-user-page-wrapper']}>
        <PageLayout handleLogout={handleLogout}>
          <Formik
              initialValues={{
                  name: '',
                  email: '',
                  role: '',
                  address: '',
              }}
              validationSchema={Yup.object().shape({
                  name: Yup.string().required('Required'),
                  role: Yup.string().required('Required'),
                  address: Yup.string().required('Required'),
                  email: Yup.string()
                            .email('Please enter a valid email address')
                            .required('Required'),
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
                        <FloatLabel label="Name" name="name" value={values.name}>
                          <Input
                              id='name'
                              type='string'
                              onChange={customHandleChange}
                              name="name"
                              value={values.name || ''}
                              onBlur={handleBlur}
                          />
                        </FloatLabel>
                        {errors.name && touched.name && (
                        <div className="input-feedback">{errors.name}</div>
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
        isLoading: getIsLoading(state),
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
