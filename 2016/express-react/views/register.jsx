import React from 'react';
import Layout from './layout.jsx';

export default React.createClass({
    render() {
        return (
            <Layout title="express">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">注册</div>
                        <div className="panel-body">
                            <form action="" className="form register-form">
                                <div className="form-group">
                                    <input type="text" placeholder="输入用户名" name="username" className="form-control input-lg"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="输入密码" name="password" className="form-control form-control input-lg"/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block btn-lg">注册</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
});

