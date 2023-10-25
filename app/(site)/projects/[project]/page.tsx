
import { getProject } from "@/sanity/sanity-utils";
import {PortableText} from '@portabletext/react';
type Props = {
    params: { project: string }
}
import Image from "next/image";
export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    console.log("Image ic",project.image)
    return( 
    <div>
        <header className="flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project.name}</h1>
            <a 
                href={project.url} 
                title="view project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
                >
                
                View Project
            </a>
        </header>
        {/* content goes here */}
        <div className="text-lg text-grey-700 mt-5">
            <PortableText value = {project.content} />
        </div>
        {/* image comes here */}
        <div>
            {/* <Image src = {project.image} alt={project.name} width={450} height={300} /> */}
            <img 
                src={project.image} 
                alt={project.name}
                className="mt-10 border-2 border-gray-200 object-cover rounded-xl"    
            />
        </div>
    </div>
)}

