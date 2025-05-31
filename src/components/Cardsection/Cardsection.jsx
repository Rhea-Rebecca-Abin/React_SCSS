import '../Cardsection/Cardsection.scss';
import Card from '../Card/Card';
const Cardsection =() =>{
    const cardsData=[
        {
            title:'Effectively Unleash',
            description:'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
            imagePlaceholder:'700X300'

        },
        {
            title:'Completely Synergize',
            description:'Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.',
            imagePlaceholder:'700X300'

        },
        {
            title:'Dynamically Procastinate',
            description:'Professionally cultivate one-to-one customer service with robust ideas. Completely synergize resource taxing relationships via premier niche markets. Dynamically innovate resource-leveling customer service for state of the art customer service.',
            imagePlaceholder:'700X300'

        }
    ];
    return(
        <section className="cards-section">
            <h2 className="cards-heading">
                Superior Collaboration<span className ="subheading">  Visualize Quality</span></h2>
             <p class="cards-description">
            Proactively envisioned multimedia based expertise and cross-media growth strategies. 
            Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.<br />
            Holistically pontificate installed base portals after maintainable products.   
        </p>
        <div className="container">
            <div className="cards-grid">
                {cardsData.map((card,index)=>(
                    <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imagePlaceholder={card.imagePlaceholder}/>

                ))}
            </div>
        </div>
        
        </section>
    );

};
export default Cardsection;