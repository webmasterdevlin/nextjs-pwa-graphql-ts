import { config } from "../config/config";
import isDevelopment from "../lib/isDevelopment";

/* options: { 'page_title' : 'homepage' } */
// See https://developers.google.com/analytics/devguides/collection/gtagjs
export const googlePageview = (path: string, options: any) => {
  const completeOptions = Object.assign({}, options, { page_path: path }); // 'page_title' : 'homepage'
  if (config.googleAnalyticsId) {
    // @ts-ignore
    window.gtag("config", config.googleAnalyticsId, completeOptions);
  }
  if (isDevelopment())
    console.log(`Google pageview:`, { path, options: completeOptions });
};

// options: { 'event_category' : 'bbb', 'event_label' : 'ccc' }
// See https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const googleEvent = (action: any, options: any) => {
  if (config.googleAnalyticsId) {
    // @ts-ignore
    window.gtag("event", action, options);
  }
  if (isDevelopment()) console.log(`Google event:`, { action, options });
};
