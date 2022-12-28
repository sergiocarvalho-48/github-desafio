import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h2>Desafio Github API</h2>
                <p>DevSuperior - Escola de programação</p>
            </div>
            <Link to="/profilegit">
                <button className="btn btn-secondary btn-lg start-button">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
