import React from 'react';
import revealClass from './reveal';
import { Link } from 'react-router-dom';

function Prepositions() {
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


                <a name="prepositions"></a>
        <h2 className="text-center pushed">PREPOSITIONS</h2>
        
        
        
        
        <h4 className="text-center">Prepositions determine which case you need to use.</h4>
        
        
        
        
        <div className="row">
        
        <div className="col-12 col-md-6 col-lg-4">
        <h3 className="text-center">Genitive</h3>
        <ul>
        <li><strong>BEZ</strong> - without </li>
        <li><strong>DO</strong> - into, to, until </li>
        <li><strong>OD</strong> - away from, from (place or person) </li>
        <li><strong>U</strong> - at, near  </li>
        <li><strong>Z, ZE</strong> - out of, down from</li>
        <li><strong>ZA</strong> - during</li>
        <li><strong>BĚHEM</strong> - during </li>
        <li><strong>BLÍZKO</strong> - during</li>
        <li><strong>DALEKO OD</strong> - far from</li>
        <li><strong>KROMĚ</strong> - except for, apart from</li>
        <li><strong>MÍSTO</strong> - instead of</li>
        <li><strong>NA ROZDÍL OD</strong> - in contrast to, unlike</li>
        <li><strong>NEDALEKO</strong> - not far from</li>
        <li><strong>OKOLO</strong> - around, about</li>
        <li><strong>PODÉL</strong> - along</li>
        <li><strong>PODLE</strong> - according to</li>
        <li><strong>POMOCÍ</strong> - with the help of</li>
        <li><strong>UPROSTŘED</strong> - in the middle of</li>
        <li><strong>VEDLE</strong> - next to</li>
        </ul>
        </div>
        
        
        
        
        <div className="col-12 col-md-6 col-lg-4">
        
        
        
        <h3 className="text-center">Dative</h3>
        <ul>
        <li><strong>AŽ K</strong> - as far as</li>
        <li><strong>DÍKY</strong> - thanks to</li>
        <li><strong>K, KE</strong> - towards, to</li>
        <li><strong>KVŮLI</strong> - because of, for the sake of</li>
        <li><strong>NAPROTI</strong> - opposite</li>
        <li><strong>NAVZDORY</strong> - despite</li>
        <li><strong>PROTI</strong> - against, opposite</li>
        <li><strong>VŮČI</strong> - with respect to</li>
        </ul>
        
        <h3 className="text-center">Accusative</h3>
        <ul>
        <li><strong>MIMO</strong> - except, apart from / outside, out of</li>
        <li><strong>NA</strong> - for (purpose and time) / onto</li>
        <li><strong>O</strong> - on, against / by (difference)</li>
        <li><strong>OB</strong> - every other</li>
        <li><strong>PO</strong> - as far as, up to / throughout, during</li>
        <li><strong>PŘES</strong> - across, through</li>
        <li><strong>PRO</strong> - for (person and to get st.)</li>
        <li><strong>V</strong> - on (day)</li>
        <li><strong>ZA</strong> - in (amount of time) / for (monetary exchange)</li>
        </ul>
        
        
        </div>
        
        <div className="col-12 col-md-6 col-lg-4">
        <h3 className="text-center">Locative</h3>
        <ul>
        <li><strong>NA</strong> - on</li>
        <li><strong>O</strong> - about</li>
        <li><strong>PO</strong> - after - along, about, around (place)</li>
        <li><strong>PŘI</strong> - during, at</li>
        <li><strong>V, VE</strong> - in (place or month)</li>
        </ul>
        
        
        <h3 className="text-center">Instrumental</h3>
        <ul>
        <li><strong>NA</strong> - above, over</li>
        <li><strong>POD</strong> - below, under</li>
        <li><strong>PŘED</strong> - in front of, before</li>
        <li><strong>ZA</strong> - behind, beyond</li>
        <li><strong>MEZI</strong> - between, among</li>
        <li><strong>S</strong> - with</li>
        </ul>
        </div>
        </div>




                </main>
 
            </div>
        </div>
     )
 }
 
 export default Prepositions;