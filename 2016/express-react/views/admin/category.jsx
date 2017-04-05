import React from 'react';
import Layout from '../layout.jsx';

export default React.createClass({
    render(){
        return (
            <Layout title={this.props.title} userInfo={this.props.userInfo} categoryInfo={this.props.categoryInfo}>
                <div className="panel panel-default">
                    <div className="panel-heading">添加分类</div>
                    <div className="panel-body">
                        <form action="" className="form-horizontal add-category-form">
                            <div className="form-group">
                                <label htmlFor="" className="control-label col-md-3">分类名称：</label>
                                <div className="col-md-8">
                                    <input name="categoryName" type="text" placeholder="分类名称" value="" className="form-control input-lg"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-3 col-md-offset-3">
                                    <button className="btn btn-primary btn-lg btn-block">添加</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        );
    }
})