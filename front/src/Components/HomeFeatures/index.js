import './style.scss'

function HomeFeatures({image, alt, title, text}){
    return(
        <div className="feature-item">
            <img src={image} alt={alt} className="feature-item-icon"/>
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default HomeFeatures