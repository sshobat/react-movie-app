import React from 'react';
import './CustomSearch.scss';
import lookinGlass from '../../images/looking-glass.png';

class CustomSearch extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <input type='text' placeholder='Find movie'/>
        <img src={lookinGlass} id='looking-glass' alt=''/>
        <ul className='searchResults'>
          <li>result.........<span>+</span></li>
          <li>result.........<span>+</span></li>
          <li>result.........<span>+</span></li>
          <li>result.........<span>+</span></li>
          <li>result.........<span>+</span></li>
          <li>result.........<span>+</span></li>
          <li>result.........<span>+</span></li>
          <li>result.........<span>+</span></li>
          <li>result.........<span>+</span></li>
        </ul>
      </div>
    )
  }
}

export {CustomSearch}
