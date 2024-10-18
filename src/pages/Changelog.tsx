import React, { useState } from 'react';
import Layout from '../components/Layout';
import { changelogData } from '../changelog_data';
import { motion, AnimatePresence } from 'framer-motion';

const Changelog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const entriesPerPage = 7;

  const filteredEntries = changelogData.filter(entry =>
    entry.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredEntries.length / entriesPerPage);
  const paginatedEntries = filteredEntries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-purple-400">Changelog</h1>

        <input
          type="text"
          placeholder="Search changelogs..."
          className="w-full p-2 mb-4 rounded border bg-gray-700 text-white placeholder-gray-400"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <AnimatePresence>
          {paginatedEntries.map((entry) => (
            <motion.details
              key={entry.id}
              className="mb-4 p-4 rounded-lg bg-gray-800 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <summary className="font-bold text-lg cursor-pointer text-purple-400">{entry.summary}</summary>
              <ul className="mt-2">
                {entry.entries.map((item: any, index: number) => (
                  <motion.li
                    key={index}
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <span className={`inline-block px-2 py-1 rounded text-sm font-semibold mr-2 ${
                      item.type === 'added' ? 'bg-green-700 text-green-200' :
                      item.type === 'removed' ? 'bg-red-700 text-red-200' :
                      item.type === 'fixed' ? 'bg-yellow-700 text-yellow-200' :
                      item.type === 'improved' ? 'bg-blue-700 text-blue-200' :
                      'bg-purple-700 text-purple-200'
                    }`}>
                      {item.type}
                    </span>
                    <ul className="list-disc list-inside">
                      {item.items.map((subItem: string, subIndex: number) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  </motion.li>
                ))}
              </ul>
            </motion.details>
          ))}
        </AnimatePresence>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="mx-1 px-4 py-2 bg-purple-700 text-white rounded disabled:bg-gray-600 transition-colors duration-300"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
            disabled={currentPage === pageCount}
            className="mx-1 px-4 py-2 bg-purple-700 text-white rounded disabled:bg-gray-600 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Changelog;