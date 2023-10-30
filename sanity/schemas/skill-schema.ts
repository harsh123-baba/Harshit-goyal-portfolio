const skills = {
    name : "skill",
    title : "Skills",
    type : "document",
    fields : [
        {
            name : "programming",
            title : "Programming",
            type : "array",
            of : [
                {
                    title : "programming skills",
                    type : "string"
                }
            ]
            
        },
        {
            name : "tools",
            title : "Tools",
            type : "array",
            of : [
                {
                    title : "tools skills",
                    type : "string"
                }
            ]
        },
        {
            name : "webTechnologies",
            title : "Web Technologies",
            type : "array",
            of : [
                {
                    title : "web skills",
                    type : "string"
                }
            ]
           
        },
    ]
}
export default skills;