import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  to: string;
}

export const Card: React.FC<CardProps> = ({ title, description, to }) => {
  return (
    <article className="bg-white p-5 rounded-lg shadow-[0_6px_18px_rgba(2,6,23,0.04)] hover:shadow-[0_10px_25px_rgba(2,6,23,0.08)] transition-shadow duration-300 h-full border border-transparent hover:border-gray-100">
      <h3 className="text-lg font-bold font-display text-boundless-text mb-2">
        <Link to={to} className="hover:text-boundless-accent transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </article>
  );
};