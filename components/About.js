export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SASS",
    "GIT",
    "Github",
    "Responsive Design",
    "SEO",
    "Terminal",
    "Express Basics",
    "SQL Basics",
  ];

  return (
    <section id="about" className="px-5 bg-[#fafafa] py-20">
      <div className="flex flex-col items-center gap-[70px]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="uppercase text-4xl text-[#111] tracking-widest font-bold text-center">
            About Me
          </h2>
          <div className="w-7 h-[5px] bg-[#facf0f] rounded-full mx-auto" />
          <p className="text-center text-[#555] font-medium tracking-[1.5]">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="flex flex-col gap-[70px]">
          <div className="flex flex-col gap-8 items-start">
            <h3 className="font-bold text-2xl ">Get to know me!</h3>
            <div className="flex flex-col gap-2 text-[#666] leading-[1.7] text-justify">
              <p>
                I'm a <strong>Frontend Web Developer</strong> building the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                <strong>Projects</strong> section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development</strong> so it
                can help other people of the Dev Community. Feel free to Connect
                or Follow me on my
                <a
                  rel="noreferrer"
                  href="https://linkedin.com/"
                  target="_blank"
                  className="text-[#facf0f] font-bold px-1 cursor-pointer underline"
                >
                  Linkedin
                </a>
                where I post useful content related to Web Development and
                Programming
              </p>
              <p>
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong> contact</strong> me.
              </p>
            </div>
            <a
              href="./#contact"
              className="text-[#111] bg-[#facf0f] text-sm tracking-widest font-bold px-12 py-3.5 inline-block uppercase rounded-md"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="font-bold text-2xl">My Skills</h3>
            <div className="flex flex-wrap  gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="text-[#666] bg-gray-400/20 rounded-md px-4 py-2 font-semibold text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
