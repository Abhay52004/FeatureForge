# Project4 - React Web Application

A modern, responsive React application built with Vite, featuring multiple interactive sections including recipes, shopping, weather information, and more. This project demonstrates the use of React Router, API integrations, and Bootstrap for styling.

## 🚀 Features

- **Home Page**: Welcome section with navigation
- **About Page**: Information about the project
- **Contact Page**: Contact form and details
- **Recipes Section**: Search and display recipes using TheMealDB API
- **Shop Section**: Browse and search products using FakeStore API
- **Weather Section**: Get current weather information using OpenWeatherMap API
- **Responsive Design**: Mobile-friendly layout with Bootstrap
- **Fast Development**: Powered by Vite for quick builds and hot reloading

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite
- **Styling**: Bootstrap 5, Custom CSS
- **HTTP Client**: Axios
- **Linting**: ESLint with React hooks and refresh plugins
- **APIs**:
  - TheMealDB API (Recipes)
  - FakeStore API (Products)
  - OpenWeatherMap API (Weather)

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/project4.git
   cd project4
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Add your environment variables in Vercel's dashboard (`REACT_APP_WEATHER_API_KEY`)
3. Deploy automatically on every push

**Note**: The `vercel.json` file is included to handle client-side routing for the single-page application, preventing 404 errors on page refreshes.

## 📝 API Keys

The weather functionality requires an API key from OpenWeatherMap:
- Sign up at [OpenWeatherMap](https://openweathermap.org/api)
- Get your free API key
- Add it to your environment variables as `REACT_APP_WEATHER_API_KEY`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Bootstrap](https://getbootstrap.com/) - The most popular HTML, CSS, and JS library
- [TheMealDB](https://www.themealdb.com/) - Open recipe database
- [FakeStore API](https://fakestoreapi.com/) - Fake store REST API
- [OpenWeatherMap](https://openweathermap.org/) - Weather data API
