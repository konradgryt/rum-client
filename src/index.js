import ViewEngine from './components/viewengine';
import './styles/global.scss';

var contentContainer = document.querySelector('#content');
var navContainer = document.querySelector('#nav');
var headerContainer = document.querySelector('#header');
var paneContainer = document.querySelector('#pane');

var view = new ViewEngine(contentContainer,navContainer,headerContainer,paneContainer);

view.renderIndex();
