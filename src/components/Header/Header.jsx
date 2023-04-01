// STYLED
import {
  StyledHeader,
  HeaderItem,
  HeaderList,
  StyledNavLink,
  HeaderContainer,
} from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <nav>
          <HeaderList>
            <HeaderItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </HeaderItem>
            <HeaderItem>
              <StyledNavLink to="movies">Movies</StyledNavLink>
            </HeaderItem>
          </HeaderList>
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};
