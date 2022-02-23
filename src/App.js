import React from 'react';
import './App.css';
import Main from './Main';
import { Tooltip } from 'bootstrap';

function App() {
  // すべてのツールチップを初期化 中身の関数はReact公式から引用
  React.useEffect(() => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  },[])
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
