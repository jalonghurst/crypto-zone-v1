import { particlesJS } from "tsparticles";


const white = "#FFFFFF";
const black = "#161617";
const particlesdark = particlesJS
const gray = "#F8F8F9";

const themeLight = {
  background: gray,
  body: black,
};

const themeDark = {
  background: particlesdark,
  body: white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;