import React from 'react';
import ReactDOM from 'react-dom';
import Register from './register';
import NavBar from './navbar';
import Login from './login';
import CardList from './cardlist';
import Rum from './rum';
import Overview from './overview';

class ViewEngine {
    contentContainer;
    navContainer;
    headerContainer;
    paneContainer;

    constructor(contentContainer, navContainer, headerContainer, paneContainer) {
        this.contentContainer = contentContainer;
        this.navContainer = navContainer;
        this.headerContainer = headerContainer;
        this.paneContainer = paneContainer;
    }

    /**
     * Renders navigation container of the web app
     */
    renderNav() {
        ReactDOM.render(<NavBar view={this} />, this.navContainer);
    }

    /**
     * Renders register container of the web app
     */
    renderRegister() {
        ReactDOM.render(<Register view={this} />, this.headerContainer);
    }

    /**
     * Renders login container of the web app
     */
    renderLogin() {
        ReactDOM.render(<Login view={this} />, this.headerContainer);
    }

    /**
     * Renders overview container of the web app
     */
    renderOverview(username) {
        ReactDOM.render(<Overview view={this} username={username} />, this.headerContainer);
    }

    /**
     * Renders rum container of the web app
     */
    renderCardList() {
        ReactDOM.render(<Rum view={this} />, this.contentContainer);
    }

    /**
     * Renders index view of the app - all elements that are being displayed
     */
    renderIndex() {
         this.renderNav();
         this.renderLogin();
         this.renderCardList();
    }
}

export default ViewEngine;