// import React from 'react'
// import logo from './logo.svg'
// import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './components/pages/index'

const App = () => {
  return (
    <Router>
      <div>
      <Route path="/">
        <Index/>
      </Route>
    </div>
    </Router>
    
  )
}

export default App

