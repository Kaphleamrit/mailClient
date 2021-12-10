import "./App.css";
import { Form } from "react-bootstrap";

function App() {
  return (
    <div>
      <MailBox />
    </div>
  );
}

function MailBox() {
  return (
    <div className="flexParent">
      <h2>Mail sender</h2>

      <Form className="mailbox">
        <Form.Group>
          <Form.Label>Destination Email</Form.Label>
          <Form.Control type="email" placeholder="Your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="texarea" rows={40} placeholder="message" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
