import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/dashboard'
import BinDispatch from './BinDispatch/BinDispatch'

function MyButton() {
  const navigate = useNavigate();
  return (
    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => navigate('/dashboard')}>
      Go to Dashboard
    </button>
  );
}

function BinDispatchButton() {
  const navigate = useNavigate();
  return (
    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => navigate('/bin-dispatch')}>
      Go to Bin Dispatch
    </button>
  );
}

function App(props) {

  console.log(props);

  useEffect(() => {
    console.log("props changed");
  }, [props]);


  const [count, setCount] = useState(0)

  const homePage = (
    <>
      <div>
        <div className="flex flex-col items-center justify-center gap-4">
          <MyButton />
          <BinDispatchButton />
        </div>
   
        <h1 className="text-xl font-bold underline">
          This is test for tailwindcss
        </h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );

  return (
    <Routes>
      <Route path="/" element={homePage} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bin-dispatch" element={<BinDispatch />} />
    </Routes>
  )
}

export default App
