/**
 * The six RVSK service categories and their offerings.
 *
 * Scope rule: every offering listed here appears on the existing
 * rvsktaxservices.com website. Do not add offerings without written
 * confirmation from RVSK Tax Services.
 */

export type IconKey = "gst" | "payroll" | "outsourcing" | "factory" | "accounts" | "other";

export type Offering = {
  id: string;
  name: string;
  summary: string;
  points: string[];
};

export type Faq = { question: string; answer: string };

export type ServiceCategory = {
  slug: string;
  name: string;
  /** The page's single H1 */
  h1: string;
  shortName: string;
  icon: IconKey;
  /** One-line positioning statement used under the H1 */
  tagline: string;
  /** Concise description for cards (≈ 25 words) */
  cardDescription: string;
  /** Short list of representative offerings for cards */
  highlights: string[];
  overview: string[];
  offerings: Offering[];
  /** Who typically needs this category / common client requirements */
  requirements: string[];
  faqs: Faq[];
  related: string[];
  /** Articles (by slug) that relate to this category */
  articles: string[];
  seo: { title: string; description: string };
};

export const services: ServiceCategory[] = [
  {
    slug: "goods-and-services-tax",
    h1: "Goods & Services Tax (GST) Services",
    name: "Goods & Services Tax",
    shortName: "GST",
    icon: "gst",
    tagline:
      "Support with GST registration, periodic and annual returns, refunds, LUT filing and other GST requirements.",
    cardDescription:
      "End-to-end support for your GST requirements — from registration and return filing to annual returns, refunds, LUT filing and cancellation.",
    highlights: ["GST Registration", "GST Return Filing", "Annual Return (GSTR-9 & 9C)", "GST Refunds"],
    overview: [
      "Goods and Services Tax (GST) is part of everyday business in India. Depending on the nature and size of your business, you may need to register under GST and then file returns on a regular basis, along with an annual return.",
      "RVSK Tax Services helps businesses handle these GST requirements in an organised way. We take time to understand how your business operates, review the information you share, and prepare and file what is needed on the GST portal — keeping you informed along the way.",
      "Whether you are registering for the first time, need help with regular filings, or want to close a registration you no longer need, our team can guide you through the process.",
    ],
    offerings: [
      {
        id: "gst-registration",
        name: "GST Registration",
        summary: "Assistance with applying for a new GST registration for your business.",
        points: [
          "Understanding your business activity and whether registration is required",
          "Preparing the application details and supporting documents",
          "Filing the application on the GST portal and following up on any queries",
        ],
      },
      {
        id: "gst-return-filing",
        name: "GST Return Filing",
        summary: "Preparation and filing of your periodic GST returns based on your business data.",
        points: [
          "Collecting and reviewing your sales and purchase information",
          "Preparing the returns that apply to your registration type",
          "Filing the returns and sharing the filed copies with you",
        ],
      },
      {
        id: "gst-annual-return",
        name: "Annual Return Filing — GSTR-9 and GSTR-9C",
        summary: "Preparation of the GST annual return (GSTR-9) and the reconciliation statement (GSTR-9C) where applicable.",
        points: [
          "Compiling the year’s GST data from your returns and books",
          "Highlighting differences that need your attention before filing",
          "Preparing and filing the annual return applicable to your business",
        ],
      },
      {
        id: "gst-audit",
        name: "GST Audit",
        summary: "Support during GST audits, including organising records and reconciling data.",
        points: [
          "Organising invoices, returns and books of account for review",
          "Reconciling GST data with your accounting records",
          "Helping you respond to information requests during the audit",
        ],
      },
      {
        id: "gst-refunds",
        name: "GST Refunds",
        summary: "Assistance with preparing and filing GST refund applications where your business is eligible.",
        points: [
          "Reviewing the basis of the refund claim with you",
          "Preparing the application and supporting statements",
          "Filing the application and tracking its progress",
        ],
      },
      {
        id: "gst-lut-filing",
        name: "GST LUT Filing",
        summary: "Filing of the Letter of Undertaking (LUT) for eligible exporters of goods or services.",
        points: [
          "Confirming the details required for the LUT",
          "Filing the LUT on the GST portal",
          "Sharing the acknowledgement for your records",
        ],
      },
      {
        id: "gst-complaints",
        name: "GST Complaints",
        summary: "Help with GST-related complaints and grievances.",
        points: [
          "Understanding the issue you are facing",
          "Gathering the relevant details and documents",
          "Raising the matter through the appropriate channel and keeping you updated",
        ],
      },
      {
        id: "gst-cancellation",
        name: "GST Registration Cancellation",
        summary: "Assistance with cancelling a GST registration that your business no longer requires.",
        points: [
          "Reviewing pending returns and requirements before cancellation",
          "Preparing and filing the cancellation application",
          "Following up until the application is processed",
        ],
      },
    ],
    requirements: [
      "New businesses that need to apply for GST registration",
      "Registered businesses that want dependable help with periodic return filing",
      "Businesses preparing their GST annual return and reconciliation",
      "Exporters that need to file a Letter of Undertaking (LUT)",
      "Businesses with a pending GST refund, complaint or cancellation",
    ],
    faqs: [
      {
        question: "Does RVSK Tax Services help with new GST registration?",
        answer:
          "Yes. We help you prepare the application and supporting documents, file it on the GST portal and follow up on any queries until the registration is processed.",
      },
      {
        question: "Can you file my GST returns every period?",
        answer:
          "Yes. GST return filing is one of our core services. We review the sales and purchase information you share and prepare and file the returns that apply to your registration.",
      },
      {
        question: "Do you prepare GSTR-9 and GSTR-9C?",
        answer:
          "Yes. We prepare the GST annual return (GSTR-9) and, where it applies to your business, the reconciliation statement (GSTR-9C). Contact us to discuss your requirement.",
      },
      {
        question: "What documents do I need for GST services?",
        answer:
          "It depends on the service. For registration, we typically need business and identity details; for returns, your sales and purchase records. We will share a specific list once we understand your requirement.",
      },
    ],
    related: ["accounts", "other-activities", "outsourcing"],
    articles: ["gst-registration-and-return-filing-overview", "understanding-gst-annual-returns", "guide-to-gst-lut-filing"],
    seo: {
      title: "GST Services – Registration, Return Filing & Annual Returns",
      description:
        "GST registration, return filing, GSTR-9 and GSTR-9C annual returns, GST audit support, refunds, LUT filing, complaints and registration cancellation by RVSK Tax Services.",
    },
  },
  {
    slug: "payroll-epf-esi",
    h1: "Payroll Process (EPF & ESI) Services",
    name: "Payroll Process (EPF & ESI)",
    shortName: "Payroll (EPF & ESI)",
    icon: "payroll",
    tagline:
      "EPF and ESI registration, monthly returns, claims, professional tax registration, salary and payslip preparation.",
    cardDescription:
      "Support with EPF and ESI registration and monthly returns, complaints and claims, professional tax registration, and salary and payslip preparation.",
    highlights: ["EPF & ESI Registration", "Monthly Return Filing", "Salary Preparation", "Payslip Preparation"],
    overview: [
      "Payroll is the process by which an employer pays employees for their work. Beyond calculating salaries, it involves statutory deductions and making sure the correct amounts reach the right government bodies on time.",
      "The Employees’ Provident Fund (EPF) is a savings scheme in which a portion of an employee’s salary, along with the employer’s contribution, is deposited every month. Employees’ State Insurance (ESI) is a social security and health insurance scheme for employees in India.",
      "RVSK Tax Services helps employers manage these payroll and statutory requirements — from registration and monthly filings to salary and payslip preparation — so your team is paid correctly and your records stay in order.",
    ],
    offerings: [
      {
        id: "epf-esi-registration",
        name: "EPF and ESI Registration",
        summary: "Assistance with employer registration under EPF and ESI.",
        points: [
          "Understanding your establishment and workforce details",
          "Preparing the information and documents for registration",
          "Completing the registration process on the respective portals",
        ],
      },
      {
        id: "monthly-return-filing",
        name: "Monthly Return Filing",
        summary: "Preparation and filing of monthly EPF and ESI returns and contribution details.",
        points: [
          "Compiling monthly employee wage and attendance-based salary data you provide",
          "Preparing contribution details for each employee",
          "Filing the monthly returns and sharing confirmations",
        ],
      },
      {
        id: "complaints-and-claims",
        name: "Complaints and Claims",
        summary: "Help with EPF and ESI related complaints and claims.",
        points: [
          "Understanding the claim or issue raised by the employer or employee",
          "Collecting the required details and documents",
          "Submitting the claim or complaint and following up on its status",
        ],
      },
      {
        id: "professional-tax-registration",
        name: "Professional Tax Registration",
        summary: "Assistance with professional tax registration for your business.",
        points: [
          "Confirming the details required for registration",
          "Preparing and submitting the application",
          "Sharing the registration details for your records",
        ],
      },
      {
        id: "salary-preparation",
        name: "Salary Preparation",
        summary: "Monthly salary computation based on the payroll inputs you provide.",
        points: [
          "Working from your salary structure and monthly inputs",
          "Accounting for applicable statutory deductions",
          "Sharing a salary statement for your review and approval",
        ],
      },
      {
        id: "payslip-preparation",
        name: "Payslip Preparation",
        summary: "Preparation of employee payslips that reflect each month’s salary.",
        points: [
          "Preparing payslips in line with the approved salary statement",
          "Showing earnings and deductions clearly for each employee",
          "Sharing payslips for distribution to your employees",
        ],
      },
    ],
    requirements: [
      "Employers that need to register under EPF and ESI",
      "Businesses that want help with monthly EPF and ESI filings",
      "Employers or employees with a pending EPF or ESI claim or complaint",
      "Businesses that need professional tax registration",
      "Teams that want salary and payslip preparation handled consistently",
    ],
    faqs: [
      {
        question: "Does RVSK provide EPF and ESI services?",
        answer:
          "Yes. We assist with EPF and ESI registration, monthly return filing, and EPF and ESI related complaints and claims.",
      },
      {
        question: "Can RVSK prepare our monthly salaries and payslips?",
        answer:
          "Yes. Based on your salary structure and the monthly inputs you share, we prepare salary statements and employee payslips for your review.",
      },
      {
        question: "Do you help with professional tax registration?",
        answer: "Yes. Professional tax registration is part of our payroll services.",
      },
      {
        question: "Do you provide HR or attendance software?",
        answer:
          "No. Our payroll services cover statutory registrations, returns, claims, and salary and payslip preparation. We work from the attendance and salary inputs that you provide.",
      },
    ],
    related: ["accounts", "factory-and-labour-licence", "outsourcing"],
    articles: ["epf-and-esi-registration-and-monthly-returns"],
    seo: {
      title: "EPF & ESI Payroll Services – Registration, Returns & Payslips",
      description:
        "EPF and ESI registration, monthly return filing, complaints and claims, professional tax registration, salary preparation and payslip preparation by RVSK Tax Services.",
    },
  },
  {
    slug: "outsourcing",
    h1: "Outsourcing: On-Site & Off-Site Accounts Bookkeeping",
    name: "Outsourcing",
    shortName: "Outsourcing",
    icon: "outsourcing",
    tagline:
      "Accounts bookkeeping handled either at your premises (on-site) or at RVSK’s premises (off-site).",
    cardDescription:
      "Outsourced accounts bookkeeping, arranged either on-site at your premises or off-site at RVSK’s premises — whichever suits the way your business works.",
    highlights: ["On-Site Accounts Bookkeeping", "Off-Site Accounts Bookkeeping"],
    overview: [
      "Accurate, up-to-date books help you understand your business and meet your tax and compliance obligations. Many businesses prefer to outsource this work to a dedicated team rather than manage it internally.",
      "RVSK Tax Services offers accounts bookkeeping in two arrangements. With on-site bookkeeping, we maintain your accounts at your location — either through periodic visits or by deploying our employee to work at your premises on our payroll. With off-site bookkeeping, your accounts are maintained at our premises.",
      "In both arrangements, we focus on accuracy, timely updates and the safe, secure handling of your accounting data.",
    ],
    offerings: [
      {
        id: "on-site-bookkeeping",
        name: "On-Site Accounts Bookkeeping",
        summary:
          "We maintain your accounts at your location. We can visit periodically (daily, weekly, fortnightly or monthly) or, if required, deploy our employee to work at your premises on a regular basis on our payroll.",
        points: [
          "Accounts maintained at your premises",
          "Periodic visits or a deployed RVSK employee, as required",
          "The staff member remains on RVSK’s payroll",
          "Suits businesses that prefer records and staff on location",
        ],
      },
      {
        id: "off-site-bookkeeping",
        name: "Off-Site Accounts Bookkeeping",
        summary:
          "Your accounts are maintained at RVSK’s premises. We focus on the accuracy, availability and security of your accounting data.",
        points: [
          "Accounts maintained at RVSK’s premises",
          "You share financial data; we record and maintain it",
          "Focus on data accuracy, availability and security",
          "Suits businesses that do not need staff on location",
        ],
      },
    ],
    requirements: [
      "Businesses that want their books maintained by a dedicated accounts team",
      "Businesses that prefer an accounts person working at their premises without adding to their own payroll",
      "Businesses that prefer to share data and have their books maintained remotely",
      "Owners who want regular financial reports to understand their business",
    ],
    faqs: [
      {
        question: "What is the difference between on-site and off-site bookkeeping?",
        answer:
          "With on-site bookkeeping, your accounts are maintained at your premises — through periodic visits or an RVSK employee deployed to your location on our payroll. With off-site bookkeeping, your accounts are maintained at RVSK’s premises using the data you share.",
      },
      {
        question: "Whose payroll is the on-site staff member on?",
        answer:
          "When we deploy an employee to work at your premises for on-site bookkeeping, that person works on RVSK’s payroll.",
      },
      {
        question: "How often can on-site visits be arranged?",
        answer:
          "Visits can be arranged daily, weekly, fortnightly or monthly, depending on your requirement. We will agree the schedule with you before starting.",
      },
      {
        question: "Which accounting software do you use?",
        answer:
          "Our existing service description notes that we record transactions in Tally. Please contact us if you would like to discuss how your current records will be handled.",
      },
    ],
    related: ["accounts", "goods-and-services-tax", "payroll-epf-esi"],
    articles: ["on-site-and-off-site-bookkeeping", "why-accurate-bookkeeping-matters"],
    seo: {
      title: "On-Site & Off-Site Accounts Bookkeeping Services",
      description:
        "Outsourced accounts bookkeeping from RVSK Tax Services — on-site at your premises with periodic visits or a deployed employee, or off-site at RVSK’s premises.",
    },
  },
  {
    slug: "factory-and-labour-licence",
    h1: "Factory & Labour Licence Services",
    name: "Factory & Labour Licence",
    shortName: "Factory & Labour Licence",
    icon: "factory",
    tagline: "Support with factory and labour licence registration, return filing and complaints.",
    cardDescription:
      "Assistance with factory and labour licence registration, related return filing, and complaints — so your establishment can stay on top of these requirements.",
    highlights: ["Registration", "Return Filing", "Complaints"],
    overview: [
      "Factories and establishments that engage workers — including contract labour — may need to obtain registrations or licences and file periodic returns under the labour laws that apply to them.",
      "Which requirements apply depends on factors such as the nature of your establishment, the number of workers engaged and the state in which you operate. India’s labour law framework has also been consolidated into labour codes, so it is worth confirming the current position for your establishment.",
      "RVSK Tax Services helps businesses with factory and labour licence registration, return filing and complaints. Contact us with your requirement and we will discuss how we can help.",
    ],
    offerings: [
      {
        id: "factory-labour-registration",
        name: "Registration",
        summary: "Assistance with factory and labour licence registration for your establishment.",
        points: [
          "Understanding your establishment and workforce details",
          "Preparing the application and supporting documents",
          "Submitting the application and following up on its progress",
        ],
      },
      {
        id: "factory-labour-returns",
        name: "Return Filing",
        summary: "Preparation and filing of returns related to your factory and labour licences.",
        points: [
          "Collecting the information required for the return",
          "Preparing the return for your review",
          "Filing the return and sharing the acknowledgement",
        ],
      },
      {
        id: "factory-labour-complaints",
        name: "Complaints",
        summary: "Help with complaints relating to factory and labour licences.",
        points: [
          "Understanding the issue and its background",
          "Gathering the relevant records",
          "Raising the matter through the appropriate channel and keeping you informed",
        ],
      },
    ],
    requirements: [
      "Manufacturing units that need factory registration or licensing",
      "Establishments that engage contract labour",
      "Businesses that need help preparing and filing related returns",
      "Businesses with a pending complaint relating to these licences",
    ],
    faqs: [
      {
        question: "Can I enquire about factory and labour licence services?",
        answer:
          "Yes. We assist with factory and labour licence registration, return filing and complaints. Share your requirement through our contact form or call us, and we will discuss it with you.",
      },
      {
        question: "How do I know whether my establishment needs a licence?",
        answer:
          "It depends on factors such as your activity, the number of workers engaged and your state. Because the labour law framework has changed, we recommend discussing your establishment’s details with us so that the current requirements can be reviewed.",
      },
      {
        question: "Do you also file returns for these licences?",
        answer: "Yes. Return filing related to factory and labour licences is part of this service category.",
      },
    ],
    related: ["payroll-epf-esi", "other-activities", "accounts"],
    articles: [],
    seo: {
      title: "Factory & Labour Licence Registration and Return Filing",
      description:
        "Assistance with factory and labour licence registration, return filing and complaints for businesses and establishments, from RVSK Tax Services.",
    },
  },
  {
    slug: "accounts",
    h1: "Accounts Services: Bookkeeping, Income Tax Filing & Tally",
    name: "Accounts",
    shortName: "Accounts",
    icon: "accounts",
    tagline: "Bookkeeping, IT audit support, income tax filing, Tally training, and Tally software sales and support.",
    cardDescription:
      "Bookkeeping, income tax filing and IT audit support, together with Tally training and Tally software sales and support to keep your accounts running smoothly.",
    highlights: ["Bookkeeping", "Income Tax Filing", "IT Audit Support", "Tally Training & Support"],
    overview: [
      "Well-kept accounts make every other part of running a business easier — from tax filing to understanding your performance.",
      "To help your business run more smoothly, RVSK Tax Services supports you with bookkeeping, income tax filing and IT audit support. We also offer Tally training and Tally software sales and support for businesses that manage their accounts in Tally.",
    ],
    offerings: [
      {
        id: "bookkeeping",
        name: "Bookkeeping",
        summary: "Recording and maintaining your business transactions so that your books stay current.",
        points: [
          "Recording day-to-day accounting transactions",
          "Categorising bank transactions, expenses and invoices",
          "Preparing standard reports from your accounting software",
        ],
      },
      {
        id: "it-audit-support",
        name: "IT Audit Support",
        summary:
          "Support in preparing the books, records and supporting information that may be needed for an income tax audit.",
        points: [
          "Organising books of account and supporting records",
          "Preparing schedules and information requested during the audit",
          "Coordinating on information requests (the exact scope is agreed with you in advance)",
        ],
      },
      {
        id: "income-tax-filing",
        name: "Income Tax Filing",
        summary: "Preparation and filing of income tax returns based on the information and documents you provide.",
        points: [
          "Collecting income details and supporting documents",
          "Preparing the return for your review",
          "Filing the return and sharing the acknowledgement",
        ],
      },
      {
        id: "tally-training",
        name: "Tally Training",
        summary: "Practical training on using Tally for day-to-day accounting.",
        points: [
          "Training on recording common accounting entries",
          "Guidance on generating standard reports",
          "Training arranged around your team’s requirements",
        ],
      },
      {
        id: "tally-software",
        name: "Tally Software Sales and Support",
        summary: "Help with purchasing Tally software and support with using it.",
        points: [
          "Guidance on Tally software purchase",
          "Support with setup and day-to-day usage questions",
          "Help resolving common software issues",
        ],
      },
    ],
    requirements: [
      "Businesses that need their books maintained accurately",
      "Individuals and businesses that need income tax returns filed",
      "Businesses preparing for an income tax audit",
      "Teams that want to learn Tally or need help with Tally software",
    ],
    faqs: [
      {
        question: "Does RVSK provide income tax filing and Tally support?",
        answer:
          "Yes. Our Accounts services include income tax filing, Tally training, and Tally software sales and support, along with bookkeeping and IT audit support.",
      },
      {
        question: "What does IT audit support include?",
        answer:
          "We help prepare and organise the books, records and supporting information that may be required for an income tax audit. The exact scope is agreed with you before we begin.",
      },
      {
        question: "Can you train my staff on Tally?",
        answer:
          "Yes. We offer Tally training focused on day-to-day accounting entries and reports. Contact us to discuss your team’s requirements.",
      },
    ],
    related: ["outsourcing", "goods-and-services-tax", "other-activities"],
    articles: [
      "why-accurate-bookkeeping-matters",
      "income-tax-filing-documents-to-prepare",
      "introduction-to-it-audit-support",
      "tally-training-and-software-support",
    ],
    seo: {
      title: "Accounts Services – Bookkeeping, Income Tax Filing & Tally",
      description:
        "Bookkeeping, IT audit support, income tax filing, Tally training, and Tally software sales and support from RVSK Tax Services.",
    },
  },
  {
    slug: "other-activities",
    h1: "Other Activities: TDS & TCS, DSC, MSME, IEC & Food Licence",
    name: "Other Activities",
    shortName: "Other Activities",
    icon: "other",
    tagline:
      "TDS and TCS return filing, digital signature certificates, MSME registration, IEC registration, and food licence registration and returns.",
    cardDescription:
      "Additional services that make running your business easier — TDS and TCS returns, DSC, MSME and IEC registration, and food licence registration and returns.",
    highlights: ["TDS & TCS Return Filing", "Digital Signature Certificate", "MSME Registration", "IEC Registration"],
    overview: [
      "Alongside our core services, RVSK Tax Services offers a set of additional services to make running your business easier.",
      "These cover TDS and TCS return filing, Digital Signature Certificates (DSC), MSME registration, Import Export Code (IEC) registration, and food licence registration and returns.",
    ],
    offerings: [
      {
        id: "tds-tcs-returns",
        name: "TDS & TCS Return Filing",
        summary: "Preparation and filing of TDS and TCS returns based on your deduction and collection details.",
        points: [
          "Compiling deduction and collection details from your records",
          "Preparing the returns for your review",
          "Filing the returns and sharing the acknowledgements",
        ],
      },
      {
        id: "dsc",
        name: "Digital Signature Certificate (DSC)",
        summary: "Assistance with obtaining a Digital Signature Certificate.",
        points: [
          "Understanding what you need the DSC for",
          "Helping with the application and verification steps",
          "Guidance on using the DSC once issued",
        ],
      },
      {
        id: "msme-registration",
        name: "MSME Registration",
        summary: "Assistance with MSME (Udyam) registration for your enterprise.",
        points: [
          "Confirming the business details required",
          "Completing the registration on the official portal",
          "Sharing the registration certificate for your records",
        ],
      },
      {
        id: "iec-registration",
        name: "Import Export Code (IEC) Registration",
        summary: "Assistance with obtaining an Import Export Code for your business.",
        points: [
          "Collecting the business details and documents required",
          "Filing the application on the official portal",
          "Sharing the IEC details once issued",
        ],
      },
      {
        id: "food-licence",
        name: "Food Licence Registration and Return",
        summary: "Assistance with food licence registration and related return filing for food businesses.",
        points: [
          "Understanding your food business activity",
          "Helping with the registration or licence application",
          "Assisting with related return filing where applicable",
        ],
      },
    ],
    requirements: [
      "Businesses that deduct or collect tax at source and need returns filed",
      "Individuals and businesses that need a Digital Signature Certificate",
      "Enterprises that want to register as an MSME",
      "Businesses planning to import or export",
      "Food businesses that need food licence registration or returns",
    ],
    faqs: [
      {
        question: "Do you file TDS and TCS returns?",
        answer:
          "Yes. We prepare and file TDS and TCS returns based on the deduction and collection details from your records.",
      },
      {
        question: "Can you help me get a Digital Signature Certificate?",
        answer: "Yes. We assist with the DSC application and verification steps.",
      },
      {
        question: "Do you help with MSME and IEC registration?",
        answer:
          "Yes. We assist with MSME (Udyam) registration and Import Export Code (IEC) registration on the respective official portals.",
      },
      {
        question: "What does the food licence service cover?",
        answer:
          "We assist food businesses with food licence registration and related return filing. Please contact us with your business details so that we can confirm the exact scope for your requirement.",
      },
    ],
    related: ["accounts", "goods-and-services-tax", "payroll-epf-esi"],
    articles: [
      "understanding-tds-and-tcs-return-filing",
      "msme-registration-practical-overview",
      "import-export-code-registration",
      "food-licence-registration-and-returns",
    ],
    seo: {
      title: "TDS & TCS Returns, DSC, MSME, IEC & Food Licence Services",
      description:
        "TDS and TCS return filing, Digital Signature Certificates, MSME registration, Import Export Code registration, and food licence registration and returns by RVSK Tax Services.",
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function serviceHref(slug: string) {
  return `/services/${slug}`;
}
