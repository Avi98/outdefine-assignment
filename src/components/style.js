import styled from "styled-components";

export const NavBarContainer = styled.header`
.navbar{
  width: 100%;
  max-width: 100%;
  min-height: 6vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  transition: all .2s ease;
}

.scrolled{
  position: fixed;
  top: 0;
  left: 0;
  background-color: lightblue;
}
.logo img{
    height: 99px;
    width: 150px;
}

.navigation{
  ul{
    box-sizing: border-box;
    list-style-type: none;
    display: flex;
    min-height: 6vh;
    justify-content: flex-end;
    align-items: center;

    li{
      text-align: center;
      padding: .5em;
      cursor: pointer;
      &:hover{
        background-color: plum;
        color: white;
      }
    }

    li a{
      text-decoration: none;
      color: inherit;
    }

  }
}

`