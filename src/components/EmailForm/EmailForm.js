import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class EmailForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      messsage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      message
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{ width: "500px" }}>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" name="name" onChange={this.handleChange} />
          <Label>Email Address</Label>
          <Input type="email" name="email" onChange={this.handleChange} />
          <Label>Message</Label>
          <Input type="textarea" name="message" onChange={this.handleChange} />
        </FormGroup>
        <Button>submit</Button>
      </Form>
    );
  }
}

export default EmailForm;
