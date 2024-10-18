import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, List, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <motion.header
        className="bg-purple-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold">BEPT</div>
            <div className="space-x-4">
              <Link to="/" className="hover:text-purple-300 transition-colors duration-300"><Home className="inline-block mr-1" size={18} />Home</Link>
              <Link to="/info" className="hover:text-purple-300 transition-colors duration-300"><Info className="inline-block mr-1" size={18} />Info</Link>
              <Link to="/changelog" className="hover:text-purple-300 transition-colors duration-300"><List className="inline-block mr-1" size={18} />Changelog</Link>
              <Link to="/credits" className="hover:text-purple-300 transition-colors duration-300"><Users className="inline-block mr-1" size={18} />Credits</Link>
            </div>
          </nav>
        </div>
      </motion.header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <motion.footer
        className="bg-gray-800 text-center py-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>&copy; 2024 EX_ Softworks. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Layout;