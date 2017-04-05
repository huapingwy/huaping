import React from 'react';
import ReactDOM from 'react-dom';

const HeaderConponent = React.createClass({
  render(){
    return (
      <header className="bar bar-nav">
        <h1 className='title'>豆瓣电影</h1>
      </header>
    );
  }
});

const MainComponent = React.createClass({
  getInitialState() {
    return {
      title: '正在热映',
      data: []
    };
  },
  componentDidMount() {
    const that = this;
    $.showPreloader();
    $.ajax({
      url: 'http://api.douban.com/v2/movie/in_theaters',
      dataType: 'jsonp',
      success(data) {
        that.setState({
          data: data.subjects
        })
        $.hidePreloader();
      }
    });
  },
  handleClick() {
    alert(1);
  },
  render() {

    if(this.state.data.length > 0) {
      return (
        <section onClick={this.handleClick}>
          <HeaderConponent />
          <div className="content">
            <div className="content-block-title">正在热映的电影</div>
            <div className="content-block">
              <div className="row">
                {
                  this.state.data.map(function (item, index) {
                    return <HotMovieComponent itemData={item} key={index} />
                  })
                }
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section>
          <HeaderConponent />
        </section>
      );
    }
  }
});

const HotMovieComponent = React.createClass({
  render() {
    if(this.props.itemData.title) {
      return (
        <div className="col-33">
          <a href="/hot/detail">
            <div className="card-header color-white no-border no-padding">
              <img className='card-cover' height="150px" src={this.props.itemData.images.medium} alt="" />
            </div>
            <div className="card-content">
              <div className="card-content-inner">
                <p className="color-gray">{this.props.itemData.title}</p>
              </div>
            </div>
          </a>
        </div>
      );
    } else {
      return (
        <div className="col-100">
          <p>加载中.....</p>
        </div>
      );
    }
  }
});

module.exports = MainComponent;
