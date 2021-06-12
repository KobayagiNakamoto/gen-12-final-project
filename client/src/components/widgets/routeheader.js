import { Col, Row, Container } from "react-bootstrap";

const RouteHeader = (props) => {
  return (
    <>
      <Container className="routeHeader">
        <div className='baze'>
          <div>{props.title}</div>
          <div>
            <hr />
          </div>
        </div>
      </Container>
    </>
  );
};

export default RouteHeader;
