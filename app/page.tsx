import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import RouteTicker from '@/components/home/RouteTicker'
import BatchDelivery from '@/components/home/BatchDelivery'
import HowItWorks from '@/components/home/HowItWorks'
import Features from '@/components/home/Features'
import CoveragePreview from '@/components/home/CoveragePreview'
import TimeSlots from '@/components/home/TimeSlots'
import Trust from '@/components/home/Trust'
import CTABanner from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <RouteTicker />
      <BatchDelivery />
      <HowItWorks />
      <Features />
      <CoveragePreview />
      <TimeSlots />
      <Trust />
      <CTABanner />
    </>
  )
}
