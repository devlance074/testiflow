import React from 'react';
import { Testimonial } from '../types';
import StarRating from './StarRating';
import { Calendar, Tag } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  showActions?: boolean;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  showActions = false,
  onApprove,
  onReject 
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-start space-x-4">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
            <StarRating rating={testimonial.rating} readonly size="sm" />
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {testimonial.feedback}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(testimonial.date).toLocaleDateString()}</span>
              </div>
              {testimonial.tags.length > 0 && (
                <div className="flex items-center space-x-1">
                  <Tag className="h-4 w-4" />
                  <div className="flex space-x-1">
                    {testimonial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-cyan-900/30 text-blue-700 dark:text-cyan-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {!testimonial.approved && (
              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded text-xs">
                Pending
              </span>
            )}
          </div>

          {showActions && !testimonial.approved && (
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => onApprove?.(testimonial.id)}
                className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
              >
                Approve
              </button>
              <button
                onClick={() => onReject?.(testimonial.id)}
                className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
              >
                Reject
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;