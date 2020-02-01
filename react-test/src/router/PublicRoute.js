import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopNavigation from '../component/TopNavigation';

class PublicRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;

        return (
            <Route
                {...rest}
                component={props =>
                    (
                        <div>
                            <TopNavigation {...props} />
                            <div>
                                <Component {...props} />
                            </div>
                        </div>
                    )
                }
            />
        );
    }
}

PublicRoute.propTypes = {
    component: PropTypes.object.isRequired,
};

export default PublicRoute;
