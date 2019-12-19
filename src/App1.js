import React  from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    componentDidMount() {
        if(!window.AMap){
            return
        }
        const map = new window.AMap.Map(this.containerRef,{
            zoom:11,//级别
            center: [116.397428, 39.90923],//中心点坐标
            viewMode:'3D'//使用3D视图
        })
    }

    render() {
        return (
            <div>
                <div className="App">
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
                </div>
                <div id="container" ref={ref => this.containerRef = ref}>
                    show123
                </div>
            </div>
        )
    }
}

export default App;
