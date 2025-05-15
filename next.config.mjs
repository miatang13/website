/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/blog',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
