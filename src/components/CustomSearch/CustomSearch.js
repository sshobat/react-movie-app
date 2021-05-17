import React from 'react';
import './CustomSearch.scss';
import lookinGlass from '../../images/looking-glass.png';
import {connect} from 'react-redux';
import * as action from '../../store/actionCreators';
import uuid from 'react-uuid';

class CustomSearch extends React.Component {
  state = {
    searchValue: '',
    dropList: false,
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {filteredData, toWatchMovies} = this.props;
    const {searchValue, dropList} = this.state;
    if (nextState.searchValue !== searchValue ||
      nextProps.filteredData.length !== filteredData.length ||
      nextProps.toWatchMovies.length !== toWatchMovies.length ||
      nextState.dropList !== dropList)
    {
      return true
    }
    return false
  }

  componentDidUpdate(){
    const {searchValue} = this.state;
    this.dataSearch(searchValue);
  }

  dataSearch = text => {
    let myString = text.replace(/ /gi, "+");
    this.props.onFilteredDataUpdate(myString);
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
            {element.Title.length > 30 ? element.Title.substring(0,27)+'...' : element.Title}
            <span onClick={() => addToWatch(element.imdbID)}>+</span></li>)}
        </ul>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filteredData : state.filteredData,
    toWatchMovies: state.toWatchMovies,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilteredDataUpdate : filteredData => dispatch(action.getFilteredData(filteredData)),
    addToWatch : imdbID => dispatch(action.addToWatch(imdbID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomSearch);
