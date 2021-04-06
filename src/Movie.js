import React from "react";
import PropTypes from"prop-types";
import "./Movie.css"

function Movie(props){
    return <div className="movie">
        <img src={props.poster} alt={props.title} title={props.title}></img>
        <div className="movie__data">
            <h3 className="movie__title">{props.title}</h3>
            <h2 className="movie__year">{props.year}</h2>
            <ul className="genres">
                {props.genres.map( (genre,index )=> <li key={index} className="genres__genre">{genre}</li>)}
            </ul>
            <p className="movie__summary">{props.summary.slice(0,140)}...</p>       
        </div>
    </div>
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    years:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;