import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { SECTIONS, RECENT_UPDATES } from '../data/content';

export const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
      {/* Main Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {SECTIONS.map((section) => (
          <Card
            key={section.id}
            title={section.title}
            description={section.description}
            to={`/${section.id}`}
          />
        ))}
      </section>

      {/* Sidebar Updates */}
      <aside>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
          <h3 className="text-lg font-bold font-display text-boundless-text mb-4 border-b border-gray-100 pb-2">
            Recent updates
          </h3>
          <ul className="space-y-3">
            {RECENT_UPDATES.map((post) => (
              <li key={post.id}>
                <Link 
                  to={`/${post.section}/${post.slug}`}
                  className="block group"
                >
                  <span className="block text-boundless-accent font-medium group-hover:underline transition-all">
                    {post.title}
                  </span>
                  <span className="text-xs text-gray-400 block mt-0.5">{post.date}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-4 border-t border-gray-100">
             <p className="text-sm text-gray-500">
               Want to contribute? Check out the <Link to="/about" className="text-boundless-accent hover:underline">About</Link> section.
             </p>
          </div>
        </div>
      </aside>
    </div>
  );
};