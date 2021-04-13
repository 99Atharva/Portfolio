import Button from '@material-ui/core/Button';
import React from 'react';
import "./Card.css";

function Card(props) {

    return (
        <div className="main">
            
            <div className="image">
            <img src={props.cover} />
            <div className="overlay">
                <span>{props.tittle}</span>
                {props.des}
            </div>
            </div>
            <div className="btn">
            <Button href={props.live} variant="outlined" disableRipple >See alive</Button>
            <Button href={props.url} variant="outlined" disableRipple>Soure code</Button>
            </div>
            
        </div>
    )
}

export default Card;