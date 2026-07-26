export const inquiryOptions = [
  "Operational Software",
  "Inventory and Material Control",
  "Private AI",
  "Edge Infrastructure",
  "Manufacturing Modernization",
  "Operational Perception",
  "Partnership",
  "Research or Grant",
  "General Inquiry"
] as const;

export type InquiryOption = (typeof inquiryOptions)[number];
