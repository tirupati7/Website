import React from 'react';
import Home from '../components/home';
import About from '../components/about';
import ContactUS from '../components/contactUS';
import TouristPlaces from '../components/touristsPlaces';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../components/footer';
import DetailedPostView from '../components/detailedPostView';
import ScrollToTop from "react-scroll-to-top";

export const Routes = () => {   
    return (
        <div className="whole">
            <ScrollToTop smooth color="#00cc66" />
            <Header />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/about" component={About} />
                <Route exact path="/touristPlaces" component={TouristPlaces} />
                <Route exact path="/contact-us" component={ContactUS} />
                <Route exact path="/detailed-post-view/:id" component={DetailedPostView} />
            </Switch>
            <Footer/>
        </div>
    );
};