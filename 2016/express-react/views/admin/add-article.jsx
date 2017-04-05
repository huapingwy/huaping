import React from 'react';
import Layout from '../layout.jsx';

export default React.createClass({
    render() {
        return(
            <Layout title={this.props.title} userInfo={this.props.userInfo} categoryInfo={this.props.categoryInfo}>
                <div className="panel panel-default">
                    <div className="panel-heading">添加文章</div>
                    <div className="panel-body">
                        <form action="" className="form-horizontal add-article-form">
                            <div className="form-group">
                                <label className="control-label col-md-2">标题</label>
                                <div className="col-md-9">
                                    <input name="title" type="text"placeholder="标题" className="form-control input-lg"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-md-2">简介</label>
                                <div className="col-md-9">
                                    <textarea name="description" id="" cols="30" rows="5" className="form-control" placeholder="简介"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-md-2">内容</label>
                                <div className="col-md-9">
                                    <textarea name="content" id="" cols="30" rows="5" className="form-control" placeholder="内容"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-2 col-md-offset-2">
                                    <button className="btn btn-primary btn-block btn-lg">提交</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
})

