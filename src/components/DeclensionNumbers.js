import React from 'react';
import { Table } from 'reactstrap';
import revealClass from './reveal';
import { Link } from 'react-router-dom';

function DeclensionNumbers() {
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
   
        <h4 className="text-center">Even numbers change according to case...</h4>
    
    
    <Table responsive="lg">
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
    </Table>
   

</div>

</main>
 
</div>
        </div>
    )
}

export default DeclensionNumbers;