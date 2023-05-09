import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    const toHome = () => {
        history.push('/');
    }

    return (
        <main key={genres.id}>
          
            <section>
                <h1>Movie Details</h1>

                {genres.map(genre => {
                    return (
                        <div key={genre.id}>
                            <h2>{genre.title}</h2>
                            <h4>{genre.name}</h4>
                            <img src={genre.poster} alt={genres.title} />
                            <h5>{genre.description}</h5>
                        </div>
                    )
                })}
                  <button OnClick={toHome}>Back to list</button>
            </section>
        </main>

    )
}

export default Details;