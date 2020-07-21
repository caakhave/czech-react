import React from 'react';
import revealClass from './reveal';
import { Link } from 'react-router-dom';

function DeclensionIrregular() {
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
        <a name="irregular"></a>
            <h4 className="text-center">Irregular words that can be troublesome:<br />
        colleague, god, child, mrs., people, money</h4>
        
        <div className="table-responsive-lg">
        
        <table className="table table-sm table-striped table-hover">
          <thead>
        <tr>
             <th scope="row">Nominative</th>
             <th>Kolega (m.a.)</th>
             <th>Bůh</th>
             <th>Dítě</th>
             <th>Paní</th>
             <th>no plural</th>
             <th>no plural</th>
           </tr>
        
          </thead>
          <tbody>
        
           <tr>
             <th scope="row">Genitive</th>
             <td>Kolegy</td>
             <td>Boha</td>
             <td>Dítěte</td>
             <td>Paní</td>
             <td></td>
             <td></td>
           </tr>
           <tr>
             <th scope="row">Dative</th>
             <td>Kolegu/Kolegovi</td>
             <td>Bohu</td>
             <td>Dítěti</td>
             <td>Paní</td>
               <td></td>
             <td></td>
           </tr>
           <tr>
             <th scope="row">Accusative</th>
             <td>Kolegu</td>
             <td>Bůh</td>
             <td>Dítě</td>
             <td>Paní</td>
               <td></td>
             <td></td>
           </tr>
           <tr>
             <th scope="row">Locative</th>
             <td>Kolegu/Kolegovi</td>
             <td>Bohu</td>
             <td>Dítěti</td>
             <td>Paní</td>
               <td></td>
             <td></td>
           </tr>
           <tr>
             <th scope="row">Instrumental</th>
             <td>Kolegou</td>
             <td>Bohem</td>
             <td>Dítětem</td>
             <td>Paní</td>
               <td></td>
             <td></td>
            </tr>
        
        </tbody>
        </table>
        </div>
        </div>
        
        
        <div className="col-xs-12">
            <h4 className="text-center">Plural</h4>
        
            <div className="table-responsive-lg">
        <table className="table table-sm table-striped table-hover">
          <thead>
           <tr>
             <th scope="row">Nominative</th>
             <th>Kolegové</th>
             <th>Bohové / Bozi</th>
             <th>Děti</th>
             <th>Paní</th>
             <th>Lidé / Lidi</th>
             <th>Peníze</th>
           </tr>
          </thead>
          <tbody>
        
           <tr>
             <th scope="row">Genitive</th>
             <td>Kolegů</td>
             <td>Bohů</td>
             <td>Dětí</td>
             <td>Paní</td>
             <td>Lidí</td>
             <td>Peněz</td>
          </tr>
           <tr>
             <th scope="row">Dative</th>
             <td>Kolegům</td>
             <td>Bohům</td>
             <td>Dětem</td>
             <td>Paní</td>
             <td>Lidem</td>
             <td>Penězi</td>
           </tr>
           <tr>
             <th scope="row">Accusative</th>
             <td>Kolegy</td>
             <td>Bozi</td>
             <td>Děti</td>
             <td>Paní</td>
             <td>Lidi</td>
             <td>Peníze</td>
           </tr>
           <tr>
             <th scope="row">Locative</th>
             <td>Kolezích</td>
             <td>Bozích</td>
             <td>Dětech</td>
             <td>Paní</td>
             <td>Lidech</td>
             <td>Penězích</td>
           </tr>
           <tr>
             <th scope="row">Instrumental</th>
             <td>Kolegy</td>
             <td>Bohy</td>
             <td>Dětmi</td>
             <td>Paní</td>
             <td>Lidmi</td>
             <td>Penězi</td>
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
 
 export default DeclensionIrregular;