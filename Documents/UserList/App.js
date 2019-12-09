import React, {Component} from 'react';
import Container from './src/UserList/MainNavigator';
import { Provider } from 'react-redux'
import Store from './src/UserList/Reducer/Store'

export default class App extends Component {
  render() {
    return (
         <Provider store={Store}>
           <Container/>
         </Provider>
         
    );
  }
}
// import React, { Component } from "react";
// import { createStore } from 'redux'
// import CounterApp from './src/ReduxExample/CounterApp'
// import { Provider } from 'react-redux'
// import reducer from './src/ReduxExample/countReducer'

// const store = createStore(reducer)

// class App extends Component {

//     render() {
//         return (
//             <Provider store={store}>
//                 <CounterApp />
//             </Provider>
//         );
//     }
// }

// export default App