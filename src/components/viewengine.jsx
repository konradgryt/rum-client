import React from 'react';
import ReactDOM from 'react-dom';
import Register from './register';
import NavBar from './navbar';
import Login from './login';
import CardList from './cardlist';

class ViewEngine {
    contentContainer;
    navContainer;
    headerContainer;

    constructor(contentContainer, navContainer, headerContainer) {
        this.contentContainer = contentContainer;
        this.navContainer = navContainer;
        this.headerContainer = headerContainer;
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
     * Renders rum container of the web app
     */
    renderCardList() {
        ReactDOM.render(<CardList view={this} />, this.contentContainer);
    }

    /**
     * Renders index view of the app - all elements that are being displayed
     */
    renderIndex() {
         this.renderNav();
         this.renderRegister();
         this.renderCardList();
    }
}

export default ViewEngine;