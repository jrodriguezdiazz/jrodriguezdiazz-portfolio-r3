import { clsx, type ClassValue } from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";

import { EXPERIENCES, TECH_ICONS } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateDuration = (
  startDate: string,
  endDate: string
): string => {
  const normalizeDate = (dateStr: string): string => {
    if (dateStr === "Present") return new Date().toISOString();

    // Convert MM/DD/YYYY to YYYY-MM-DD
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateStr)) {
      const [month, day, year] = dateStr.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }

    // Handle "Month YYYY" format
    if (/^[A-Za-z]+ \d{4}$/.test(dateStr)) {
      const date = new Date(dateStr);
      if (!isNaN(date.getTime())) {
        return date.toISOString();
      }
    }

    return dateStr;
  };

  const start = new Date(normalizeDate(startDate));
  const end = new Date(normalizeDate(endDate));

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "Invalid date";
  }

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    return `${years} year${years > 1 ? "s and " : ""}${
      months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""
    }`;
  }
};

export const getTechIcon = (
  tech: string
): {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
} | null => {
  return TECH_ICONS[tech] || null;
};

export const formatDateRange = (startDate: string, endDate: string): string => {
  return `${startDate} - ${endDate}`;
};

export const getYearsOfExperience = (): number => {
  const start = new Date(EXPERIENCES[EXPERIENCES.length - 1].startDate);
  const now = new Date();

  if (isNaN(start.getTime())) {
    throw new Error("Invalid start date");
  }

  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }

  return years;
};
