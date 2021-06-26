import './components/Kategorije.css';
import React, { useState } from 'react'
import Kategorija from './components/Kategorija/Kategorija';


function App() {
  const [odabranaKategorija, setOdabranaKategorija] = useState(0);

  const kategorije = [1, 2, 3, 4, 5, 6].map((kat, i) => {
    return (
      <div className="kategorija" key={i} onClick={() => setOdabranaKategorija(kat)}>
        <p className="kategorijaNaslov">Kategorija {kat}</p>
      </div>
    )
  })


  return (
    <div className="App">
      {
        odabranaKategorija === 0 ?
          <div className="kategorije">
            <p className="kvizNaslov">PI-2021 KVIZ</p>
            {kategorije}
          </div> :
          <div className="pitanjaUKategoriji">
            <div onClick={() => setOdabranaKategorija(0)} className="nazad">
              Nazad
            </div>

              <Kategorija brojKategorije={odabranaKategorija} />
          </div>
          
      }
          </div>
  );
}

      export default App;
