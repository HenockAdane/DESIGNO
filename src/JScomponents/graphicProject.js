import React, {useState} from 'react'
import ProjectHero from './projectHero'
import ProjectsDivs from './projectsDiv'
import styles from "../SCSScomponents/graphicProject.module.scss"


function GraphicProject() {

    const [state, setState] = useState(()=> ({
        projects: [{
            img: "/assets/graphic-design/desktop/image-change.jpg",
            title: "TIM BROWN",
            description: "A book cover designed for Tim Brown’s new release, ‘Change’"
        },{
            img: "/assets/graphic-design/desktop/image-boxed-water.jpg",
            title: "BOXED WATER",
            description: "A simple packaging concept made for Boxed Water"
        },{
            img: "/assets/graphic-design/desktop/image-science.jpg",
            title: "SCIENCE",
            description: "A poster made in collaboration with the Federal Art Project"
        }]
    }))

    return (
        <div className={styles.graphicContainer}>

        
        <ProjectHero title="GRAPHIC" description="We deliver eye-catching branding materials that are tailored to meet your business objectives.
" />

        <div className={styles.projectsFlex}>
            {state.projects.map(a => <ProjectsDivs img={a.img} title={a.title} description={a.description} />)}
        </div>
            
        </div>
    )
}

export default GraphicProject
