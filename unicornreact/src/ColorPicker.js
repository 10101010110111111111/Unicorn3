import React, {useState} from "react";

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return( <div className="color-picker-con">
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select Color: </label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>);
}

export default ColorPicker