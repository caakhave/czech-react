import React from 'react';
import { Button, Nav } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

import $ from 'jquery';
import Resources from './Resources';
import Teachers from './Teachers';


$(function() { 
                         
  $(".tab").click(function(){
      $(".tab").toggleClass("reveal");
      $("#grid").toggleClass("reveal");

    });
});



const Sidebar = (props) => {

    return (
      <>

            
    <div id="grid">
   
      <span className="tab" aria-expanded="false">Grammar<span className="screen-reader-text">Reveal grammar menu</span></span>
          <div className="bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Declension Tables</span>
                </h6>
                <li className="nav-item">
                  <a className="nav-link" href="cases.html">
                    Explanation of cases
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="declension-main.html">
                    Main list
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="declension-soft.html">
                    Nouns with soft ending
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="declension-foreign.html">
                    Words of foreign origin
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="declension-bodyparts.html">
                    Body parts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="declension-irregular.html">
                    Irregular nouns
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="declension-numbers.html">
                    Numbers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="declension-all.html">
                    All tables
                  </a>
                </li>

              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>More Grammar</span>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="pronouns.html">
                    Pronouns
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="prepositions.html">
                    Prepositions
                  </a>
                </li>

              </ul>
            </div>
          </div>
          
          </div>
          
   
    
     {/* <main role="main" className="main"> </main>  */}

    </>
      

    );
}


export default Sidebar;