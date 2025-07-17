import { Testimonial } from '../types';

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    feedback: 'This product has completely transformed my workflow. The attention to detail and user experience is outstanding. Highly recommend to anyone looking for quality.',
    tags: ['product', 'UI', 'workflow'],
    date: '2024-01-15',
    approved: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 4,
    feedback: 'Great customer support team. They responded quickly and resolved my issues efficiently. The product itself is solid and reliable.',
    tags: ['support', 'service'],
    date: '2024-01-12',
    approved: true
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    feedback: 'The interface is incredibly intuitive and beautiful. I was able to get started immediately without any learning curve. Fantastic design work!',
    tags: ['UI', 'design', 'product'],
    date: '2024-01-10',
    approved: true
  },
  {
    id: '4',
    name: 'David Thompson',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 4,
    feedback: 'Solid product with good performance. A few minor issues but overall very satisfied with the experience.',
    tags: ['product', 'performance'],
    date: '2024-01-08',
    approved: false
  },
  {
    id: '5',
    name: 'Lisa Wang',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    feedback: 'Outstanding quality and attention to detail. The team clearly cares about their users and it shows in every aspect of the product.',
    tags: ['product', 'quality'],
    date: '2024-01-05',
    approved: true
  }
];

export const availableTags = ['product', 'support', 'UI', 'design', 'performance', 'service', 'quality', 'workflow'];