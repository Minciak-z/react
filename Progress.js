import React, { useState } from 'react';

function App() {
  const [item, setItem] = useState('');
  const [listaZakupow, setListaZakupow] = useState([]);

  const dodajDoListy = () => {
    if (item) {
      setListaZakupow([...listaZakupow, item]);
      setItem('');
    }
  };

  const usunZListy = (index) => {
    setListaZakupow(listaZakupow.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1>Lista Zakupów</h1>
      <input 
        type="text" 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        placeholder="Dodaj przedmiot"
        style={styles.input}
      />
      <button onClick={dodajDoListy} style={styles.button}>Dodaj</button>
      <ul style={styles.ul}>
        {listaZakupow.map((przedmiot, index) => (
          <li key={index} style={styles.li}>
            {przedmiot}
            <button onClick={() => usunZListy(index)} style={styles.usunButton}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial',
    padding: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  ul: {
    listStyleType: 'none',
    padding: '0',
  },
  li: {
    margin: '10px 0',
    fontSize: '18px',
  },
  usunButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
};

export default App;
