import { Project } from '@/types/Project';
import {createClient, groq} from 'next-sanity';


// return type of this function is Project
export default function getProjects() : Promise<Project[]> {
    const client = createClient({
        projectId: "60hsdqhd",
        dataset: "production",
        apiVersion: "2023-10-23",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image" : image.asset->url,
            url,
            content
        }`
    )

}