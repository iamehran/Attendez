export default function TechCards() {
  return (
    <div className="flex h-full mt-24 lg:mt-40 flex-col md:flex-row items-center w-full justify-center">
      <div className="absolute hidden md:block w-full">
        <div className="opacity-50 hover:opacity-100 transition-all duration-300 absolute -top-[250px] left-2 w-10 lg:w-14 lg:left-4 xl:left-20 xl:w-20">
          <img src="/images/techlogos/swift.png" alt="" />
        </div>

        <div className="opacity-50 hover:opacity-100 transition-all duration-300 absolute top-[200px] left-40 w-6 lg:w-8 lg:left-56 xl:left-72 xl:w-12">
          <img src="/images/techlogos/react.png" alt="" />
        </div>
        <div className="opacity-50 hover:opacity-100 transition-all duration-300 absolute top-[320px] xl:top-[360px] left-72 w-10 lg:w-14 lg:left-96 xl:left-[30rem] xl:w-20">
          <img src="/images/techlogos/node.png" alt="" />
        </div>

        <div className="opacity-50 hover:opacity-100 transition-all duration-300 absolute -top-[250px] lg:-top-[300px] xl:-top-[320px] left-[50%] w-10 lg:w-14 xl:w-20">
          <img src="/images/techlogos/java.png" alt="" />
        </div>
        <div className="opacity-50 hover:opacity-100 transition-all duration-300 absolute top-[250px] lg:top-[300px] xl:top-[320px] left-[50%] w-10 lg:w-14 xl:w-20">
          <img src="/images/techlogos/kotlin.png" alt="" />
        </div>

        <div className="opacity-50 hover:opacity-100 transition-all duration-300 absolute -top-[200px] lg:-top-[250px] right-40 lg:right-60 xl:right-80 2xl:right-96 w-10 lg:w-14 xl:w-20">
          <img src="/images/techlogos/redis.png" alt="" />
        </div>

        <div className="opacity-50 hover:opacity-100 transition-all duration-300 absolute -top-[120px] lg:-top-[150px] right-60 lg:right-80 xl:right-96 2xl:right-[32rem] w-6 lg:w-10 xl:w-12">
          <img src="/images/techlogos/html.png" alt="" />
        </div>
        <div className="opacity-50 hover:opacity-100 transition-all duration-300 absolute md:-top-[60px] lg:-top-[100px] right-20 lg:right-40 xl:right-60 2xl:right-80 w-6 lg:w-8 xl:w-10">
          <img src="/images/techlogos/js.png" alt="" />
        </div>
      </div>
      <Card
        key={0}
        img={"/images/mobileDev.png"}
        classes={"mt-5 md:-mt-[400px]"}
        color="bg-violet-300 text-black"
        title="Mobile Development"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima hic id nisi eveniet eum reprehenderit perspiciatis autem quia quibusdam."
      />
      <Card
        key={1}
        img={"/images/frontendDev.png"}
        classes={"mt-5 md:mt-[0px]"}
        color="bg-stone-300 text-black"
        title="Frontend Development"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima hic id nisi eveniet eum reprehenderit perspiciatis autem quia quibusdam."
      />
      <Card
        key={2}
        img={"/images/backendDev.png"}
        classes={"mt-5 md:mt-[400px]"}
        color="bg-zinc-800 text-white"
        title="Backend Development"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima hic id nisi eveniet eum reprehenderit perspiciatis autem quia quibusdam."
      />
    </div>
  );
}

const Card = ({ classes, color, img, title, content }) => {
  return (
    <div
      className={"relative w-56 lg:w-72 xl:w-80 2xl:w-96 mb-6 max-w-full " + classes}
      style={{ backfaceVisibility: "hidden" }}
    >
      <div className="flip-box">
        <div
          className="flip-box-front min-h-[280px] lg:min-h-[390px] xl:min-h-[425px] 2xl:min-h-[475px] h-full rounded-md text-center"
          style={{ backgroundImage: `url("${img}")` }}
        ></div>
        <div
          className={
            "flip-box-back min-h-[280px] lg:min-h-[390px] xl:min-h-[425px] 2xl:min-h-[476px] h-full text-center " +
            color
          }
        >
          <div className="inner w-[90%] left-0 flex flex-col space-y-3 md:space-y-6 items-center justify-center p-2 md:p-4 lg:p-10 xl:p-14 top-1/2">
            <h3 className="text-2xl lg:text-4xl">{title}</h3>
            <p className="text-base">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
