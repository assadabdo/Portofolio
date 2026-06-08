import React from "react";

export const About = () => {
  return (
    <div>
      <div className="headline" id="about">
        About me{" "}
      </div>
      <div className="about">
        <div>
          <p className="p">Who am I ?</p>

          <p>
            I am Assad and I am a <span>front-end developer</span> with strong
            programming foundation and selft-learning ability specialized in
            React.{" "}
          </p>
        </div>
        <div>
          <p className="p">What I am doing?</p>
          <p>
            {" "}
            I build modern, responsive and user friendly websites trying to
            provide better experience for users. I turn your ideas into website
            and solve complex problem via maitainable and clean code.
          </p>
        </div>
        <div>
          <p className="p"> My interests and future plans?</p>
          <p>
            Currently I am learning Next.js to develop well-designed
            Applications and layout systems, In the future I want to learn
            node.js, mySQL and backend tools to be a fullstack developer.
            learning LLM and machine leaning is also one of my career objects in
            order to train AI models.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
