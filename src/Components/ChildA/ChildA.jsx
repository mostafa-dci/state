import './style.css'


const ChildA = props=>{

    const handleChangeWidth = e=>{
        props.changeWidth(e.target.value)
    }

    const handleChangeHeight = e=>{
        props.changeHeight(e.target.value)
    }

    return (
        <div className="ChildA">
            <h2>{props.title}</h2>
            <p>App Color is: {props.color}</p>
            <form >
                <fieldset>
                    <legend>Change Size For My Brother Component</legend>
                    <div style={{display: 'flex'}}>
                        <label>Width:&nbsp;</label>
                        <input type="range" value={props.size.w} onChange={handleChangeWidth} max="1000" name="" id="" />
                        <span>{props.size.w} px</span>
                    </div>
                    <div style={{display: 'flex'}}>
                        <label>Height: </label>
                        <input type="range" value={props.size.h} onChange={handleChangeHeight} max="1000" name="" id="" />
                        <span>{props.size.h} px</span>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default ChildA
