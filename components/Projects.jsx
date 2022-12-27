import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-[5%] py-20 flex flex-col gap-20">
      <div className="flex flex-col items-center gap-4">
        <h2 className="uppercase text-4xl text-[#111] tracking-widest font-bold text-center">
          Projects
        </h2>
        <div className="w-7 h-[5px] bg-[#facf0f] rounded-full mx-auto" />
        <p className="text-center text-[#555] font-medium tracking-[1.5]">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className="flex flex-col gap-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
