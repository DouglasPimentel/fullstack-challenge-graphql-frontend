import { Link } from "react-router-dom";
import { FormWrapper, Label, Input, Button } from "./styled";

import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";

export default function Signup() {
  return (
    <Layout isHeader={false}>
      <Title text="Signup" />
      <FormWrapper autoComplete="off">
        <Label>Name:</Label>
        <Input name="name" type="text" placeholder="Your name" />
        <Label>Email:</Label>
        <Input name="email" type="email" placeholder="Your email" />
        <Label>Password:</Label>
        <Input name="password" type="password" placeholder="Your password" />
        <Button type="submit">Register</Button>
        <Link to="/login">Already have an account? Signin</Link>
      </FormWrapper>
    </Layout>
  );
}
