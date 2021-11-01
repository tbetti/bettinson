import React from 'react';
import WorkCard from './workCard';
import {
    CoffeeChat,
    GameTime,
    GuessWord,
    LOCSearchTool,
    TechBlog,
    WeatherGenerator
} from '../images/index';

var workSites = [
    {
        id: "tech-blog",
        title: "The Tech Blog",
        type: "Sequelize - MySql - Socket.IO - HTML/CSS - JS",
        image: TechBlog,
        site: "https://bettinson-techblog.herokuapp.com/",
        gitHub: "https://github.com/tbetti/tech-blog",
        description: "View, post, and comment on blogs about technology and web development"
    },
    {
        id: "coffee-chat",
        title: "Birds of a Feather Chat",
        type: "Sequelize - MySql - Socket.IO - HTML/CSS - JS",
        image: CoffeeChat,
        site: "https://birds-of-a-feather-chat.herokuapp.com/",
        gitHub: "https://github.com/tbetti/coffee-chat",
        description: "Chat instantly with other logged-in users!"
    },
    {
        id: "weather-generator",
        title: "Weather Generator",
        type: "HTML - CSS - JS - API",
        image: WeatherGenerator,
        site: "https://tbetti.github.io/Weather-Dashboard/",
        gitHub: "https://github.com/tbetti/Weather-Dashboard",
        description: "Show current and forecasted weather in a city"
    },
    {
        id: "guess-word",
        title: "Guess the Word Game",
        type: "HTML - CSS - JS",
        image: GuessWord,
        site: "https://tbetti.github.io/Guess-the-Word/",
        gitHub: "https://github.com/tbetti/Guess-the-Word",
        description: "Guess a word one letter at a time"
    },
    {
        id: "loc-search-tool",
        title: "Library of Congress Search Tool",
        type: "HTML - CSS - JS - API",
        image: LOCSearchTool,
        site: "https://tbetti.github.io/Library-of-Congress-Search-Tool/",
        gitHub: "https://github.com/tbetti/Library-of-Congress-Search-Tool",
        description: "Search the Library of Congress database"
    },
    {
        id: "game-time",
        title: "GameTime Scheduling App",
        type: "HTML - CSS - JS - API",
        image: GameTime,
        site: "https://varunisinha.github.io/game-time/",
        gitHub: "https://github.com/varunisinha/game-time",
        description: "Schedule events at football stadiums"
    }
];

export default function Portfolio(){
    return (
    <section className="master-container" id="master-container">
        <div className="work" id="work">
            <h2>Work:</h2>
        </div>
        <div className="work-container" id="work-container">
            {/* Work Cards will go here */}
            {workSites.map((workSite) => (
                <WorkCard 
                    id={workSite.id}
                    title={workSite.title}
                    type={workSite.type}
                    image={workSite.image}
                    site={workSite.site}
                    gitHub={workSite.gitHub}
                    description={workSite.description}
                />
            ))}
        </div>
    </section>
    )
}