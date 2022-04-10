import { Button, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";

export default function Forget(){
    return(
        <Container>
            <Row>
                <Col md={12} className="images">
              
                </Col>
             
            <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          confirm Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
        />
      </FormGroup>
    </Col>

  <Button
    color="primary"
  >
    Click Me
  </Button>
  </Row>
  </Container>
    )
} 