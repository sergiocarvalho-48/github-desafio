import './styles.css';

type Props = {
    title: string;
    description: string;
    descriptionUrl: string;
}

const ProfileCard = ( { title, description, descriptionUrl} : Props) => {

    return (
        <div className="profile-container">
            <h3 className="profile-title">{title}:</h3>
            <p className="profile-description">{description}</p>
            <p className="profile-descriptionUrl">{descriptionUrl}</p> 
        </div>
    );
}

export default ProfileCard;