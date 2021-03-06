import React from 'react';
import Logo from '../../assets/logo.svg';
import './header.css';
import Logo_white from '../../assets/logo-white.svg'
import Right_arrow from '../../assets/right-arrow.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Header extends React.Component {

  constructor(props){
    super(props)
  }

  navActive() {
    var header = document.querySelector('.header');
    var header_reveal = document.querySelector('.header__reveal');
    var header__reveal__container = document.querySelector('.header__reveal__container');
    var hamburger = document.querySelector('.hamburger');
    var logo = document.querySelector('#logo')
    if (header_reveal.style.height === '100vh') {
      header.style.background = 'transparent';
      header_reveal.style.height = 0;
      header_reveal.classList.remove('active');
      hamburger.classList.remove('open');
      logo.classList.remove('white');
      setTimeout(() => {
      header__reveal__container.style.display = 'none';
      logo.setAttribute('src', Logo)  
    }, 200);
    } else {
      header.style.background = '#1c1c1c';
      header_reveal.style.height = '100vh';
      header_reveal.classList.add('active');
      hamburger.classList.add('open');
      logo.classList.add('white');
      setTimeout(() => {
        header__reveal__container.style.display = 'flex';
        logo.setAttribute('src', Logo_white)
      }, 150);
      
    }
  }
  
  render() {
    return (
      <div className='header'>
        <div className='header__inner'>
          <a href='/'><img src={Logo} alt='logo' id='logo'/></a>
          <div className='hamburger' onClick={this.navActive.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='header__reveal'>
          <div className='header__reveal__container'>
            <div className='header__reveal__container__navlinks'>
              <div className='navlink' id='about'><a href='/about'>About</a></div>
              <div className='navlink' id='services'><a href='/services'>Services</a></div>
              <div className='navlink' id='projects'><a href='/projects'>Projects</a></div>
              {/* <div className='navlink' id='blogs'><a href='/blogs'>Blogs</a></div> */}
              <div className='navlink' id='clients'><a href='/clients'>Clients</a></div>
            </div>
            {/* <Switch>
              <Route exact path='/' component={this.props.index} />
              <Route path='/team' component={this.props.team} />
            </Switch> */}
            <div className='header__reveal__container__otherinfo'>
              <div className='header__reveal__container__otherinfo__para'>SmokeTrees was born from an idea to bring the best developers out there onto a single platform to create the ultimate community of coders, who are dedicated to serving the world. We provide top-class services, in the friendliest manner. SmokeTrees is friendly, flexible, versatile and packed with talent <br></br> <br></br> Looking to make your next idea a reality, let us help you, Contact Us at info@smoketrees.in </div>
              {/* <div className='header__reveal__container__otherinfo__link'><a href=''>Contact Us <img src={Right_arrow} alt=''/></a></div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
