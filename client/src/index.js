import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/index.js';
import reportWebVitals from './reportWebVitals';
import dotenv from 'dotenv';
import { Helmet } from 'react-helmet';


dotenv.config();
ReactDOM.render(
  <React.StrictMode>
     <Helmet title={'MovieWorld'} description={'Discover a world of millions of movies and Tv shows. Find the movies that suit you and review those that you already watched.'} htmlAttributes={{lang: 'en'}} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
