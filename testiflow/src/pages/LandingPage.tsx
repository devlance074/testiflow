import React from 'react';
import { MessageSquare, Star, Filter, Shield, Zap, Users } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Easy Collection',
      description: 'Simple form for customers to submit testimonials with photos and ratings'
    },
    {
      icon: <Filter className="h-8 w-8" />,
      title: 'Smart Filtering',
      description: 'Organize testimonials by tags, ratings, and keywords for easy management'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Approval System',
      description: 'Review and approve testimonials before they go live on your website'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Display Widgets',
      description: 'Beautiful, responsive testimonial widgets for your website'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Testimonials Collected' },
    { number: '500+', label: 'Happy Businesses' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Collect & Showcase
              <span className="text-blue-600 dark:text-cyan-400 block">
                Customer Testimonials
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Build trust and credibility with a powerful testimonial collection and display system. 
              Gather feedback, manage reviews, and showcase social proof that converts visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('submit')}
                className="px-8 py-3 bg-blue-600 dark:bg-cyan-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-cyan-700 transition-colors shadow-lg"
              >
                Submit Testimonial
              </button>
              <button
                onClick={() => onNavigate('display')}
                className="px-8 py-3 border-2 border-blue-600 dark:border-cyan-600 text-blue-600 dark:text-cyan-600 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-cyan-900/20 transition-colors"
              >
                View Examples
              </button>
            </div>
          </div>
        </div>

        {/* Floating testimonial preview */}
        <div className="max-w-md mx-auto px-4 pb-16">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
                alt="Customer"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              "This product has completely transformed my workflow. The attention to detail is outstanding!"
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A complete solution for collecting, managing, and displaying customer testimonials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-cyan-900/30 text-blue-600 dark:text-cyan-400 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Collecting Testimonials?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses using TestiFlow to build trust and grow their customer base
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('submit')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Free
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;