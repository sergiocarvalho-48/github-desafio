import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ProfileCard = ( { title, description} : Props) => {

    return (
        <div className="profile-container">
            <h3 className="profile-title">{title}:</h3>
            <p className="profile-description">{description}</p> 
        </div>
    );
}

export default ProfileCard;