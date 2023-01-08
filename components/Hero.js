export default function Hero() {
  return (
    <section
      id={"home"}
      className='bg-slate-400/20 bg-[url("/common-bg.svg")] bg-blend-hue px-[5%] py-28 flex flex-col items-center gap-11 w-full'
    >
      <h1 className="text-[#111] text-5xl font-extrabold leading-[1.5] tracking-wide text-center uppercase">
        Hey, I'm Mohamed Kamal
      </h1>
      <div>
        <p className="text-[#333] text-center text-lg">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>
      <div>
        <a
          className="bg-[#facf0f] text-lg text-[#333] rounded-md font-bold tracking-wider uppercase inline-block px-[70px] py-4"
          href="/#projects"
        >
          Projects
        </a>
      </div>
    </section>
  );
}
