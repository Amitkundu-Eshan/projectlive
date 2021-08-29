import React from 'react'
import "./Navbar.css"
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
            <div className="wrapper">
                <div className="logoinput">
                    <div className="lidiv">
                        <img src="assets/google.png" style={{fontColor:"white"}} alt="" className="logo"></img>
                        <span className="name">inskillz</span>
                        <div className="searchpanel">
                            <SearchIcon className="searchicon"/>
                            <input placeholder="search" className="input"/>
                        </div>
                    </div>
                </div>
                <div class="menu">
                    <span className="items">Courses</span>
                    <span className="items">Teach On Inskills</span>
                    <span className="items">Contact</span>
                    <div className="">
                        <div className="prf">
                            <img src="https://picsum.photos/600/300" alt="" className="image"></img>
                            <span className="na">John Doe</span>
                            <ArrowDropDownIcon className="down"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Navbar
