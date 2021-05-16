import {Communicators} from './Communicators';
import * as actionTypes from './actionTypes';

const formatData = myData => {
	const data = [];
	for(const property in myData) {
		data.push({
			...myData[property],
			id: property,
		});
	}

	return data
}

const sortMovies = (a, b) => {
  const orderA = a.order;
  const orderB = b.order;

  let comparison = 0;
  if (orderA > orderB) {
    comparison = 1;
  } else if (orderA < orderB) {
    comparison = -1;
  }
  return comparison;
}

const takeGenres = arrayOfFilms => {
 const arrayOfGenres = [];
 arrayOfFilms.forEach( movie => {
   const innerGenres = movie.Genre.split(", ");
   innerGenres.forEach( genre => {
     if (!arrayOfGenres.includes(genre)) {
       arrayOfGenres.push(genre);
     }
   })
 })
 return arrayOfGenres;
}

const updateToWatchData = (toWatchData, genres) => {
	return {
		type: actionTypes.TO_WATCH_UPDATE,
		toWatchMovies: toWatchData,
		genres: genres
	}
}

export const addToWatch = imdbID => {
	return (dispatch, getState) => {
		fetch(`${Communicators.omdbURL}&i=${imdbID}`)
	  	.then( response => response.json())
	    .then( myJson =>  {
	    	const filteredArray = getState().toWatchMovies.filter( item => item.imdbID === imdbID);
	    	if (!filteredArray.length) {
	    		let order = 1;
	    		if (getState().toWatchMovies.length) {
	    			order = getState().toWatchMovies[getState().toWatchMovies.length -1].order + 1;
	    		}
	    		myJson.order = order;
	    		Communicators.Post(myJson)
		        .then( response => {
		      		if (response.ok) {
				        Communicators.Fetch()
				        .then( response => {
				        	const formatedData = formatData(response).sort(sortMovies);
				        	const genres = takeGenres(formatedData);
				        	dispatch(updateToWatchData(formatedData, genres));
				        })
				        .catch( error => alert(`Error: ${error}`));
				    }
				})
				.catch( error => alert(`Error: ${error}`));
	    	}
	    })
	    .catch( error => alert(`Error: ${error}`));
	}
}
