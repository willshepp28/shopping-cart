"use strict"

// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';


// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// STEP 1 create store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);



import BooksList from './components/pages/booksList';

render(
    <Provider store={store}>
        <BooksList />
    </ Provider >, document.getElementById('app')
);

// STEP 2 create and dispatch actions
// store.dispatch(postBooks(
   
// ))


// Dispatch another book
// store.dispatch({
//     type: "POST_BOOK",
//     payload: [{
//         id: 3,
//         title: 'this is the third book title',
//         description: 'this is the third book description',
//         price: 23.50
//     }]
// });



// // DELETE a book
// store.dispatch(deleteBooks(
//    {id: 1}
// ))



// // UPDATE a book
// store.dispatch(updateBooks(
//     {
//         id: 2,
//         title: 'Learn React in 24h',
//     }
// ))



// // ======= CART ACTIONS ======= 
// // ADD TO CART
// store.dispatch(addToCart([{id: 1}]));