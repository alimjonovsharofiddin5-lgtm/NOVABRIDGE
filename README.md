# NOVABRIDGE - AI-Powered Educational Platform

![NOVABRIDGE](https://img.shields.io/badge/Status-Beta-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen)

## 🚀 Overview

NOVABRIDGE is an AI-powered educational platform that combines:
- 🎓 Personalized AI tutoring
- 📚 Digital library with thousands of resources
- 🧪 3D virtual labs for experiments
- 🎯 University recommendation AI
- 💼 Freelance job marketplace
- 🛍️ Digital products marketplace

## 📋 Features

### 🤖 AI Education
- AI Teachers available 24/7
- Homework help and explanations
- Quiz generator
- Exam preparation
- 3D virtual labs (Physics, Chemistry, Biology)
- Digital library access

### 🎓 University AI
- University recommendations based on grades
- Admission probability calculator
- Tuition cost analysis
- Scholarship finder

### 💻 Freelance Jobs
- Web development projects
- Graphic design gigs
- Video editing opportunities
- Writing projects
- Programming tasks

### 🛍️ Marketplace
- Buy/sell website templates
- Share AI prompts
- Sell freelance services
- Digital products marketplace

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Internationalization**: i18next
- **Dark Mode**: next-themes

### Backend (Coming Soon)
- Node.js/Express
- MongoDB
- Firebase Authentication
- OpenAI API
- Cloudinary (for images)

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/alimjonovsharofiddin5-lgtm/NOVABRIDGE.git
cd NOVABRIDGE

# Install dependencies
npm install
# or
yarn install

# Create .env.local file
cp .env.example .env.local

# Add your environment variables
# Edit .env.local with your Firebase and API credentials

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🌍 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# API
NEXT_PUBLIC_API_URL=http://localhost:3001

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# OpenAI
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_key
```

## 📁 Project Structure

```
NOVABRIDGE/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── login/               # Login page
│   ├── register/            # Registration page
│   └── dashboard/           # Dashboard pages
│       ├── page.tsx
│       ├── courses/
│       ├── tutor/
│       ├── labs/
│       ├── marketplace/
│       ├── university/
│       └── jobs/
├── components/              # Reusable components
│   ├── landing/            # Landing page components
│   ├── dashboard/          # Dashboard components
│   ├── auth/               # Authentication components
│   ├── Navigation.tsx      # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── Providers.tsx       # Theme provider
├── lib/                    # Utility functions
│   ├── api.ts             # API endpoints
│   ├── axios.ts           # Axios client
│   ├── i18n.ts            # i18next setup
│   ├── auth-store.ts      # Auth state
│   ├── course-store.ts    # Course state
│   ├── ui-store.ts        # UI state
│   └── language-store.ts  # Language state
├── public/                # Static files
│   └── locales/          # Translation files
├── styles/               # Global styles
└── next.config.js        # Next.js config
```

## 📄 Pages

### Public Pages
- `/` - Landing page with features and pricing
- `/login` - User login
- `/register` - User registration

### Dashboard Pages (Protected)
- `/dashboard` - Main dashboard
- `/dashboard/courses` - My courses
- `/dashboard/tutor` - AI tutor chat
- `/dashboard/labs` - 3D virtual labs
- `/dashboard/marketplace` - Digital marketplace
- `/dashboard/university` - University AI
- `/dashboard/jobs` - Freelance jobs

## 🌐 Supported Languages

- 🇺🇸 English
- 🇺🇿 Uzbek (Cyrillic)
- 🇷🇺 Russian

## 🔐 Authentication

Currently using Firebase Authentication with support for:
- Email/Password
- Google Sign-In
- GitHub Sign-In (coming soon)

## 📱 Responsive Design

- Mobile-first approach
- Fully responsive on all devices
- Dark mode support
- Smooth animations and transitions

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build Docker image
docker build -t novabridge .

# Run container
docker run -p 3000:3000 novabridge
```

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@novabridge.com or open an issue on GitHub.

## 🔍 Future Features

- [ ] Mobile app (React Native)
- [ ] Video course platform
- [ ] Live class sessions
- [ ] Community forum
- [ ] Gamification system
- [ ] AI-powered homework grading
- [ ] Virtual internships
- [ ] Career mentorship
- [ ] Payment integration
- [ ] Analytics dashboard

## 👨‍💻 Author

**NOVABRIDGE Team**
- GitHub: [@alimjonovsharofiddin5-lgtm](https://github.com/alimjonovsharofiddin5-lgtm)

## 🙏 Acknowledgments

- Next.js team
- Tailwind CSS
- Framer Motion
- Firebase
- OpenAI

---

**Made with ❤️ by NOVABRIDGE Team**
