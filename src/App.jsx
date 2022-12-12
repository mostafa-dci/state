import React, {useState} from "react";
import './App.css'
import ChildA from './Components/ChildA/ChildA'
import ChildB from './Components/ChildB/ChildB'
const App = props =>{

    const [color, setColor] = useState('#e2e2e2')
    const [size, setSize] = useState({w: 400, h: 200})

    const changeColor = (color)=>{
        setColor(color)
    }

    const changeWidth = width=>{
        setSize({...size, w: width})
    }
    const changeHeight = height=>{
        setSize({...size, h: height})
    }

    return (
        <div className="App" style={{backgroundColor: color}}>
            <h1>App Component</h1>
            <div style={{display: 'flex'}}>
                <ChildA title="ChildA Component" color={color} size={size} changeWidth={changeWidth} changeHeight={changeHeight}/>
                <ChildB head="ChildB Component" color={color} size={size}  changeColor={changeColor}/>
            </div>
        </div>
    )
}

export default App