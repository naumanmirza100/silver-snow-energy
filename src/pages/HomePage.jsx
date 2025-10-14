
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CallToAction from '@/components/CallToAction';
import Product from '@/components/Product';
import Features from '@/components/Features';
import Ingredients from '@/components/Ingredients';
import Nutrition from '@/components/Nutrition';
import Partnership from '@/components/Partnership';
import Gallery from '@/components/Gallery';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>SNOW ENERGY</title>
        <meta name="description" content="Become a distributor for Silver Snow Energy™, a premium, EU-manufactured energy drink. High demand and strong margins for retailers and businesses." />
      </Helmet>
      <Hero />
      <About />
      <CallToAction
        id="hits-harder"
        title="Tastes like the original"
        subtitle="A Proven Seller"
        buttonText="Explore The Taste"
        imageSrc="https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/90d4245ef4c4f69d63efdfe881cbfec9.png"
        imageAlt="Several Silver Snow energy drink cans on ice, with text 'Original Taste Bold Power, Smooth taste, intense energy, Now In UK.'"
        layout="horizontal"
        bgColor="bg-white"
        subtitleClass="text-cyan-brand"
        titleClass="text-slate-600"
        imageOnLeft={false}
        imageGlow={true}
      />
      <CallToAction
        id="taste-the-original"
        title="Taste The Original"
        subtitle="Silver Snow hits harder than ever"
        buttonText="Explore The Taste"
        imageSrc="https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/d62223db69e180a89fdadd3c1d6b1ada.jpg"
        imageAlt="Young woman looking out of a car window holding a Silver Snow Energy drink"
        layout="horizontal"
        bgColor="bg-white"
        subtitleClass="text-slate-600"
        titleClass="text-cyan-brand"
        imageOnLeft={true}
        imageGlow={true}
      />
      <Product />
      <CallToAction
        id="coming-soon"
        title="New Flavors on the Horizon"
        subtitle="Coming Soon"
        description="Get ready for an explosion of taste. We're crafting a new line of bold, refreshing flavors designed to energize your senses and fuel your next adventure. Sign up to be the first to know."
        buttonText="Notify Me"
        imageSrc="https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/13cc6c5ba4d61d9e323a6ffd69b572a6.jpg"
        imageAlt="Clean Energy Boost with four can flavors and a cyclist in the background"
        layout="horizontal"
        bgColor="bg-white"
        subtitleClass="text-cyan-brand"
        titleClass="text-slate-800"
        imageOnLeft={false}
        imageGlow={true}
        titleIsGradient={true}
      />
      <Features />
      <CallToAction
        id="gravity-is-overrated"
        title="A BRAND THAT SELLS ITSELF"
        subtitle="Premium lifestyle appeal"
        buttonText="Become a Stockist"
        imageSrc="https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/7d0403a88d214e6a85f64b0846f6fb64.jpg"
        imageAlt="Multiple Silver Snow Classic energy drink cans floating, with text 'Preservative-Free Sip, Halal & Kosher certified, no gimmicks.'"
        imageOnLeft={true}
        bgColor="bg-white"
        titleClass="bebas text-cyan-brand"
        imageGlow={true}
      />
      <CallToAction
        id="climb-higher"
        title="Elevate Your Portfolio"
        subtitle="A Premium Addition to Your Lineup"
        buttonText="Partnership Inquiry"
        imageSrc="https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/c6436a9d83cab9e313a09551d01d9e40.png"
        imageAlt="Two Silver Snow Energy cans floating"
        imageOnLeft={false}
        bgColor="bg-white"
        imageGlow={true}
      />
      <Ingredients />
      <Partnership />
      <Gallery />
      <Nutrition />
    </>
  );
};

export default HomePage;
