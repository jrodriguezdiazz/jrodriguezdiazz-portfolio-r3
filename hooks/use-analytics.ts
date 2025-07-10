"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { pageview } from "@/lib/gtag";

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(new URL(url, window.location.origin));
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
