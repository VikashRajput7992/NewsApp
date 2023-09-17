import React, { useContext } from 'react'
import modeContext from './context/modeContext';

function NewsItem(props) {
  const {mode} = useContext(modeContext);
  return (
    <div className='container my-3' style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div className={`card ${mode==='dark' && 'bg-dark text-white'}`} style={{ width: "18rem" }}>
        <div className="container" style={
          {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '-4%',
            top:'-2%'
          }}>
          <span className="badge rounded-pill bg-danger">
            {props.source}
          </span>
        </div>
        <img src={props.imageUrl} height='170px;' className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text"><small className={`${mode==='light' && 'text-body-secondary'}`}>By {props.author ? props.author : "Unknown"} on {props.date}</small></p>
          <a href={props.newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem