import React from "react";
import ReactDOM from "react-dom/client";
import './styles/style.scss';

const root = ReactDOM.createRoot(document.body);
root.render(<h1 style={{ color: "white", textAlign: 'center' }}>Test</h1>)

interface Test {
  test: string,
}

const test: Test = {
  test: '2',
};

console.log(test);
