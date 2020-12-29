import React,{useEffect} from 'react';
import { NavBarContainer } from './style';
// import './navbar.scss';
import Button from '../imgs/button.webp';
import Logo from '../imgs/logo.jpeg';

export const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <NavBarContainer>
      <header className={x.join(" ")}>
        <div className="logo">
          <img src={Logo} alt="Logo" title="Logo" />
        </div>

        <nav className="navigation">
          <ul>
            <li>
                Search bar
            </li>
            <li>
              <a href="#post4"><img src={Button} /></a>
            </li>
          </ul>
        </nav>
      </header>
    </NavBarContainer>
  );
};

export default Navbar;