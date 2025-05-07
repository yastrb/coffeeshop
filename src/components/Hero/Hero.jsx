import BgImage from "../../assets/bg-slate.png";
import Coffeemain from "../../assets/black.png";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}
const Hero = () => {
  return <main style={bgImage}>
    <section className="min-h-[750px] w-full">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
          <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
            <h1 className="text-7xl font-bold leading-tight ml-14">Black Coffee
            </h1>
            <div className="relative ">
              <div className="relative z-10 space-y-4">
                <h2 className="text-2xl">Coffee Lifestyle Lovers,</h2>
                <p className="text-sm opacity-55 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  fringilla, nunc eget faucibus tincidunt, nisi nunc aliquet nunc,
                  eget faucibus nunc nisi eget nunc.
                </p>
              </div>
              <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
            </div>
          </div>
          <div className=" relative">
            <img
              src={Coffeemain}
              alt="coffee"
              className="relative z-40 h-[400px] md:h-[700px] img-shadow"
            />
            <div className="h-[180px] w-[180px] absolute z-10 top-24 -right-16 border-primary rounded-full border-[20px]"></div>

            <div className="absolute -top-20 left-[200px] z-[1]">
              <h2 className=" text-[140px] scale-150 font-bold text-darkGray/40 leading-none">Black Tumbler</h2>
            </div>

          </div>

          <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
            <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">Black Tumbler
            </h1>
            <div className="relative ">
              <div className="relative z-10 space-y-4">
                <h2 className="text-2xl">Coffee Lifestyle Lovers,</h2>
                <p className="text-sm opacity-55 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  fringilla, consectetur adipiscing elit.
                </p>
              </div>
              <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>;
};

export default Hero;
