import React from 'react';
import Sidebar from './Sidebar';
import { Table } from 'reactstrap';

function Numbers() {
    return (
        <div>
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

export default Numbers;