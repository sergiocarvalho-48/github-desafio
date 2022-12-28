import './styles.css';

import ResultCard from 'components/ResultCard';

const ProfileGit = () => {
  return (
    <div className="profile-search-container">
      <div className="container search-container">
      <h1 className="text">Encontre um perfil Github</h1>
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário Github"
              onChange={() => {}}
            />
            <button type="submit" className="btn btn-secondary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="card-container">
      <ResultCard title="Perfil" description="https://api.github,com/users/acenelio"/>
      </div>
    </div>
  );
};

export default ProfileGit;
