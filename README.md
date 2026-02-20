# ClassConnectLive 🎓

A real-time classroom management and collaboration platform built with modern web technologies. Designed for educators and students to connect, communicate, and collaborate seamlessly.

## ✨ Features

### Core Functionality
- **Real-time Communication** - WebSocket-powered live updates for instant messaging and notifications
- **User Authentication** - Secure login system with Passport.js and session management
- **Responsive Design** - Mobile-first approach ensuring seamless experience across all devices
- **Interactive Dashboard** - Comprehensive overview of classes, assignments, and activities

### Technical Highlights
- **Type-Safe Database Queries** - Drizzle ORM with PostgreSQL for reliable data management
- **Modern UI Components** - Built with Radix UI primitives and TailwindCSS
- **Smooth Animations** - Framer Motion for polished user interactions
- **Form Validation** - Zod schema validation with React Hook Form
- **Data Visualization** - Interactive charts with Recharts

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, TailwindCSS, Framer Motion |
| **Backend** | Node.js, Express, WebSockets |
| **Database** | PostgreSQL (Neon Serverless), Drizzle ORM |
| **Authentication** | Passport.js, Express Session |
| **UI Components** | Radix UI, Lucide Icons, Embla Carousel |
| **Validation** | Zod, React Hook Form |
| **Build Tools** | Vite, ESBuild, PostCSS |

## 📁 Project Structure

```
ClassConnectLive/
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
├── server/              # Express backend
│   ├── routes/          # API endpoints
│   ├── middleware/      # Custom middleware
│   └── index.ts         # Server entry point
├── shared/              # Shared types and utilities
│   └── schema.ts        # Database schema definitions
├── drizzle.config.ts    # Database configuration
├── tailwind.config.ts   # TailwindCSS configuration
└── vite.config.ts       # Vite bundler configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+ (or Neon serverless account)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TougfGunner/ClassConnectLive.git

# Navigate to project directory
cd ClassConnectLive

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with the following variables:

```env
DATABASE_URL=postgresql://username:password@host:5432/database
SESSION_SECRET=your-secure-session-secret
NODE_ENV=development
```

## 🎯 Key Technical Decisions

1. **Monorepo Structure** - Shared types between frontend and backend eliminate type mismatches and reduce bugs
2. **Drizzle ORM** - Chosen for its excellent TypeScript support and type-safe query building
3. **Vite** - Fast HMR (Hot Module Replacement) significantly improves developer experience
4. **Radix UI** - Accessible, unstyled components that integrate perfectly with TailwindCSS
5. **WebSockets** - Enable real-time features essential for classroom collaboration

## 📈 Future Improvements

- [ ] Add comprehensive unit and integration tests with Vitest
- [ ] Implement CI/CD pipeline with GitHub Actions
- [ ] Add Docker containerization for easier deployment
- [ ] Implement caching layer with Redis
- [ ] Add video conferencing integration
- [ ] Performance optimization with React Query caching

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**TougfGunner**
- GitHub: [@TougfGunner](https://github.com/TougfGunner)

---

⭐ If you found this project helpful, please consider giving it a star!
