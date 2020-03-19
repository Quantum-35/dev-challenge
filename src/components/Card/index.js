import React from 'react';

import './card.css'

const CardComponent = props => {
    return(
        <div className="card">
            <div className="card-item">
                <div className="card-title">
                    {props.title}
                </div>
                <hr />
                <div className="card-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
