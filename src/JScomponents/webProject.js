import React, {useState} from 'react'
import styles from "../SCSScomponents/webProject.module.scss"
import ProjectHero from './projectHero'
import ProjectsDivs from './projectsDiv'

function WebProject() {

    const [state, setState] = useState(()=> ({
        projects: [{
            img: "/assets/web-design/desktop/image-express.jpg",
            title: "EXPRESS",
            description: "A multi-carrier shipping website for ecommerce businesses"
        },
        {
            img: "/assets/web-design/desktop/image-transfer.jpg",
            title: "TRANSFER",
            description: "Site for low-cost money transfers and sending money within seconds"
        },
        {
            img: "/assets/web-design/desktop/image-photon.jpg",
            title: "PHOTON",
            description: "A state-of-the-art music player with high-resolution audio and DSP effects"
        },
        {
            img: "/assets/web-design/desktop/image-builder.jpg",
            title: "BUILDER",
            description: "Connects users with local contractors based on their location"
        },
        {
            img: "/assets/web-design/desktop/image-blogr.jpg",
            title: "BLOGR",
            description: "Blogr is a platform for creating an online blog or ation"
        },
        {
            img: "/assets/web-design/desktop/image-camp.jpg",
            title: "CAMP",
            description: "Get expert training in coding, data, design, and digital marketing"
        },]
    }))
    return (
        <div className={styles.webContainer}>

        <ProjectHero title="WEB" description="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences." />

        <div className={styles.projectsFlex}>
            {state.projects.map(a => <ProjectsDivs img={a.img} title={a.title} description={a.description} />)}
        </div>
            
        </div>
    )
}

export default WebProject
