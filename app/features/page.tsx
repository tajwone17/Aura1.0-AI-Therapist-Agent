"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Ripple } from "@/components/magicui/ripple";
import {
  Brain,
  ChevronRight,
  Clock,
  HeartPulse,
  Lightbulb,
  Lock,
  MessageSquareHeart,
  Sparkles,
  Waves,
} from "lucide-react";

export default function FeaturesPage() {
  // Core features section
  const coreFeatures = [
    {
      icon: HeartPulse,
      title: "24/7 Emotional Support",
      description:
        "Always available to listen and provide support whenever you need it, day or night.",
      color: "from-rose-500/20",
      delay: 0.2,
    },
    {
      icon: Brain,
      title: "Personalized Insights",
      description:
        "AI that adapts to your unique emotional patterns and provides tailored guidance.",
      color: "from-blue-500/20",
      delay: 0.3,
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description:
        "Your conversations are private and secured with state-of-the-art encryption.",
      color: "from-emerald-500/20",
      delay: 0.4,
    },
    {
      icon: MessageSquareHeart,
      title: "Evidence-Based Techniques",
      description:
        "Therapeutic approaches backed by clinical research and professional standards.",
      color: "from-purple-500/20",
      delay: 0.5,
    },
  ];

  // Advanced features
  const advancedFeatures = [
    {
      title: "Emotion Tracking",
      description:
        "Monitor your emotional patterns over time with an intuitive slider that helps you express and track how you're feeling.",
      icon: Waves,
    },
    {
      title: "Smart Conversations",
      description:
        "Natural dialogue that understands context, remembers important details, and provides thoughtful responses to your concerns.",
      icon: MessageSquareHeart,
    },
    {
      title: "Guided Support",
      description:
        "Receive gentle guidance through difficult emotions with compassionate understanding and practical suggestions.",
      icon: Lightbulb,
    },
  ];

  // Benefits features
  const benefitFeatures = [
    {
      title: "Emotional Support",
      description:
        "Regular conversations with your AI companion can help you manage difficult feelings and reduce stress.",
      stat: "24/7",
      statLabel: "availability for moments when you need support",
    },
    {
      title: "Guided Reflection",
      description:
        "Thoughtful prompts and questions to help you explore your emotions and gain perspective.",
      stat: "AI",
      statLabel: "powered insights tailored to your needs",
    },
    {
      title: "Enhanced Self-Awareness",
      description:
        "Interact with LyraMind to develop a deeper understanding of your emotional patterns and responses.",
      stat: "Personal",
      statLabel: "emotional insights that grow with you",
    },
    {
      title: "Private Space",
      description:
        "A secure, judgment-free environment where you can express yourself openly without worry.",
      stat: "100%",
      statLabel: "confidential and secure interactions",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] mt-20 flex flex-col items-center justify-center py-12 px-4 mb-16">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl top-0 -left-20 bg-gradient-to-r from-primary/30 to-transparent opacity-60" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl bottom-0 right-0 animate-pulse delay-700" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
        </div>
        <Ripple className="opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative space-y-8 text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground/90">
              Transformative AI-powered mental wellness
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="inline-block bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent">
              Advanced Features
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-b from-foreground to-foreground/90 bg-clip-text text-transparent">
              for Your Emotional Wellbeing
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-[700px] mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Discover how Aura combines cutting-edge AI technology with
            evidence-based therapeutic approaches to provide personalized
            emotional support and guidance on your journey to mental wellness.
          </p>
        </motion.div>
      </section>

      {/* Core Features Grid */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
              Core Capabilities
            </h2>
            <p className="text-foreground/90 max-w-2xl mx-auto text-lg">
              Built with a focus on emotional support, privacy, and
              evidence-based techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full bg-card/50 backdrop-blur-sm hover-lift gentle-shadow">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold tracking-tight text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-t from-muted/30 to-background/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                LyraMind&apos;s Approach <br />
                to Mental Wellness
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI companion offers supportive features designed to
                understand your unique emotional needs and provide personalized
                guidance.
              </p>

              <div className="space-y-8 mt-8">
                {advancedFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="p-2 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                asChild
                className="mt-6 relative group h-12 px-8 rounded-full bg-gradient-to-r from-primary via-primary/90 to-secondary hover:to-primary shadow-lg shadow-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30"
              >
                <Link href="/">
                  <span className="flex items-center gap-2">
                    Get Started Today
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-primary/20 aspect-square w-full max-w-[500px] mx-auto"
            >
              {/* This would be an image or interactive demo */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background/50 flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="mx-auto p-4 rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center">
                    <Lightbulb className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Compassionate AI
                  </h3>
                  <p className="text-muted-foreground">
                    LyraMind provides empathetic responses and personalized
                    support to help you navigate your emotional wellbeing
                    journey.
                  </p>
                  <div className="pt-4">
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse-gentle"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Initial Baseline</span>
                      <span>Current Understanding</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background/90 to-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
              Key Benefits for Your Wellbeing
            </h2>
            <p className="text-foreground/90 max-w-2xl mx-auto text-lg">
              Discover how conversations with LyraMind can support your journey
              toward better emotional health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefitFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-primary/10 overflow-hidden">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-border/50">
                      <div className="text-3xl font-bold text-primary">
                        {feature.stat}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {feature.statLabel}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent opacity-60" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Begin Your Journey to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Better Emotional Health
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how AI-powered emotional support can help you navigate
            life&apos;s challenges. Your journey to better wellbeing starts with
            a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              asChild
              size="lg"
              className="relative group h-12 px-8 rounded-full bg-gradient-to-r from-primary via-primary/90 to-secondary hover:to-primary shadow-lg shadow-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30"
            >
              <Link href="/">
                <span className="relative z-10 font-medium flex items-center gap-2">
                  Get Started Free
                  <Clock className="w-4 h-4" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="relative h-12 px-8 rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              <Link href="/about">
                <span className="flex items-center gap-2">
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
