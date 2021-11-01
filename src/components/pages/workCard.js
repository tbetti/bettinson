import React from 'react';

function workCard(props){
    console.log(props);
    return(
        <div className="work-card">
            {/* Add image to work card */}
            <img src={props.image}  alt={props.description} name={props.id}/>
            {/* Add overlay that displays title, description, and technologies used when image clicked */}
            <div className="overlay" id={props.id}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p>{props.type}</p>
            </div>
            <div className="btn-box">
                <button className="card-btn">
                    <a href={props.site} target="_blank">
                        Website
                    </a>
                </button>
                <button className="card-btn">
                    <a href={props.gitHub} target="_blank">
                        Repository
                    </a>
                </button>
            </div>
        </div>
    )
}

export default workCard;