/**
 * Educational articles. These are general overviews, not professional advice.
 * They intentionally avoid quoting thresholds, rates, due dates or penalties,
 * because those change frequently — readers are pointed to official portals.
 * Review each article against current official sources before re-publishing.
 */

export type ArticleBlock = { type: "p"; text: string } | { type: "ul"; items: string[] } | { type: "h3"; text: string };

export type ArticleSection = { heading: string; blocks: ArticleBlock[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string; // service slug
  published: string;
  updated: string;
  readingMinutes: number;
  intro: string;
  sections: ArticleSection[];
  officialLinks: { label: string; href: string }[];
};

const P = (text: string): ArticleBlock => ({ type: "p", text });
const UL = (...items: string[]): ArticleBlock => ({ type: "ul", items });

const PUBLISHED = "2026-10-09";

export const articles: Article[] = [
  {
    slug: "gst-registration-and-return-filing-overview",
    title: "GST Registration and Return Filing: An Overview",
    description:
      "A plain-language overview of GST registration and periodic GST return filing for businesses in India, and how to prepare for each.",
    category: "goods-and-services-tax",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 5,
    intro:
      "Goods and Services Tax (GST) touches almost every business in India. For most businesses, the GST journey has two parts: getting registered, and then filing returns on a regular basis. This overview explains both in plain language.",
    sections: [
      {
        heading: "Who needs GST registration?",
        blocks: [
          P(
            "Whether your business must register under GST depends on factors set out in the law — such as your aggregate turnover, the state you operate in, and the nature of your supplies. Certain categories of businesses are required to register regardless of turnover, while some businesses choose to register voluntarily.",
          ),
          P(
            "Because thresholds and categories are defined by law and notifications that can change, it is best to check the current position on the official GST portal or discuss your business activity with a professional before applying.",
          ),
        ],
      },
      {
        heading: "How GST registration works",
        blocks: [
          P("Registration is done online through the GST portal. At a high level, the process involves:"),
          UL(
            "Submitting business, promoter and place-of-business details",
            "Uploading supporting documents such as identity, address and business proofs",
            "Completing the verification steps required by the portal",
            "Responding to any clarification requested by the tax officer",
          ),
          P(
            "Once approved, the business receives a GST Identification Number (GSTIN) and a registration certificate, which can be downloaded from the portal.",
          ),
        ],
      },
      {
        heading: "What GST return filing involves",
        blocks: [
          P(
            "Registered businesses report their outward supplies (sales), inward supplies (purchases) and tax payable through GST returns. Which returns you file, and how often, depends on your registration type and the schemes you have opted for.",
          ),
          P("Good return filing depends on good records. Before each filing period, it helps to have:"),
          UL(
            "Complete sales invoices and credit or debit notes",
            "Purchase invoices, so that eligible input tax credit can be reviewed",
            "A reconciliation of your books with what is reported on the portal",
          ),
        ],
      },
      {
        heading: "Practical tips",
        blocks: [
          UL(
            "Keep invoices organised month by month rather than collecting them at filing time.",
            "Review differences between your records and supplier-reported data regularly.",
            "Check the GST portal for current due dates — they are set by law and may be extended by notification.",
          ),
          P(
            "RVSK Tax Services assists with GST registration and GST return filing. If you would like help, get in touch with our team to discuss your requirement.",
          ),
        ],
      },
    ],
    officialLinks: [
      { label: "GST Portal", href: "https://www.gst.gov.in/" },
      { label: "CBIC – GST", href: "https://cbic-gst.gov.in/" },
    ],
  },
  {
    slug: "understanding-gst-annual-returns",
    title: "Understanding GST Annual Returns (GSTR-9 and GSTR-9C)",
    description:
      "What the GST annual return (GSTR-9) and the reconciliation statement (GSTR-9C) are, and how to prepare your data before filing.",
    category: "goods-and-services-tax",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 5,
    intro:
      "In addition to periodic returns, many GST-registered businesses must file an annual return. This article explains what GSTR-9 and GSTR-9C are and how to prepare for them.",
    sections: [
      {
        heading: "What is GSTR-9?",
        blocks: [
          P(
            "GSTR-9 is the annual return under GST. It consolidates the information reported in your periodic returns over a financial year — including outward supplies, inward supplies, input tax credit and tax paid — into a single statement.",
          ),
          P(
            "Not every registered person is required to file GSTR-9; certain categories of taxpayers and businesses below prescribed limits may be exempted. Check the current rules on the GST portal for your situation.",
          ),
        ],
      },
      {
        heading: "What is GSTR-9C?",
        blocks: [
          P(
            "GSTR-9C is a reconciliation statement. It reconciles the figures in your annual return with the figures in your financial statements for the year. It applies to taxpayers whose turnover is above a prescribed limit.",
          ),
        ],
      },
      {
        heading: "Preparing for the annual return",
        blocks: [
          P("The annual return is only as good as the data behind it. Before filing, it helps to:"),
          UL(
            "Reconcile sales reported in periodic returns with your books of account",
            "Review input tax credit claimed against purchase records and supplier data",
            "Identify any amendments or corrections made during the year",
            "Make sure your financial statements for the year are finalised where GSTR-9C applies",
          ),
          P(
            "Differences identified during this review should be understood and resolved before filing, because the annual return is meant to present a complete and accurate picture of the year.",
          ),
        ],
      },
      {
        heading: "How RVSK can help",
        blocks: [
          P(
            "RVSK Tax Services prepares and files GST annual returns — GSTR-9 and, where applicable, GSTR-9C. Contact us to discuss your requirement.",
          ),
        ],
      },
    ],
    officialLinks: [{ label: "GST Portal", href: "https://www.gst.gov.in/" }],
  },
  {
    slug: "guide-to-gst-lut-filing",
    title: "A Guide to GST LUT Filing for Exporters",
    description:
      "What a Letter of Undertaking (LUT) under GST is, who uses it, and the general steps for filing an LUT on the GST portal.",
    category: "goods-and-services-tax",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 4,
    intro:
      "Exporters registered under GST can often make export supplies without paying integrated tax upfront by furnishing a Letter of Undertaking (LUT). Here is a short guide to what an LUT is and how it is filed.",
    sections: [
      {
        heading: "What is an LUT?",
        blocks: [
          P(
            "A Letter of Undertaking is a declaration filed by an eligible registered person, undertaking to comply with the conditions for exporting goods or services without payment of integrated tax (IGST). It is an alternative to paying the tax and later claiming a refund.",
          ),
          P(
            "An LUT is generally furnished for a financial year, so exporters typically file a fresh LUT for each year. Eligibility conditions are set out in the GST law, so check the current conditions before filing.",
          ),
        ],
      },
      {
        heading: "General steps to file an LUT",
        blocks: [
          UL(
            "Log in to the GST portal with your credentials",
            "Open the LUT application under the services section",
            "Select the financial year and fill in the required declarations and witness details",
            "Sign and submit the application using the signing method available to you",
            "Download the acknowledgement for your records",
          ),
        ],
      },
      {
        heading: "Keep your records ready",
        blocks: [
          P(
            "Keep a copy of the filed LUT and its acknowledgement with your export documentation. Invoices for exports under LUT should carry the appropriate declaration as required by the rules.",
          ),
          P("RVSK Tax Services assists exporters with GST LUT filing. Get in touch to discuss your requirement."),
        ],
      },
    ],
    officialLinks: [{ label: "GST Portal", href: "https://www.gst.gov.in/" }],
  },
  {
    slug: "epf-and-esi-registration-and-monthly-returns",
    title: "EPF and ESI: Registration and Monthly Returns Explained",
    description:
      "An introduction to employer registration under EPF and ESI and the monthly return and contribution process, in plain language.",
    category: "payroll-epf-esi",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 5,
    intro:
      "The Employees’ Provident Fund (EPF) and Employees’ State Insurance (ESI) are two of the main social security schemes for employees in India. Employers covered by these schemes need to register and then make contributions and file returns every month.",
    sections: [
      {
        heading: "EPF in brief",
        blocks: [
          P(
            "EPF is administered by the Employees’ Provident Fund Organisation (EPFO). A portion of an eligible employee’s wages is deducted every month and deposited along with the employer’s contribution. Employees can later withdraw or transfer these savings in line with the scheme’s rules.",
          ),
        ],
      },
      {
        heading: "ESI in brief",
        blocks: [
          P(
            "ESI is administered by the Employees’ State Insurance Corporation (ESIC). It is a self-financing social security and health insurance scheme that provides medical and cash benefits to covered employees, funded by contributions from employers and employees.",
          ),
        ],
      },
      {
        heading: "A note on the labour codes",
        blocks: [
          P(
            "India has consolidated several labour laws into labour codes, including the Code on Social Security, 2020, which covers provident fund and employees’ state insurance. Coverage conditions, wage definitions and procedures may therefore differ from what you are used to. Check the EPFO and ESIC websites, or speak with a professional, for the position that applies to your establishment.",
          ),
        ],
      },
      {
        heading: "Registration and monthly filing",
        blocks: [
          P("Broadly, the process for an employer looks like this:"),
          UL(
            "Register the establishment with EPFO and ESIC through their online portals",
            "Register eligible employees and maintain their details",
            "Every month, calculate contributions based on wages paid",
            "File the monthly return and pay contributions through the respective portals",
            "Keep payment confirmations and returns for your records",
          ),
          P(
            "Accurate monthly salary data is the foundation of correct filings, which is why payroll and statutory compliance work best together.",
          ),
        ],
      },
      {
        heading: "How RVSK can help",
        blocks: [
          P(
            "RVSK Tax Services assists with EPF and ESI registration, monthly return filing, complaints and claims, professional tax registration, and salary and payslip preparation.",
          ),
        ],
      },
    ],
    officialLinks: [
      { label: "EPFO", href: "https://www.epfindia.gov.in/" },
      { label: "ESIC", href: "https://www.esic.gov.in/" },
      { label: "Ministry of Labour & Employment", href: "https://labour.gov.in/" },
    ],
  },
  {
    slug: "on-site-and-off-site-bookkeeping",
    title: "The Benefits of On-Site and Off-Site Bookkeeping",
    description:
      "How on-site and off-site accounts bookkeeping differ, and how to choose the arrangement that suits your business.",
    category: "outsourcing",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 4,
    intro:
      "Outsourcing your bookkeeping does not have to mean giving up control. At RVSK Tax Services, bookkeeping can be arranged in two ways — on-site at your premises or off-site at ours. Here is how they compare.",
    sections: [
      {
        heading: "On-site bookkeeping",
        blocks: [
          P(
            "With on-site bookkeeping, your accounts are maintained at your location. Depending on your requirement, this can be through periodic visits (daily, weekly, fortnightly or monthly) or by deploying an RVSK employee to work at your premises on a regular basis, on RVSK’s payroll.",
          ),
          UL(
            "Your records and documents stay at your premises",
            "Easy, face-to-face coordination with your team",
            "No need to add an accounts employee to your own payroll",
          ),
        ],
      },
      {
        heading: "Off-site bookkeeping",
        blocks: [
          P(
            "With off-site bookkeeping, you share your financial data and your accounts are maintained at RVSK’s premises, with attention to the accuracy, availability and security of your data.",
          ),
          UL(
            "No need for dedicated workspace or staff at your location",
            "Suits businesses comfortable sharing data periodically",
            "Accounts maintained by a team rather than a single individual",
          ),
        ],
      },
      {
        heading: "Choosing between them",
        blocks: [
          P("A few questions can help you decide:"),
          UL(
            "How many transactions do you record each day or month?",
            "Do your documents need to stay at your premises?",
            "Would your team benefit from an accounts person on location?",
            "How quickly do you need your books updated and reports available?",
          ),
          P("If you are unsure, contact us and we will help you think through the arrangement that suits your business."),
        ],
      },
    ],
    officialLinks: [],
  },
  {
    slug: "why-accurate-bookkeeping-matters",
    title: "Why Accurate Bookkeeping Matters for Businesses",
    description:
      "Why accurate, up-to-date books matter for decision-making, tax filing and compliance — and simple habits that keep them in order.",
    category: "accounts",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 4,
    intro:
      "Bookkeeping is the routine work of recording every transaction your business makes. It may not be glamorous, but nearly every financial decision and compliance filing depends on it.",
    sections: [
      {
        heading: "Better decisions",
        blocks: [
          P(
            "Up-to-date books show what you earn, what you spend and what you are owed. Reports such as the profit and loss account, balance sheet and receivables and payables summaries help you see how the business is really doing.",
          ),
        ],
      },
      {
        heading: "Smoother tax and compliance filings",
        blocks: [
          P(
            "GST returns, TDS returns and income tax returns all draw on the information in your books. When the books are accurate, filings are faster and differences are easier to explain. When they are not, problems tend to surface at the worst possible time.",
          ),
        ],
      },
      {
        heading: "Simple habits that help",
        blocks: [
          UL(
            "Record transactions regularly instead of in large batches",
            "Keep supporting invoices and receipts organised",
            "Reconcile bank accounts with your books every month",
            "Review receivables and payables so that nothing is missed",
            "Close each month before moving on to the next",
          ),
        ],
      },
      {
        heading: "How RVSK can help",
        blocks: [
          P(
            "RVSK Tax Services provides bookkeeping as part of our Accounts services, and outsourced on-site or off-site accounts bookkeeping under our Outsourcing services.",
          ),
        ],
      },
    ],
    officialLinks: [],
  },
  {
    slug: "income-tax-filing-documents-to-prepare",
    title: "Income Tax Filing: Documents to Prepare",
    description:
      "A practical checklist of documents and information to gather before filing your income tax return in India.",
    category: "accounts",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 5,
    intro:
      "Filing an income tax return is far easier when your documents are ready in advance. This checklist covers the information most taxpayers are asked for. Your own list will depend on your sources of income.",
    sections: [
      {
        heading: "A note on the new Income-tax Act",
        blocks: [
          P(
            "The Income-tax Act, 2025 has replaced the Income-tax Act, 1961 with effect from 1 April 2026, and some forms and terms have been renamed or renumbered. The documents you need are broadly similar, but always use the forms and guidance currently available on the income tax e-filing portal.",
          ),
        ],
      },
      {
        heading: "Basic details",
        blocks: [UL("PAN and Aadhaar", "Bank account details for any refund", "Contact details registered on the e-filing portal")],
      },
      {
        heading: "Income details",
        blocks: [
          UL(
            "Salary TDS certificate issued by your employer, if you are salaried",
            "Interest certificates and bank statements",
            "Details of rental income, if any",
            "Details of capital transactions, such as the sale of shares or property, if any",
            "Business or professional income records and books of account, if applicable",
          ),
        ],
      },
      {
        heading: "Tax credits and statements",
        blocks: [
          P(
            "The e-filing portal provides statements summarising the tax deducted or collected against your PAN and other reported financial information, such as the Annual Information Statement (AIS). Review these and compare them with your own records before filing.",
          ),
        ],
      },
      {
        heading: "Deductions and payments",
        blocks: [
          UL(
            "Proof of eligible investments and payments, if you claim deductions",
            "Challans for any advance tax or self-assessment tax paid",
          ),
          P("RVSK Tax Services assists with income tax filing. Contact us to discuss your requirement."),
        ],
      },
    ],
    officialLinks: [{ label: "Income Tax e-Filing Portal", href: "https://www.incometax.gov.in/" }],
  },
  {
    slug: "introduction-to-it-audit-support",
    title: "An Introduction to IT Audit Support",
    description:
      "What income tax audit support involves, how it differs from the audit itself, and how to prepare your books and records.",
    category: "accounts",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 4,
    intro:
      "Some businesses and professionals are required to have their accounts audited under the income tax law. Getting the books and records ready for that audit is a significant piece of work — this is where IT audit support comes in.",
    sections: [
      {
        heading: "Audit vs audit support",
        blocks: [
          P(
            "A tax audit under the income tax law is carried out by a qualified accountant (a chartered accountant) when the law requires it, for example when turnover or receipts exceed prescribed limits. The audit itself, and the audit report, are the responsibility of that auditor.",
          ),
          P(
            "IT audit support is the preparatory work around the audit: organising books of account, preparing schedules and supporting information, and responding to the auditor’s information requests. It does not replace the audit or the auditor’s certification.",
          ),
        ],
      },
      {
        heading: "What usually needs to be ready",
        blocks: [
          UL(
            "Complete, reconciled books of account for the year",
            "Bank reconciliations and confirmations where needed",
            "Schedules of fixed assets, loans, receivables and payables",
            "Records of tax deducted and paid, and GST returns filed",
            "Supporting invoices and documents for significant transactions",
          ),
        ],
      },
      {
        heading: "How RVSK can help",
        blocks: [
          P(
            "RVSK Tax Services offers IT audit support as part of our Accounts services. The exact scope is agreed with you before we begin. Contact us to discuss your requirement.",
          ),
        ],
      },
    ],
    officialLinks: [{ label: "Income Tax e-Filing Portal", href: "https://www.incometax.gov.in/" }],
  },
  {
    slug: "tally-training-and-software-support",
    title: "Tally Training and Accounting Software Support",
    description:
      "How Tally training and software support can help your team record transactions correctly and get more from your accounting software.",
    category: "accounts",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 3,
    intro:
      "Tally is widely used by businesses in India to maintain their accounts. The software is only as useful as the people using it, which is why training and dependable support matter.",
    sections: [
      {
        heading: "Why training helps",
        blocks: [
          UL(
            "Entries are recorded consistently and in the right ledgers",
            "Reports such as the balance sheet, profit and loss and outstanding statements can be generated with confidence",
            "Less time is spent correcting errors later",
            "Your team becomes more self-sufficient day to day",
          ),
        ],
      },
      {
        heading: "Software sales and support",
        blocks: [
          P(
            "Choosing the right software edition, setting it up and resolving everyday usage questions can take time away from running the business. Having a support contact who understands both accounting and the software makes this easier.",
          ),
          P(
            "RVSK Tax Services offers Tally training, and Tally software sales and support. Contact us to discuss what your team needs.",
          ),
        ],
      },
    ],
    officialLinks: [{ label: "Tally Solutions", href: "https://tallysolutions.com/" }],
  },
  {
    slug: "understanding-tds-and-tcs-return-filing",
    title: "Understanding TDS and TCS Return Filing",
    description:
      "A plain-language explanation of TDS and TCS, the periodic statements deductors and collectors file, and how to keep records ready.",
    category: "other-activities",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 5,
    intro:
      "Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) are ways of collecting income tax at the point of a transaction. Businesses that deduct or collect tax must deposit it and file periodic statements reporting the details.",
    sections: [
      {
        heading: "TDS and TCS in brief",
        blocks: [
          P(
            "Under TDS, the payer deducts tax when making certain payments — such as salary, contractor payments, professional fees or rent — and deposits it with the government. Under TCS, the seller collects tax from the buyer on certain specified transactions and deposits it.",
          ),
          P(
            "In both cases, the tax deducted or collected is credited against the PAN of the person concerned, who can see it in their tax credit statements.",
          ),
        ],
      },
      {
        heading: "What TDS and TCS returns are",
        blocks: [
          P(
            "Deductors and collectors file periodic statements (returns) that report the deductions or collections made, the deposits made and the PAN details of the people concerned. These statements are what allow the credit to reflect correctly for each person.",
          ),
          P(
            "With the Income-tax Act, 2025 applying from 1 April 2026, the forms and section references used for TDS and TCS have changed for transactions on or after that date. Always confirm which forms apply on the official portals before filing.",
          ),
        ],
      },
      {
        heading: "Keeping records ready",
        blocks: [
          UL(
            "Correct PAN details for every deductee or collectee",
            "Dates and amounts of payments, deductions and collections",
            "Challan details for each deposit made",
            "Any lower or nil deduction certificates received",
          ),
          P("RVSK Tax Services prepares and files TDS and TCS returns. Contact us to discuss your requirement."),
        ],
      },
    ],
    officialLinks: [
      { label: "Income Tax e-Filing Portal", href: "https://www.incometax.gov.in/" },
      { label: "TRACES", href: "https://www.tdscpc.gov.in/" },
    ],
  },
  {
    slug: "msme-registration-practical-overview",
    title: "MSME Registration: A Practical Overview",
    description:
      "What MSME (Udyam) registration is, the information typically required, and practical points to keep in mind when registering.",
    category: "other-activities",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 4,
    intro:
      "Micro, small and medium enterprises (MSMEs) can register on the government’s Udyam Registration portal. Registration gives the enterprise a recognised identity as an MSME, which is often required to access schemes meant for MSMEs.",
    sections: [
      {
        heading: "What is Udyam registration?",
        blocks: [
          P(
            "Udyam registration is the online process for registering an enterprise as a micro, small or medium enterprise. Classification is based on criteria such as investment and turnover, as notified by the government. Once registered, the enterprise receives a Udyam Registration Number and certificate.",
          ),
          P(
            "Registration is done on the official Udyam Registration portal. Be cautious of websites that look similar to the official portal.",
          ),
        ],
      },
      {
        heading: "Information typically required",
        blocks: [
          UL(
            "Aadhaar of the proprietor, partner or authorised signatory",
            "PAN of the enterprise or proprietor",
            "Business details such as name, address, activity and bank details",
            "Details of the enterprise’s activity classification",
          ),
        ],
      },
      {
        heading: "After registration",
        blocks: [
          P(
            "Keep your registration details up to date on the portal if your business information changes. Check the portal for current guidance on updates.",
          ),
          P("RVSK Tax Services assists with MSME registration. Contact us to discuss your requirement."),
        ],
      },
    ],
    officialLinks: [{ label: "Udyam Registration Portal", href: "https://udyamregistration.gov.in/" }],
  },
  {
    slug: "import-export-code-registration",
    title: "Import Export Code (IEC) Registration",
    description:
      "An overview of the Import Export Code (IEC), who needs one, and the general process for applying on the DGFT portal.",
    category: "other-activities",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 4,
    intro:
      "Businesses that want to import or export goods or services from India generally need an Import Export Code (IEC). It is issued by the Directorate General of Foreign Trade (DGFT).",
    sections: [
      {
        heading: "What is an IEC?",
        blocks: [
          P(
            "The IEC is a business identification number issued by DGFT, linked to the PAN of the business. It is used in import and export documentation and is required for most import and export activity, subject to the exemptions notified by DGFT.",
          ),
        ],
      },
      {
        heading: "Applying for an IEC",
        blocks: [
          P("Applications are made online on the DGFT portal. Broadly, you will need:"),
          UL(
            "PAN of the business",
            "Business name, address and contact details",
            "Bank account details",
            "Supporting documents as requested on the portal",
          ),
        ],
      },
      {
        heading: "Keeping your IEC active",
        blocks: [
          P(
            "DGFT requires IEC holders to keep their details updated on the portal. Check the DGFT website for the current requirements so that your IEC remains active.",
          ),
          P("RVSK Tax Services assists with IEC registration. Contact us to discuss your requirement."),
        ],
      },
    ],
    officialLinks: [{ label: "DGFT", href: "https://www.dgft.gov.in/" }],
  },
  {
    slug: "food-licence-registration-and-returns",
    title: "Food Licence Registration and Returns",
    description:
      "An introduction to food business registration and licensing in India and the related return filing for food businesses.",
    category: "other-activities",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: 4,
    intro:
      "Food businesses in India — from small vendors to manufacturers — operate under the food safety framework administered by the Food Safety and Standards Authority of India (FSSAI). Depending on their scale and activity, they need either a registration or a licence.",
    sections: [
      {
        heading: "Registration or licence?",
        blocks: [
          P(
            "Smaller food businesses generally need a basic registration, while larger businesses or those in certain activities need a State or Central licence. Which one applies depends on criteria such as the type of activity and the scale of operations, as set out by FSSAI.",
          ),
          P("Applications are made through FSSAI’s online system, FoSCoS."),
        ],
      },
      {
        heading: "Returns",
        blocks: [
          P(
            "Certain licence holders — for example, some manufacturers and importers — are required to file periodic returns on FoSCoS. Whether a return applies, and which one, depends on your licence and activity. Check FoSCoS for the current requirements.",
          ),
        ],
      },
      {
        heading: "Preparing your application",
        blocks: [
          UL(
            "Identity and address details of the proprietor or partners",
            "Details of the business premises",
            "A description of the food business activity and products",
            "Other documents requested for the category you apply under",
          ),
          P(
            "RVSK Tax Services assists with food licence registration and returns. Contact us with your business details to discuss your requirement.",
          ),
        ],
      },
    ],
    officialLinks: [{ label: "FSSAI FoSCoS", href: "https://foscos.fssai.gov.in/" }],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function articlesForService(slug: string) {
  return articles.filter((a) => a.category === slug);
}
