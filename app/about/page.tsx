"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Target, Sparkles } from "lucide-react";

const missions = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Our Mission",
    description:
      "To democratize access to mental health support through ethical AI and blockchain technology, making quality therapeutic care available to everyone, everywhere, at any time.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Our Vision",
    description:
      "A world where mental health support is accessible, private, and personalized, powered by trusted AI agents and secured by blockchain technology.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Our Values",
    description:
      "Privacy, Innovation, Empathy, and Trust form the cornerstone of our platform, ensuring the highest standards of care and security.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          About Aura3.0
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We`re revolutionizing mental health support by combining cutting-edge
          AI technology with the security and transparency of blockchain.
        </p>
      </motion.div>

      {/* Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {missions.map((mission, index) => (
          <motion.div
            key={mission.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 text-center h-full bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="mb-4 flex justify-center">{mission.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{mission.title}</h3>
              <p className="text-muted-foreground">{mission.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Development Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Our Development Team
        </h2>

        {/* Supervisor Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="p-8 text-center max-w-md mx-auto bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/20">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">KA</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-1">KM Asifuzzaman</h3>
            <p className="text-primary mb-3 font-medium">Project Supervisor</p>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 text-center h-full bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">JC</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">
                Jakaria Chowdhury Tajwone
              </h3>
            
              <div className="text-muted-foreground text-sm">
                <p>ID: 0562310005101031</p>
              </div>
            </Card>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 text-center h-full bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">MP</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">
                Md. Masum Prodhania
              </h3>
             
              <div className="text-muted-foreground text-sm">
                <p>ID: 0562310005101003</p>
              </div>
            </Card>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 text-center h-full bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">MH</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">
                Miftahul Hasan Mehedi
              </h3>
            
              <div className="text-muted-foreground text-sm">
                <p>ID: 0562310005101054</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
