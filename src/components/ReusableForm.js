import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Card } from "react-bootstrap";

function ReusableForm(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Form onSubmit={props.formSubmissionHandler} className="test">
            <Form.Row className="align-items-center">
              <Col xs="auto" className="test">
                <Form.Group controlId="formGroupName">
                  <Form.Label>Name of Soda </Form.Label>
                  <Form.Control
                    className="placeHolderText"
                    type="text"
                    name="name"
                    placeholder="Name of Soda"
                  />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Group controlId="formGroupBrand">
                  <Form.Label>Name of Brand </Form.Label>
                  <Form.Control
                    className="placeHolderText"
                    type="text"
                    name="brand"
                    placeholder="Brand of Soda"
                  />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Label>Price of Soda</Form.Label>
                <Form.Group>
                  <Form.Control
                    className="placeHolderText"
                    type="number"
                    name="price"
                    placeholder="Price of Soda"
                  />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Group>
                  <Form.Label>Flavor of Soda</Form.Label>
                  <Form.Control
                    className="placeHolderText"
                    type="text"
                    name="flavor"
                    placeholder="Flavor of Soda"
                  />
                </Form.Group>
              </Col>
              <Button variant="outline-secondary" type="submit">
                {props.buttonText}
              </Button>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
