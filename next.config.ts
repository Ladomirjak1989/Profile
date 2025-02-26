/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com"], // Дозволяємо Cloudinary для зображень
  },
  async headers() {
    return [
      {
        source: "/(.*)\\.pdf$", // Дозволяємо завантаження PDF
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment", // Змушує браузер завантажувати PDF
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;


