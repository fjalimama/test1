import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const containerRef = useRef(null);
    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);
    useEffect(() => {
        if(!window.AMap){
            return
        }
        const map = new window.AMap.Map(containerRef.current,{
            zoom:11,//级别
            center: [116.397428, 39.90923],//中心点坐标
            layers: [//使用多个图层
                new window.AMap.TileLayer.Satellite(), //卫星图层
                new window.AMap.TileLayer.RoadNet() // 路况图层
            ],
            viewMode:'3D',//使用3D视图
            zooms: [4,18],//设置地图级别范围
        })
        const trafficLayer = new window.AMap.TileLayer.Traffic({
            'autoRefresh': true,     //是否自动刷新，默认为false
            'interval': 180,         //刷新间隔，默认180s
            zIndex: 10
        })
        map.add(trafficLayer)

        // 楼块图层
        const buildings = new window.AMap.Buildings({
            'zooms':[16,18],
            'zIndex':10,
            'heightFactor':2//2倍于默认高度，3D下有效
        })

        const map1 = new window.AMap.Map(containerRef1.current, {
            center: [116.397428, 39.90923],
            viewMode:'3D',
            pitch:60,
            rotation:-35,
            features:['bg','road','point'],//隐藏默认楼块
            mapStyle:'amap://styles/light',
            layers: [new window.AMap.TileLayer.Satellite(),//高德默认标准图层
                buildings],
            zoom: 16
        });

        // 室内地图
        const map2 = new window.AMap.Map(containerRef2.current,{
            resizeEnable: true,
            center:[16.519942, 39.924677],
            zoom: 18
        });
        map2.on('indoor_create',function(){
            map2.indoorMap.showIndoorMap('B000A8VT15',4);
        })
    }, [])

  return (
      <div>
         <div className="container" ref={containerRef}>
             show123
         </div>
         <div className="container" ref={containerRef1}>
            show123
         </div>
          <div className="container" ref={containerRef2}>

          </div>
          <div>
              show123456
          </div>
          <div>

          </div>
          <div>

          </div>
          <div> k</div>
          <div></div>
          <div></div>
      </div>
  );
}

export default App;
