import particlesjson from "./particles-config";
import Particles from "react-particles-js";

const ParticlesBackground = () => {
  return (
    <Particles
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0px",
      }}
      params={particlesjson}
    ></Particles>
  );
};
export default ParticlesBackground;
