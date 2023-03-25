import logo from './logo.svg';
import './App.css';
import Button from './button';
import { Input } from 'antd';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("Ciro");

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Input type="text" value={text} onChange={e => setText(e.target.value)}/>
          <Button text={text} />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
