import { siteConfig } from "@/lib/site-config";

export const legalLastUpdated = "June 10, 2026";

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  title: string;
  description: string;
  intro: string;
  sections: LegalSection[];
}

const organizationName = siteConfig.name;
const contactEmail = siteConfig.email;
const officeAddress = siteConfig.location;

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description:
    "How LuminaBridge Foundation collects, uses, and protects personal information in accordance with Canadian privacy law.",
  intro:
    "LuminaBridge Foundation is committed to protecting the privacy of the individuals, families, volunteers, partners, and communities we serve. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit our website, register for programs or events, contact us, or otherwise interact with our organization.",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "This Privacy Policy applies to personal information collected by LuminaBridge Foundation through luminabridgefoundation.org, our official communication channels, program and event registration processes, volunteer and partnership inquiries, and related nonprofit activities across Alberta.",
        "By using our website or providing personal information to us, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with its terms, please do not use our website or submit personal information to us.",
      ],
    },
    {
      id: "who-we-are",
      title: "Who We Are",
      paragraphs: [
        `${organizationName} is a registered nonprofit organization based in Edmonton, Alberta, Canada. Our head office is located at ${officeAddress}.`,
        "For privacy-related questions, requests, or concerns, please contact us using the details provided at the end of this policy.",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "The information we collect depends on how you interact with us. We may collect the following categories of personal information:",
      ],
      bullets: [
        "Identity and contact details, such as your name, email address, phone number, and mailing address.",
        "Inquiry and correspondence information submitted through contact forms, email, or information request forms.",
        "Program, volunteer, partnership, sponsorship, or event registration details that you choose to provide.",
        "Donation-related information when you inquire about or make a contribution to the Foundation.",
        "Technical and usage information when you visit our website, such as browser type, device information, IP address, and pages viewed.",
        "Communications and content you send to us, including messages, feedback, and media submissions related to our programs.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      paragraphs: ["We use personal information for legitimate organizational purposes, including:"],
      bullets: [
        "Responding to inquiries and providing information about our programs, events, and services.",
        "Processing volunteer, partnership, sponsorship, and program participation requests.",
        "Managing event registration, attendance, and participant communications.",
        "Operating, maintaining, and improving our website and digital communications.",
        "Sending updates about Foundation activities, where permitted by law and your preferences.",
        "Meeting legal, regulatory, accounting, and governance obligations as a registered nonprofit.",
        "Protecting the security, integrity, and proper functioning of our organization and website.",
      ],
    },
    {
      id: "how-we-share-information",
      title: "How We Share Information",
      paragraphs: [
        "We do not sell personal information. We may share information only when necessary and appropriate, including:",
      ],
      bullets: [
        "With service providers who assist us with website hosting, form processing, communications, or administrative functions, subject to confidentiality obligations.",
        "With event partners, venues, or program collaborators when required to coordinate participation you have registered for.",
        "With professional advisors, such as legal or accounting providers, where reasonably necessary.",
        "When required by law, court order, regulatory request, or to protect the rights, safety, and security of individuals or the Foundation.",
        "With your consent or at your direction.",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      paragraphs: [
        "Our website may link to or integrate with third-party platforms, including Google Forms for information requests and event registration, social media platforms, and external content providers.",
        "When you use these third-party services, your information is collected directly by the third party in accordance with its own privacy policy. We encourage you to review the privacy practices of any external platform before submitting personal information.",
        "We are not responsible for the privacy practices, content, or security of third-party websites or services that we do not control.",
      ],
    },
    {
      id: "cookies-and-analytics",
      title: "Cookies and Analytics",
      paragraphs: [
        "Our website may use cookies and similar technologies to support basic functionality, remember preferences, and understand how visitors use our site.",
        "You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.",
        "If we use analytics tools in the future, we will use them to understand aggregate website performance and improve user experience, not to build unrelated commercial profiles of visitors.",
      ],
    },
    {
      id: "youth-privacy",
      title: "Children's and Youth Privacy",
      paragraphs: [
        "LuminaBridge Foundation serves youth and families through educational, arts, leadership, and community programs. We take additional care when handling information relating to minors.",
        "Where required, we seek appropriate parental or guardian consent before collecting personal information from individuals under the age of majority in Alberta.",
        "Parents and guardians may contact us to review, update, or request deletion of a minor's personal information, subject to applicable legal and programmatic requirements.",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
        "No method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      paragraphs: [
        "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, meet legal and regulatory obligations, resolve disputes, and enforce our agreements.",
        "When information is no longer required, we take reasonable steps to securely delete, anonymize, or archive it.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      paragraphs: [
        "Depending on applicable Canadian privacy law, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and Alberta's Personal Information Protection Act (PIPA), you may have the right to:",
      ],
      bullets: [
        "Request access to the personal information we hold about you.",
        "Request correction of inaccurate or incomplete information.",
        "Withdraw consent where processing is based on consent, subject to legal or contractual restrictions.",
        "Ask questions about how your information is collected, used, and disclosed.",
        "Submit a complaint to us or to the Office of the Privacy Commissioner of Canada, or the Office of the Information and Privacy Commissioner of Alberta, where applicable.",
      ],
    },
    {
      id: "policy-updates",
      title: "Updates to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or organizational activities.",
        "When we make material changes, we will post the updated policy on this page and revise the \"Last updated\" date below. We encourage you to review this page periodically.",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      paragraphs: [
        `If you have questions about this Privacy Policy or wish to make a privacy-related request, please contact ${organizationName}:`,
        `Email: ${contactEmail}`,
        `Address: ${officeAddress}`,
        `Office hours: ${siteConfig.officeHours}`,
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  title: "Terms of Use",
  description:
    "Terms governing access to and use of the LuminaBridge Foundation website and digital resources.",
  intro:
    "These Terms of Use govern your access to and use of the LuminaBridge Foundation website and related online resources. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please discontinue use of the site.",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      paragraphs: [
        "These Terms of Use constitute a binding agreement between you and LuminaBridge Foundation regarding your use of luminabridgefoundation.org and any content, tools, or services made available through the site.",
        "We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
      ],
    },
    {
      id: "about-us",
      title: "About LuminaBridge Foundation",
      paragraphs: [
        `${organizationName} is a registered nonprofit organization based in Edmonton, Alberta. We deliver youth leadership, arts and culture, mental wellness, education, and community engagement programs across Alberta.`,
        "Information on this website is provided for general informational purposes about our mission, programs, events, partnerships, and opportunities to get involved.",
      ],
    },
    {
      id: "permitted-use",
      title: "Permitted Use",
      paragraphs: ["You may use our website only for lawful purposes and in a manner consistent with these Terms. You agree not to:"],
      bullets: [
        "Use the website in any way that violates applicable local, provincial, federal, or international law.",
        "Attempt to gain unauthorized access to our systems, accounts, or data.",
        "Interfere with or disrupt the operation, security, or integrity of the website.",
        "Copy, scrape, reproduce, or redistribute website content except as expressly permitted.",
        "Use the website to transmit harmful code, spam, or misleading or fraudulent communications.",
        "Misrepresent your affiliation with LuminaBridge Foundation or impersonate another person or organization.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      paragraphs: [
        "Unless otherwise stated, all content on this website — including text, graphics, logos, photographs, videos, program materials, and design elements — is owned by or licensed to LuminaBridge Foundation and is protected by applicable intellectual property laws.",
        "You may view, download, or print limited content for personal, non-commercial use only. You may not modify, distribute, publicly display, or create derivative works from our content without prior written permission.",
        "The LuminaBridge Foundation name, logo, and related branding may not be used without our express written consent.",
      ],
    },
    {
      id: "registration-and-forms",
      title: "Program Registration and Forms",
      paragraphs: [
        "Certain programs, events, volunteer opportunities, and information requests may be administered through forms hosted on our website or through approved third-party platforms.",
        "By submitting a form, you represent that the information you provide is accurate and complete to the best of your knowledge. Participation in programs and events may be subject to additional terms, eligibility requirements, waivers, or code-of-conduct policies communicated at registration.",
        "We reserve the right to review, approve, decline, or cancel registrations in accordance with program capacity, safety considerations, and organizational policies.",
      ],
    },
    {
      id: "donations",
      title: "Donations and Financial Transactions",
      paragraphs: [
        "From time to time, our website may provide information about philanthropic support opportunities for LuminaBridge Foundation programs and initiatives.",
        "When online donation processing becomes available, additional terms and disclosures may apply at the point of contribution. Until then, donation inquiries should be directed to our official contact channels.",
        "Unless expressly stated otherwise, contributions are made to support the Foundation's charitable mission and are not payments for goods or services.",
      ],
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites, including social media platforms, registration forms, partner organizations, and external resources.",
        "These links are provided for convenience only. LuminaBridge Foundation does not control and is not responsible for the content, policies, or practices of third-party sites. Accessing third-party websites is at your own risk.",
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      paragraphs: [
        "Website content is provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied, including warranties of accuracy, completeness, fitness for a particular purpose, or non-infringement.",
        "While we strive to keep information current, program details, event schedules, leadership information, and other materials may change without notice. Please contact us to confirm important details before making decisions based on website content.",
        "Nothing on this website constitutes professional, legal, medical, financial, or therapeutic advice.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, LuminaBridge Foundation and its directors, officers, employees, volunteers, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website.",
        "Our total liability for any claim relating to the website shall not exceed the amount, if any, that you paid to access the site, or CAD $100, whichever is greater, except where liability cannot be excluded under applicable law.",
      ],
    },
    {
      id: "indemnification",
      title: "Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless LuminaBridge Foundation from and against any claims, liabilities, damages, losses, and expenses arising out of your misuse of the website or violation of these Terms, to the extent permitted by applicable law.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      paragraphs: [
        "These Terms of Use are governed by the laws of the Province of Alberta and the federal laws of Canada applicable therein, without regard to conflict of law principles.",
        "Any dispute arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts located in Alberta, Canada, unless otherwise required by applicable law.",
      ],
    },
    {
      id: "terms-updates",
      title: "Changes to These Terms",
      paragraphs: [
        "We may revise these Terms of Use at any time by posting an updated version on this page and changing the \"Last updated\" date below.",
        "Your continued use of the website after updated Terms are posted constitutes acceptance of those changes.",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      paragraphs: [
        `If you have questions about these Terms of Use, please contact ${organizationName}:`,
        `Email: ${contactEmail}`,
        `Address: ${officeAddress}`,
        `Office hours: ${siteConfig.officeHours}`,
      ],
    },
  ],
};
