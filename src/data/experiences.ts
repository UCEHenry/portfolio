interface ExperienceProp {
  dates: string;
  company: string;
  title: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "Feb - Aug 2023",
    company: "Futureproof",
    title: "Full Stack Developer",
    description:
      "Covering Core Programming principles, Cyber Security, System Architecture and principle of Data Science. Built applications covering relevant tech stack of web development. Collaborative group projects, using Agile methodology and Test Driven Development.",
    technologies: [
      "Javascript",
      "Python",
      "HTML",
      "CSS",
      "REST API",
      "CRUD API",
      "React",
      "Express",
      "TDD (Jest)",
      "SQL",
      "Mongo",
    ],
  },
  {
    dates: "2021 — Sept 2023",
    company: "Woven",
    title: "Team Leader/Customer Relation",
    description:
      "Developed, monitored and reported on advisors’ KPIs. Established strong customer relationships and maintained records using AWS and Salesforce (CRM). Coordinated resolution of high-value goods rejections with senior management and operations manager.",
    technologies: [
      "CRM",
      "Salesforce",
      "AWS",
    ],
  },
  {
    dates: "Jun — Aug 2015",
    company: "Google",
    title: "Online Publishing Group – EMEA",
    description:
      "Working with large volumes of data to profile and segment the gaming industry. Developed an application using Android Studio, implementing Google API AD products for training within the team.",
    technologies: [
      "JAVA",
      "Android Studio",
    ],
  },
];
