import React from 'react'
import AboutUs from './aboutUs'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import styles from "../SCSScomponents/ourCompany.module.scss"

function OurCompany() {
    return (
        <div className={styles.ourCompany}>


        <AboutUs title="About Us" img="/assets/about/desktop/image-about-hero.jpg" description1="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences." />
        
        <AboutUs flexDirection="row-reverse" img="/assets/about/desktop/image-world-class-talent.jpg" title="World-class talent" description1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms." description2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission." />

        <div className={styles.locationsFlex}>

            <div className={styles.locations}>
                <img src="/assets/shared/desktop/illustration-united-kingdom.svg" />
                <h2>UNITED KINGDOM</h2>
                <Link to="/locations">SEE LOCATIONS</Link>
            </div>

            <div className={styles.locations}>
                <img src="/assets/shared/desktop/illustration-canada.svg" />
                <h2>CANADA</h2>
                <Link to="/locations">SEE LOCATIONS</Link>
            </div>

            <div className={styles.locations}>
                <img src="/assets/shared/desktop/illustration-australia.svg" />
                <h2>AUSTRALIA</h2>
                <Link to="/locations">SEE LOCATIONS</Link>
            </div>
        </div>


        <AboutUs title="The real deal" img="/assets/about/desktop/image-real-deal.jpg" description1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success." description2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results." />
        </div>
    )
}

export default OurCompany
