import './style.css'

const ChildB = props=>{

    const handleChange = e=>{
        props.changeColor(e.target.value);
    }

    return (
        <div className="ChildB" style={{width: props.size.w + "px", height: props.size.h + "px"}}>
            <h2>{props.head}</h2>
            <form >
                <fieldset>
                    <legend>Change App Color</legend>
                
                <div>
                    <label htmlFor="">Color: </label>
                    <input type="color" value={props.color} onChange={handleChange} />
                </div>
                </fieldset>
            </form>
            
        </div>
    )
}

export default ChildB
