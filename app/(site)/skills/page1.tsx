import { getSkills } from "@/sanity/sanity-utils"

export default async function SkillsPage() {
    const skills = await getSkills();
    console.log(skills);

    return (
        <div>
            <h1 className="text-xl font-extrabold text-center justify-between">
                What
                <span className="bg-gradient-to-l from-green-400 to-yellow-600 bg-clip-text text-transparent">
                    &nbsp;Harshit &nbsp;
                </span>
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                    knows
                </span>
            </h1>

            <div className="p-4 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 flex-wrap">
                <div className="p-2">
                    <h3 className="text text-lg font-bold">My technical skills are</h3>
                    <p className="text-justify">
                        I posses strong proficiency in programming languages such as C++, Python, JavaScript along with possessing an in-depth understanding of data structures and algorithms.
                        Additionally, I have acquired externsive knowlege in web development technologies, including HTML, CSS, Javascript as well as frameworks and libraries like ReactJS, NextJS, TypescriptJS.
                        I successfully implemented these skills to develop diverse projects such as Fixfd, Cloud management portal, Desktop as a service admin portal to manage virtual desktops, realtime pizza delivery app using socket.io, perosonal portfolio using next js, and user friendly sites using python django.

                    </p>
                </div>
                <div className="p-2">
                    <b>Programming Langages</b>
                    <p className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                        • C++  • Javascript  • Python
                    </p>
                    <b>Web Technologies</b>
                    <p className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                        • NodeJS  • ExpressJS  • JavaScript  • ReactJS  • TypeScript  • NextJS  • AJAX • JWT • REST APIs • Bootstrap
                    </p>
                    <b>Databases</b>
                    <p className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                        • MYSQL  • MongoDB
                    </p>
                    <b>Tools & Others</b>
                    <p className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                        • Git  • Nginx  • Linux  • Azure  • AWS  • LibreNMS  • ApacheJmeter • NetStorm  • REST APIs • Bootstrap
                    </p>
                </div>
            </div>

        </div>

    )
}


