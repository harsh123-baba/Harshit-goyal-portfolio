import Image from "next/image"

export default async function AboutPage() {
    return (
        <div>
            <h1 className="text-3xl font-extrabold">
                Hello I&apos;ll help you to know &nbsp;
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                    About &nbsp;
                </span>
                <span className="bg-gradient-to-l from-yellow-500 via-red-400 to-green-400 bg-clip-text text-transparent">
                    Harshit Goyal
                </span>
            </h1>
            <div className="mt-5 flex items-center justify-between">
                <p className="mt-3 text-xl text-gray-600">
                    Hello Everyone! I&apos;m Harshit Goyal
                </p>
                <a href = {"https://drive.google.com/file/d/18rMrzoiFmdOS2SXaqL_V8J-B8LyDWVGM/view?usp=drive_link"} title = "Resume" target = "_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-white-100 tansisition">Resume</a>
            </div>
            <h2 className="mt-10 font-bold text-gray-700 text-3xl">About Me</h2>

            <div className="mt-5 grid grid-cols-2 gap-4 flex">
                    <span className="pr-4">
                        <Image
                            src="/harshit-about.jpeg"
                            alt="harshitpng"
                            width={700}
                            height={300}
                        />
                    </span>
                    <p className="text-lg text-gray-800">
                        As i am Senior engineer at Larsen & Toubro Data centers and cloud services.
                         i have gained hands on experience in full stack development, cloud computing, and software-as-a-service product development.
                         My current role is, i am part of Product developement team working on SaaS products and cloud services.
                         I have successfully implemented cloud technologies, created a cloud management portal and integrate AWS services with portal,
                         developed a financial web app called fixFD, and also worked on role base access management portal to grant desktop as a service to team with LDAP authentication.
                         My responsiblities includes creating APIs with DB, implementing logics integrating them with the frontend and deploy them with minimal downtime using technologies such as Node.js,
                         Express.js, EJS, jQuery, Ajax, MySQL, Nginx, and more.
                    </p>
            </div>


        </div>

    )
}


