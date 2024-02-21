

function HomeFeatures({image, alt, title, text}){
    return(
        <div>
            <img src={image} alt={alt}/>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default HomeFeatures