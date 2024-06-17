"use client"

const CustomGlobe = dynamic(() => import("@/components/CustomGlobe"), { ssr: false });
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Project } from "@/lib/types";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function ProjectGlobe({ projects }: { projects: Project[]}) {
  const [selectedCountry, setSelectedCountry] = useState("");
  console.log(selectedCountry);

  return (
    <div className="flex flex-col gap-2 items-center">
      <CustomGlobe projects={projects} />
			<Select value={selectedCountry} onValueChange={setSelectedCountry}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Choose Country" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="europe">Europe</SelectItem>
					<SelectItem value="Asia">Asia</SelectItem>
					<SelectItem value="australia">Australia</SelectItem>
          <SelectItem value="north america">North America</SelectItem>
          <SelectItem value="south america">South America</SelectItem>
				</SelectContent>
			</Select>
    </div>
  );
}