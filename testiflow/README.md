# TestiFlow - Feedback & Testimonial Collector

A modern, lightweight web application for collecting, managing, and displaying customer testimonials and feedback. Built with React, TypeScript, and Tailwind CSS.

![TestiFlow](https://testifloww.netlify.app)

## ✨ Features

- **Landing Page** - Beautiful introduction with key features and call-to-action
- **Submit Testimonials** - Easy-to-use form with photo upload, star ratings, and tagging
- **Admin Dashboard** - Comprehensive management interface with filtering and search
- **Display Widget** - Elegant testimonial showcase with sorting and filtering options
- **Dark/Light Mode** - Seamless theme switching with smooth transitions
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Modern Design** - Clean UI with soft shadows, rounded corners, and professional typography

## 🚀 Live Demo

Visit the live application: [https://testifloww.netlify.app](https://testifloww.netlify.app)

## 📋 Requirements

Before installing TestiFlow, ensure you have the following installed on your system:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn** (version 1.22 or higher)
- **Git** (for cloning the repository)

## 🛠️ Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/devlance074/testiflow.git
cd testiflow
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start Development Server

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

### 5. Preview Production Build

Using npm:
```bash
npm run preview
```

Or using yarn:
```bash
yarn preview
```

## 🎨 Design System

### Color Palette

**Light Mode:**
- Primary: Soft Blue (#3B82F6)
- Secondary: Cyan (#22D3EE)
- Background: Light Gray (#F9FAFB)
- Text: Dark Gray (#1F2937)

**Dark Mode:**
- Primary: Cyan (#22D3EE)
- Secondary: Blue (#3B82F6)
- Background: Deep Navy (#0F172A)
- Text: Light Gray (#F9FAFB)

### Typography
- Font Family: System fonts for optimal performance
- Line Height: 150% for body text, 120% for headings
- Font Weights: Regular (400), Medium (500), Bold (700)

## 📁 Project Structure

```
testiflow/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   ├── context/            # React context providers
│   ├── data/               # Mock data and constants
│   ├── pages/              # Main application pages
│   ├── types/              # TypeScript type definitions
│   └── main.tsx            # Application entry point
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_APP_TITLE=TestiFlow
VITE_CONTACT_EMAIL=info@devlance.org
```

### Tailwind CSS

The application uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

TestiFlow includes a built-in dark mode toggle that:
- Automatically detects system preference
- Persists user choice in localStorage
- Provides smooth transitions between themes

## 📧 Support & Contact

For support, questions, or feedback, please contact us at: **info@devlance.org**

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Thank You!

Thank you for downloading and using TestiFlow! We appreciate your support and trust in our application.

### Help Us Grow! 🌱

If you find TestiFlow useful, please help us grow the developer marketplace by sharing **[devlance.org](https://devlance.org)** with your network. Your support helps connect talented developers with amazing projects and contributes to a thriving development community.

**Share devlance.org and help developers find their next opportunity!**

---

**Built with ❤️ by the DevLance community**

For more amazing projects and to connect with talented developers, visit [devlance.org](https://devlance.org)