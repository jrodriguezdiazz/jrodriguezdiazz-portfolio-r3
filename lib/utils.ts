import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
    return `${years} year${years > 1 ? "s" : ""}${
      months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""
    }`;
  }
};
