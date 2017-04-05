import React from 'react';
import Header from './header.jsx';

export default React.createClass ({
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charset="utf-8"></meta>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/style/bootstrap.css"/>
                </head>
                <body>
                    <Header userInfo={this.props.userInfo} categoryInfo={this.props.categoryInfo} />
                    <div className="container">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                    <script src="/js/zepto.js"></script>
                    <script src="/js/login.js"></script>
                </body>
            </html>
        );
    }
});