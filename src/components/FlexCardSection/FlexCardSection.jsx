
import '../FlexCard/FlexCard.scss';

import FlexCard from '../FlexCard/FlexCard';

const FlexCardSection=()=>{
    const cardData=[
        {
            title:'Dynamically Procrastinate',
            description:'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
            buttonLabel:'Procastinate'
        },
        {
            title:'Efficiently Unleash',
            description:'Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.',
            buttonLabel:'Unleash'
        },
        {
            title:'Completely Synergize',
            description:'Professionally cultivate one-to-one customer service with robust ideas. Completely synergize resource taxing relationships via premier niche markets. Dynamically innovate resource-leveling customer service for state of the art customer service.',
            buttonLabel:'Synergize'
        },
    ];
    return(
        <section className="Flexcard-section">
            <div className="Flexcard-container">
                {cardData.map((card,index)=>(
                    <FlexCard
                      key={index}
                      title={card.title}
                      description={card.description}
                      buttonLabel={card.buttonLabel}
          />

                ))}
            </div>
        </section>
    );


};
export default FlexCardSection;