import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SECTIONS, POSTS } from '../data/content';
import { SectionType } from '../types';

export const Section: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  
  // Validate section
  const sectionInfo = SECTIONS.find(s => s.id === sectionId);
  const sectionPosts = POSTS.filter(p => p.section === sectionId);

  if (!sectionInfo) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Section not found</h2>
        <Link to="/" className="text-boundless-accent mt-4 inline-block hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div>
       <div className="mb-10">
         <Link to="/" className="text-sm text-gray-500 hover:text-boundless-accent mb-4 inline-block">← Back to Home</Link>
         <h1 className="text-3xl md:text-4xl font-display font-bold text-boundless-accent mb-2">
           {sectionInfo.title}
         </h1>
         <p className="text-lg text-gray-600">{sectionInfo.description}</p>
       </div>

       <div className="space-y-6">
         {sectionPosts.length > 0 ? (
           sectionPosts.map(post => (
             <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <h2 className="text-xl font-bold mb-2">
                 <Link to={`/${sectionId}/${post.slug}`} className="text-boundless-text hover:text-boundless-accent">
                   {post.title}
                 </Link>
               </h2>
               <div className="text-sm text-gray-400 mb-3">{post.date}</div>
               {post.description && <p className="text-gray-600">{post.description}</p>}
               <Link to={`/${sectionId}/${post.slug}`} className="inline-block mt-4 text-sm font-semibold text-boundless-accent hover:underline">
                 Read more →
               </Link>
             </article>
           ))
         ) : (
           <div className="p-8 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300 text-gray-500">
             <p>No entries found in this sector of the universe yet.</p>
             <p className="text-sm mt-2">Check back later or ask the AI assistant.</p>
           </div>
         )}
       </div>
    </div>
  );
};