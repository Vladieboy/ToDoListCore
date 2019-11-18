import React, {useContext} from "react"
import {SelectedColor} from "../Context"
import ColorSelect from "./ColorSelect"
export default (props) => {
const [color, setColor] = useContext(SelectedColor)
console.log(color)
    return(
        <div style={{background: 'red'}}>
            Hi
<ColorSelect />
        </div>
    )
}