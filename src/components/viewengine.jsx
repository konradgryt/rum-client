import React from 'react';
import ReactDOM from 'react-dom';
//import Utility from './utility';
//content
import CardList from './content/cardlist';
//header
import Login from './header/login';
import Register from './header/register';
import Overview from './header/overview';
//nav
import NavBar from './nav/navbar';
//pane
import PaneBody from './pane/panebody';

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
        ReactDOM.render(<CardList view={this} />, this.contentContainer);
    }

    renderPane() {
        ReactDOM.findDOMNode(document.querySelector('#pane')).classList.remove('close');
        ReactDOM.findDOMNode(document.querySelector('#pane')).classList.add('open');
       // ReactDOM.render(<PaneBody view={this} />, this.paneContainer);
    }

    unmountPane() {
     // ReactDOM.unmountComponentAtNode(document.querySelector('#pane'));
        ReactDOM.findDOMNode(document.querySelector('#pane')).classList.remove('open');
        ReactDOM.findDOMNode(document.querySelector('#pane')).classList.add('close');
    }

    /**
     * Renders index view of the app - all elements that are being displayed
     */
    renderIndex() {
        this.renderNav();
        this.renderLogin();
        this.renderCardList();
        ReactDOM.render(<PaneBody view={this} />, this.paneContainer);
    }
}

export default ViewEngine;