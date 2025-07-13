import { clsx, type ClassValue } from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";

import { ValidationError } from "@/lib/types";
import { TECH_ICONS } from "@/lib/constants";

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

export const validateForm = (formData: FormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!formData.name.trim()) {
    errors.push({ field: "name", message: "Name is required" });
  } else if (formData.name.trim().length < 2) {
    errors.push({
      field: "name",
      message: "Name must be at least 2 characters",
    });
  }

  if (!formData.email.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    });
  }

  if (!formData.subject.trim()) {
    errors.push({ field: "subject", message: "Subject is required" });
  }

  if (!formData.message.trim()) {
    errors.push({ field: "message", message: "Message is required" });
  } else if (formData.message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters",
    });
  }

  return errors;
};

export // Mock submit function - replace with your actual implementation
const submitContactForm = async (
  formData: FormData
): Promise<{ message: string; success: boolean }> => {
  // Simulate API call
  console.log("Submitting contact form with data:", formData);
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Simulate random success/failure for demo
  const success = Math.random() > 0.3;

  if (success) {
    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } else {
    throw new Error("Failed to send message");
  }
};
