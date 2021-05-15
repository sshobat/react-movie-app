import React from 'react';
import './Header.scss';
import {CustomSearch} from '../CustomSearch/CustomSearch';

class Header extends React.Component {
  render(){
    return(
      <header>
        <h3>MOVIE WATCHLIST</h3>
        <CustomSearch />
      </header>
    )
  }
}

export {Header};
