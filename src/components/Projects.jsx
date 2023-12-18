import Project from "./Project"
import BackButton from "./UI/BackButton"

export default function Projects({handleBack, data}){



    return(
        <>
        <BackButton onClick={handleBack} projectMode={true}/>
        <main className="project-showcase snap">
            {data.map((project)=><Project key={project.title} props={project}/>)}
        </main>
        </>

    )
}