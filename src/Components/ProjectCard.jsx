import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import React from "react";

export const ProjectCard = ({ name, description, imgurl, url, Giturl }) => {
  return (
    <div className="project-card">
      <div className="img" style={{ backgroundImage: `url${imgurl}` }}>
        <img src={imgurl} alt="no pict" />
      </div>
      <h3 className="project-headline">{name}</h3>
      <p> {description}</p>
      <div className="buttons">
        <a href={url} target="_blank">
          <Button variant="contained" endIcon={<VisibilityIcon />}>
            Live
          </Button>
        </a>
        <a href={Giturl} target="_blank">
          <Button variant="outlined" endIcon={<GitHubIcon />}>
            Code
          </Button>
        </a>
      </div>
    </div>
  );
};
