import React, {useState} from 'react'
import LocationDiv from './locationDiv'
import AboutUs from './aboutUs'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import styles from "../SCSScomponents/ourCompany.module.scss"

function OurCompany() {

    const [state, setState] = useState(()=>({
        locations: [<LocationDiv name="United Kingdom" li1="Designo UK Office" li2="13  Colorado Way" li3="Rhyd-y-fro SA8 9GA" li4="Contact" li5="P : 078 3115 1400" li6="M : contact@designo.uk" x="51.5032655" y="-0.1191477" />, <LocationDiv name="Canada" li1="Designo Central Office" li2="3886 Wellington Street" li3="Toronto, Ontario M9C 3J5" li4="Contact" li5="P : +1 253-863-8967" li6="M : contact@designo.co"  x="51.0446159" y="-114.0629966" /> ,<LocationDiv name="Australia" li1="Designo AU Office" li2="19 Balonne Street" li3="New South Wales 2443" li4="Contact" li5="P : (02) 6720 9092" li6="M : contact@designo.au"  x="-33.8571732" y="151.2151952" />],
        chosenLocation: <LocationDiv name="United Kingdom" li1="Designo UK Office" li2="13  Colorado Way" li3="Rhyd-y-fro SA8 9GA" li4="Contact" li5="P : 078 3115 1400" li6="M : contact@designo.uk" x="51.5032655" y="-0.1191477" />
    }))


    const ukBtn = () => {

        if (state.chosenLocation !== 0){
            setState(ps => ({...ps, chosenLocation: state.locations[0]}))
        }


    }


    const canBtn = () => {

        if (state.chosenLocation !== 1){
            setState(ps => ({...ps, chosenLocation: state.locations[1]}))
        }

    }

    const ausBtn = () => {

        if (state.chosenLocation !== 2){
            setState(ps => ({...ps, chosenLocation: state.locations[2]}))
        }

    }


    return (
        <div className={styles.ourCompany}>


        <AboutUs title="About Us" img="/assets/about/desktop/image-about-hero.jpg" description1="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences." />
        
        <AboutUs flexDirection="row-reverse" img="/assets/about/desktop/image-world-class-talent.jpg" title="World-class talent" description1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms." description2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission." />

        <div className={styles.locationsFlex}>

            <div className={styles.locations}>
                <img src="/assets/shared/desktop/illustration-united-kingdom.svg" />
                <h2>UNITED KINGDOM</h2>
                <button onClick={ukBtn}>SEE LOCATIONS</button>
            </div>

            <div className={styles.locations}>
                <img src="/assets/shared/desktop/illustration-canada.svg" />
                <h2>CANADA</h2>
                <button onClick={canBtn}>SEE LOCATIONS</button>
            </div>

            <div className={styles.locations}>
                <img src="/assets/shared/desktop/illustration-australia.svg" />
                <h2>AUSTRALIA</h2>
                <button onClick={ausBtn}>SEE LOCATIONS</button>
            </div>
        </div>

        {state.chosenLocation}


        <AboutUs title="The real deal" img="/assets/about/desktop/image-real-deal.jpg" description1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success." description2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results." />
        </div>
    )
}

export default OurCompany
