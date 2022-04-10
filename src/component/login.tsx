import { Button, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import Forget from "./forgetpassword";
export default function Login() {
    return (
        <Container>
            <Row>
                <Col md={12} className="images">
                    image
                </Col>
                <Col md={12}>
                    <FormGroup row>
                        <Label
                            for="exampleEmail"
                            md={2}
                        >
                            Email
                        </Label>
                        <Col md={10}>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="examplePassword"
                            md={2}
                        >
                            Password
                        </Label>
                        <Col md={10}>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                            />
                        </Col>
                    </FormGroup>

                </Col>
            </Row>
            <span onClick= {Forget}>
                  forgetpassword
                </span>
            <Button
                color="primary"
            >
               Submit
            </Button>

        </Container>

    );

}
