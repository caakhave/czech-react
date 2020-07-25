import React from 'react';
import revealClass from './reveal';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

function DeclensionBodyParts() {
    return (
        <div>
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
                    
                    

                
                <main role="main" className="main"> 

                <div className="col-xs-12">
        <a name="body"></a>
            <h4 className="text-center">Body parts that are in pairs (no singular):<br />
        eyes, ears, hands, legs, breast, shoulders, knees</h4>
        
        <div className="table-responsive-lg">
        
        <Table className="table table-sm table-striped table-hover">
          <thead>
        
        <tr>
             <th scope="row">Nominative</th>
             <th>Oči</th>
             <th>Uši</th>
             <th>Ruce</th>
             <th>Nohy</th>
             <th>Prsa</th>
             <th>Ramena</th>
             <th>Kolena</th>
           </tr>
          </thead>
          <tbody>
        
           <tr>
             <th scope="row">Genitive</th>
             <td>Očí</td>
             <td>Uší</td>
             <td>Rukou</td>
             <td>Noh/Nohou</td>
             <td>Prsou</td>
             <td>Ramen/Ramenou</td>
             <td>Kolen/Kolenou</td>
            </tr>
           <tr>
             <th scope="row">Dative</th>
             <td>Očím</td>
             <td>Uším</td>
             <td>Rukám</td>
             <td>Nohám</td>
             <td>Prsům</td>
             <td>Ramenům</td>
             <td>Kolenům</td>
           </tr>
           <tr>
             <th scope="row">Accusative</th>
             <td>Oči</td>
             <td>Uši</td>
             <td>Ruce</td>
             <td>Nohy</td>
             <td>Prsa</td>
             <td>Ramena</td>
             <td>Kolena</td>
           </tr>
           <tr>
             <th scope="row">Locative</th>
             <td>Očích</td>
             <td>Uších</td>
             <td>Rukách/Rukou</td>
             <td>Nohách/Nohou</td>
             <td>Prsou</td>
             <td>Ramenech/Ramenou</td>
             <td>Kolenech/Kolenou</td>
           </tr>
           <tr>
             <th scope="row">Instrumental</th>
             <td>Očima</td>
             <td>Ušima</td>
             <td>Rukama</td>
             <td>Nohama</td>
             <td>Prsy</td>
             <td>Rameny</td>
             <td>Koleny</td>
           </tr>
        
        </tbody>
        </Table>
        </div>
        </div>
        
                </main>
 
            </div>
        </div>
     )
 }
 
 export default DeclensionBodyParts;