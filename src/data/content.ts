import type { Faq } from "./services";

/**
 * Client testimonials as published on the existing website.
 * Wording is lightly edited for spelling and grammar only.
 */
export type Testimonial = { quote: string[]; name: string; company: string };

export const testimonials: Testimonial[] = [
  {
    name: "Periyakaruppan G",
    company: "Joy Security Services",
    quote: [
      "We are highly impressed by their professionalism and experience in accounting, income tax and auditing. Every aspect of their service is timely, with supportive staff and a prompt response whenever required. Every member of staff is professional and knowledgeable in accounting.",
    ],
  },
  {
    name: "Balu Prabhakar",
    company: "Saisree Logistics",
    quote: [
      "We are pleased to confirm that we have been working with RVSK Tax Services for the past year. Their invaluable tax advisory and support services have helped our company grow. They have extensive knowledge of tax matters and act in the best interest of the business.",
      "Based on our satisfaction with the services provided, we are of the opinion that it is one of the best tax firms around.",
    ],
  },
  {
    name: "Raviraj Selvakumar",
    company: "Vel Homes",
    quote: [
      "We are very glad to have received guidance on tax-related issues and accounting work for our company from RVSK Tax Services. They were very supportive and made us feel comfortable. They gave their time without any hesitation. Their service was simply extraordinary, their time management was very good and their follow-ups were excellent.",
      "We recommend that others partner with them and grow together in business. We wish you great success in your future endeavours. Keep going!",
    ],
  },
];

/** Strengths as stated on the existing website (no figures or awards). */
export const strengths = [
  {
    title: "Individual attention",
    text: "Every client receives senior-level attention. We take time to understand your requirement before recommending a course of action.",
    icon: "user",
  },
  {
    title: "We understand your business",
    text: "We invest time in understanding your business and objectives, and work closely with you to make a difference.",
    icon: "target",
  },
  {
    title: "A multidisciplinary team",
    text: "Our team brings together people from different backgrounds to provide integrated, professionally managed support for your needs.",
    icon: "users",
  },
  {
    title: "Tax, accounts and compliance in one place",
    text: "GST, payroll, bookkeeping, income tax, licences and registrations — handled by one team that already knows your business.",
    icon: "layers",
  },
  {
    title: "Timely service and communication",
    text: "We focus on timely work and regular follow-ups, so you always know where things stand.",
    icon: "clock",
  },
  {
    title: "Careful handling of your data",
    text: "Your accounting data is handled in a safe and secure manner, with attention to accuracy and availability.",
    icon: "shield",
  },
] as const;

export const processSteps = [
  {
    title: "Contact RVSK",
    text: "Call, email or send an enquiry through our website. You can also book an appointment at a time that suits you.",
  },
  {
    title: "Explain your requirement",
    text: "Discuss your requirement with our team. We take time to understand your business and what you need.",
  },
  {
    title: "Share the necessary documents",
    text: "We tell you exactly which details and documents are needed for your service, and you share them with us.",
  },
  {
    title: "Receive updates and deliverables",
    text: "We keep you informed as the work progresses and share the completed filings, reports or documents with you.",
  },
] as const;

export const homeFaqs: Faq[] = [
  {
    question: "What services does RVSK Tax Services provide?",
    answer:
      "We provide services across six categories: Goods & Services Tax (GST), Payroll Process (EPF & ESI), Outsourcing (on-site and off-site accounts bookkeeping), Factory & Labour Licence, Accounts (bookkeeping, IT audit support, income tax filing, Tally training, and Tally software sales and support) and Other Activities (TDS and TCS return filing, DSC, MSME registration, IEC registration, and food licence registration and returns).",
  },
  {
    question: "Does RVSK assist with GST registration and return filing?",
    answer:
      "Yes. We assist with GST registration, GST return filing, annual returns (GSTR-9 and GSTR-9C), GST audit support, refunds, LUT filing, complaints and cancellation of registration.",
  },
  {
    question: "Does RVSK provide EPF and ESI payroll services?",
    answer:
      "Yes. Our payroll services include EPF and ESI registration, monthly return filing, complaints and claims, professional tax registration, salary preparation and payslip preparation.",
  },
  {
    question: "What is the difference between on-site and off-site bookkeeping?",
    answer:
      "With on-site bookkeeping, your accounts are maintained at your premises — through periodic visits or an RVSK employee deployed to your location on our payroll. With off-site bookkeeping, your accounts are maintained at RVSK’s premises using the data you share.",
  },
  {
    question: "Does RVSK provide income tax filing and Tally support?",
    answer:
      "Yes. Income tax filing, Tally training, and Tally software sales and support are part of our Accounts services.",
  },
  {
    question: "Can I enquire about factory and labour licence services?",
    answer:
      "Yes. We assist with factory and labour licence registration, return filing and complaints. Share your requirement and we will discuss it with you.",
  },
  {
    question: "How can I contact RVSK Tax Services?",
    answer:
      "Call us on +91 79049 14620, email customersupport@rvsktaxservices.com, or send an enquiry through the contact form on our website.",
  },
];
