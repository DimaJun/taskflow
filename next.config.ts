import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	devIndicators: false,
	images: {
		remotePatterns: [{ hostname: 'encrypted-tbn0.gstatic.com', protocol: 'https' }],
	},
};

export default nextConfig;
