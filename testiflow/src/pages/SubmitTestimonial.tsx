import React, { useState } from 'react';
import { Upload, X, Check } from 'lucide-react';
import StarRating from '../components/StarRating';
import { availableTags } from '../data/mockData';

interface SubmitTestimonialProps {
  onNavigate: (page: string) => void;
}

const SubmitTestimonial: React.FC<SubmitTestimonialProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    rating: 0,
    feedback: '',
    tags: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string>('');

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPhotoPreview(result);
        setFormData({ ...formData, photo: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagToggle = (tag: string) => {
    const newTags = formData.tags.includes(tag)
      ? formData.tags.filter(t => t !== tag)
      : [...formData.tags, tag];
    setFormData({ ...formData, tags: newTags });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.rating && formData.feedback) {
      setIsSubmitted(true);
      // In a real app, this would send data to a backend
      console.log('Testimonial submitted:', formData);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-slate-700">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your testimonial has been submitted successfully. We appreciate your feedback and will review it shortly.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', photo: '', rating: 0, feedback: '', tags: [] });
                  setPhotoPreview('');
                }}
                className="w-full px-6 py-3 bg-blue-600 dark:bg-cyan-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-cyan-700 transition-colors"
              >
                Submit Another
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="w-full px-6 py-3 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Share Your Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We'd love to hear about your experience with our product or service
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-slate-700">
          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              placeholder="Enter your full name"
            />
          </div>

          {/* Photo Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Profile Photo (Optional)
            </label>
            <div className="flex items-center space-x-4">
              {photoPreview ? (
                <div className="relative">
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPhotoPreview('');
                      setFormData({ ...formData, photo: '' });
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : (
                <label className="w-16 h-16 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-full flex items-center justify-center cursor-pointer hover:border-blue-500 dark:hover:border-cyan-500 transition-colors">
                  <Upload className="h-6 w-6 text-gray-400" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              )}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Upload a profile photo to make your testimonial more personal
                </p>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Overall Rating *
            </label>
            <div className="flex items-center space-x-4">
              <StarRating
                rating={formData.rating}
                onRatingChange={(rating) => setFormData({ ...formData, rating })}
                size="lg"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {formData.rating > 0 && `${formData.rating} out of 5 stars`}
              </span>
            </div>
          </div>

          {/* Feedback */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Feedback *
            </label>
            <textarea
              required
              rows={5}
              value={formData.feedback}
              onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white resize-none"
              placeholder="Share your experience, what you liked, and how it helped you..."
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {formData.feedback.length}/500 characters
            </p>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Related Topics (Optional)
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    formData.tags.includes(tag)
                      ? 'bg-blue-100 dark:bg-cyan-900/30 text-blue-700 dark:text-cyan-300 border-2 border-blue-500 dark:border-cyan-500'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 border-2 border-transparent hover:border-gray-300 dark:hover:border-slate-500'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.name || !formData.rating || !formData.feedback}
            className="w-full px-6 py-3 bg-blue-600 dark:bg-cyan-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Submit Testimonial
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitTestimonial;