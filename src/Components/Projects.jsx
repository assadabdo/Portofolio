import React from "react";
import { ProjectCard } from "./ProjectCard";
// Github Url
const NewestGithub = "https://github.com/assadabdo/News-Application";
const TuberGithub = "https://github.com/assadabdo/Tuber";
const ProgresGithub = "https://github.com/assadabdo/progress";
const WheatherGithub = "https://github.com/assadabdo/Wheather---App";
const CalcGithub = "https://github.com/assadabdo/Calculator";
const MusicGithub = "https://github.com/assadabdo/Music-Player";
// Projects Url
const progresUrl = "https://assadabdo.github.io/progress/";
const WheatherUrl = "https://muclaculator.netlify.app";
const MusicUrl = "https://musicplayerapplications.netlify.app";
const NewestUrl = "https://newsappllication.netlify.app";
const CalcUrl = "https://symphonious-tapioca-0312d8.netlify.app";

// imges URL
import tuberlogo from "../imgs/Tuber2.png";
import calclogo from "../imgs/calc.png";
import Newestlogo from "../imgs/Nweset.png";
import progresslogo from "../imgs/Progress.png";
import Wheatherlogo from "../imgs/Wheather app.png";
import Musiclogo from "../imgs/Music-player3.png";

const progresDesc =
  "A conversion-focused UI section built to display customer reviews and ratings beautifully across mobile and desktop displays.";
const MusicDesc =
  "A simple JavaScript-based music player that plays audio tracks with basic controls like play, pause, and skip, built to practice DOM manipulation and interactive UI logic.";
const WheatherDesc =
  "Built using a weather API, this application provides real-time forecasts and detailed atmospheric data for cities around the world, allowing users to make better day-to-day decisions based on current weather conditions.";
const ClacDesc =
  "A responsive calculator that performs basic arithmetic operations with real-time results, providing a simple and efficient solution for everyday calculations while showcasing interactive frontend development skills.";
const NewestDesc =
  "A responsive news platform that aggregates real-time headlines across Business, Entertainment, General, Health, Science, Sports, and Technology, helping users stay informed through a fast and organized reading experience.";
const tuberDesc =
  "It is an application for watching videos with modern UI where the user can search for videos , navigate channels and playlists. Built with googel API , serverless function and material UI. ";
export const Projects = () => {
  return (
    <div id="project">
      <div className="headline" style={{ margin: "20px" }}>
        My recent projects
      </div>
      <div className="All-projects">
        <ProjectCard
          name="Tuber"
          url="https://tubery.netlify.app"
          description={tuberDesc}
          imgurl={tuberlogo}
          Giturl={TuberGithub}
        ></ProjectCard>

        <ProjectCard
          name="Newest"
          url={NewestUrl}
          description={NewestDesc}
          imgurl={Newestlogo}
          Giturl={NewestGithub}
        ></ProjectCard>
        <ProjectCard
          name="Social Proof Landing Page"
          url={progresUrl}
          description={progresDesc}
          imgurl={progresslogo}
          Giturl={ProgresGithub}
        ></ProjectCard>
        <ProjectCard
          name="Wheater App"
          url={WheatherUrl}
          description={WheatherDesc}
          imgurl={Wheatherlogo}
          Giturl={WheatherGithub}
        ></ProjectCard>
        <ProjectCard
          name="Music Player"
          url={MusicUrl}
          description={MusicDesc}
          imgurl={Musiclogo}
          Giturl={MusicGithub}
        ></ProjectCard>
        <ProjectCard
          name="Calculator"
          url={CalcUrl}
          description={ClacDesc}
          imgurl={calclogo}
          Giturl={CalcGithub}
        ></ProjectCard>
      </div>
    </div>
  );
};
