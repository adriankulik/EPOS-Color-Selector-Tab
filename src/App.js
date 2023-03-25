import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // initial states
  const [opacity, setOpacity] = useState(100);
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#ffffff");
  const [dataType, setDataType] = useState("NDVI");
  const [colorScheme, setColorScheme] = useState(
    "linear-gradient(to right, #1e9600 0%, #fff200 50%, #ff0000 100%)"
  );

  return (
    <Container className="shadow-lg p-5 mb-5 mt-5 bg-body rounded">
      <Stack gap={2}>
        <h1>Color input</h1>
        <Row>
          {colorScheme === "Custom" ? (
            <div
              className="p-5 mb-2"
              id="CustomPreview"
              style={{
                background: `linear-gradient(to right,  ${color1} 0%,${color2} 100%)`,
                borderRadius: `0.5rem`,
                opacity: `${opacity / 100}`,
              }}
            ></div>
          ) : (
            <div
              className="p-5 mb-2"
              id="PredefinedPreview"
              style={{
                background: `${colorScheme}`,
                borderRadius: `0.5rem`,
                opacity: `${opacity / 100}`,
              }}
            ></div>
          )}
        </Row>
        <hr></hr>
        <h2>Display options</h2>
        <Form.Label>Opacity: {opacity}</Form.Label>
        <Form.Range
          min="0"
          max="100"
          defaultValue={opacity}
          onChange={(e) => setOpacity(e.target.value)}
        />
        <hr></hr>
        <h2>Data type</h2>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Select
            defaultValue={dataType}
            onChange={(e) => setDataType(e.target.value)}
          >
            <option value="NDVI">NDVI</option>
            <option value="Option #2">Option #2</option>
            <option value="Option #3">Option #3</option>
          </Form.Select>
        </Form.Group>
        <hr></hr>
        <h2>Color scheme options</h2>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Select
            defaultValue={colorScheme}
            onChange={(e) => setColorScheme(e.target.value)}
          >
            <option value="linear-gradient(to right, #1e9600 0%, #fff200 50%, #ff0000 100%)">
              Red-Yellow-Green
            </option>
            <option value="linear-gradient(90deg, rgba(89, 131, 252, 1) 0%, rgba(41, 53, 86, 1) 33%, rgba(252, 89, 204, 1) 66%, rgba(0, 8, 24, 1) 100%)">
              Some other scheme
            </option>
            <option value="Custom">Custom</option>
          </Form.Select>
        </Form.Group>
        <div>
          {colorScheme === "Custom" ? (
            <Row>
              <h3>Pick your own color scheme</h3>
              <Col>
                <Form.Label htmlFor="exampleColorInput">
                  Minimal value
                </Form.Label>
                <Form.Control
                  type="color"
                  id="exampleColorInput"
                  defaultValue={color1}
                  onChange={(e) => setColor1(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="exampleColorInput">
                  Maximal value
                </Form.Label>
                <Form.Control
                  type="color"
                  id="exampleColorInput"
                  defaultValue={color2}
                  onChange={(e) => setColor2(e.target.value)}
                />
              </Col>
            </Row>
          ) : (
            <></>
          )}
        </div>
      </Stack>
    </Container>
  );
}

export default App;
