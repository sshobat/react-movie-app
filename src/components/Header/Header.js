import React from 'react';
import './Header.scss';
import {CustomSearch} from '../CustomSearch/CustomSearch';

class Header extends React.Component {
  render(){
    return(
      <header>
        <p>MOVIE WATCHLIST</p>
        <CustomSearch />
      </header>
    )
  }
}

export {Header};
