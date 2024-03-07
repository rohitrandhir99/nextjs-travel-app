import Camp from '@/components/Camp'
import Features from '@/components/Features'
import GetApp from '@/components/GetApp'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'
import React from 'react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Camp Section */}
      <Camp />
      {/* Guide Section */}
      <Guide />
      {/* Features Section */}
      <Features />
      {/* GetApp Section */}
      <GetApp />
    </>
  )
}
