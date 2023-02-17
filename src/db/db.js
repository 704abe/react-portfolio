import techBlogImg from '../assets/tech-blog.png';
import codeQuizImg from '../assets/code-quiz-img.png';
import weatherDashboardImg from '../assets/weather-dashboard-img.png';
import passwordGeneratorImg from '../assets/password-generator-img.png';
import clotheryClubImg from '../assets/clothery-club-img.png';
import dt2Img from '../assets/DT2 Hospitality Solutions_ LLC LOGO-D3.jpeg'
import MERNimg from '../assets/mern-img.png'
const professionalProjects = [
    {
       "image": dt2Img,
       "title": "DT2 Hospitality",
       "description": "Official website for DT2 Hospitality. Submit contact forms powered by AWS.",
       "technologies": "HTML, CSS, Bootstrap, JavaScript, NodeJS, React, GraphQL, AWS, Amplify, SES, S3, Lambda",
       "applink": "https://www.dt2hospitality.com/",
    //    "repolink": "https://github.com/704abe/dt2"
    }
]

const bootcampProjects = [
    {
       "image": MERNimg,
       "title": "MERN Trivia",
       "description": "Create an account and test your knowledge on thousands on trivia questions!",
       "technologies": "HTML, CSS, Bootstrap, JavaScript, MongoDB, Express, React, NodeJS, Redux, Mongoose, GraphQL, Apollo",
       "applink": "https://mern-trivia-game.herokuapp.com/",
       "repolink": "https://github.com/herald-of-spring/mern-trivia"
    },
    {
        "image": techBlogImg,
        "title": "MVC Tech Blog",
        "description": "Create an account to publish blog posts, thoughts and opinions.",
        "technologies": "HTML, CSS, Bootstrap, JavaScript, NodeJS, SQL, MySQL, Sequelize, HandlebarsJS, Model-View-Controller, REST",
        "applink": "https://agile-fortress-94330.herokuapp.com/",
        "repolink": "https://agile-fortress-94330.herokuapp.com/"
    },
    // {
    //     "image": clotheryClubImg,
    //     "title": "Clothery Club",
    //     "description": "Full-stack e-commerce application that was created as a group project.",
    //     "technologies": "HTML, CSS, Bootstrap, JavaScript, NodeJS, SQL, MySQL, Sequelize, HandlebarsJS, Model-View-Controller, REST",
    //     "applink": "https://arcane-waters-66340.herokuapp.com/",
    //     "repolink": "https://github.com/iamjoyfulgirl/clothery-club"
    // },
    {
        "image": weatherDashboardImg,
        "title": "Open Weather Dashboard",
        "description": "See current weather conditions, as well as a 5-day forecast, in multiple cities.",
        "technologies": "HTML, CSS, JavaScript, OpenWeather API",
        "applink": "https://704abe.github.io/open-weather-dashboard/",
        "repolink": "https://github.com/704abe/open-weather-dashboard"
    },
    {
        "image": codeQuizImg,
        "title": "JavaScript Code Quiz",
        "description": "Take a timed quiz on JavaScript fundamentals and compete for a high score.",
        "technologies": "HTML, CSS, JavaScript",
        "applink": "https://704abe.github.io/javascript-code-quiz/",
        "repolink": "https://github.com/704abe/javascript-code-quiz"
    },
    {
        "image": passwordGeneratorImg,
        "title": "Password Generator",
        "description": "Randomly generate a strong password based on custom criteria.",
        "technologies": "HTML, CSS, JavaScript",
        "applink": "https://704abe.github.io/javascript-password-generator/",
        "repolink": "https://github.com/704abe/javascript-password-generator"
    },
]

export { bootcampProjects, professionalProjects}