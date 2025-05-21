/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/blog',
                destination: '/',
                permanent: true,
            },
            {
                source: "/work/comic-booklet",
                destination: "/comic-booklet",
                permanent: true,
            },
            {
                source: "/work/conference-teaching-highlights",
                destination: "/conference-teaching-highlights",
                permanent: true,
            },
            {
                source: "/work/g-cafe-bunnies",
                destination: "/g-cafe-bunnies",
                permanent: true,
            }
        ];
    },
};

export default nextConfig;
