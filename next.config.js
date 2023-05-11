/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    USER_CREDENCIAL: process.env.USER_CREDENCIAL,
    PASSWORD_CREDENCIAL: process.env.PASSWORD_CREDENCIAL,
    WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER,
  },
}

module.exports = nextConfig
