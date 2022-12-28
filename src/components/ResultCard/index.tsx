import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultCard = ( { title, description} : Props) => {

    return (
        <div className="result-container">
            <h5>Informações</h5>
            <h3 className="result-title">{title}: {description}</h3>
        </div>
    );
}

export default ResultCard;