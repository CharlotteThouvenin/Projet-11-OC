import banner from '../../Assets/images/bank-tree.jpeg'
import HomeFeatures from '../../Components/HomeFeatures'
import featuresData from '../../Assets/datas/features.json'


function Home (){
    return (
        <div>
            <section>
                <img src={banner} alt='plante en pot' />
                <div>
                    <h1>No fees.</h1>
                    <h1>No minimum deposit.</h1>
                    <h1>High interest rates.</h1>
                    <p>Open a savings account with Argent Bank today!</p>
                </div>
            </section>
            <section>
                {
                    featuresData.map(({id, image, alt, title, text})=>(
                        <HomeFeatures key={id} image={image} alt={alt} title={title} text={text} />
                    ))
                }
            </section>


        </div>
    )
}

export default Home