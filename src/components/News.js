import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

function News(props) {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

  const updateNews = async (pageNo) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + pageNo}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setLoading(false);
    setArticle(parseData.articles)
    setTotalResults(parseData.totalResults);
  }
  useEffect(() => {
    updateNews(0);
    // eslint-disable-next-line
  }, []);

  const handlePrevClick = async () => {
    console.log("prev");
    setPage(page - 1);
    await updateNews(-1);
  }
  const handleNextClick = async () => {
    console.log("next");
    setPage(page + 1);
    await updateNews(1);
  }

  return (
    <div className='container my-3'>
      <div className="text-center my-3">
        <h1>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      </div>
      {loading && <Spinner />}
      <div className="row">
        {
          !loading && article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 87) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} newsUrl={element.url} author={element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
              </div>
            )
          })
        }
      </div>
      <div className="container d-flex justify-content-between my-3">
        <button disabled={page <= 1 ? true : false} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr;Prev</button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize) ? true : false} type="button" className="btn btn-dark" onClick={handleNextClick}>Next&rarr;</button>
      </div>
    </div>
  )
}

News.defaultProps = {
  pageSize: 5,
  country: "in",
  category: "general"
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

export default News