interface ProjectProp {
    projectURL: string;
    title: string;
    description: string;
    technologies: string[];
    imagePath: string;
}

export const PROJECT: ProjectProp[] = [
    {
        projectURL: "https://fp-habits.netlify.app",
        title: "Habit Tracker",
        description:
            "Habit Tracking application - users have to create an account, to keep track of their personalised daily habits. Implemented jwt, and bcrypt for hashing users password to store in MongoDB.",
        technologies: [
            "HTML",
            "CSS",
            "Javascript",
            "Mongo"
        ],
        imagePath: "../assets/habit.png",
    },
    {
        projectURL: "https://quiz-war.netlify.app",
        title: "Quiz War",
        description:
            "Quiz War – using web sockets for limited online players in a game. Making use of Open Trivia DB API, React, and PostgreSQL for storing the users information.",
        technologies: [
            "React",
            "Redux",
            "Node.js",
            "Jest",
            "Docker",
            "Express",
            "Jest",
            "PostgreSQL",
        ],
        imagePath: "../assets/quiz.png",
    },
    {
        projectURL: "https://coding-cats.netlify.app",
        title: "Coding-Cats Blogpage",
        description:
            "Journal website - users can post anything anonymously and attach a giphy (using their API endpoints). Backend data is sent and stored in a .json file (no database).",
        technologies: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        imagePath: "../assets/journal.png",
    },
];
