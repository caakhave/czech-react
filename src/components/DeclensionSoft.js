import React from 'react';
import revealClass from './reveal';
import { Link } from 'react-router-dom';

function DeclensionSoft() {
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
        
        <a name="soft"></a>
        
            <h4 className="text-center">Nouns with a "soft" ending - Singular</h4>
        
        <div className="table-responsive">
        
        <table className="table table-sm table-striped table-hover">
          <thead>
            <tr>
             <th scope="row">Nominative</th>
             <th>Muž / Pokoj<br />(m.a./m.i.)</th>
             <th>Lekce / Píseň<br />(fem.)</th>
             <th>Pole<br />(neut.)</th>
             <th>Náměstí<br />(neut.)</th>
             <th>Radost<br />(fem.)</th>
             <th>Děvčě<br />(neut.)</th>
           </tr>
        
          </thead>
          <tbody>
           
        
            <tr>
             <th scope="row">Genitive</th>
             <td>Muže / Pokoje</td>
             <td>Lekce / Písně</td>
             <td>Pole</td>
             <td>Náměstí</td>
             <td>Radosti</td>
             <td>Děvčete</td>
            </tr>
            <tr>
             <th scope="row">Dative</th>
             <td>Muži / Pokoji</td>
             <td>Lekci / Písní</td>
             <td>Poli</td>
             <td>Náměstí</td>
             <td>Radosti</td>
             <td>Děvčeti</td>
            </tr>
            <tr>
             <th scope="row">Accusative</th>
              <td>Muže / Pokoj</td>
              <td>Lekci / Píseň</td>
              <td>Pole</td>
              <td>Náměstí</td>
              <td>Radost</td>
              <td>Děvčě</td>
            </tr>
            <tr>
             <th scope="row">Locative</th>
             <td>Muži / Pokoji</td>
             <td>Lekci / Písni</td>
             <td>Poli</td>
             <td>Náměstí</td>
             <td>Radosti</td>
             <td>Děvčeti</td>
            </tr>
            <tr>
             <th scope="row">Instrumental</th>
             <td>Mužem/ Pokojem</td>
             <td>Lekcí / Písní</td>
             <td>Polem</td>
             <td>Náměstím</td>
             <td>Radostí</td>
             <td>Děvčetem</td>
            </tr>
        
        
         </tbody>
        </table>
        </div>
        </div>
        
        
        
        <div className="col-xs-12">
        
        <h4 className="text-center">Nouns with a "soft" ending - Plural</h4>
        
        <div className="table-responsive-lg">
        <table className="table table-sm table-striped table-hover">
          <thead>
            <tr>
             <th scope="row">Nominative</th>
             <th>Muži / Pokoje</th>
             <th>Lekce / Písně</th>
             <th>Pole</th>
             <th>Náměstí</th>
             <th>Radosti</th>
             <th>Děvčata</th>
            </tr>
          </thead>
          <tbody>
        
            <tr>
            <th scope="row">Genitive</th>
              <td>Mužů / Pokojů</td>
              <td>Lekcí / Písní</td>
              <td>Polí</td>
              <td>Náměstí</td>
              <td>Radostí</td>
              <td>Děvčat</td>
            </tr>
              <tr>
            <th scope="row">Dative</th>
            <td>Mužům / Pokojům</td>
            <td>Lekcím / Písním</td>
            <td>Polím</td>
            <td>Náměstím</td>
            <td>Radostem</td>
            <td>Děvčatům</td>
            </tr>
              <tr>
            <th scope="row">Accusative</th>
            <td>Muže / Pokoje</td>
            <td>Lekce / Písně</td>
            <td>Pole</td>
            <td>Náměstí</td>
            <td>Radosti</td>
            <td>Děvčata</td>
            </tr>
            <tr>
            <th scope="row">Locative</th>
            <td>Mužích / Pokojích</td>
            <td>Lekcích / Písních</td>
            <td>Polích</td>
            <td>Náměstích</td>
            <td>Radostech</td>
            <td>Děvčatech</td>
               </tr>
            <tr>
            <th scope="row">Instrumental</th>
            <td>Muži/ Pokoji</td>
            <td>Lekcemi / Písněmi</td>
            <td>Poli</td>
            <td>Náměstími</td>
            <td>Radostmi</td>
            <td>Děvčaty</td>
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
 
 export default DeclensionSoft;