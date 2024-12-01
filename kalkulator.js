import React, { useState } from 'react';

function KalkulatorRyczaltu() {
  const [przychod, setPrzychod] = useState(''); 
  const [wynik, setWynik] = useState(null); 

  const STAWKA_PODATKU = 0.12; 

 
  const obliczPodatek = () => {
    if (przychod > 0) {
      const podatek = przychod * STAWKA_PODATKU;
      setWynik(podatek.toFixed(2)); 
    } else {
      alert("Podaj prawidłowy przychód!"); 
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Kalkulator Ryczałtu</h1>
      <input
        type="number"
        placeholder="Podaj przychód (PLN)"
        value={przychod}
        onChange={(e) => setPrzychod(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid green', borderRadius: '5px' }}
      />
      <button
        onClick={obliczPodatek}
        style={{ padding: '10px', width: '100%', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Oblicz
      </button>
      {wynik && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          Szacowany podatek: <strong>{wynik} PLN</strong>
        </div>
      )}
    </div>
  );
}

export default KalkulatorRyczaltu;