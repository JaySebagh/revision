import { useParams } from 'react-router-dom';

const Avenger = ({ hero }) => {
    const params = useParams();
    const heros = hero.find(item => item.id === Number(params.hero));

    return(
        <div className="character-card">
            <h2>{heros.name}</h2>
            <p>{heros.nickname}</p>
            <p>{heros.description}</p>
            <img src={heros.thumbnail} alt="random avengers img" />
        </div>
    )
}

export default Avenger;