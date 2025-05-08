const Contact = () => (
  <section className="font-Intertight bg-zinc-700 py-20 text-white h-fit">
    <div className="flex flex-wrap items-center justify-center gap-72">
      <div className="">
        <h2 className="text-2xl font-bold"> Briquette Wijaya</h2>
        <p className="mb-6 text-xl">
          Narahubung
          <br />
          Tempat kami ada di ujung jari anda
        </p>
        <a
          href="https://wa.me/625367307970"
          className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all duration-500 ease-out hover:bg-blue-700 lg:text-lg"
        ></a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.291359976219!2d105.04341322296366!3d-5.372463650666061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40d3a33fb4b249%3A0x3b22bff9c095a815!2sAlfamart%20Wonokrio!5e0!3m2!1sid!2sid!4v1746508604664!5m2!1sid!2sid"
        width="600"
        height="450"
        className="h-[24rem] w-full max-w-md rounded-2xl shadow-md"
      ></iframe>
    </div>
  </section>
);
export default Contact;
