import React from 'react';

const Header = React.createClass({
    render(){
        return (
            <header>
                <div className="navbar navbar-default">
                    <div className="container">
                        <div className="row">
                            <ul className="nav navbar-nav">
                                <li><a href="">首页</a></li>
                                {
                                    this.props.categoryInfo.map(function(item){
                                        return <li><a href="">{item.name}</a></li>;
                                    })
                                }
                            </ul>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
});

export default React.createClass({
    render() {
        if(this.props.userInfo) {
            return (
                <Header uesrInfo={this.props.userInfo} categoryInfo={this.props.categoryInfo}>
                    <div className="pull-right">
                        <a href="" className="btn navbar-btn">{this.props.userInfo.username}</a>
                    </div>
                </Header>
            );   
        } else {
            return (
                <Header uesrInfo={this.props.userInfo} categoryInfo={this.props.categoryInfo}>>
                    <ul className="nav navbar-nav pull-right">
                        <li><a href="/login">登录</a></li>
                        <li><a href="/register">注册</a></li>
                    </ul>
                </Header>
            );
        }
    }
})