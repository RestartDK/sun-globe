import Image from "next/image";
import dynamic from "next/dynamic";
import { Project } from "@/lib/types";
import ProjectGlobe from "@/components/ProjectGlobe";

const projects: Project[] = [
	{
		name: "New Kaine",
		lat: 51.37238341248132,
		lng: 0.6500127845062521,
		country: "United Kingdom",
	},
	{
		name: "Tylerfedwen",
		lat: 51.565834056559666,
		lng: -3.5182089595264188,
		country: "United Kingdom",
	},
	{
		name: "Ilmer",
		lat: 51.013869015196455,
		lng: -2.2003238089465547,
		country: "United Kingdom",
	},
	{
		name: "Ilmer phase 2",
		lat: 51.0266705516484,
		lng: -0.7959265793092664,
		country: "United Kingdom",
	},
	{
		name: "Royston",
		lat: 54.67820166449043,
		lng: -6.578538748779087,
		country: "United Kingdom",
	},
	{
		name: "High Penn",
		lat: 52.487383550298404,
		lng: 1.3316170444661446,
		country: "United Kingdom",
	},
	{
		name: "Michelmersh",
		lat: 50.482012707574725,
		lng: -4.6092211766924285,
		country: "United Kingdom",
	},
	{
		name: "Highfields",
		lat: 51.89471905256293,
		lng: -4.644945110430252,
		country: "United Kingdom",
	},
	{
		name: "Spriggs",
		lat: 52.62097956476001,
		lng: -1.1732656233948453,
		country: "United Kingdom",
	},
	{
		name: "Pitworthy",
		lat: 53.30913791672192,
		lng: -1.7884999628694722,
		country: "United Kingdom",
	},
	{
		name: "Playters",
		lat: 55.70661436661044,
		lng: -2.9750233318562573,
		country: "United Kingdom",
	},
	{
		name: "Castle Eaton",
		lat: 53.90879129931053,
		lng: -0.6019765938826889,
		country: "United Kingdom",
	},
	{
		name: "Michael Stone",
		lat: 56.99700033254975,
		lng: -4.732835730355198,
		country: "United Kingdom",
	},
	{
		name: "Sellingde",
		lat: 58.151507535655405,
		lng: -4.381273250655407,
		country: "United Kingdom",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				See Our Solar Projects
			</h1>
			<ProjectGlobe projects={projects} />
		</main>
	);
}
