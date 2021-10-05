import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Routes from './routes'
import './styles/output.css'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
