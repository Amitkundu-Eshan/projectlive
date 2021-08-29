import React from 'react'
import "./Card.css";
import StarRateIcon from '@material-ui/icons/StarRate';

export const Card = () => {
    return (
        <>
            <div className="cardc">
                <img className="cardimg" alt="" src="https://picsum.photos/200/300"/>
                <div className="cardinfo">
                <div className="cardwrap">
                    <p className="cardhead">Why Digital Marketing ?</p>
                    <p className="author">y willSmith</p>
                    <div style={{display:"flex",
                    flexDirection:"row",
                    alignItems:"center",justifyContent:"space-between"}}>
                        <div 
                        style={{display:"flex",flexDirection:"row",alignItems:"center"}}
                        ><StarRateIcon className="star"/>
                        <StarRateIcon className="star"/>
                        <StarRateIcon className="star"/>
                        <StarRateIcon className="star"/>
                        <StarRateIcon className="star"/>
                        <p style={{color:"white",fontSize:"12px"}}>5.0</p></div>
                        <p className="view">view course</p>
                    </div>
                </div>
                </div>
                <div className="ang"></div>
            </div>
        </>
    )
}
