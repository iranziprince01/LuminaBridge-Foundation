export interface FaqItem {
  question: string;
  answer: string;
}

/** Donation page FAQ — eligible for FAQPage structured data. */
export const donateFaq: FaqItem[] = [
  {
    question: "Is Lumina Bridge Foundation a registered nonprofit?",
    answer:
      "Yes. Lumina Bridge Foundation is a registered nonprofit organization based in Edmonton, Alberta, Canada, delivering youth, arts, culture, and community programs across Alberta.",
  },
  {
    question: "How will my donation be used?",
    answer:
      "Donations support youth leadership, arts and culture programs, community events, mental wellness initiatives, and newcomer support delivered by Lumina Bridge Foundation across Alberta.",
  },
  {
    question: "How can I contact the Foundation about giving?",
    answer:
      "For donation questions, email info@luminabridgefoundation.org or call +1 (780) 292-5470. Our Edmonton office is open Monday to Friday, 9:00 AM to 5:00 PM Mountain Time.",
  },
];

/** Get Involved page FAQ — eligible for FAQPage structured data. */
export const getInvolvedFaq: FaqItem[] = [
  {
    question: "How can I volunteer with Lumina Bridge Foundation?",
    answer:
      "Volunteers support events, youth programs, workshops, and community initiatives across Alberta. Visit our Get Involved page or email info@luminabridgefoundation.org to express interest.",
  },
  {
    question: "Does Lumina Bridge Foundation partner with organizations?",
    answer:
      "Yes. We collaborate with community organizations, schools, businesses, artists, and funders in Edmonton and across Alberta who share our mission of empowerment and inclusion.",
  },
  {
    question: "Where is Lumina Bridge Foundation located?",
    answer:
      "Our office is at Suite 3400, 10180 – 101 Street NW, Edmonton, Alberta T5J 3S4, Canada. Programs and events are delivered across Alberta.",
  },
];
