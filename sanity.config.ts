import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId : "60hsdqhd",
    dataset : "production",
    title: "MyPortfoilio",
    apiVersion : "2023-10-23",
    basePath : "/admin",
    plugins: [deskTool()],
    schema : {
        types : schemas
    }
})
export default config;