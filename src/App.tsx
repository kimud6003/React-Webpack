import React from 'react';
import '../style/global.css';
import IMAGE from '../public/img/animal.jpg';
import SVG from '../public/img/Background.svg';

const App = () => (
  <>
    <img src={IMAGE} width="300" height="300" />
    <img src={SVG} width="300" height="300" />
    <div>{process.env.NODE_ENV}aaa22 assaa</div>
  </>
);

export default App;
