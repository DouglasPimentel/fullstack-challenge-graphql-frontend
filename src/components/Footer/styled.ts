import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin: 2rem 0 0 0;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: 1.5;
  text-align: center;
`;

export const Span = styled.span``;

export const Link = styled.a`
  text-decoration: underline;
`;
