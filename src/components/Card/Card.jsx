import './Card.scss';
const Card=({title, description,imagePlaceholder}) =>{
    return (
        <div className="card">
            <div className="image-placeholder">{imagePlaceholder}</div>
            < a href="#Jumpotron">
            <h3>{title}</h3>
            </a>
            <p>{description}</p>
        </div>


    );
};
export default Card;