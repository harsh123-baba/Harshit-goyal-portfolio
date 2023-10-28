
export default async function AboutPage(){
    return (
        <div>
            <h1 className="text-3xl font-extrabold">
                Hello I'll help you to know    &nbsp;
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                    About  &nbsp;
                </span> 
                <span className="bg-gradient-to-l from-orange-200 to-red-600 bg-clip-text text-transparent">
                    Harshit Goyal 
                </span>
            </h1>

            <p className="mt-3 text-xl text-gray-600">
                Hello Everyone! I'm Harshit Goyal
            </p>
            <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Resume</h2>

            <div className="mt-5 grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>


        </div>

    )
}


