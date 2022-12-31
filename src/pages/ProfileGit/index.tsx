import './styles.css';

import ProfileCard from 'components/ProfileCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  login: string;
};

type Profile = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
}

const ProfileGit = () => {
  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setProfile(response.data);

      })
      .catch((error) => {
        setProfile(undefined);

      });
  };

  return (
    <div className="profile-search-container">
      <div className="container search-container">
        <h1 className="text">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="login"
              value={formData.login}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-secondary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {profile && (
        <div className="container card-profile">
          <div className="avatar-profile">
            <img src={profile.avatar_url} alt="Avatar" />
          </div>
          <div className="card-content">
            <h5>Informações</h5>
            <ProfileCard title="Perfil" description={''} descriptionUrl={profile.url} />
            <ProfileCard title="Seguidores" description={profile.followers} descriptionUrl={''} />
            <ProfileCard title="Localidade" description={profile.location} descriptionUrl={''} />
            <ProfileCard title="Nome" description={profile.name} descriptionUrl={''} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileGit;
