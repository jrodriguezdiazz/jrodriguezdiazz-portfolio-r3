import * as React from "react";

import { calculateDuration } from "@/lib/utils";
import { EXPERIENCES } from "@/lib/constants";
import en from "@/i18n/translations/en";
import es from "@/i18n/translations/es";
import type { Locale } from "@/i18n/locales";

export const useWorkExperience = (locale: Locale = "en") => {
  const dictionary = locale === "es" ? es : en;

  const totalExperience = React.useMemo(() => {
    if (EXPERIENCES.length === 0) {
      return locale === "es" ? "0 años" : "0 years";
    }

    const earliest = EXPERIENCES[EXPERIENCES.length - 1];
    const latest = EXPERIENCES[0];

    return calculateDuration(earliest.startDate, latest.endDate, locale);
  }, [locale]);

  const experiences = React.useMemo(() => {
    return EXPERIENCES.map((experience, index) => {
      const translated =
        dictionary.experience.items[
          [
            "bairesDev",
            "epam",
            "newtech",
            "intellisysJudicatura",
            "intellisysCnc",
            "intellisysInternal",
          ][index] as keyof typeof dictionary.experience.items
        ];

      return {
        ...experience,
        company: translated?.company ?? experience.company,
        client: translated?.client ?? experience.client,
        modality: translated?.modality ?? experience.modality,
        position: translated?.position ?? experience.position,
        startDate: translated?.startDate ?? experience.startDate,
        endDate: translated?.endDate ?? experience.endDate,
        responsibilities:
          translated?.responsibilities ?? experience.responsibilities,
      };
    });
  }, [dictionary]);

  const isEmpty = experiences.length === 0;

  const experienceStats = React.useMemo(() => {
    if (isEmpty) {
      return {
        totalJobs: 0,
        totalDuration: locale === "es" ? "0 años" : "0 years",
        averageDuration: locale === "es" ? "0 años" : "0 years",
        companies: [],
      };
    }

    const totalJobs = experiences.length;
    const companies = experiences.map(exp => exp.company);
    const uniqueCompanies = [...new Set(companies)];

    const averageDuration =
      totalJobs > 0
        ? locale === "es"
          ? `~${Math.round(12 / totalJobs)} años`
          : `~${Math.round(12 / totalJobs)} years`
        : locale === "es"
          ? "0 años"
          : "0 years";

    return {
      totalJobs,
      totalDuration: totalExperience,
      averageDuration,
      companies: uniqueCompanies,
    };
  }, [experiences, totalExperience, isEmpty, locale]);

  return {
    experiences,
    totalExperience,
    isEmpty,
    stats: experienceStats,
  };
};
