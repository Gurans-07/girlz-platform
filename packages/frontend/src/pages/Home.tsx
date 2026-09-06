import { Link } from 'react-router-dom'
import { Heart, MessageCircle, Share2, Sparkles } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            💜 Girlz
          </div>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-purple-600">Login</button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full">Sign Up</button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-8">
          <Sparkles className="w-16 h-16 text-purple-600" />
        </div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Welcome to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Girlz</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A social media platform built for women, by women. Connect, create, and celebrate together.
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition">
          Get Started Free
        </button>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Amazing Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: 'Connect',
              description: 'Build genuine connections with women around the world'
            },
            {
              icon: <MessageCircle className="w-8 h-8" />,
              title: 'Share',
              description: 'Post photos, videos, reels, and stories with your community'
            },
            {
              icon: <Share2 className="w-8 h-8" />,
              title: 'Grow',
              description: 'Reach your audience and build your personal brand'
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-purple-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home