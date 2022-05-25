import { Link } from "react-router-dom";
import { HeaderWrapper, NavWrapper, MenuWrapper, MenuItem } from "./styled";

import Title from "../Title/Title";

export default function HeaderComponent() {
  return (
    <HeaderWrapper>
      <Title text="App VUTTR" />
      <NavWrapper>
        <MenuWrapper>
          <MenuItem>
            <Link to="/login">Login</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/signup">Signup</Link>
          </MenuItem>
        </MenuWrapper>
      </NavWrapper>
    </HeaderWrapper>
  );
}
