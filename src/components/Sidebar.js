import React from 'react';
import revealClass from './reveal';
import { Link } from 'react-router-dom';



const Sidebar = (props) => {

    return (
      <>

            
    <div id="grid">
   
      <span className="tab" onClick={revealClass} aria-expanded="false">Grammar<span className="screen-reader-text">Reveal grammar menu</span></span>
          <div className="bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Declension Tables</span>
                </h6>
                <li className="nav-item">
         <Link className="nav-link" to="/declension-main">
           Main list
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/declension-soft">
           Nouns with soft ending
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/declension-foreign">
           Words of foreign origin
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/declension-bodyparts">
           Body parts
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/declension-irregular">
           Irregular nouns
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/declension-numbers">
           Numbers
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/declension-all">
           All tables
         </Link>
       </li>

     </ul>

     <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
       <span>More Grammar</span>
     </h6>
     <ul className="nav flex-column mb-2">
       <li className="nav-item">
         <Link className="nav-link" to="/pronouns">
           Pronouns
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/prepositions">
           Prepositions
         </Link>
       </li>

              </ul>
            </div>
          </div>
          
          </div>
          
   
    
    

    </>
      

    );
}


export default Sidebar;