import React from 'react';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Features from '../components/Features';
import ChallengeCalculator from '../components/ChallengeCalculator';
import HowItWorks from '../components/HowItWorks';
import Rules from '../components/Rules';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Features />
      <HowItWorks />
      <ChallengeCalculator />
      <Rules />
      <FAQ />
      <Testimonials />
    </>
  );
}
