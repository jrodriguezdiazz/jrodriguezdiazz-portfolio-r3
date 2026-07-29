import { Suspense } from "react";
import { notFound } from "next/navigation";

import AboutMe from "@/app/components/about-me/about-me";
import NavBar from "@/app/components/common/nav-bar";
import SectionSkeleton from "@/app/components/common/section-skeleton";
import Contact from "@/app/components/contact/contact";
import WorkExperience from "@/app/components/exprience/work-experience";
import Projects from "@/app/components/projects/projects";
import { Section, SectionHeader } from "@/app/components/common/section";
import Footer from "@/app/components/common/footer";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, isLocale, Locale } from "@/i18n/locales";

export function generateStaticParams() {
  return ["en", "es"].map(locale => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale = isLocale(locale) ? locale : defaultLocale;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(activeLocale as Locale);

  return (
    <div className='min-h-screen bg-background'>
      <NavBar locale={activeLocale as Locale} />

      <main className='w-full'>
        <Section id='about'>
          <Suspense fallback={<SectionSkeleton />}>
            <AboutMe locale={activeLocale as Locale} />
          </Suspense>
        </Section>
        <Section
          id='work-experience'
          className='bg-gray-50/50 dark:bg-gray-900/50'
        >
          <SectionHeader>{dictionary.page.workExperience}</SectionHeader>
          <Suspense fallback={<SectionSkeleton />}>
            <WorkExperience locale={activeLocale as Locale} />
          </Suspense>
        </Section>
        <Section id='projects'>
          <SectionHeader>{dictionary.page.projects}</SectionHeader>
          <Suspense fallback={<SectionSkeleton />}>
            <Projects locale={activeLocale as Locale} />
          </Suspense>
        </Section>
        <Section id='contact'>
          <div className='mx-auto max-w-1xl'>
            <SectionHeader>{dictionary.page.getInTouch}</SectionHeader>
            <Suspense fallback={<SectionSkeleton />}>
              <Contact locale={activeLocale as Locale} />
            </Suspense>
          </div>
        </Section>
      </main>
      <Footer locale={activeLocale as Locale} />
    </div>
  );
}
