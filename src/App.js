import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const[countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[]);

  return (
    <div className="App">
      <h1>country loaded : {countries.length} </h1>
      <ul>
        {
          countries.map(country => <Country name={country.name}>
            {country.name}
          </Country>)
        }
      </ul>
      <header className="App-header">
      </header>
    </div>
  );
}



export default App;
