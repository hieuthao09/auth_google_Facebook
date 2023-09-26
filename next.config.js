/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    experimental:{
        appDir:true,
    },
    env:{
        DB_URI: "mongodb://localhost:27017/AccountComicK", 
        NEXTAUTH_SECRET: "codingwithabbas",
        GOOGLE_CLIENT_ID:
        "115828382799-lif60mm716526mfo1vgc8p5vnh4ol1u5.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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",
    }
}

module.exports = nextConfig
