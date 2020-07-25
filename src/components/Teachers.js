import React from 'react';
import revealclass from './reveal';
import { Link } from 'react-router-dom';

function Teachers() {
    return (
        <div>
            <div id="grid">
                <span className="tab" onClick={revealclass} aria-expanded="false">Grammar<span className="screen-reader-text">Reveal grammar menu</span></span>
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
                    
                    

                
                <main role="main" className="main teachers"> 
                


                <div className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-lg-5">
                      <h2 className="mb-4">Student?  Find your teacher!</h2>

                      <div className="media">
                          <img src="https://via.placeholder.com/64" className="mr-3" alt="..." />
                          <div className="media-body">
                            <h5 className="mt-0 teacher-name">Suzana Novakova | <span>Brno, CZ</span></h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <div className="teacher-bottom-content">
                              <p><i className="fa fa-map-marker"></i> Online &amp; In-person</p>
                              <a href="#" className="">Contact me!</a>
                              </div>
                          </div>
                        </div>
                        

                        <div className="media">
                          <img src="https://via.placeholder.com/64" className="mr-3" alt="..." />
                          <div className="media-body">
                            <h5 className="mt-0 teacher-name">Honza Rodl | <span>Ostrava, CZ</span></h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <div className="teacher-bottom-content">
                            <p><i className="fa fa-map-marker"></i> Online only</p>
                            <a href="#" className="">Contact me!</a>
                            </div>
                          </div>
                        </div>

                        <div className="media">
                          <img src="https://via.placeholder.com/64" className="mr-3" alt="..." />
                          <div className="media-body">
                            <h5 className="mt-0 teacher-name">Anezka Proksova | <span>Prague, CZ</span></h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <div className="teacher-bottom-content">
                              <p><i className="fa fa-map-marker"></i> Online &amp; In-person</p>
                              <a href="#" className="">Contact me!</a>
                              </div>
                          </div>
                        </div>

                        <i className="fa fa-2x fa-vcard-o"></i> <a href="#" className="teacher-list">See full list</a>
                      </div>
       
                    <div className="col-lg-5">
                      <h2 className="mb-4">Teacher?  Sign up!</h2>
                      <form>
                          <div className="form-group row">
                              <div className="col">
                              <input type="text" className="form-control" placeholder="First name" />
                              </div>
                              <div className="col">
                              <input type="text" className="form-control" placeholder="Last name" />
                              </div>
                          </div>

                          <div className="form-group row">
                          <div className="col">
                              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                          </div>
                          <div className="col">
                              <input type="text" className="form-control" placeholder="Location" />
                          </div>
                          </div>
                          <div className="form-group">
                              <label for="exampleFormControlTextarea1">Tell Us About Yourself</label>
                              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                          <fieldset className="form-group">
                          <div className="row">
                              <div className="col">
                              <div className="form-check">
                                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                  <label className="form-check-label" htmlFor="gridRadios1">
                                  Online only
                                  </label>
                              </div>
                              <div className="form-check">
                                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                  <label className="form-check-label" htmlFor="gridRadios2">
                                  In-person only
                                  </label>
                              </div>
                              <div className="form-check disabled">
                                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                                  <label className="form-check-label" htmlFor="gridRadios3">
                                  Online &amp; In-person
                                  </label>
                              </div>
                              </div>
                          </div>
                          </fieldset>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlFile1">Upload a photo <em>(opt.)</em></label>
                              <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                          </div>
                          <div className="form-group row">
                          <div className="col">
                              <button type="submit" className="btn btn-mint">Sign me up!</button>
                          </div>
                          </div>
                      </form>
                  </div>

                    </div>
                </div>
          


                </main>
 
            </div>
        </div>
     )
 }
 
 export default Teachers;