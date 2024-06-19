"use client";

import Globe from "react-globe.gl";
import { GlobeMethods } from "react-globe.gl";
import { useCallback, useEffect, useRef, useState } from "react";
import { Country, Project } from "@/lib/types";

const colours = ["#06b6d4", "#3b82f6", "#6366f1"];

export default function CustomGlobe({ projects, selectedCountry }: { projects: Project[], selectedCountry: Country | undefined}) {
	const globeEl = useRef<GlobeMethods>();
	const [activeProject, setActiveProject] = useState<Project>();

  useEffect(() => {
    const MAP_CENTER = { lat: 0, lng: 0, altitude: 1.5 };
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current?.pointOfView(MAP_CENTER, 0);
    }
    
  })

  useEffect(() => {
    const coordinates = {
      lat: selectedCountry?.lat,
      lng: selectedCountry?.lng
    }
    if (globeEl.current) {
      globeEl.current?.pointOfView(coordinates);
    }
  }, [selectedCountry])

  if (typeof window !== "undefined") {
    console.log("How did we get here");
  }

  console.log(activeProject);

	return (
		<Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
			ref={globeEl}
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
      labelColor={useCallback(()=> colours[2], [])}
      labelDotRadius={0.2}
      labelAltitude={0.05}
      arcColor={colours[3]}
      ant
		/>
	);
}
