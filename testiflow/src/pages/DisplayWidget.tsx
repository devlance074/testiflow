import React, { useState, useMemo } from 'react';
import { Filter, Star, Grid, List } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import { mockTestimonials, availableTags } from '../data/mockData';
import { FilterOptions } from '../types';

const DisplayWidget: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    tags: [],
    sortBy: 'newest'
  });
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  // Only show approved testimonials
  const approvedTestimonials = mockTestimonials.filter(t => t.approved);

  const filteredTestimonials = useMemo(() => {
    let filtered = [...approvedTestimonials];

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      filtered = filtered.filter(t =>
        filters.tags!.some(tag => t.tags.includes(tag))
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'highest-rated':
          return b.rating - a.rating;
        case 'lowest-rated':
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [approvedTestimonials, filters]);

  const handleTagFilter = (tag: string) => {
    const newTags = filters.tags?.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...(filters.tags || []), tag];
    setFilters({ ...filters, tags: newTags });
  };

  const averageRating = useMemo(() => {
    if (filteredTestimonials.length === 0) return 0;
    return filteredTestimonials.reduce((acc, t) => acc + t.rating, 0) / filteredTestimonials.length;
  }, [filteredTestimonials]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Customer Testimonials
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            See what our customers are saying about their experience
          </p>
          
          {/* Stats Summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.round(averageRating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                ({filteredTestimonials.length} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-slate-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Sort */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Sort by:
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              >
                <option value="newest">Newest First</option>
                <option value="highest-rated">Highest Rated</option>
                <option value="oldest">Oldest First</option>
                <option value="lowest-rated">Lowest Rated</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex rounded-lg border border-gray-300 dark:border-slate-600 overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 dark:bg-cyan-600 text-white'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600'
                }`}
              >
                <Grid className="h-4 w-4" />
                <span>Grid</span>
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
                  viewMode === 'masonry'
                    ? 'bg-blue-600 dark:bg-cyan-600 text-white'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600'
                }`}
              >
                <List className="h-4 w-4" />
                <span>Masonry</span>
              </button>
            </div>
          </div>

          {/* Tag Filters */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by category:</p>
              {filters.tags && filters.tags.length > 0 && (
                <button
                  onClick={() => setFilters({ ...filters, tags: [] })}
                  className="text-sm text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300"
                >
                  Clear filters
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filters.tags?.includes(tag)
                      ? 'bg-blue-100 dark:bg-cyan-900/30 text-blue-700 dark:text-cyan-300 border-2 border-blue-500 dark:border-cyan-500'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 border-2 border-transparent hover:border-gray-300 dark:hover:border-slate-500'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {filters.tags && filters.tags.length > 0 ? (
              <>Showing {filteredTestimonials.length} testimonials for {filters.tags.join(', ')}</>
            ) : (
              <>Showing all {filteredTestimonials.length} testimonials</>
            )}
          </p>
        </div>

        {/* Testimonials Display */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'columns-1 md:columns-2 lg:columns-3 gap-6'
        }`}>
          {filteredTestimonials.length > 0 ? (
            filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className={viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No testimonials found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters to see more testimonials
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        {filteredTestimonials.length > 0 && (
          <div className="text-center mt-16 py-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Happy Customers
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience the difference that quality service makes. Start your journey with us today.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Get Started
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayWidget;