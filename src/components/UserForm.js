import { useState } from "react";

import {
  MainWrapper,
  FormWrapper,
  Form,
  Field,
  Label,
  Input,
  Button,
} from "./UserForm.Style";

export default function UserForm(props) {
  const [formState, setFormState] = useState({
    name: props.editMode ? props.user[0].name : "",
    username: props.editMode ? props.user[0].username : "",
    email: props.editMode ? props.user[0].email : "",
    phone: props.editMode ? props.user[0].phone : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleFormSubmit(formState);
  };

  const handleOnChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MainWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Field>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Full name"
              required
              value={formState.name}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formState.username}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              value={formState.email}
              onChange={handleOnChange}
            />
          </Field>
          <Field>
            <Label>Phone Number</Label>
            <Input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              required
              value={formState.phone}
              onChange={handleOnChange}
            />
          </Field>
          <Button type="submit">{props.buttonLabel}</Button>
        </Form>
      </FormWrapper>
    </MainWrapper>
  );
}
