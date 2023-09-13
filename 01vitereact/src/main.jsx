import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return (
    <div>
      <h1> This is MyApp text </h1>
    </div>
  )
}

const anotherUser ='Sunil is annother user'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit google !!!!',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  /*<React.StrictMode>
    <App />
    <MyApp/>
  </React.StrictMode>
  */
  reactElement
  //<App />
)
