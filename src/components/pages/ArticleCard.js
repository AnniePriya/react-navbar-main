import React from 'react';

const ArticleCard = () => {
  return (
    <div className="card" style={{ width: '15rem' ,margin: '10px'}}>
      <img
        src="images/bh.jpeg"
        className="card-img-top"
        alt="..."
        style={{ width: '100%', height: '200px', objectFit: 'fill' }}
      />
      <div className="card-body">
        <h5 className="card-title">Article title</h5>
        <p className="card-text">Some quick text to on the article title and make up the bulk of the articles's content.</p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default ArticleCard;
