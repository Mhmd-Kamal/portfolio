const ProjectCard = () => {
  return (
    <div className="w-full flex flex-col gap-9">
      <div className=" ">
        <img src={"/projects/todo-app.jpg"} alt="project snapshot" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h3 className="font-bold text-xl">Yubter</h3>
        <p className="text-center text-[#555] font-medium tracking-[1.5]">
          Yubter is a platform that I created where people can join the
          community of their favorite youtube channels and can be part of the
          conversation.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://vercel.com/mhmd-kamal/rest-countries-api-with-color-theme-switcher"
            className="cursor-pointer text-[#111] bg-[#facf0f] tracking-widest font-bold px-7 py-3 inline-block uppercase rounded-md"
          >
            View
          </a>
          <a
            href="https://vercel.com/mhmd-kamal/rest-countries-api-with-color-theme-switcher"
            className="cursor-pointer text-[#111] bg-[#facf0f] tracking-widest font-bold p-2.5 px-8  inline-block uppercase rounded-md"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
