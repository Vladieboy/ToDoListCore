import React, {useContext, useState} from "react"

export const SelectedColor = React.createContext({});

export const SelectedColorProvider =(props) => {
    const [color, setColor] = useState("")

    return (
        <SelectedColor.Provider value={[color, setColor]}>
        {props.children}
        </SelectedColor.Provider>
    )
}