import { useCallback } from "react";
import ReactGA from "react-ga4";

export const useLeadTracking = () => {
  const normalize = (str) =>
    (str || "")
      .toLowerCase()
      .replace(/[_\s]+/g, "_")
      .trim();

  const getUTMParams = () => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utmSource") || undefined,
      utm_medium: params.get("utmMedium") || undefined,
      utm_campaign: params.get("utmCampaign") || undefined,
      utm_term: params.get("utmTerm") || undefined,
      utm_content: params.get("utmContent") || undefined,
    };
  };

  const trackFormSubmission = 
  (source, formType, propertyType = null) => {
    let eventAction;

    if (propertyType) {
      eventAction = `${normalize(formType)}_submit_${normalize(propertyType)}`;
    } else if (source) {
      eventAction = `${normalize(formType)}_submit_${normalize(source)}`;
    } else {
      eventAction = `${normalize(formType)}_submit`;
    }

    // 🔹 Dynamic / descriptive event
    ReactGA.event(eventAction, {
      event_category: "Form Submission",
      event_label: `${source}${propertyType ? ` - ${propertyType}` : ""}`,
      lead_source: source,
      property_type: propertyType,
      funnel_stage:
        formType === "contact_form" ? "lead" : "site_visit_request",
      transport_type: "beacon",
      ...getUTMParams(),
    });

    // 🔹 Fixed conversion event (Capitalized as requested)
    ReactGA.event("Contact_form_submit", {
      event_category: "Form Submission",
      event_label: `${source}${propertyType ? ` - ${propertyType}` : ""}`,
      lead_source: source,
      property_type: propertyType,
      funnel_stage:
      formType === "contact_form" ? "lead" : "site_visit_request",
      transport_type: "beacon",
      ...getUTMParams(),
    });
  }

  return {
    trackFormSubmission,
  };
};

// Lead source constants
export const LEAD_SOURCES = {
  HERO: "hero_banner",
  OVERVIEW: "overview_section",
  PRICING_sqft2400: "pricing_section_2400sqft",
  MASTER_PLAN: "master_plan_section",
  FOOTER: "footer_section",
  CONTACT_FORM_LINK: "contact_form_internal_link",
  UNKNOWN: "unknown_source",
};

// Property types
export const PROPERTY_TYPES = {
  sqft2400: "2400sqft",
};
