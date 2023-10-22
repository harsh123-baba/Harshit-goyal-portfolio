import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';


const config = defineConfig({
    projectId : "60hsdqhd",
    dataset : "production",
    title: "MyPortfoilio",
    appVersion : "2023-10-23",
    basePath : "/admin",
    plugins: [deskTool()],


})
export default config;