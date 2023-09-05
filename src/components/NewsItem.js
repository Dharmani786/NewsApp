import React from "react";

const getGMTStringFromDate = (dateString) => {
  try {
    const dateObject = new Date(dateString);
    if (isNaN(dateObject)) {
      throw new Error("Invalid date");
    }
    return dateObject.toGMTString();
  } catch (error) {
    console.error(error);
    return "Invalid date";
  }
};
const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'center',position:'absolute',right:'0',top:'10px'}}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            
          >
            {source}
          </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.moneycontrol.com/static-mcnews/2018/01/poker1_1280-770x433.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">
                By {author ? author : "Unknown"} on {getGMTStringFromDate(date)}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>{" "}
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
