import particlesjson from "./particles-config";
import Particles from "react-particles-js";

const ParticlesBackground = () => {
  return <Particles params={particlesjson}></Particles>;
};
export default ParticlesBackground;
