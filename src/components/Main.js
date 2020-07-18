import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Resources from './Resources';
import Teachers from './Teachers';
import Home from './Home';
import Numbers from './Numbers';

function Main() {
    return (
        
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/resources' component={Resources} />
                    <Route path='/teachers' component={Teachers} />
                    <Route path='/numbers' component={Numbers} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
       
    )
}

export default Main;