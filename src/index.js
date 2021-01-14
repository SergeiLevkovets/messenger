import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./redux/State";
import {renderEntireThree} from "./render";

renderEntireThree(state);

reportWebVitals();
