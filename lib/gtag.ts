/* eslint-disable  @typescript-eslint/no-explicit-any */

import { ConfigParams, ControlParams, EventParams } from "./types";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: string,
  {
    event_category,
    event_label,
    value,
  }: {
    event_category: string;
    event_label?: string;
    value?: number;
  }
) => {
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
};

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: ControlParams | EventParams | ConfigParams | Record<string, any>
    ) => void;
  }
}
