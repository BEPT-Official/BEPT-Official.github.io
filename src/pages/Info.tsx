import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Info: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-purple-400">Information</h1>
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">About BEPT</h2>
            <p className="text-lg mb-4">
            Welcome to BEPT, the thrilling Roblox game where you’ll battle through 45 crazy waves of paintballers trying to steal the legendary paintball trophy! Your mission? Survive every wave and snag that trophy without getting knocked out!
            </p>

            <p className="text-lg mb-4">
            With over 30 classes to pick from and more than 100 items, and over 60 abilities at your disposal, you’ll never run out of options. You’ll face off against over 50 different enemies, each bringing their own challenges to the table, so every match feels fresh and exciting. Plus, the game is randomized each time you play, ensuring that no two runs are ever the same.
            </p>

            <p className="text-lg mb-4">
            We’ve also have some game modes like Hardcore, Extreme, Endless, and Randomized to keep things interesting and you'd like a different experience. Got a lot of friends? No problem! You can team up with up to 10 friends, so you can tackle those waves together and create some epic moments!
            </p>

            <p className="text-lg mb-4">
            And as a side note: BEPT is all about fairness. We will never make it pay-to-win because we believe everyone should have the same shot at victory, no matter their budget. Everyone should have a fair chance to win!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">BEPT's History</h2>
            <p className="text-lg mb-4">
            The official BEPT place launched on October 30th, 2023, but the original version was published a bit earlier on October 19th, 2023. That first version had a lot of random scripts and models that didn’t really fit, so we decided to level up and create the awesome BEPT experience you know today!</p>

            <p className="text-lg mb-4">
            After that, we expanded to include BEPT's Official Testing Area, where players can get a sneak peek at upcoming features and share their thoughts. We also set up another testing ground in the official EX_ Softworks group on Roblox. Here, you can find cool stuff related to BEPT in the EX_ Softworks: Testing Grounds. It’s a great place to test new ideas and help us make the game even better!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Why the website?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>A website organizes game details, making it easy for players to find info</li>
              <li>It offers a professional layout that enhances player enjoyment</li>
              <li>A website helps attract more players, including those not on Discord</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Info;