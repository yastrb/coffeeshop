import BgImage from "../../assets/bg-slate.jpg";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}
const Hero = () => {
  return <main className="bgImage">
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2"></div>
      </div>
    </section>
  </main>;
};

export default Hero;
