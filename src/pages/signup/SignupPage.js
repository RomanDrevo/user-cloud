import React, {useState} from 'react';
import style from './SignupPage.module.scss';
import {Button, Form, Input} from 'antd';
import Spinner from '../../components/spinner';
import {isAuthenticated, isLoading} from '../../store/selectors';
import {login, setIsAuthenticated} from '../../store/actions/authActions';
import {connect} from 'react-redux';
import FloatLabel from '../../components/floatLabel/FloatLabel';

const SignupPage = ({isLoading}) => {

    // useEffect(() => {
    //     if(isAuthenticated){
    //         history.push(pathname)
    //     }else {
    //         const token = localStorage.getItem('token');
    //         if(token){
    //             setIsAuthenticated(true)
    //         }
    //     }
    // }, [isAuthenticated])

    const [{email, firstName, lastName, password, confirmedPassword}, setState] = useState({email: '', firstName: '', lastName: '', password: '', confirmedPassword: ''});

    const change = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const signup = e => {
        e.preventDefault();
        // login({username, password});
    };

    if (isLoading) return <Spinner/>;

    return (
        <PageLayout>
            <div className={style['signup-page-wrapper']}>
                <Welcome secondaryTest='Sign Up' />
                <Form name="signup">
                    <Form.Item
                        label="email"                       rules={[{required: true, message: 'Please input your email!'}]}
                    >

                        <FloatLabel label="Email" name="email" value={email}>
                            <Input onChange={change} name="email" value={email} />
                        </FloatLabel>
                    </Form.Item>

                    <Form.Item
                        label="firstName"
                        rules={[{required: true, message: 'Please input your firstName!'}]}
                    >
                        <FloatLabel label="First Name" name="firstName" value={firstName}>
                            <Input onChange={change} name="firstName" value={firstName} />
                        </FloatLabel>
                    </Form.Item>

                    <Form.Item
                        label="lastName"
                        rules={[{required: true, message: 'Please input your lastName!'}]}
                    >
                        <FloatLabel label="Last Name" name="lastName" value={lastName}>
                            <Input onChange={change} name="lastName" value={lastName} />
                        </FloatLabel>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <FloatLabel label="Password" name="password" value={password}>
                            <Input onChange={change} name="password" value={password} />
                        </FloatLabel>
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <FloatLabel label="Confirm Password" name="confirmedPassword" value={confirmedPassword}>
                            <Input onChange={change} name="confirmedPassword" value={confirmedPassword} />
                        </FloatLabel>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" onClick={signup}>
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </PageLayout>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
