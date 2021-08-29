import React from 'react'
import Comment from '../commnt/Comment'
import "./Many.css"

const Many = () => {
    return (
        <>
           <div className="nav">
               <div className="navitem">
                   <span className="navset">Active Courses</span>
               </div>
               <div className="navitem a">
                   <span className="navset ac">Discussion</span>
               </div>
               <div className="navitem">
                   <span className="navset">Instructor</span>
               </div>
               <div className="navitem">
                   <span className="navset">Payment</span>
               </div>
           </div> 
           <div className="box"></div>
           <div className="details">
               <div className="ques">
                   <ul className="que">
                       <li className="question">
                           <div className="ab">
                               <div className="panel"><p className="p">panel</p><p className="mem">23 member</p></div>
                               <p className="why">Why Digital Marketing ?</p>
                               <p className="un">12 Unanswered Question</p>
                           </div>
                       </li>
                       <li className="question">
                       <div className="ab">
                               <div className="panel"><p className="p">panel</p><p className="mem">23 member</p></div>
                               <p className="why">Why Digital Marketing ?</p>
                               <p className="un">12 Unanswered Question</p>
                           </div>
                       </li>
                       <li className="question dc">
                       <div className="ab">
                               <div className="panel"><p className="p">panel</p><p className="mem">23 member</p></div>
                               <p className="why">Why Digital Marketing ?</p>
                               <p className="un">12 Unanswered Question</p>
                           </div>
                       </li>
                       <li className="question">
                       <div className="ab">
                               <div className="panel"><p className="p">panel</p><p className="mem">23 member</p></div>
                               <p className="why">Why Digital Marketing ?</p>
                               <p className="un">12 Unanswered Question</p>
                           </div>
                       </li>
                       <li className="question">
                       <div className="ab">
                               <div className="panel"><p className="p">panel</p><p className="mem">23 member</p></div>
                               <p className="why">Why Digital Marketing ?</p>
                               <p className="un">12 Unanswered Question</p>
                           </div>
                       </li>
                       <li className="question">
                       <div className="ab">
                               <div className="panel"><p className="p">panel</p><p className="mem">23 member</p></div>
                               <p className="why">Why Digital Marketing ?</p>
                               <p className="un">12 Unanswered Question</p>
                           </div>
                       </li>
                       <li className="question">
                       <div className="ab">
                               <div className="panel"><p className="p">panel</p><p className="mem">23 member</p></div>
                               <p className="why">Why Digital Marketing ?</p>
                               <p className="un">12 Unanswered Question</p>
                           </div>
                       </li>
                       <li className="question">
                       <div className="ab">
                               <div className="panel"><p className="p">panel</p><p className="mem">23 member</p></div>
                               <p className="why">Why Digital Marketing ?</p>
                               <p className="un">12 Unanswered Question</p>
                           </div>
                       </li>
                   </ul>
               </div>
               <div style={{display:"flex",flexDirection:"column"}}>
               <div className="head">
                       <p className="how">How to get started in digital marketing Discussion</p>
                       <div>
                           <p className="day">opened on</p>
                           <p className="day">Feb 14, 2021</p>
                       </div>
                </div>
               <div className="quesde">
                    <div className="wap">
                        <Comment/>                  
                    </div>
               </div>
               </div>
           </div>
        </>
    )
}

export default Many
