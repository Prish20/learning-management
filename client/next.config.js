/** @type {import('next').NextConfig} */

const NextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                port: "",
                pathname: "/**",
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: "",
                pathname: "/**",
            }
        ]
    },
};

module.exports = NextConfig;
