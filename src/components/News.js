import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
  };

  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = !this.props.category
      ? 'NewsMonkey - The News App by Jigar Vakil '
      : `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad9b2981b3d34e26ad80143df0356492&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    // let url =
    //   'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json';
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      loading: false,
    });
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <>
        <div className="container my-2">
          <h2>
            {!this.props.category
              ? 'NewsMonkey - Top Headlines '
              : 'NewsMonkey -' +
                'Top ' +
                this.capitalizeFirstLetter(this.props.category) +
                ' Headlines '}
          </h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map(article => {
                return (
                  <div className="col-md-12" key={article.url}>
                    <NewsItem
                      title={article.title}
                      desc={article.description}
                      imgURL={article.urlToImage}
                      newsURL={article.url}
                      author={article.author}
                      dateAndTime={article.publishedAt}
                      source={article.source.name}
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
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
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
