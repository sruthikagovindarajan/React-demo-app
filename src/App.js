import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const fruitNames = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
    'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince',
    'Raspberry', 'Strawberry', 'Tangerine', 'Ugli fruit', 'Watermelon'
  ];

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 123) { // F12 key
        event.preventDefault();

        alert("F12 is disabled");
        return false;
      }
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
      alert("Right click is disabled");
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Textbox</label>
        <br />
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type here..."
        />
      </div>
      <div>
        <p>{text.toUpperCase()}</p>
      </div>

      <div>
      <h1>Fruit List</h1>
      <ul>
        {fruitNames.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
