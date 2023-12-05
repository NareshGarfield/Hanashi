module.exports = {
    reactStrictMode: true,
    images: {
      domains: [
        "res.cloudinary.com",
        "avatars.githubusercontent.com",
        "lh3.googleusercontent.com",
        "i.pinimg.com"
      ]
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Pooz',
              value: 'Hanashi'
            }
          ]
        }
      ]
    }
  };