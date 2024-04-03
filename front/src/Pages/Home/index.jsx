
import HomeFeatures from '../../Components/HomeFeatures'
import featuresData from '../../Assets/datas/features.json'
import './style.scss'

function Home (){
    return (
        <div>
        <div className='hero'>
            <section className='hero-content'>
                    <h1 className='subtitle'>No fees.</h1>
                    <h1 className='subtitle'>No minimum deposit.</h1>
                    <h1 className='subtitle'>High interest rates.</h1>
                    <p className='text'>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
        <div>
            <section className='features'>
                {
                    featuresData.map(({id, image, alt, title, text})=>(
                        <HomeFeatures key={id} image={image} alt={alt} title={title} text={text} />
                    ))
                }
            </section>
        </div>
        </div>
    )
}

export default Home