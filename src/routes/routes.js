import React from 'react';
import Home from '../components/home';
import About from '../components/about';
import ContactUS from '../components/contactUS';
import TouristPlaces from '../components/touristsPlaces';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header/header';
import DetailedPostView from '../components/detailedPostView';

export const Routes = () => {   
    return (
        <div className="whole">
            <Header />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/about" component={About} />
                <Route exact path="/touristPlaces" component={TouristPlaces} />
                <Route exact path="/contact-us" component={ContactUS} />
                <Route exact path="/detailed-post-view" component={DetailedPostView} />
            </Switch>
        </div>
    );
};