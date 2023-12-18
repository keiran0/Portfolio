import NavigationButton from "./UI/NavigationButton"

import data from '../data.json'

export default function Home({handleClickContact, handleClickCategory, handleClickLearning}) {
    return (
        <main className="snap">
            <section id="introduction" className="home-section snap">
                <div className="home-container">
                    <div>
                        <h2>Hi. I am Keiran, an aspiring student.</h2>
                        <p>I am primarily a hobbyist, but I do implement some of these skills at work, namely VBA, SQL server, and Tableau, though they are not part of my job description. However, I hope to turn these skills into a full-time career in the future.</p>
                    </div>
                    <NavigationButton onClick={handleClickContact}>
                        <p>Contact and other links</p></NavigationButton>
                </div>
            </section>
            <section id="currentSkills" className="home-section snap">
                <div className="home-container">
                    <div>
                        <h3>These are the skills I currently have:</h3>
                        <div className="currentSkillsGrid">
                            <div>
                                <p>Web skills:</p>
                                <ul>
                                    {data.webSkills.map((skill) => <li key={skill.skillName}><span>{skill.skillName}</span><i className={skill.skillClassName + ' skill-icon'}></i></li>)}
                                </ul>
                            </div>
                            <div>
                                <p>Databases:</p>
                                <ul>
                                    {data.databaseSkills.map((skill) => <li key={skill.skillName}><span>{skill.skillName}</span><i className={skill.skillClassName + ' skill-icon'}></i></li>)}
                                </ul>
                            </div>
                            <div>
                                <p>Others:</p>
                                <ul>
                                    {data.skills.map((skill) => <li key={skill.skillName}><span>{skill.skillName}</span><i className={skill.skillClassName + ' skill-icon'}></i></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <NavigationButton onClick={handleClickCategory}>
                        <p>View projects</p>
                    </NavigationButton>
                </div>
            </section>
            <section id="currentLearning" className="home-section snap">
                <div className="home-container">
                    <div>
                        <h3>I am currently learning the following skills:</h3>
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                        </ul>
                    </div>
                    <NavigationButton onClick={handleClickLearning}>
                        <p>View progress</p>
                    </NavigationButton>
                </div>
            </section>
        </main>
    )
}