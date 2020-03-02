import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore } from "redux";
import reducer from "./components/reducer"
import Test from './components/test'

const App = () => {
  return (
    <Provider store={createStore(reducer)}>
      <div>Electron Redux</div>
      <Test />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
