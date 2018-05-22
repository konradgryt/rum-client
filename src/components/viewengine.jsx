import React from 'react';
import ReactDOM from 'react-dom';
import Utility from './utility';
//content
import CardList from './content/cardlist';
//import Card from './content/card';
//header
import Login from './header/login';
import Register from './header/register';
import Overview from './header/overview';
//nav
import NavBar from './nav/navbar';
//pane
import PaneBody from './pane/panebody';
//import RumPane from './pane/rum';

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

    tooglePane() {
        var pane = ReactDOM.findDOMNode(document.querySelector('#pane'));
            if (pane.classList.contains('close')) {
                pane.classList.remove('close');
                pane.classList.add('open');
            } else if (pane.classList.contains('open')) {
                pane.classList.remove('open');
                pane.classList.add('close');
            }
    }

    toogleReviews() {
        var pane = ReactDOM.findDOMNode(document.querySelector('#makereview'));
            if (pane.classList.contains('show')) {
                pane.classList.remove('show');
                pane.classList.add('hide');
            } else if (pane.classList.contains('hide')) {
                pane.classList.remove('hide');
                pane.classList.add('show');
            }
    }

    refreshPane(content, title) {
        ReactDOM.render(<PaneBody view={this} body={content} header={title} />, this.paneContainer);
    }
    /**
     * Renders index view of the app - all elements that are being displayed
     */
    renderIndex() {
        this.renderNav();
        this.renderLogin();
        this.renderCardList();
        Utility.saveToLocalStorage('allowReviews', 'false');
    }
}

export default ViewEngine;