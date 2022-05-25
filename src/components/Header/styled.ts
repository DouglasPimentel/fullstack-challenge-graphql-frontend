import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 95vw;
  display: flex;
  justify-content: space-between;
`;

export const NavWrapper = styled.nav`
  width: 40vw;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.li`
  margin: 0 0.6rem 0 0;

  a {
    padding: 0.8rem 3rem;
    background-color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.tertiary};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      border: 2px solid ${(props) => props.theme.colors.secondary};
    }
  }

  &:last-child {
    margin: 0;

    a {
      background-color: transparent;
      color: ${(props) => props.theme.colors.primary};

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.tertiary};
        border: 2px solid ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;
