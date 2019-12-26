import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './strems/StreamCreate';
import StreamDelete from './strems/StreamDelete';
import StreamEdit from './strems/StreamEdit';
import  StreamList from './strems/StreamList';
import StreamShow from './strems/StreamShow';
import Header from './Header';


const App = () =>{

    return (
        <div>
            <BrowserRouter>
            <div>
                <Header/>
         <Route path="/" exact component={StreamList} />
         <Route path="/streams/new" component={StreamCreate} />
         <Route path="/streams/edit" component={StreamEdit} />
         <Route path="/streams/delete" component={StreamDelete} />
         <Route path="/streams/show" component={StreamShow} />

            </div>
       
        </BrowserRouter> 
        </div>
    
    );

};


export default App;