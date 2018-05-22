import ViewEngine from './components/viewengine';
import './styles/global.scss';

var viewContainer = document.querySelector('#main');
var navContainer = document.querySelector('#nav');
var rumContainer = document.querySelector('#rum');

var view = new ViewEngine(navContainer,viewContainer,rumContainer);

view.renderIndex();
