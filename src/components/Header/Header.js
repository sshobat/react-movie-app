import React from 'react';
import './Header.scss';
import {CustomSearch} from '../CustomSearch/CustomSearch';

class Header extends React.Component {
  render(){
    return(
      <header>
        <div className="search-wrapper">
          <h3>MOVIE WATCHLIST</h3>
          <CustomSearch />
        </div>
      </header>
    )
  }
}

export {Header};
