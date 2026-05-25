import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    document.body.style.backgroundColor = isDark ? '#050a10' : '#fafafa';
    document.body.style.color = isDark ? '#ffffff' : '#111827';
  }, [isDark]);

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-300"
      style={{ backgroundColor: isDark ? '#050a10' : '#fafafa' }}
    >
      <CustomCursor />
      <Navbar isDark={isDark} onToggle={() => setIsDark(d => !d)} />
      <Hero isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}
