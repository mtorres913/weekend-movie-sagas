import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const toDetails = (e) => {
        console.log(e)
        axios.get(`/api/genre/details/${e}`).then((response) => {
        const action = { type: 'SET_GENRES', payload: response.data}
        dispatch(action);
        }).catch((error) => {
            alert('Something went wrong.')
            console.log(error);
        })
        return history.push('/details/');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={(e) => toDetails(movie.id) }/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;