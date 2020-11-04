import React from 'react'
import ReactDOM  from 'react-dom'
import Header from './layouts/Header'
import DashBoard from './leads/DashBoard'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <DashBoard />
      </div>
    </>
   
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

