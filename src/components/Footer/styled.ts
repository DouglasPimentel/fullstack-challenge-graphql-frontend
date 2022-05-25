import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: fixed;
  padding: 1rem 0;
  bottom: 0;
  left: 0;
  right: 0;
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
