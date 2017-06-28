import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

require('./styles/main.scss')

ReactDOM.render(
  <div class='page-wrapper'>
    <Header />
    <Body />
    <Footer />
  </div>,
  document.getElementById('app')
);

