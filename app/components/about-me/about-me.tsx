import BioSection from "@/app/components/about-me/bio-section";
import HeroSection from "@/app/components/about-me/hero-section";
import ProfilePhoto from "@/app/components/about-me/profile-photo";
import SkillsHighlight from "@/app/components/about-me/skills-highlight";
import SocialLinks from "@/app/components/about-me/social-links";

export default function AboutMe() {
  return (
    <div className='container mx-auto px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center'>
          <ProfilePhoto />
          <HeroSection />
          <BioSection />
          <SkillsHighlight />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
