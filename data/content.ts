import { Post, SectionType } from '../types';

export const POSTS: Post[] = [
  {
    id: '1',
    title: "Why imaginary numbers aren't imaginary",
    slug: 'imaginary-numbers',
    section: 'essays',
    date: '2025-12-01',
    description: "A visual-first explanation: think of complex numbers as rotations and scalings on the plane.",
    content: `
      <p class="text-lg text-gray-600 mb-6">A visual-first explanation: think of complex numbers as rotations and scalings on the plane.</p>
      
      <h2 class="text-2xl font-display font-bold text-boundless-accent mt-8 mb-4">Geometric intuition</h2>
      <p class="mb-4 leading-relaxed">Write <code>z = x + iy</code>. Interpreting <code>(x,y)</code> as coordinates, multiplication by <code>i</code> rotates the plane by 90° counterclockwise. So <code>i</code> is not "mystical" — it's a rotation operator.</p>
      
      <h2 class="text-2xl font-display font-bold text-boundless-accent mt-8 mb-4">Algebraic shortcut</h2>
      <p class="mb-4 leading-relaxed">Use polar form: <code>re^{iθ}</code>. Multiplication rotates angles and multiplies radii.</p>
    `
  },
  {
    id: '2',
    title: "Sum of first n odd numbers = n²",
    slug: 'sum-odd-numbers',
    section: 'proofs',
    date: '2025-11-30',
    description: "Visual proof sketch in 4 steps.",
    content: `
      <p class="mb-4">Proof sketch (visual): 1 + 3 + 5 + ... + (2n-1) stacks into an n×n square.</p>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6">
        <ol class="list-decimal list-inside space-y-2">
          <li>Start with 1 (1×1)</li>
          <li>Add 3 to make a 2×2 square (wrapping around the 1)</li>
          <li>Add 5 to make a 3×3 square</li>
          <li>Continue → after n terms you get n×n</li>
        </ol>
      </div>
    `
  },
  {
    id: '3',
    title: "Lo Shu — Uniqueness of 3×3 magic square",
    slug: 'lo-shu',
    section: 'proofs',
    date: '2025-11-29',
    description: "Why there is effectively only one 3x3 magic square.",
    content: `
      <p class="mb-4">Short proof: center is 5, opposite entries pair to 10 → Lo Shu (up to rotation/reflection).</p>
      <pre class="bg-gray-800 text-white p-4 rounded-md font-mono inline-block">
8 1 6
3 5 7
4 9 2
      </pre>
    `
  },
  {
    id: '4',
    title: "Monty Hall — why switching wins",
    slug: 'monty-hall',
    section: 'paradoxes',
    date: '2025-11-25',
    description: "Simple sample-space explanation with diagrams.",
    content: `
      <p class="mb-4">When you pick a door, there is a 1/3 chance you are right, and a 2/3 chance the car is behind one of the other two doors.</p>
      <p class="mb-4">Monty opens a door with a goat. He essentially condenses that 2/3 probability into the single remaining unpicked door.</p>
      <p class="font-bold">Always switch.</p>
    `
  }
];

export const RECENT_UPDATES = POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

export const SECTIONS: { id: SectionType; title: string; description: string }[] = [
  { id: 'essays', title: 'Explain the Universe', description: 'Short lyrical micro-essays that expose the patterns beneath.' },
  { id: 'proofs', title: 'Proof Sketches', description: 'Minimal visual proofs in 6–8 lines.' },
  { id: 'combat', title: 'Math Combat', description: 'Comparative showdowns: when one formula beats another.' },
  { id: 'cinematics', title: 'Derivation Cinematics', description: 'Short videos and step-by-step derivations.' },
  { id: 'aesthetics', title: 'Mathematical Aesthetics', description: 'Posters, SVG art, and printable derivation posters.' },
  { id: 'problem-packs', title: 'MIT-Ready Problem Packs', description: 'Tough, clever problems with full solutions.' },
  { id: 'derivations', title: 'Derivation Archive', description: 'Full derivations organized by topic.' },
  { id: 'datasets', title: 'Datasets', description: 'Data you created: mistakes, derivation graphs, etc.' },
  { id: 'one-formula', title: 'One Formula a Day', description: 'Daily micro-notes and mnemonics.' },
  { id: 'paradoxes', title: 'Paradoxes', description: 'Clear, intuitive resolutions.' },
  { id: 'impossible', title: 'Impossible Problem Journal', description: 'Weekly hard puzzles, analysis and variants.' },
  { id: 'fiction', title: 'Physics Fiction', description: 'Short poetic science fiction & micro-stories.' },
];
