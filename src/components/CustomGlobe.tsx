"use client";


import Globe from "react-globe.gl";
import { useRef } from "react";
import { useState } from "react";
import { Project } from "@/lib/types";

const colours = ["#06b6d4", "#3b82f6", "#6366f1"];

export default function CustomGlobe({ projects }: { projects: Project[]}) {
	const globeRef = useRef();
	const [activeProject, setActiveProject] = useState<Project>();
  console.log(activeProject);

  if (typeof window !== "undefined") {
    console.log("How did we get here");
  }

	return (
		<Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
			ref={globeRef}
			height={800}
			backgroundColor="rgba(0,0,0,0)"
			labelsData={projects}
      atmosphereColor={colours[1]}
      showAtmosphere={false}
			onLabelClick={(label) => {
				setActiveProject(label as Project)
			}}
      labelText={"name"}
      labelSize={0.2}
      labelColor={() => colours[2]}
      labelDotRadius={0.2}
      labelAltitude={0.05}
      arcColor={colours[3]}
		/>
	);
}
