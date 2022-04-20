import { Col, Form } from "react-bootstrap";
function ToppingOption({ name, imagePath, updateItemCount }) {
  return (
    <Col>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          label={name}
          onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}
        />
      </Form.Group>
    </Col>
  );
}

export default ToppingOption;
