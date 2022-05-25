import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 30vw;
  display: flex;
  flex-direction: column;

  a {
    text-align: center;
  }
`;

export const Label = styled.label`
  margin: 0 0 0.8rem 0;
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const Input = styled.input`
  height: 3rem;
  margin: 0 0 1rem 0;
  padding: 0 1rem;
  font-size: ${(props) => props.theme.fontSize.small};
  border: 1px solid ${(props) => props.theme.colors.quaternary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const Button = styled.button`
  height: 3.2rem;
  margin: 0 0 1rem 0;
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
