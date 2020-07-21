import React from 'react';
import revealClass from './reveal';
import { Link } from 'react-router-dom';

function DeclensionAll() {
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
 
                <div className="container-fluid">

<ul className="nav table-menu justify-content-center">
    <li className="nav-item">
      <a className="nav-link" href="#soft">Soft endings</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#foreign">Foreign Words</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#body">Body parts</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#irregular">Irregular nouns</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#numbers">Numbers</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#pronouns">Pronouns</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#prepositions">Prepositions</a>
      </li>
  </ul>






  <h2 className="text-center mb-4">DECLENSION TABLES</h2>

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
        
        <hr className="divider" />
        






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
        
        
        
        
        
        <hr className="divider" />



        <div className="col-xs-12">
        <a name="foreign"></a>
            <h4 className="text-center">Words with a foreign origin - Singular</h4>
        
            <div className="table-responsive-lg">
        
        <table className="table table-sm table-striped table-hover">
          <thead>
             <tr>
             <th scope="row">Nominative</th>
             <th>Centrum</th>
             <th>Studium</th>
             <th>Génius</th>
             <th>Cyklus</th>
             <th>Idea</th>
             <th>Drama (neut.)</th>
             <th>Humanismus</th>
            </tr>
          </thead>
          <tbody>
        
           <tr>
             <th scope="row">Genitive</th>
             <td>Centra</td>
             <td>Studia</td>
             <td>Génia</td>
             <td>Cyklu</td>
             <td>Ideje</td>
             <td>Dramatu</td>
             <td>Humanismu</td>
          </tr>
          <tr>
             <th scope="row">Dative</th>
             <td>Centru</td>
             <td>Studiu</td>
             <td>Géniu/ovi</td>
             <td>Cyklu</td>
             <td>Ideji</td>
             <td>Dramatu</td>
             <td>Humanismu</td>
          </tr>
          <tr>
             <th scope="row">Accusative</th>
             <td>Centrum</td>
             <td>Studium</td>
             <td>Génia</td>
             <td>Cyklus</td>
             <td>Ideu</td>
             <td>Drama</td>
             <td>Humanismus</td>
          </tr>
          <tr>
             <th scope="row">Locative</th>
             <td>Centru</td>
             <td>Studiu</td>
             <td>Géniu/ovi</td>
             <td>Cyklu</td>
             <td>Ideji</td>
             <td>Dramatu</td>
             <td>Humanismu</td>
          </tr>
          <tr>
             <th scope="row">Instrumental</th>
             <td>Centrem</td>
             <td>Studiem</td>
             <td>Géniem/ovi</td>
             <td>Cyklem</td>
             <td>Idejí/Ideou</td>
             <td>Dramatem</td>
             <td>Humanismem</td>
          </tr>
        </tbody>
        </table>
        </div>
        </div>
        
        
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
        
        
        <hr className="divider" />
        

        <div className="col-xs-12">
        <a name="body"></a>
            <h4 className="text-center">Body parts that are in pairs (no singular):<br />
        eyes, ears, hands, legs, breast, shoulders, knees</h4>
        
        <div className="table-responsive-lg">
        
        <table className="table table-sm table-striped table-hover">
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
        </table>
        </div>
        </div>
        
        <hr className="divider" />

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
        
        
        <hr className="divider" />

        <div className="col-xs-12">
        <a name="numbers"></a>
            <h4 className="text-center">Numbers</h4>
        
            <div className="table-responsive-lg">
        <table className="table table-sm table-striped table-hover">
          <thead>
              <tr>
             <th scope="row">Nominative</th>
             <th>Jeden</th>
             <th>Jedno</th>
             <th>Jedna</th>
             <th>Dva / Dvě</th>
             <th>Tři</th>
             <th>Čtyři</th>
             <th>Pět</th>
             <th>Sto</th>
             <th>Tisíc</th>
            </tr>
          </thead>
          <tbody>
        
           <tr>
             <th scope="row">Genitive</th>
             <td>jednoho</td>
             <td>jednoho</td>
             <td>jedné</td>
             <td>dvou</td>
             <td>tři</td>
             <td>čtyř</td>
             <td>pěti</td>
             <td>sta</td>
             <td>tisíce</td>
           </tr>
           <tr>
             <th scope="row">Dative</th>
             <td>jednomu</td>
             <td>jednomu</td>
             <td>jedné</td>
             <td>dvěma</td>
             <td>třem</td>
             <td>čtyřem</td>
             <td>pěti</td>
             <td>stu</td>
             <td>tisíci</td>
           </tr>
           <tr>
             <th scope="row">Accusative</th>
             <td>jednoho/jeden</td>
             <td>jedno</td>
             <td>jednu</td>
             <td>dva/dvě</td>
             <td>tři</td>
             <td>čtyři</td>
             <td>pět</td>
             <td>sto</td>
             <td>tisíc</td>
           </tr>
           <tr>
             <th scope="row">Locative</th>
             <td>jednem</td>
             <td>jednem</td>
             <td>jedné</td>
             <td>dvou</td>
             <td>třech</td>
             <td>čtyřech</td>
             <td>pěti</td>
             <td>stu</td>
             <td>tisíci</td>
           </tr>
           <tr>
             <th scope="row">Instrumental</th>
             <td>jedním</td>
             <td>jedním</td>
             <td>jednou</td>
             <td>dvěma</td>
             <td>třemi</td>
             <td>čtyřmi</td>
             <td>pěti</td>
             <td>stem/sti</td>
             <td>tisíci/tisícem</td>
           </tr>
        </tbody>
        </table>
        </div>
        </div>
        
        
        <hr className="divider" />

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
        
        <hr className="divider" />



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




</div>

                </main>
 
            </div>
        </div>
     )
 }
 
 export default DeclensionAll;