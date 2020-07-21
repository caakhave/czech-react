import React from 'react';
import revealClass from './reveal';
import { Link } from 'react-router-dom';

function DeclensionMain() {
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

                <div className="row">


  <div className="col-xs-12 col-xl-6">
    <div className="table-responsive-lg">
      <table className="table table-sm table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" colSpan="3" className="headinfo">Standard Nouns <br className="d-block d-sm-none"  />("hard" ending) - Singular</th>
            <th scope="col" className="headinfo">Possessives - Singular</th>
          </tr>
        </thead>
        <tbody>
      
          <tr>
            <th scope="row" rowSpan="4">Nominative</th>
            <td>Ma</td>
            <td>ten dobrý kamarád</td>
            <td>Petrův, Lenčin</td>
          </tr>
           <tr>
            <td>Mi</td>
            <td>ten dobrý slovník</td>
            <td>Petrův, Lenčin</td>
            </tr>
            <tr>
            <td>Neut</td>
            <td>to dobré auto</td>
            <td>Petrovo, Lenčino</td>
            </tr>
            <tr>
            <td>Fem</td>
            <td>ta dobrá žena</td>
            <td>Petrova, Lenčina</td>
          </tr>
      
      
      
       <tr>
            <th scope="row" rowSpan="4">Genitive</th>
            <td>Ma</td>
            <td>toho dobrého kamaráda</td>
            <td>Petrova, Lenčina</td>
          </tr>
           <tr>
            <td>Mi</td>
            <td>toho dobrého slovníku</td>
            <td>Petrova, Lenčina</td>
            </tr>
            <tr>
            <td>Neut</td>
            <td>toho dobrého auta</td>
            <td>Petrova, Lenčina</td>
            </tr>
            <tr>
            <td>Fem</td>
            <td>te dobré ženy</td>
            <td>Petrovy, Lenčiny</td>
          </tr>
      
      
      
      
      
       <tr>
            <th scope="row" rowSpan="4">Dative</th>
            <td>Ma</td>
            <td>tomu dobrému kamarádu/ovi</td>
            <td>Petruvu, Lenčinu</td>
          </tr>
           <tr>
            <td>Mi</td>
            <td>tomu dobrému slovníku</td>
            <td>Petruvu, Lenčinu</td>
            </tr>
            <tr>
            <td>Neut</td>
            <td>tomu dobrému autu</td>
            <td>Petruvu, Lenčinu</td>
            </tr>
            <tr>
            <td>Fem</td>
            <td>te dobré ženě</td>
            <td>Petrově, Lenčině</td>
          </tr>
      
      
      
       <tr>
            <th scope="row" rowSpan="4">Accusative</th>
            <td>Ma</td>
            <td>toho dobrého kamaráda</td>
            <td>Petrova, Lenkina</td>
          </tr>
           <tr>
            <td>Mi</td>
            <td>ten dobrý slovník</td>
            <td>Petrův, Lenčin</td>
            </tr>
            <tr>
            <td>Neut</td>
            <td>to dobré auto</td>
            <td>Petrovo, Lenčino</td>
            </tr>
            <tr>
            <td>Fem</td>
            <td>tu dobrou ženu</td>
            <td>Petrovu, Lenčinu</td>
          </tr>
      
      
       <tr>
            <th scope="row" rowSpan="4">Locative</th>
            <td>Ma</td>
            <td>tom dobrém kamarádu/ovi</td>
            <td>Petrově, Lenčině</td>
          </tr>
           <tr>
            <td>Mi</td>
            <td>tom dobrém slovniku</td>
            <td>Petrově, Lenčině</td>
            </tr>
            <tr>
            <td>Neut</td>
            <td>tom dobrém autě</td>
            <td>Petrově, Lenčině</td>
            </tr>
            <tr>
            <td>Fem</td>
            <td>te dobré ženě</td>
            <td>Petrově, Lenčině</td>
          </tr>
      
       <tr>
            <th scope="row" rowSpan="4">Instrumental</th>
            <td>Ma</td>
            <td>tim dobrým kamáradem</td>
            <td>Petrovým, Lenčiným</td>
          </tr>
           <tr>
            <td>Mi</td>
            <td>tim dobrým slovníkem</td>
            <td>Petrovým, Lenčiným</td>
            </tr>
            <tr>
            <td>Neut</td>
            <td>tim dobrým autem</td>
            <td>Petrovým, Lenčiným</td>
            </tr>
            <tr>
            <td>Fem</td>
            <td>tou dobrou ženou</td>
            <td>Petrovou, Lenčiným</td>
          </tr>
      
      
        </tbody>
      </table>
      </div>
      </div>

      <div className="col-xs-12 col-xl-6">
        <div className="table-responsive-lg">
        <table className="table table-main table-sm table-striped table-hover table-responsive-sm">
          <thead>
            <tr>
              <th scope="col" colSpan="3" className="headinfo">Standard Nouns <br className="d-block d-sm-none" />("hard" ending) - Plural</th>
              <th scope="col" className="headinfo">Possessives - Plural</th>
            </tr>
          </thead>
          <tbody>
           <tr>
              <th scope="row" rowSpan="4">Nominative</th>
              <td>Ma</td>
              <td>ti dobři kamarádi</td>
              <td>Petrovi, Lenkini</td>
            </tr>
             <tr>
              <td>Mi</td>
              <td>ty dobré slovníci</td>
              <td>Petrovy, Lenčiny</td>
              </tr>
              <tr>
              <td>Neut</td>
              <td>ta dobrá auta</td>
              <td>Petrova, Lenčina</td>
              </tr>
              <tr>
              <td>Fem</td>
              <td>ty dobré ženy</td>
              <td>Petrovy, Lenčiny</td>
            </tr>
        
        
         <tr>
              <th scope="row" rowSpan="4">Genitive</th>
              <td>Ma</td>
              <td>těch dobrých kamaradů</td>
              <td>Petrových, Lenčiných</td>
            </tr>
             <tr>
              <td>Mi</td>
              <td>těch dobrých slovniků</td>
              <td>Petrových, Lenčiných</td>
              </tr>
              <tr>
              <td>Neut</td>
              <td>těch dobrých aut</td>
              <td>Petrových, Lenčiných</td>
              </tr>
              <tr>
              <td>Fem</td>
              <td>těch dobrých žen</td>
              <td>Petrových, Lenčiných</td>
            </tr>
        
        
         <tr>
              <th scope="row" rowSpan="4">Dative</th>
              <td>Ma</td>
              <td>těm dobrým kamaradům</td>
              <td>Petruvým, Lenčiným</td>
            </tr>
             <tr>
              <td>Mi</td>
              <td>těm dobrým slovnikům</td>
              <td>Petruvým, Lenčiným</td>
              </tr>
              <tr>
              <td>Neut</td>
              <td>těm dobrým autům</td>
              <td>Petruvým, Lenčiným</td>
              </tr>
              <tr>
              <td>Fem</td>
              <td>těm dobrým ženám</td>
              <td>Petruvým, Lenčiným</td>
            </tr>
        
        
         <tr>
              <th scope="row" rowSpan="4">Accusative</th>
              <td>Ma</td>
              <td>ty dobré kamarády</td>
              <td>Petrovy, Lenčiny</td>
            </tr>
             <tr>
              <td>Mi</td>
              <td>ten dobrý slovníci</td>
              <td>Petrovy, Lenčiny</td>
              </tr>
              <tr>
              <td>Neut</td>
              <td>ta dobrá auta</td>
              <td>Petrovy, Lenčina</td>
              </tr>
              <tr>
              <td>Fem</td>
              <td>ty dobré ženy</td>
              <td>Petrovy, Lenčiny</td>
            </tr>
        
        
         <tr>
              <th scope="row" rowSpan="4">Locative</th>
              <td>Ma</td>
              <td>těch dobrých kamarádech</td>
              <td>Petrových, Lenčiných</td>
            </tr>
             <tr>
              <td>Mi</td>
              <td>těch dobrých slovnících</td>
              <td>Petrových, Lenčiných</td>
              </tr>
              <tr>
              <td>Neut</td>
              <td>těch dobrých autech</td>
              <td>Petrových, Lenčiných</td>
              </tr>
              <tr>
              <td>Fem</td>
              <td>těch dobrých ženách</td>
              <td>Petrových, Lenčiných</td>
            </tr>
        
        
         <tr>
              <th scope="row" rowSpan="4">Instrumental</th>
              <td>Ma</td>
              <td>těmi dobrými kamarády</td>
              <td>Petrovými, Lenčinými</td>
            </tr>
             <tr>
              <td>Mi</td>
              <td>těmi dobrými slovníci</td>
              <td>Petrovými, Lenčinými</td>
              </tr>
              <tr>
              <td>Neut</td>
              <td>těmi dobrými auty</td>
              <td>Petrovými, Lenčinými</td>
              </tr>
              <tr>
              <td>Fem</td>
              <td>těmi dobrými ženámi</td>
              <td>Petrovými, Lenčinými</td>
            </tr>
        
        
          </tbody>
        </table>
        </div>
        
        </div>
        
        </div>



                </main>
 
            </div>
        </div>
     )
 }
 
 export default DeclensionMain;