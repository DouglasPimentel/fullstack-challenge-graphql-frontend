import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 30rem;
  display: flex;
`;

export const Input = styled.input`
  width: 70%;
  height: 3rem;
  padding: 0 1rem;
  font-size: ${(props) => props.theme.fontSize.small};
  border: 1px solid ${(props) => props.theme.colors.quaternary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const Button = styled.button`
  width: 30%;
  height: 3.2rem;
  margin-left: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
