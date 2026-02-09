# Full-Stack Authentication & User Management System

A production-ready authentication system built with **Next.js 13**, **TypeScript**, **MongoDB**, and **JWT**. Features include user registration, email verification, secure login/logout, and protected routes.

![Next.js](https://img.shields.io/badge/Next.js-13.4.7-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.2-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based authentication with httpOnly cookies
- 📧 **Email Verification** - Email verification system with token-based validation
- 🔒 **Protected Routes** - Middleware-based route protection
- 👤 **User Profiles** - Dynamic user profile pages
- 🎨 **Modern UI** - Clean, responsive interface with Tailwind CSS
- 🔑 **Password Security** - Bcrypt password hashing
- ⚡ **Fast & Scalable** - Built on Next.js 13 App Router
- 🌐 **API Routes** - RESTful API endpoints for all auth operations

## 🛠️ Tech Stack

- **Framework:** Next.js 13.4.7 (App Router)
- **Language:** TypeScript 5.1.6
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (jsonwebtoken) + bcryptjs
- **Email Service:** Nodemailer with Mailtrap (dev) / configurable for production
- **Styling:** Tailwind CSS 3.3.2
- **Notifications:** React Hot Toast

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18+ installed
- **MongoDB Atlas** account (or local MongoDB instance)
- **Mailtrap** account for email testing (or configure production email service)

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/ansh603/Full-Stack-Authentication-User-Management-System.git
cd Full-Stack-Authentication-User-Management-System
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Configure Environment Variables

Create a \`.env\` file in the root directory:

\`\`\`bash
cp .env.example .env
\`\`\`

Update the \`.env\` file with your credentials:

\`\`\`env
# MongoDB Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# JWT Secret (generate with: openssl rand -base64 32)
TOKEN_SECRET=your_super_secret_jwt_token_here

# Application Domain
DOMAIN=http://localhost:3000

# Email Service (Mailtrap for development)
MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=your_mailtrap_user
MAILTRAP_PASS=your_mailtrap_password
EMAIL_FROM=noreply@yourdomain.com
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

\`\`\`
├── src/
│   ├── app/                    # Next.js 13 App Router
│   │   ├── api/               # API Routes
│   │   │   └── users/        # User-related endpoints
│   │   ├── login/            # Login page
│   │   ├── signup/           # Signup page
│   │   ├── profile/          # User profile pages
│   │   ├── verifyemail/      # Email verification page
│   │   └── page.tsx          # Home page
│   ├── dbConfig/             # Database configuration
│   ├── helpers/              # Utility functions
│   │   ├── mailer.ts        # Email service
│   │   └── getDataFromToken.ts  # JWT utilities
│   ├── models/              # Mongoose models
│   │   └── userModel.js     # User schema
│   └── middleware.ts        # Route protection middleware
├── public/                  # Static assets
├── .env.example            # Environment variables template
└── vercel.json            # Vercel deployment config
\`\`\`

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | \`/api/users/signup\` | Register new user |
| POST | \`/api/users/login\` | User login |
| GET | \`/api/users/logout\` | User logout |
| GET | \`/api/users/me\` | Get current user data |
| POST | \`/api/users/verifyemail\` | Verify email with token |

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository

3. **Configure Environment Variables:**
   Add all variables from \`.env.example\` in Vercel dashboard:
   - \`MONGO_URI\`
   - \`TOKEN_SECRET\`
   - \`DOMAIN\` (set to your Vercel URL)
   - \`MAILTRAP_HOST\`, \`MAILTRAP_PORT\`, \`MAILTRAP_USER\`, \`MAILTRAP_PASS\`
   - \`EMAIL_FROM\`

4. **Deploy:**
   Vercel will automatically build and deploy your application.

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🔐 Security Features

- ✅ Password hashing with bcryptjs (10 salt rounds)
- ✅ JWT tokens stored in httpOnly cookies
- ✅ Token expiration (1 hour for email verification)
- ✅ Environment variables for sensitive data
- ✅ Middleware-based route protection
- ✅ MongoDB injection protection via Mongoose

## 🧪 Testing Email Functionality

For development, this project uses **Mailtrap** to test email functionality without sending real emails:

1. Sign up at [mailtrap.io](https://mailtrap.io)
2. Get your SMTP credentials
3. Add them to your \`.env\` file
4. All emails will appear in your Mailtrap inbox

## 📸 Screenshots

![Application Demo](./explainer-diagram.png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ansh Ghanshyala**
- GitHub: [@ansh603](https://github.com/ansh603)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Email testing with [Mailtrap](https://mailtrap.io/)

---

⭐ If you find this project helpful, please give it a star!