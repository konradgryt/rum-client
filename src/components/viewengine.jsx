import React from 'react';
import ReactDOM from 'react-dom';
import Register from './register';
import NavBar from './navbar';
import Login from './login';
import Rum from './rum';

class ViewEngine {
    viewContainer;
    navContainer;

    constructor(navContainer, viewContainer) {
        this.navContainer = navContainer;
        this.viewContainer = viewContainer;
    }

    /**
     * Renders navigation container of the web app
     */
    renderNavContainer() {
        ReactDOM.render(<NavBar />, this.navContainer);
    }

    /**
     * Renders register container of the web app
     */
    renderRegister() {
        ReactDOM.render(<Register view={this} />, this.viewContainer);
    }

    /**
     * Renders login container of the web app
     */
    renderLogin() {
        ReactDOM.render(<Login />, this.viewContainer);
    }

    /**
     * Renders rum container of the web app
     */
    renderRum() {
        ReactDOM.render(<Rum />, this.viewContainer);
    }

    /**
     * Renders index view of the app - all elements that are being displayed
     */
    renderIndex() {
         this.renderNavContainer();
         this.renderRegister();
    }
}

export default ViewEngine;