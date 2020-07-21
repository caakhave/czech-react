import React from 'react';
import revealClass from './reveal';
import { Link } from 'react-router-dom';

function Pronouns() {
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

                <a name="pronouns"></a>
        <h2 className="text-center pushed">PRONOUNS</h2>
        
        
        
        <div className="col-xs-12">
            <h4 className="text-center">Personal Pronouns. The locative case requires a preposition.</h4>
        
            <div className="table-responsive-lg">
        <table className="table table-sm table-striped table-hover preps">
          <thead>
           <tr>
        
        <th colSpan="1">&nbsp;</th>
        <th colSpan="2">Genitive</th>
        <th colSpan="2">Dative</th>
        <th colSpan="2">Accusative</th>
        <th colSpan="1">Locative</th>
        <th colSpan="2">Instrumental</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td></td>
        <td><em>no prep</em></td>
        <td><em>w/ prep</em></td>
        <td><em>no prep</em></td>
        <td><em>w/ prep</em></td>
        <td><em>no prep</em></td>
        <td><em>w/ prep</em></td>
        <td><em>w/ prep</em></td>
        <td><em>no prep</em></td>
        <td><em>w/ prep</em></td>
        </tr>
        
        
        <tr>
        <th>Me</th>
        <td>mě</td>
        <td>mě</td>
        <td>mi</td>
        <td>mně</td>
        <td>mě</td>
        <td>mě</td>
        <td>mně</td>
        <td>mnou</td>
        <td>mnou</td>
        </tr>
        
        
        <tr>
        <th>You</th>
        <td>tě</td>
        <td>tebe</td>
        <td>ti</td>
        <td>tobě</td>
        <td>tě</td>
        <td>tebe</td>
        <td>tobě</td>
        <td>tebou</td>
        <td>tebou</td>
        </tr>
        
        
        <tr>
        <th>Him / It</th>
        <td>ho</td>
        <td>něho</td>
        <td>mu</td>
        <td>němu</td>
        <td>ho</td>
        <td>něho</td>
        <td>něm</td>
        <td>jim</td>
        <td>nim</td>
        </tr>
        
        
        <tr>
        <th>Her</th>
        <td>ji</td>
        <td>ni</td>
        <td>ji</td>
        <td>ni</td>
        <td>ji</td>
        <td>ni</td>
        <td>ni</td>
        <td>ji</td>
        <td>ni</td>
        </tr>
        
        
        
        <tr>
        <th>Us</th>
        <td>nas</td>
        <td>nas</td>
        <td>nam</td>
        <td>nam</td>
        <td>nas</td>
        <td>nas</td>
        <td>nas</td>
        <td>nami</td>
        <td>nami</td>
        </tr>
        
        
        
        <tr>
        <th>You (pl.)</th>
        <td>vas</td>
        <td>vas</td>
        <td>vam</td>
        <td>vam</td>
        <td>vas</td>
        <td>vas</td>
        <td>vas</td>
        <td>vami</td>
        <td>vami</td>
        </tr>
        
        
        
        <tr>
        <th>Them</th>
        <td>jich</td>
        <td>nich</td>
        <td>jim</td>
        <td>nim</td>
        <td>je</td>
        <td>ně</td>
        <td>nich</td>
        <td>jimi</td>
        <td>nimi</td>
        </tr>
        
        
        </tbody>
        </table>
        </div>
        
        </div>



         
        <div className="col-xs-12">
            <h4 className="text-center">Possessives.  They decline the same way as adjectives. </h4>
        
            <div className="table-responsive-lg">
        <table className="table table-sm table-striped table-hover preps">
          <thead>
        <tr>
        <th><i>Singular</i></th>
        <th>Masc. An.</th>
        <th>Masc. In.</th>
        <th>Neuter</th>
        <th>Feminine</th>
        <th><i>Plural</i></th>
        <th>Masc. An.</th>
        <th>Masc. In.</th>
        <th>Neuter</th>
        <th>Feminine</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th>Nominative</th>
        <td>můj</td>
        <td>můj</td>
        <td>moje</td>
        <td>moje</td>
        <th>Nominative</th>
        <td>moji</td>
        <td>moji</td>
        <td>moje</td>
        <td>moje</td>
        </tr>
        
        
        
        <tr>
        <th>Genitive</th>
        <td>mého</td>
        <td>mého</td>
        <td>mého</td>
        <td>moje</td>
        <th>Genitive</th>
        <td>mých</td>
        <td>mých</td>
        <td>mých</td>
        <td>mých</td></tr>
        
        <tr>
        <th>Dative</th>
        <td>mému</td>
        <td>mému</td>
        <td>mému</td>
        <td>mojí</td>
        <th>Dative</th>
        <td>mým</td>
        <td>mým</td>
        <td>mým</td>
        <td>mým</td></tr>
        
        <tr>
        <th>Accusative</th>
        <td>mého</td>
        <td>můj</td>
        <td>moje</td>
        <td>mojí</td>
        <th>Accusative</th>
        <td>moje</td>
        <td>moji</td>
        <td>moje</td>
        <td>moje</td></tr>
        
        <tr>
        <th>Locative</th>
        <td>mém</td>
        <td>mém</td>
        <td>mém</td>
        <td>mojí</td>
        <th>Locative</th>
        <td>mých</td>
        <td>mých</td>
        <td>mých</td>
        <td>mých</td></tr>
        
        <tr>
        <th>Instrumental</th>
        <td>mým</td>
        <td>mým</td>
        <td>mým</td>
        <td>mojí</td>
        <th>Instrumental</th>
        <td>mými</td>
        <td>mými</td>
        <td>mými</td>
        <td>mými</td></tr>
        
        
        
        
        </tbody>
        </table>
        </div>
        </div>

                </main>
 
            </div>
        </div>
     )
 }
 
 export default Pronouns;