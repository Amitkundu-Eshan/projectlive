import { Button } from '@material-ui/core'
import React from 'react'
import "./Comment.css"

const Comment = () => {
    return (
        <>
           <div className="commentbox">
               <div className="cwrap">
                   <div className="cmprfc">
                   <img className="cpic" alt="" src="https://picsum.photos/200/300"/>
                   <div>
                   <span className="namec">John Doe</span>
                   <p className="loc">Kolkata</p>
                   </div>
                   </div>
                    <li className="lic">Lorem ipsum dolor sit amet, consectetur adipiscin eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                    <div className="cmprfc re">
                   <img className="cpic" alt="" src="https://picsum.photos/200/300"/>
                   <div>
                   <span className="namec">John Doe</span>
                   <p className="loc">Kolkata</p>
                   </div>
                   </div>
                    <li className="lic">Lorem ipsum dolor sit amet, consectetur adipiscin eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p className="replies">12 more replies</p></li>
               </div>
               <Button variant="contained" className="btn">
                Reply
                </Button>
           </div> 
           <br/>
           <div className="commentbox sm">
               <div className="cwrap">
                   <div className="cmprfc">
                   <img className="cpic" alt="" src="https://picsum.photos/200/300"/>
                   <div>
                   <span className="namec">John Doe</span>
                   <p className="loc">Kolkata</p>
                   </div>
                   </div>
                    <li className="lic">Lorem ipsum dolor sit amet, consectetur adipiscin eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
               </div>
               <Button variant="contained" className="btn">
                Reply
                </Button>
           </div> 
           <br/>
        </>
    )
}

export default Comment
