import { Col } from "react-bootstrap";
function ToppingOption({ name, imagePath }) {
  return (
    <Col>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
    </Col>
  );
}

export default ToppingOption;
