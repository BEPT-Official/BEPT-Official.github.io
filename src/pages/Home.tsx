import React from 'react';
import Layout from '../components/Layout';
import { changelogData } from '../changelog_data';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const latestUpdate = changelogData[0]; // Get the first (latest) update

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-purple-400">Welcome to BEPT</h1>
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <p className="text-lg mb-4">
          BEPT is a Roblox game where you battle through 45 waves of paintballers determined to take the paintball trophy. Your goal is to survive all 45 waves and reclaim the trophy without being defeated!
          </p>
          <p className="text-lg mb-4">
          Welcome to BEPT's Official Website!
          Here, you can explore our changelogs, meet the team, and stay up-to-date with our latest updates.
          </p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Latest Update</h2>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">{latestUpdate.summary}</h3>
              <ul className="list-disc list-inside space-y-2">
                {latestUpdate.entries.map((entry, index) => (
                  <li key={index} className="text-gray-300">
                    <span className="font-semibold text-purple-300">{entry.type}: </span>
                    {entry.items[0]}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;