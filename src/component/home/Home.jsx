import React from 'react'
import "./Home.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Many from '../Many/Many';

const Home = () => {
    return (
        <>
            <div className="home">
                <div>
                <div className="info">
                    <img className="pic" alt="" src="https://picsum.photos/200/300"></img>
                    <span className="nam">Welcome John Doe</span>
                    <ul className="listitem">
                        <li className="item"><span className="lm">Courses Enrolled</span><span className="value">3</span></li>
                        <li className="item"><span className="lm">Courses Completed</span><span className="value">1</span></li>
                        <li className="item"><span className="lm">Language</span><span className="value">English</span></li>
                        <li className="item"><span className="lm">Start Date</span><span className="value">12-02-2021</span></li>
                        <li className="item" style={{border:"none"}}><span className="lm">Course Language</span><span className="value">English</span></li>
                    </ul>
                </div>
                <div className="conInfo">
                <p className="contact"> Contact Details</p>
                <ExpandMoreIcon className="arr"/>
                </div>
                </div>
                <div className="many">
                <Many/>
                    
                </div>
            </div>
        </>
    )
}

export default Home
