import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const map = new AMap.Map('container',{
        zoom:11,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode:'3D'//使用3D视图
    })
  return (
 <div>
      <script type="text/javascript" src="https://webapi.amap.com/maps?v=0.4.15&key=01b92553fe5b74610bb15e10a3f9e32d"></script>
   {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/}
     <div id="container">
         show123
     </div>
 </div>
  );
}

export default App;
