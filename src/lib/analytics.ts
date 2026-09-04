export type AnalyticsEventName =
  | "assessment_page_view"
  | "assessment_cta_click"
  | "assessment_form_start"
  | "assessment_form_submit"
  | "pricing_view"
  | "assessment_faq_expand"
  | "contact_success";

type AnalyticsProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  properties: AnalyticsProperties = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event,
    ...properties
  };

  window.dispatchEvent(
    new CustomEvent("epyk:analytics", {
      detail: payload
    })
  );

  window.dataLayer?.push(payload);
}
