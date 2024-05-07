import TechCards from "./TechCards";
export default function TechnologySection() {
  return (
    <div className="w-full py-16 md:py-20 lg:py-24 bg-black flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex-col items-center justify-start md:justify-around">
          <div className="w-full flex flex-col gap-y-10">
            <TechMarq key={0} />
            <TechMarq key={1} secRow={true} />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <TechCards />
          </div>
        </div>
      </div>
    </div>
  );
}

const TechMarq = ({ secRow }) => {
  const pics = !secRow
    ? ["java", "mobile", "swift", "kotlin", "react"]
    : ["web", "js", "node", "html", "redis"];
  return (
    <div className="marq-animation">
      <div className="gap-4 relative flex overflow-hidden select-none w-screen marquee--hover-pause">
        <div
          style={secRow ? { animationDirection: "reverse" } : {}}
          className="marquee__content flex justify-around gap-4 min-w-full w-full"
        >
          {pics.map((tech, i) => {
            return (
              <div key={i}>
                <img src={`/images/techlogos/${tech}.png`} alt={tech} />
              </div>
            );
          })}
        </div>
        <div
          style={secRow ? { animationDirection: "reverse" } : {}}
          className="marquee__content flex justify-around gap-4 min-w-full w-full"
        >
          {pics.map((tech, i) => {
            return (
              <div key={i}>
                <img src={`/images/techlogos/${tech}.png`} alt={tech} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
