export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Whatsapp Bot",
    techs: ["Python", "Flask", "Twilio", "OpenAI"],
    link: "https://github.com/Gonzlezjg/whatsapp-bot",
  },
  {
    title: "Portafolio",
    techs: ["Astrojs", "Typescript"],
    link: "/",
  },
];

export default projects;
