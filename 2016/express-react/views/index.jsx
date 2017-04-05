import React from 'react';
import Layout from './layout.jsx';

export default React.createClass ({
    render() {
        return (
            <Layout title={this.props.title} userInfo={this.props.userInfo} categoryInfo={this.props.categoryInfo}>
                <div className="col-md-9">
                    <a href="/api/insert" class="btn btn-primary insert-data">插入数据</a>
                    <a href="/api/remove" class="btn btn-primary insert-data">删除数据</a>
                    <a href="/api/update" class="btn btn-primary insert-data">跟新数据</a>
                    <a href="/api/query" class="btn btn-primary insert-data">查数据</a>
                </div>
                <div className="col-md-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">最近跟新</div>
                        <div className="list-group">
                            <a href="" className="list-group-item">JavaScript 符合股未发货给</a>
                            <a href="" className="list-group-item">JavaScript 符合股未发货给</a>
                            <a href="" className="list-group-item">JavaScript 符合股未发货给</a>
                            <a href="" className="list-group-item">JavaScript 符合股未发货给</a>
                            <a href="" className="list-group-item">JavaScript 符合股未发货给</a>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
});