import React, { useState, useContext } from "react"
import {
    Card, Button, Modal, Fade, Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons"
import {SelectedColor} from "../Context"

export default (props) => {
 
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show)
   
  const colors = [
      {
          color: 'Blue',
          value: '#0e34cc'
      },
      {
          color: 'Red',
          value: '#de2f1f'
      },
      {
          color: 'Yellow',
          value: '#faf74d'
      },
      {
          color: 'Green',
          value: '#2cdb32'
      },
      {
          color: 'Purple',
          value: '#a10a9c'
      },
]

const colorMapper = (colorObj, index, setColorPickerColor) => (
    <div className="p-2" onClick={() => setColorPickerColor(colorObj)}>
    <div key={index} className="circleBase" style={{background:colorObj.value}}/>
    {colorObj.color}
    </div>
)

const handleSave = () => {}

    const Example = (props) => {
        const [colorPickerColor, setColorPickerColor] = useState({
            color: '',
            value: ''
        });
        const [colorContext, setColorContext] = useContext(SelectedColor);

        const handleSave = () => {
            setColorContext(colorPickerColor)
            toggle()
        }


        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <Card.Body>
                        <Card.Title>Select Background Color</Card.Title>
                        <div className="row">{colors.map((colorObj, index) => colorMapper(colorObj, index, setColorPickerColor))}</div>
                        <Card.Text>{colorPickerColor.color}</Card.Text>
                        <Button onClick={handleSave} variant="primary">Save</Button>
                        <Button onClick={toggle}>Close</Button>
                    </Card.Body>
                </Card>

            </div>
        );
    };



    return (
        <div>
            <div className="pt-2">
                {/* {colorPickerColor} */}
                <FontAwesomeIcon onClick={toggle} icon={faHamburger} size="2x" pull="right" />
            </div>
            <Modal className="modal right fade"  show={show} onHide={toggle}>
                <Example/>
            </Modal>
        </div>
    )
}