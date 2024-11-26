interface ProjectProp {
    projectURL: string;
    title: string;
    description: string;
    technologies: string[];
    imagePath: string;
}

export const PROJECT: ProjectProp[] = [
    {
        projectURL:"https://fp-habits.netlify.app",
        title: "Habit Tracker",
        description:
            "Habit Tracking App",
        technologies: [
            "Javascript",
            "Python",
            "HTML",
            "CSS",
            "REST API",
            "CRUD API",
            "React",
        ],
        imagePath: "../assets/habit.png",
    },
    {
        projectURL:"https://quiz-war.netlify.app",
        title: "Quiz War",
        description:
            "Quiz War App",
        technologies: [
            "Node.js"
        ],
        imagePath: "../assets/quiz.png",
    },
    {
        projectURL:"https://coding-cats.netlify.app",
        title: "Coding-Cats Blogpage",
        description:
            "Blogpage",
        technologies: [
            "Next"
        ],
        imagePath: "../assets/anonBlog.png",
    },
];
