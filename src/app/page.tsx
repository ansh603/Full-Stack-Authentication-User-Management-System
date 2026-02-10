'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">🔐 AuthSystem</h1>
            </div>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Full-Stack Authentication
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              & User Management
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            A production-ready authentication system built with Next.js 13, TypeScript, MongoDB, and JWT.
            Secure, scalable, and easy to integrate.
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push('/signup')}
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => router.push('/login')}
              className="px-8 py-4 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Login
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🔐"
            title="Secure Authentication"
            description="JWT-based authentication with httpOnly cookies for maximum security"
          />
          <FeatureCard
            icon="📧"
            title="Email Verification"
            description="Token-based email verification system to ensure valid user accounts"
          />
          <FeatureCard
            icon="🔒"
            title="Protected Routes"
            description="Middleware-based route protection to secure your application"
          />
          <FeatureCard
            icon="👤"
            title="User Profiles"
            description="Dynamic user profile pages with personalized information"
          />
          <FeatureCard
            icon="⚡"
            title="Fast & Scalable"
            description="Built on Next.js 13 App Router for optimal performance"
          />
          <FeatureCard
            icon="🎨"
            title="Modern UI"
            description="Clean, responsive interface styled with Tailwind CSS"
          />
        </div>

        {/* Tech Stack */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Built with Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechBadge name="Next.js 13" />
            <TechBadge name="TypeScript" />
            <TechBadge name="MongoDB" />
            <TechBadge name="JWT" />
            <TechBadge name="Tailwind CSS" />
            <TechBadge name="Bcrypt" />
            <TechBadge name="Nodemailer" />
            <TechBadge name="Mongoose" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Create your account now and experience secure authentication
          </p>
          <button
            onClick={() => router.push('/signup')}
            className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Create Account
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-700 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>Built with ❤️ using Next.js, TypeScript, and MongoDB</p>
            <p className="mt-2">
              <a
                href="https://github.com/ansh603/Full-Stack-Authentication-User-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all transform hover:scale-105">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center">
      <p className="text-white font-semibold">{name}</p>
    </div>
  );
}
