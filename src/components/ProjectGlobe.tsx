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
import { Country } from "@/lib/types";

const countries: Country[] = [
	{
		lat: 54.5260,
		lng: 15.2551,
		name: "Europe"
	},
	{
		lat: 34.0479,
		lng: 100.6197,
		name: "Asia"
	},
	{
		lat: 654.5260,
		lng: 105.2551,
		name: "North America"
	}
]

export default function ProjectGlobe({ projects }: { projects: Project[]}) {
  const [selectedCountryName, setSelectedCountryName] = useState<string>();

	function handleCountryChange(name: string) {
		setSelectedCountryName(name);
	}

	const selectedCountry = countries.find(country => country.name === selectedCountryName);

  return (
    <div className="flex flex-col gap-2 items-center">
      <CustomGlobe projects={projects} selectedCountry={selectedCountry} />
			<Select value={selectedCountryName} onValueChange={handleCountryChange}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Choose Country" />
				</SelectTrigger>
				<SelectContent>
					{countries.map((country) => (
						<SelectItem key={country.name} value={country.name}>
							{country.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
    </div>
  );
}