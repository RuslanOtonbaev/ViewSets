import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';

export default class Root extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

render(<Root/>, document.getElementById('root'));
