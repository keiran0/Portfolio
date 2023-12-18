export default function Project(props) {

    return (
        <section className="project-wrapper snap">
            <div>
                <h3>{props.props.title}</h3>
                <p>{props.props.description}</p>
                <a href={props.props.codeLink}>Code</a>
                <a href={props.props.siteLink}>Site</a>
            </div>
            <embed src={props.props.siteLink}/>
        </section>
    )
}