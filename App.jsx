import { useState } from 'react'
import { Provider } from 'react-redux';
import { createStore, legacy_createStore } from 'redux';
import Cinputs from './components/Cinputs'
import Coutputs from './components/Coutputs';
import { Reducer } from './components/Store_Reducer';
const store1 = legacy_createStore(Reducer);
function App() {

  return (
      <Provider store={store1}>
      <Cinputs />
      <Coutputs/>
      </Provider>
      
    
  )
   
}

export default App
