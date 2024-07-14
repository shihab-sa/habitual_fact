function MyHeroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-20 space-y-10 md:space-x-10 md:space-y-10">
      {/* section one  */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Stop This Year 2024 🥦
          <br />
          <span className="font-normal">Not Next Year🍚</span>
        </h1>
        <p className="mt-6 md:mt-10 max-w-xs md:max-w-md mx-auto md:mx-0">
          Just 30 days, stop eating sugar, and change your mind, you will see
          your improvements.
        </p>
        <button className="btn btn-wide mt-6 md:mt-10 btn-primary">
          Get Started🥦
        </button>
      </div>

      {/* section two */}
      <div className="flex justify-center md:justify-end">
        <div className="card w-full max-w-xs md:max-w-sm bg-primary text-primary-content">
          <div className="card-body">
            <div className="text-4xl font-bold text-white">
              30
              <sub className="text-xs ml-2 font-thin">
                days =<span className="text-4xl">🧠</span>
              </sub>
            </div>
            <p className="text-white font-bold text-xs">
              <span className="text-gray-300">I will try 30 days,</span> I
              promise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeroSection;
