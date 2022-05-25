import { FormWrapper, Input, Button } from "./styled";

export default function Search() {
  return (
    <FormWrapper>
      <Input type="text" placeholder="Search..." />
      <Button type="submit">Search</Button>
    </FormWrapper>
  );
}
