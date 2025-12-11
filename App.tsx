import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Section } from './pages/Section';
import { PostView } from './pages/PostView';
import { MathAssistant } from './components/MathAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <div className="max-w-2xl mx-auto py-10">
              <h1 className="text-3xl font-display font-bold text-boundless-accent mb-6">About Boundless Theory</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Student. Builder. Calisthenics and math obsessive. This site is my public notebook — derivations, essays, datasets, and creative experiments.
              </p>
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p className="text-gray-600">For collaborations, please use the provided contact channels.</p>
            </div>
          } />
          {/* Dynamic Routes */}
          <Route path="/:sectionId" element={<Section />} />
          <Route path="/:sectionId/:slug" element={<PostView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <MathAssistant />
      </Layout>
    </Router>
  );
};

export default App;