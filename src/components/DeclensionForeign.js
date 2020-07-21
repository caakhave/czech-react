import React from 'react';
import revealClass from './reveal';
import { Link } from 'react-router-dom';

function DeclensionForeign() {
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
    
    <h4 className="text-center">Words with a foreign origin - Plural</h4>

    <div className="table-responsive-lg">
<table className="table table-sm table-striped table-hover">
  <thead>
    <tr>
    <th scope="row">Nominative</th>
    <th>Centra</th>
    <th>Studia</th>
    <th>Géniové</th>
    <th>Cykly</th>
    <th>Ideje</th>
    <th>Dramata</th>
    <th>no plural</th>
   </tr>
   </thead>
   <tbody>
   <tr>
    <th scope="row">Genitive</th>
<td>Center</td>
<td>Studií</td>
<td>Géniů</td>
<td>Cyklů</td>
<td>Idejí</td>
<td>Dramat</td>
<td></td>
</tr>
<tr>
    <th scope="row">Dative</th>
<td>Centrům</td>
<td>Studiím</td>
<td>Géniům</td>
<td>Cyklům</td>
<td>Idejím/Ideám</td>
<td>Dramatům</td>
<td></td>
</tr>
<tr>
    <th scope="row">Accusative</th>
<td>Centra</td>
<td>Studia</td>
<td>Génie</td>
<td>Cykly</td>
<td>Ideje/Idey</td>
<td>Dramata</td>
<td></td>
</tr>
<tr>
    <th scope="row">Locative</th>
<td>Centrech</td>
<td>Studiích</td>
<td>Géniích</td>
<td>Cyklech</td>
<td>Idejích/Ideách</td>
<td>Dramatech</td>
<td></td>
</tr>
<tr>
    <th scope="row">Instrumental</th>
<td>Centry</td>
<td>Studií</td>
<td>Génií/ovi</td>
<td>Cykly</td>
<td>Idejemi/Ideami</td>
<td>Dramaty</td>
<td></td>
</tr>

</tbody>
</table>
</div>
</div>

                </main>
 
            </div>
        </div>
     )
 }
 
 export default DeclensionForeign;