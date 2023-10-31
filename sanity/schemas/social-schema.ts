const social = {
    name : "social",
    title : "Social",
    type : "document",
    fields : [
        {
        name : "name",
        title : "Name",
        type : "string" 
    },
    {
        name : "url",
        title : "URL",
        type : 'url'
    },
    {
        name : "image",
        title : "Image",
        type : 'image',
        fields : [
            {
                name :'alt',
                title : "Alt",
                type: "string"
            }
        ]   
    }
]
}
export default social;