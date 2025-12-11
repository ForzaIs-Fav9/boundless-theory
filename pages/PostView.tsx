import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../data/content';

export const PostView: React.FC = () => {
  const { sectionId, slug } = useParams<{ sectionId: string; slug: string }>();
  const post = POSTS.find(p => p.slug === slug && p.section === sectionId);

  if (!post) {
     return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Transmission Lost</h2>
        <p className="text-gray-600 mt-2">The article you are looking for does not exist in this timeline.</p>
        <Link to="/" className="text-boundless-accent mt-4 inline-block hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8 border-b border-gray-200 pb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-boundless-accent">Home</Link>
          <span>/</span>
          <Link to={`/${sectionId}`} className="hover:text-boundless-accent capitalize">{sectionId}</Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold text-boundless-text mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-sm text-gray-500">
          <time>{post.date}</time>
          <span className="mx-2">•</span>
          <span className="text-boundless-accent bg-blue-50 px-2 py-0.5 rounded-full capitalize text-xs font-semibold">
            {post.section}
          </span>
        </div>
      </div>

      <div 
        className="prose prose-lg prose-blue max-w-none text-gray-800 font-serif"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      <div className="mt-16 pt-8 border-t border-gray-200">
         <Link to={`/${sectionId}`} className="text-boundless-accent font-semibold hover:underline">
           ← Back to {sectionId}
         </Link>
      </div>
    </article>
  );
};