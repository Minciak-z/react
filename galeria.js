import React, { useState } from 'react';

function Galeria() {
  const zdjecia = [
    '/images/zdjecie1.jpg',
    '/images/zdjecie2.jpg',
    '/images/zdjecie3.jpg',
    '/images/zdjecie4.jpg',
  ];

  const [aktualneZdjecie, setAktualneZdjecie] = useState(0);

  const poprzednieZdjecie = () => {
    setAktualneZdjecie((aktualneZdjecie - 1 + zdjecia.length) % zdjecia.length);
  };

  const nastepneZdjecie = () => {
    setAktualneZdjecie((aktualneZdjecie + 1) % zdjecia.length);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', padding: '20px' }}>
      <img
        src={zdjecia[aktualneZdjecie]}
        alt="Galeria"
        style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={poprzednieZdjecie} style={{ marginRight: '10px' }}>
          &#8592; Wstecz
        </button>
        <button onClick={nastepneZdjecie}>
          Dalej &#8594;
        </button>
      </div>
    </div>
  );
}

export default Galeria;
