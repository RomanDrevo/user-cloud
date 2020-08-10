import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {isAuthenticated} from './store/selectors';

const ProtectedRoute = ({component: Component, isAuthenticated}, ...rest) => {
    return (
        <Route
            {...rest}
            render={
                props => {
                    if (isAuthenticated) {
                        return <Component {...props}/>;
                    } else {
                        return <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location
                                }
                            }}
                        />;
                    }

                }
            }
        />

    );
};

// const ProtectedRoute = props => {
//     const { isAuthenticated } = props;
//
//     console.log(isAuthenticated);
//
//     if (isAuthenticated){
//         return <Redirect to="/users" />;
//     }
//     else if (!isAuthenticated){
//         console.log('---redirecting to login');
//         return <Redirect to="/login" />;
//     }
//
//     return <Route {...props} />;
// };

const mapStateToProps = state => {
    return {
        isAuthenticated: isAuthenticated(state)
    };
};

export default connect(mapStateToProps, {})(ProtectedRoute);
