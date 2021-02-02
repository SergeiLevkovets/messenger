import React from 'react';
import ReactDOM from 'react-dom';
import MessengerApp from './App';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < MessengerApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
