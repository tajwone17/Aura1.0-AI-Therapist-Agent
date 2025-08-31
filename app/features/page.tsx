"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Shield,
  Fingerprint,
  Activity,
  Bot,
  LineChart,
  Wifi,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "Empathetic AI Companion",
    description:
      "LyraMind provides a judgment-free space to express yourself, with 24/7 access to an AI companion that listens and offers personalized emotional support.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Privacy Protection",
    description:
      "Your conversations are completely private and secure, with strict ethical guidelines and respect for your personal boundaries.",
  },
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "Emotional Intelligence",
    description:
      "LyraMind adapts to your emotional state, providing evidence-based techniques and gentle guidance tailored to your current needs.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Mood Tracking",
    description:
      "Express how you're feeling with our intuitive slider, allowing LyraMind to better understand your emotional journey over time.",
  },
  {
    icon: <Wifi className="w-10 h-10 text-primary" />,
    title: "Accessible Support",
    description:
      "Access emotional support anytime, anywhere with our responsive web application designed for all your devices.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-primary" />,
    title: "Personal Growth",
    description:
      "Track your emotional wellbeing journey with insights that help you understand patterns and progress in your mental health.",
  },
  {
    icon: <Fingerprint className="w-10 h-10 text-primary" />,
    title: "Personalized Experience",
    description:
      "LyraMind learns from your interactions to provide increasingly relevant support tailored specifically to your unique needs.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Evidence-Based Techniques",
    description:
      "LyraMind incorporates CBT, mindfulness exercises, and positive psychology practices—all scientifically validated approaches—offering guided breathing techniques, thought reframing tools, and structured self-reflection prompts.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Meet LyraMind`s Features
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how LyraMind, your AI mental health companion, provides
          empathetic support, personalized guidance, and a safe space for
          emotional wellbeing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Begin Your Emotional Wellbeing Journey
        </h2>
        <p className="text-muted-foreground mb-8">
          Experience a new kind of emotional support with LyraMind, your
          personal AI companion
        </p>
        <a
          href="/dashboard"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Start With LyraMind
          <Heart className="ml-2 w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
}
