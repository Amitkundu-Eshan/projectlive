import React from 'react'
import { Card } from '../Card/Card'
import "./Courses.css"

const Courses = () => {
    return (
        <>
            <p className="recom">Cources Recomended</p>
            <div className="cour" style={{top:"920px",position:"absolute"}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </>
    )
}

export default Courses
