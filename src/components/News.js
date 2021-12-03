import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  handlePrevClick = async () => {
    console.log('prevClick');
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ad9b2981b3d34e26ad80143df0356492&page=${
      this.state.page - 1
    }&pageSize=10`;
    // let url =
    //   'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json';
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
    });
  };

  handleNextClick = async () => {
    console.log('nextClick');
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ad9b2981b3d34e26ad80143df0356492&page=${
        this.state.page + 1
      }&pageSize=10`;
      // let url =
      //   'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json';
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
      });
    }
  };

  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=ad9b2981b3d34e26ad80143df0356492&page=1&pageSize=10';
    // let url =
    //   'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json';
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
    });
  }
  render() {
    return (
      <>
        <div className="container my-2">
          <h2>NewsMonkey HeadLines</h2>
          <div className="row">
            {this.state.articles.map(article => {
              return (
                <div className="col-md-12" key={article.url}>
                  <NewsItem
                    title={article.title}
                    desc={article.description}
                    imgURL={article.urlToImage}
                    newsURL={article.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              className="btn btn-info onClick={handleNextClick}"
              onClick={this.handlePrevClick}
              disabled={this.state.page <= 1}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-info"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 10)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
