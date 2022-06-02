import styled from "styled-components";

export const ToolListContainer = styled.div`
  width: 440px;
  margin: 1rem 0 0 0;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.tertiary};
  border: 1px solid ${(props) => props.theme.colors.quaternary};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
`;

export const ToolHeader = styled.header`
  margin: 0 0 1rem 0;
  display: inline-flex;
  justify-content: space-between;
`;

export const ToolTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const ToolLink = styled.a``;

export const ToolDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const ToolFooter = styled.footer`
  margin: 1rem 0 0 0;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const ToolTag = styled.span`
  height: 20px;
  margin: 0.1rem;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.theme.colors.tertiary};
  border-radius: ${(props) => props.theme.borderRadius};
`;
