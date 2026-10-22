import { useState, useCallback, useEffect, useRef } from 'react'
//import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllow, setNumberAllow] = useState(false)
  const [characterAllow, setCharacterAllow] = useState(false)
  const [password, setPassword] = useState('')

  // ref hook
  const passwordRef = useRef(null)



  const passwordGenerate = useCallback(() => {
    // Password generation logic would go here
    let password = ''
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberAllow) {
      string += '0123456789'
    }
    if (characterAllow) {
      string += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length +1)
      password += string.charAt(char)
    }
    setPassword(password)
  }, [length, numberAllow, characterAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerate()
  }, [passwordGenerate])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800  '>
        <h1 className='  text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-2'>
          <input type='text'
            value={password}
            className='outline-none w-full py-1 px-3 mb-2 rounded-lg '
            placeholder='Password'
            readonly
            ref={passwordRef}
          />
            <button 
            className='bg-blue-500 text-white px-3 py-0.5 shrink-0 mb-2 rounded-lg ml-2 hover:bg-blue-600 transition-colors duration-300' 
            onClick={copyPasswordToClipboard}>Copy</button>
          </div>
          <div className='flex text-sm gap-x-5 py-5'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={6}
                max={20}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'
              />
              <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllow}
              id="numberAllow"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label className='text-white' htmlFor="numberAllow"> Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={characterAllow}
              id="characterAllow"
              onChange={() => {
                setCharacterAllow((prev) => !prev);
              }}
            />
            <label className='text-white' htmlFor="characterAllow"> Characters</label>
          </div>
        </div>
        </div>
      </>
      )
}

      export default App
