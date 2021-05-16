import React from 'react';
import './CustomSearch.scss';
import lookinGlass from '../../images/looking-glass.png';
import * as action from '../../store/actionCreators';
import uuid from 'react-uuid';

class CustomSearch extends React.Component {
  state = {
    searchValue: '',
    dropList: false,
  }
  addSearchValue = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  render() {
    const {filteredData, addToWatch} = this.props;
    return (
      <div className="input-wrapper">
        <input type='text'
                placeholder='Find movie'
                value={this.state.searchValue}
                name='Search'
                onChange={(event) => this.addSearchValue(event)}
                onFocus={() => this.setState({dropList: true})}
                onBlur={() => setTimeout(() => this.setState({dropList: false}), 500)}/>
        <img src={lookinGlass} id='looking-glass' alt=''/>
        {(filteredData.length !==0 && this.state.dropList) && <ul className='searchResults'>
          {filteredData.map(element => <li key={uuid()}>
            {element.Title.length > 40 ? element.Title.substring(0,35)+'...' : element.Title}
            <span onClick={() => addToWatch(element.imdbID)}>+</span></li>)}
        </ul>}
      </div>
    )
  }
}

export {CustomSearch}
