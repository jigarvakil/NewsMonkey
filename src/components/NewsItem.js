import React, { Component } from 'react';
import logo from './NewsMonkeyLogo.png';
export class NewsItem extends Component {
  render() {
    let { title, desc, imgURL, newsURL, author, dateAndTime, source } =
      this.props;
    return (
      <>
        <div className="my-3">
          <span
            className="text-white  position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: 1 }}
          >
            {source}
          </span>
          <div
            className="card"
            style={{ borderRadius: '20px', backgroundColor: '#0f2837' }}
          >
            <div
              className="card-body"
              style={{ borderRadius: '20px', backgroundColor: '#0f2837' }}
            >
              <div className="row">
                <div className="col-md-4">
                  <img
                    className="card-img-top"
                    src={!imgURL ? logo : imgURL}
                    alt="Card  cap"
                    style={{
                      borderRadius: '20px',
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <h5 className="card-title text-light">{title}</h5>
                  <p className="card-text text-light">
                    {desc ? desc.slice(0, 300) : ''}...
                  </p>
                  <p className="card-text ">
                    <small class="text-muted">
                      By {!author ? 'Unknown' : author} at{' '}
                      {new Date(dateAndTime).toGMTString()}
                    </small>
                  </p>
                  <a
                    target="_blank"
                    href={newsURL}
                    rel="noreferrer"
                    className="btn  btn-outline-info "
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
