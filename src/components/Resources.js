import React from 'react';
import { Link } from 'react-router-dom';
import revealClass from './reveal';

function Resources() {
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

 


<main role="main" className="main resources"> 
 

<div className="container-fluid">
        <h2 className="mb-4">Have a helpful Czech link?  Let us know!</h2>
        <form>
<div className="row mb-5">
            <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="resources-sitename">Site Name</label>
              <input type="text" className="form-control" id="resources-sitename" placeholder="Enter site name" />
            </div>
            <div className="form-group">
              <label htmlFor="resources-url">URL</label>
              <input type="text" className="form-control" id="resources-url" placeholder="http://..." />
            </div>
        </div>
        <div className="col-12 col-md-6">
            <div className="form-group">
                <label htmlFor="resources-about">Tell us about it</label>
                <textarea className="form-control" id="resources-about" rows="2"></textarea>
              </div>
            <button type="submit" className="btn btn-mint btn-resources">Submit</button>
        </div>
    </div>
          </form>


        <div className="row">
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Site Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Site Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Site Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Site Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Site Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Site Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Link Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Link Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Site Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                    Site Name
                    </div>
                    <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor esse id voluptatum quod, nostrum minus saepe blanditiis quos molestias vitae labore deserunt dolore, voluptas, ipsa sed. Perspiciatis voluptatibus unde laborum eius, perferendis aspernatur..</p>
                    <a href="#" className="btn btn-mint">Visit site!</a>
                    </div>
                </div>
            </div>
        </div>

       </div>
            </main>
 
 </div>
         </div>
    )
}

export default Resources;