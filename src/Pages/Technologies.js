import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    c,
    tailwind,
    bootstrap,
    cSh,
    vscode,
    git,
    github,
    docker,
    postman,
    figma,
    rider,
    datagrip,
    platformio,
    astah,
    java,
    NET,
    linux,
    sql,
    scenebuilder,
    intelij,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I am working with
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="HTML" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={react} title="React" alt="React" />
        <img src={c} title="C" alt="C" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwing CSS" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstraps" />
        <img src={cSh} title="C#" alt="C#" />
        <img src={java} title="Java" alt="Java" />
        <img src={NET} title=".NET" alt=".NET" />
        <img src={linux} title="Linux" alt="Linux" />
        <img src={sql} title="SQL" alt="SQL" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={docker} title="Docker" alt="Docker" />
        <img src={postman} title="Postman" alt="Postman" />
        <img src={rider} title="Rider" alt="Rider" />   
        <img src={datagrip} title="DataGrip" alt="DataGrip" />
        <img src={platformio} title="PlatformIO" alt="PlatformIO" />
        <img src={astah} title="Astah" alt="Astah" />  
        <img src={scenebuilder} title="SceneBuilder" alt="SceneBuilder" /> 
        <img src={intelij} title="InteliJ" alt="InteliJ" /> 
    
     </section>
    </main>
  );
}

export default Technologies;
