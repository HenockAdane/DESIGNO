import React, {useState} from 'react'
import ProjectHero from './projectHero'
import ProjectsDivs from './projectsDiv'
import ProjectTypeDiv from './projectTypeDiv';
import styles from "../SCSScomponents/appProject.module.scss"

function AppProject() {
    const [state, setState] = useState(()=> ({
        projects: [{
            img: "/assets/app-design/desktop/image-airfilter.jpg",
            title: "AIRFILTER",
            description: "Solving the problem of poor indoor air quality by filtering the air"
        },{
            img: "/assets/app-design/desktop/image-eyecam.jpg",
            title: "EYECAM",
            description: "Product that lets you edit your favorite photos and videos at any time"
        },{
            img: "/assets/app-design/desktop/image-faceit.jpg",
            title: "FACEIT",
            description: "Get to meet your favorite internet superstar with the faceit app"
        },{
            img: "/assets/app-design/desktop/image-todo.jpg",
            title: "TODO",
            description: "A todo app that features cloud sync with light and dark mode"
        },{
            img: "/assets/app-design/desktop/image-loopstudios.jpg",
            title: "LOOPSTUDIOS",
            description: "A VR experience app made for Loopstudios"
        }]
    }))
    return (
        <div className={styles.appContainer}>

        <ProjectHero title="APP" description="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences." />

        <div className={styles.projectsFlex}>
            {state.projects.map(a => <ProjectsDivs img={a.img} title={a.title} description={a.description} />)}
        </div>

        <div className={styles.otherProjects}>
                
                <ProjectTypeDiv bkgroundImg="/assets/home/desktop/image-web-design-large.jpg" title="WEB" to="/web-design-projects"/>

                <ProjectTypeDiv bkgroundImg="/assets/home/desktop/image-graphic-design.jpg" title="GRAPHIC" to="/graphic-design-projects"/>


                </div>
            
        </div>
    )
}

export default AppProject
