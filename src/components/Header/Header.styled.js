import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
  padding: 0 20px 0 20px;
  box-shadow: 0 0 8px 0 black;
  margin-bottom: 30px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
`;

export const HeaderList = styled.ul`
  display: flex;
  width: 200px;
  margin: 0 auto;

  list-style-type: none;
  align-items: center;
`;

export const HeaderItem = styled.li`
  font-size: 24px;
  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;
