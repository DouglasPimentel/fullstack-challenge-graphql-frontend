import styled from "styled-components";

export const TitleWrapper = styled.h2`
  margin: 0 0 1.5rem 0;
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: 1.3;
  text-align: center;
`;
