import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Resources from './Resources';
import Teachers from './Teachers';
import Home from './Home';
import DeclensionNumbers from './DeclensionNumbers';
import DeclensionMain from './DeclensionMain';
import DeclensionBodyParts from './DeclensionBodyParts';
import DeclensionForeign from './DeclensionForeign';
import DeclensionIrregular from './DeclensionIrregular';
import DeclensionSoft from './DeclensionSoft';
import DeclensionAll from './DeclensionAll';
import Prepositions from './Prepositions';
import Pronouns from './Pronouns';



function Main() {
    return (
        
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/resources' component={Resources} />
                    <Route path='/teachers' component={Teachers} />
                    <Route path='/declension-all' component={DeclensionAll} />
                    <Route path='/declension-main' component={DeclensionMain} />
                    <Route path='/declension-bodyparts' component={DeclensionBodyParts} />
                    <Route path='/declension-foreign' component={DeclensionForeign} />
                    <Route path='/declension-irregular' component={DeclensionIrregular} />
                    <Route path='/declension-soft' component={DeclensionSoft} />
                    <Route path='/declension-numbers' component={DeclensionNumbers} />
                    <Route path='/prepositions' component={Prepositions} />
                    <Route path='/pronouns' component={Pronouns} />
                    <Redirect to='/' />
                </Switch>
                <Footer />
            </div>
       
    )
}

export default Main;