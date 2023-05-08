import bigode from "../../assets/images/png/bigode.png";

export default () => {
  return (
    <>
      <section className="px-5 mt-20 flex w-screen justify-center items-center flex-col md:flex-row  gap-4">
        <div className="flex flex-col max-w-md gap-2">
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold text-2xl">Who we are</p>
            <img src={bigode} className="w-12" />
          </div>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            cupiditate maxime! Perspiciatis, eos sunt. Quos a rem
            necessitatibus, recusandae, ipsam quasi dicta eum deleniti aperiam
            laborum, labore iusto accusantium maxime.
          </p>
        </div>
        <div className="flex flex-col max-w-md gap-2">
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold text-2xl">Who we are</p>
            <img src={bigode} className="w-12" />
          </div>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            cupiditate maxime! Perspiciatis, eos sunt. Quos a rem
            necessitatibus, recusandae, ipsam quasi dicta eum deleniti aperiam
            laborum, labore iusto accusantium maxime.
          </p>
        </div>
      </section>
      <section className="inline-flex mt-20 justify-center w-screen ">
        <div className="bg-black z-50  cursor-pointer text-white rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </section>
    </>
  );
};
