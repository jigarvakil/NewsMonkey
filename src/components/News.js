import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    // let url =
    //   'https://newsapi.org/v2/top-headlines?country=in&apiKey=ad9b2981b3d34e26ad80143df0356492';
    let url =
      'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json';
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({ articles: parseddata.articles });
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
        </div>
      </>
    );
  }
}

export default News;
