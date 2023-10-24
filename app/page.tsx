import getProjects from "@/sanity/sanity-utils"
import Image from "next/image";

export default async function Home() {
  // projects is an array for Project type Project type is coming from getProject function return
  // getProject function returns a promise of type <Project>
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Harshit
        </span>
        !
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Hello Everyone! checkout my projects
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>
      <div className="mt-5 grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          
          <div key={project._id} className="border border-gray-500 rounded-lg p-3">
            {project.image && (
              <Image 
                width = {250} 
                height = {100} 
                src= {project.image}
                alt="eadn" 
                className = "object-cover rounded-lg border border-gray-500"
                loading="lazy"
              />
              // <img src={project.image} alt= {project.alt}/>
             )}
            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}


// in next 12 we have to do all these things dude in next 13 we dont need to do things

// // returns a very specific array of how  next js works
// export function getStaticPaths(){

// }

// // returjn props : array
// export function getStaticProps(){
//   return {

//   }
// }