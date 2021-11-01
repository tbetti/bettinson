import React from 'react';
import {displayInfo, stopProp} from '../js/util';

function workCard(props) {
    return (
        <div className="work-card" onClick={displayInfo}>
            {/* Add image to work card */}
            <img src={props.image} alt={props.description} name={props.id} />
            {/* Add overlay that displays title, description, and technologies used when image clicked */}
            <div className="overlay" id={props.id}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p>{props.type}</p>
                {/* Add buttons to link to websites and GitHub repositories */}
                <div className="btn-box">
                    <button className="card-btn" onClick={stopProp}>
                        <a href={props.site} target="_blank">
                            Website
                        </a>
                    </button>
                    <button className="card-btn" onClick={stopProp}>
                        <a href={props.gitHub} target="_blank">
                            Repository
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default workCard;