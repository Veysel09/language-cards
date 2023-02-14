import Language from "./Language";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";

const Card = () => {
  return (
    <Container className="rounded-5 mt-4" style={{ background: "#96775a" }}>
      <h1>Language</h1>
      <Row>
        {data.map((lang, index) => {
          return (
            <Col>
              <Language {...lang} key={index} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
