import './FlexCard.scss';
const FlexCard=({title, description,buttonLabel}) =>{
    return (
        <div className="Flexcard">
            <div className="circle-placeholder">100X100</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#Jumpotron">
                <button>{buttonLabel}</button>
            </a>

    </div>
    );
};
export default FlexCard;
