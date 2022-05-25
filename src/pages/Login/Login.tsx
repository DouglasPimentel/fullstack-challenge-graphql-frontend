import { Link } from "react-router-dom";
import { FormWrapper, Label, Input, Button } from "./styled";

import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";

export default function Login() {
  return (
    <Layout isHeader={false}>
      <Title text="Login" />
      <FormWrapper autoComplete="off">
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
        <Link to="/signup">Don't have an account? Signup</Link>
      </FormWrapper>
    </Layout>
  );
}
