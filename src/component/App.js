import React from 'react';
import {Router, Route } from 'react-router-dom';
import StreamCreate from './strems/StreamCreate';
import StreamDelete from './strems/StreamDelete';
import StreamEdit from './strems/StreamEdit';
import  StreamList from './strems/StreamList';
import StreamShow from './strems/StreamShow';
import Header from './Header';
import history from '../history';


const App = () =>{

    return (
        <div className="ui container">
            <Router history={history}>
            <div>
                <Header/>
         <Route path="/" exact component={StreamList} />
         <Route path="/streams/new" component={StreamCreate} />
         <Route path="/streams/edit/:id" component={StreamEdit} />
         <Route path="/streams/delete" component={StreamDelete} />
         <Route path="/streams/show" component={StreamShow} />

            </div>
       
        </Router> 
        </div>
    
    );

};


export default App;