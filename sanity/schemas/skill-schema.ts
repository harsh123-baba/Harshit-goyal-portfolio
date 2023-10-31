const tools = {
    name : "tool",
    title : "Tools",
    type : "document",
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string',
        },
        {
            name : "skill",
            title : "skills",
            type : 'array',
            of : [{type : "string"}]
        }
    ]
}

export default tools;