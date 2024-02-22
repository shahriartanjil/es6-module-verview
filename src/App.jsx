import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() =>{
    fetch('watches.json')
    .then(res=> res.json())
    .then(data => setWatches(data));
  }, [])
 
  // const watches =[
  //   {id: 1, name: 'Apple watch', price: 800},
  //   {id: 2, name: 'Samsung watch', price: 500},
  //   {id: 3, name: 'Rolex watch', price: 700},
  //   {id: 4, name: 'Casio watch', price: 400},
  // ]
  // const watches = [
  //   { id: 1, name: "Apple Watch Series 7", price: 399 },
  //   { id: 2, name: "Galaxy Watch 4", price: 279 },
  //   { id: 3, name: "Fitbit Sense", price: 299 },
  //   { id: 4, name: "Garmin Venu 2", price: 399 },
  //   { id: 5, name: "Huawei Watch GT 3", price: 269 }
  // ];

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watches.id} 
          watch={watch}></Watch>)
      }
      
      
    </>
  )
}

export default App
