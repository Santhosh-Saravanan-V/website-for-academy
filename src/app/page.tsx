import { Hero } from '@/components/home/Hero';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CoursesOverview } from '@/components/home/CoursesOverview';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
import { CTA } from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <CoursesOverview />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
