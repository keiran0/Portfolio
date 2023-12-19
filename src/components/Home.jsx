import NavigationButton from "./UI/NavigationButton"

import data from '../data.json'

export default function Home({handleClickContact, handleClickCategory, handleClickLearning}) {
    return (
        <main className="snap">
            <section id="introduction" className="home-section snap">
                <div className="home-container">
                    <div>
                        <h2>Hi. I am Keiran, a problem solver and aspiring student.</h2>
                        <p>I first discovered coding during an internship, where an engineer showed me how she managed to automate some tasks using VBA. From there, I started learning some basic VBA to help automate my own tasks as well.</p>
                        <p>During my first job out of polytechnic, I grew curious about the potential ways to automate some of the tasks related to Microsoft Office, which led to me learning Python.</p>
                        <p>Years after leaving that job, I took my second specialist diploma - in automation and robotics. I found the automation side particularly fascinating and had exposure to ladder programming with various inputs and outputs, as well as robot teaching.</p>
                        <p>At my current job, I found a knowledge gap, and I wrote SQL queries and integrated them with Tableau to help solve the issue. Occasionally, I troubleshoot other SQL queries and help with VBA code when needed.</p>
                        <p>All those jobs did not include 'coding' as part of their job description. I want to change that moving forward, as those moments brings me the most joy during my work day.</p>
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