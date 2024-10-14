import { useState } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(0)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')
  return (
    <>
      <h1 className='text-4xl text-center text text-white'>
        password-generator</h1>

    </>
  )
}

export default App
