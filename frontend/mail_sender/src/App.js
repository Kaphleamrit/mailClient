import './App.css';
import {Form} from 'react-bootstrap';

function App() {
  return (
    <div>
      <MailBox />
    </div>
  );
}

function MailBox() {
  
  return (
    <div>
      <Form>
        <Form.Label>Your Email</Form.Label>
        <Form.Control type= "email" placeholder="Your email"/>
        <Form.Text className = "text-muted">We'll never share your email with anyone</Form.Text>
      </Form>
    </div>
  );
}

export default App;
