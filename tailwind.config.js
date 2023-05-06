/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'red': '#ff0000',
        'green': '#00ff00',
        'blue': '#0000ff',
        'yellow': '#ffff00',
        'purple': '#800080',
        'grey' : '#64748b',
        'slate' : '#e2e8f0',
        'home' : '#ede9fe',
        'home1': '#64748b',
        'projects' :'#ddd6fe'
      }
    },
  },
  plugins: [],
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // Set the limit to 8 KiB (or any other value)
          },
        },
      ],
    }
  ],
}

