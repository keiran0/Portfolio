export default function Home() {

    let webSkills = [
        { skillName: "HTML", skillClassName: "fa-solid fa-code" },
        { skillName: "CSS", skillClassName: "fa-brands fa-css3-alt" },
        { skillName: "JavaScript", skillClassName: "fa-brands fa-js" },
        { skillName: "React", skillClassName: "fa-brands fa-react" },
        { skillName: "NodeJS", skillClassName: "fa-brands fa-node" }

    ]

    let skills = [
        { skillName: "Python", skillClassName: "fa-brands fa-python" },
        { skillName: "Github", skillClassName: "fa-brands fa-github" },
        { skillName: "Tableau", skillClassName: "" },
        { skillName: "Microsoft VBA", skillClassName: "" },
        { skillName: "Ladder logic for PLC programming", skillClassName: "" }
    ]

    let databaseSkills = [
        { skillName: "Microsoft SQL Management Server", skillClassName: "" },
        { skillName: "MongoDB", skillClassName: "" }
    ]

    return (
        <main>
            <h2>Hi. I am Keiran, an aspiring student.</h2>
            <p>I am primarily a hobbyist, but I do implement some of these skills at work, namely VBA, SQL server, and Tableau, though they are not part of my job description. However, I hope to turn these skills into a full-time career in the future.</p>

            <h3>I am currently learning the following skills on my own:</h3>
            <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
            </ul>

            <h3>These are the skills I currently have:</h3>
            <div className="currentSkillsGrid">
                <div>
                    <p>Web skills:</p>
                    <ul>
                        {webSkills.map((skill) => <li key={skill.skillName}><span>{skill.skillName}</span><i className={skill.skillClassName}></i></li>)}

                    </ul>
                </div>
                <div>
                    <p>Databases:</p>
                    <ul>
                        {databaseSkills.map((skill) => <li key={skill.skillName}><span>{skill.skillName}</span><i className={skill.skillClassName}></i></li>)}
                    </ul>
                </div>
                <div>
                    <p>Others:</p>
                    <ul>
                        {skills.map((skill) => <li key={skill.skillName}><span>{skill.skillName}</span><i className={skill.skillClassName}></i></li>)}
                    </ul>
                </div>
            </div>





        </main>
    )
}