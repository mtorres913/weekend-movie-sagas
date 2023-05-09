import { useDispatch, useSelector } from 'react-redux';

function Details() {
    const genres = useSelector(store => store.genres);
    
    return (
        <main>
       <h1></h1>
       <section>
        {genres.map(genre => {
            return (
                <div key={genre.id}>
                    <h2>{genre.name}</h2>
                </div>
            )
        })}
       </section>
       </main>

    )
}

export default Details;