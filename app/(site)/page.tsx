import { getSocials } from "@/sanity/sanity-utils";
import {getProjects} from "@/sanity/sanity-utils"
import Link from "next/link";
import Image from "next/image";
export default async function Home() {
  // projects is an array for Project type Project type is coming from getProject function return
  // getProject function returns a promise of type <Project>
  const projects = await getProjects();
  const socials = await getSocials();
  return (
    <div className="">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Harshit
        </span>
        !
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Hello Everyone! I&apos;m Full Stack Developer
      </p>
      <div className="flex flex-wrap mt-4">
        {
          socials.map(social=>(
            <div key={social._id}>

            
            <a href = {social.url} target="_blank">
            <div className="flex flex-wrap p-1">
              {/* <a href = {social.url}> */}
              <Image 
                src = {social.image}
                alt={social.name}
                width={30}
                height={20}
                className="p-1"
              />
              <span className="p-1">{social.name}</span>
              {/* </a> */}

                </div>
                </a>
                </div>
          ))
        }
      </div>
      <div className="flex flex-wrap p-1">
        <div>
          <a  href = "mailto:harshitgoyal213@gmail.com" className="flex p-1">
            <Image
              src = '/email.jpg'
              alt="email"
              width={25}
              height={20}
              className="p-1"
            />
            harshitgoyal213@gmail.com
          </a>
        
        </div>
        <div className="">
          <p className="flex p-1">
            <Image
              src = '/contact.jpeg'
              alt="Contact"
              width={20}
              height={20}
              className="p-1"
            />
            +91 8058620389
          </p>
        </div>

      </div>
     
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>
      <div className="mt-5 grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
    
        {projects.map((project) => (
          
          <Link
              href = {`projects/${project.slug}`}
              key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-110 hover:border-blue-500 transition">
            
            {project.image && (
              <Image 
                src = {project.image} 
                alt={project.name} 
                className = "object-cover rounded-lg border border-gray-500" 
                width={750}
                height={300} 
              />
              
              // <img className="w-5/6 h-4/6" src={project.image} alt= {project.alt}/>
             )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
            
          </Link>
        ))}
    

      </div>
    </div>
  )
}
