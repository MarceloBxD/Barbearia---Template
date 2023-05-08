export default () => {
  return (
    <main className="flex  p-7 mx-auto">
      <section className="flex w-screen justify-between flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-2xl font-bold uppercase">
            a unique barber experience
          </h1>
          <p className="text-2xl font-semibold">Barber Shop</p>
          <p className="text-xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <button className="bg-yellow-100 hover:bg-yellow-200 font-bold py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-200 rounded">
            book an appointment
          </button>
        </div>
      </section>
    </main>
  );
};
