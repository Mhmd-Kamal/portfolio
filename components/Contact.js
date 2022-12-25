export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-400/20 bg-[url('/common-bg.svg')] bg-blend-hue px-5 py-20 flex flex-col gap-20"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="uppercase text-4xl text-[#111] tracking-widest font-bold text-center">
          Contact
        </h2>
        <div className="w-7 h-[5px] bg-[#facf0f] rounded-full mx-auto" />
        <p className="text-center text-[#555] font-medium tracking-[1.5]">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>

      <div className="bg-white p-7 rounded-md shadow-[rgba(100,100,111,.2)_0_7px_29px_0]">
        <form action="/" method="POST" className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-bold text-xs text-[#666] tracking-widest"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              className="text-[#333] bg-[#f0f0f0] border-[1px] border-[#ebebeb] rounded-md font-semibold p-4"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-bold text-xs text-[#666] tracking-widest"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="text-[#333] bg-[#f0f0f0] border-[1px] border-[#ebebeb] rounded-md font-semibold p-4"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-bold text-xs text-[#666] tracking-widest"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              spellCheck="false"
              placeholder="Enter Your Message"
              className="text-[#333] bg-[#f0f0f0] resize-none border-[1px] border-[#ebebeb] rounded-md font-semibold p-4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="shadow-lg cursor-pointer bg-[#facf0f] text-sm text-[#111] rounded-md font-bold tracking-wider uppercase inline-block px-[70px] py-4"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
}
