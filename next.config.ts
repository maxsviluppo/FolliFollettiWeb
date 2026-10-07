import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

/** Cartella FolliFollettiWeb (evita che Next usi la root padre per i lockfile). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
