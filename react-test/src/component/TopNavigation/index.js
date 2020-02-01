import React, { Component } from 'react'
import { Icon, Menu } from 'antd'
import { Route, NavLink, Switch } from 'react-router-dom';

export default class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.match.path
        };
    }

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="/" >
                    <NavLink exact to="/">
                        <Icon type="home" />
                        Home
                        </NavLink>
                </Menu.Item>
                <Menu.Item key="/images/favorite">
                    <NavLink exact to="/images/favorite">
                        <Icon type="picture" />
                        Favorites
                        </NavLink>
                </Menu.Item>
            </Menu>
        )
    }
}
