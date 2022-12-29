import AvatarImg from 'assets/images/image1.png';
import './styles.css';

import ProfileCard from 'components/ProfileCard';

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
              onChange={() => { }}
            />
            <button type="submit" className="btn btn-secondary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="card-container">
        <div className="card card-content">
          <div className="avatar-container">
            <img src={AvatarImg} alt="Avatar" />
          </div>
          <div className="card card-profile">
            <h5>Informações</h5>
            <ProfileCard title="Perfil" description="https://api.github,com/users/acenelio" />
            <ProfileCard title="Seguidores" description="8457" />
            <ProfileCard title="Localidade" description="Uberlândia" />
            <ProfileCard title="Nome" description="Nélio Alves" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGit;
