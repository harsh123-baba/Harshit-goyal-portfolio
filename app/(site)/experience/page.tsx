
export default function ExperiencePage() {
    return (
        <div>
            <h1 className="text-5xl text-gray-800 font-weight-500 pb-10">Harshit&apos;s Experience</h1>
            <ol className="relative border-l border-gray-200">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                        <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 text-2xl md:m-2">Larsen & Toubro <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span></h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">July-2022 - Present</time>
                    
                    <ul className="list-disc mb-4 text-base font-normal text-gray-500">
                        <li>
                            Responsible to build and maintain highly scaleable,reliable, optimized platforms.
                        </li>
                        <li>
                            Engaged in network architecture design, installation, and configuration of data center monitoring tools, while also managing the deployment and maintenance of REST APIs on a single-core server with minimal downtime.
                        </li>
                        <li>
                            An integral member of the Software as a Service (SaaS) Product Development Team, focused on the incorporation of cloud technologies and services.
                        </li>
                    </ul>
                  
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                        <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 text-2xl">CDTS Bikaner</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">May 2021 - June 2021</time>
                    
                        <ul className="list-disc text-base font-normal text-gray-500">
                            <li>
                            Developed two user-friendly websites with Django as the backend and utilized Jinja templates forthe frontend.
                            </li>
                            <li>
                            Applied Object-Oriented Programming (OOP) principles and administered the Django admin panel to facilitate adaptable management.
                            </li>
                        </ul>
                    
                </li>
               
            </ol>

        </div>
    )
}
