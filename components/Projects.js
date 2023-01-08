import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Landing Page",
      description: {
        text: "This is a solution to <a  class='text-yellow-500 transition-colors cursor-pointer underline hover:text-yellow-600' href='https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5'>Frontend Mentor - Manage landing page challenge </a>, The challenge is to build a responsive landing page according to the design provided.",
        link: "https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5",
      },
      image: "/projects/manage-landing-page.jpg",
      livePreview: "https://manage-landing-page-three-blush.vercel.app/",
      github: "https://github.com/Mhmd-Kamal/Manage-landing-page",
    },
    {
      id: 2,
      title: "Weather App",
      description: {
        text: "This is a solution to <a  class='text-yellow-500 transition-colors cursor-pointer underline hover:text-yellow-600' href='https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv'>DevChallenges.io -weather app challenge </a>, The challenge is to build a responsive weather app displaying weather data for user's current location and any other locations' user want to search for.",
        link: "https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv",
      },
      image: "/projects/weather-app.png",
      livePreview: "https://weather-app-self-rho.vercel.app/",
      github: "https://github.com/Mhmd-Kamal/devChallenges-weather-app",
    },
    {
      id: 3,
      title: "Ecommerce Product Page",
      description: {
        text: "This is a solution to <a  class='text-yellow-500 transition-colors cursor-pointer underline hover:text-yellow-600' href='https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6/hub'>frontendmentor.io -Ecommerce Product Page challenge </a>, The challenge is to build out this e-commerce product page and get it looking as close to the design as possible.",
        link: "https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6/hub",
      },
      image: "/projects/ecommerce-product-page.jpg",
      livePreview:
        "https://frontend-mentor-ecommerce-product-page-pearl.vercel.app/",
      github:
        "https://github.com/Mhmd-Kamal/FrontendMentor-Ecommerce-product-page/tree/main",
    },
    {
      id: 4,
      title: "Todo App",
      description: {
        text: "This is a solution to <a  class='text-yellow-500 transition-colors cursor-pointer underline hover:text-yellow-600' href='https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW/hub'>frontendmentor.io -Todo app challenge </a>, The challenge is to build full-stack todo application with drag and drop functionality, dark theme, and responsive design.",
        link: "https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW/hub",
      },
      image: "/projects/todo-app.jpg",
      livePreview: "https://frontend-mentor-todo-app-phi.vercel.app/",
      github: "https://github.com/Mhmd-Kamal/frontend-mentor-todo-app",
    },
    {
      id: 5,
      title: "Time tracking dashboard",
      description: {
        text: "This is a solution to <a  class='text-yellow-500 transition-colors cursor-pointer underline hover:text-yellow-600' href='https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw'>frontendmentor.io -Time tracking dashboard challenge </a>, The challenge is to build out this dashboard and View the optimal layout for the site depending on their device's screen size.",
        link: "https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw",
      },
      image: "/projects/time-tracking-dashboard.jpg",
      livePreview:
        "https://frontend-mentor-time-tracking-dashboard-main.vercel.app/",
      github:
        "https://github.com/Mhmd-Kamal/FrontendMentor-time-tracking-dashboard-main/",
    },
    {
      id: 6,
      title: "REST Countries webpage",
      description: {
        text: "This is a solution to <a  class='text-yellow-500 transition-colors cursor-pointer underline hover:text-yellow-600' href='https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca'>frontendmentor.io -REST Countries API with color theme switcher challenge </a>, The challenge is to pull the data from REST countries API and present it to the user while providing filter and search functionality",
        link: "https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca",
      },
      image: "/projects/rest-countries.jpg",
      livePreview:
        "https://rest-countries-api-with-color-theme-switcher-sable.vercel.app/",
      github:
        "https://github.com/Mhmd-Kamal/FrontendMentor-time-tracking-dashboard-main",
    },
  ];

  return (
    <section id="projects" className="px-[5%] py-20 flex flex-col gap-20">
      <div className="flex flex-col items-center gap-4">
        <h2 className="uppercase text-4xl text-[#111] tracking-widest font-bold text-center">
          Projects
        </h2>
        <div
          className="w-7 h-[5px] bg-[#facf0f] rounded-fu
        ll mx-auto"
        />
        <p className="text-center text-[#555] font-medium tracking-[1.5]">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {projects
          .sort((a, b) => a.id - b.id)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
}
