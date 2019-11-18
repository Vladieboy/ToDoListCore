import React, { useContext } from 'react';
import {SelectedColor} from "../Context"
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';

export default (props) => {
  const [color, setColor] = useContext(SelectedColor)
const {name} = props
  return (
    <Container className="w-100 h-100" fluid style={{background: color.value}}>
    <Row>
      <Col  sm={3}>
        <NavMenu />
      </Col>
      <Col sm={9}>
        {props.children}
      </Col>
    </Row>
  </Container>
  )
}
