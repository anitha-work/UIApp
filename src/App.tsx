import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">React + Tailwind CSS</h1>
          <p className="text-gray-600 mt-1">Latest versions with modern styling</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to your App</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A modern React application with Tailwind CSS styling. Build beautiful, responsive UIs with ease.
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Click me: {count}
          </button>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Fast', desc: 'Lightning-fast performance with React' },
            { title: 'Responsive', desc: 'Mobile-first responsive design' },
            { title: 'Styled', desc: 'Beautiful UI with Tailwind CSS' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to build?</h3>
          <p className="text-gray-600 mb-6">Start customizing your app now with React and Tailwind CSS</p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Get Started
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p>&copy; 2026 Your App. Built with React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App