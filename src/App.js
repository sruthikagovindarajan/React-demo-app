import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [sortOrder, setSortOrder] = useState('none');
  const fruitNames = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
    'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince',
    'Raspberry', 'Strawberry', 'Tangerine', 'Ugli fruit', 'Watermelon'
  ];

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order);
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

  const sortedFruitNames = [...fruitNames].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.length - b.length || a.localeCompare(b);
    }
    else if (sortOrder === 'desc') {
      return b.length - a.length || b.localeCompare(a);
    }
    return 0;
  });

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
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#" onClick={() => handleSort('asc')}>Ascending</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleSort('desc')}>Descending</a></li>
          </ul>
        </div>
        <h1>Fruit List</h1>
        <ul>
          {sortedFruitNames.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
