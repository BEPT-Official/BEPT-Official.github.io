import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Sparkles, Code, Palette, Headphones } from 'lucide-react';

const Credits: React.FC = () => {
  const teamMembers = [
    { name: "execrated", role: "Lead Developer", subRole: "Game Designer", image: "https://cdn.discordapp.com/avatars/592061317985075207/894a7d787a37292bd3a5dafafc668515?size=1024" },
    { name: "ojstab", role: "Developer", subRole: "UI/UX Designer", image: "https://cdn.discordapp.com/avatars/1212034426960355343/99d56d411ffd4bd6a5b722294f097a84?size=1024" },
    { name: "synthrix", role: "Developer", subRole: "Sound Engineer", image: "https://cdn.discordapp.com/avatars/634049444593270862/f959e85e7dd611ea6e9e763c405f91a2?size=1024" },
  ];

  const contributors = [
    { name: "Contributor1", role: "Bot Developer", image: "https://placekitten.com/100/100" },
    { name: "Contributor2", role: "Artist", image: "https://placekitten.com/101/101" },
    { name: "Contributor3", role: "Tester", image: "https://placekitten.com/102/102" },
  ];

  const getIcon = (role: string) => {
    switch (role) {
      case "Bot Developer":
        return <Code className="text-blue-400" />;
      case "Artist":
        return <Palette className="text-pink-400" />;
      case "Tester":
        return <Headphones className="text-green-400" />;
      default:
        return <Sparkles className="text-yellow-400" />;
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-purple-400">Credits</h1>
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                >
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-purple-400">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.subRole}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Contributors</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {contributors.map((contributor, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg p-3 text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <div className="relative inline-block">
                    <img src={contributor.image} alt={contributor.name} className="w-20 h-20 rounded-full mx-auto mb-2" />
                    <div className="absolute -top-1 -right-1 bg-gray-800 rounded-full p-1">
                      {getIcon(contributor.role)}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{contributor.name}</h3>
                  <p className="text-sm text-purple-400">{contributor.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Special Thanks</h2>
            <p className="text-lg">
              We'd like to extend our gratitude to all contributors, and our amazing community for their continued support and feedback.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Credits;