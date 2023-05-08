import bigode from "../../assets/images/png/bigode.png";
import { Navbar } from "../../components";
export default () => {
  return (
    <header className=" justify-between mb-10 items-center flex w-screen p-7">
      <div className="flex items-center gap-2">
        <img className="w-16" src={bigode} alt="bigode" />
        <h1 className="font-bold text-2xl">BIGODON</h1>
      </div>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div>
        <div>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
        <button className="bg-yellow-100 hidden md:block hover:bg-yellow-200 font-bold py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-200 rounded">
          book an appointment
        </button>
      </div>
    </header>
  );
};
