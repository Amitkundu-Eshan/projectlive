import { Button } from '@material-ui/core'
import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className="contactdiv">
                <div className="contactwrapper">
                    <p className="hey">Any Queries on Digital Marketing?</p>
                    <p className="det">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="inputdetails">
                        <input className="in" placeholder="Fazil V N"/>
                        <input className="in" placeholder="Email"/>
                </div>
                <div className="inputdetails">
                        <input className="in" placeholder="Phone Number"/>
                        <select className="in" name="cars" id="cars">
                            <option value="volvo">Select Enquiry Type</option>
                            <option value="saab">my</option>
                            <option value="opel">Name</option>
                            <option value="audi">Amit kundu</option>
                        </select>
                </div>
                <textarea className="message" placeholder="Message"/>
                <Button className="consubmit" variant="contained">
                Submit
                </Button>
            </div>
        </>
    )
}

export default Contact
