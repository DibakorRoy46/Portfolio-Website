import {
  Education,
  Expertise,
  Milestone,
  Principle,
  Profile,
  Project,
  Role,
  SkillGroup,
  Stat,
} from './portfolio.models';

// All site content lives in this file. Edit it and push to update the site.

export const profile: Profile = {
  name: 'Dibakor Roy',
  initials: 'DR',
  role: 'Senior Software Engineer',
  focus: ['.NET', 'Angular', 'Azure', 'Integration', 'Distributed Systems'],
  tagline:
    'I design and build the enterprise systems behind large sales and distribution networks, integrated with SAP and built to hold up at scale.',
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6',
  email: 'dibakorroy56@gmail.com',
  github: 'https://github.com/DibakorRoy46',
  linkedin: 'https://linkedin.com/in/dibakorroy',
  resumeUrl: '/Dibakor-Roy-Resume.pdf',
  photoUrl: '',
  about: [
    'Senior Software Engineer with 5+ years of experience designing and delivering scalable enterprise applications with .NET, C#, ASP.NET Core, Angular, Azure, SQL Server and microservices.',
    'I specialize in Clean Architecture, DDD, CQRS and event-driven distributed systems, with deep experience integrating enterprise platforms such as SAP SD. I have delivered solutions for global organizations including Unilever, JTI, A.O. Smith and Arla, supporting 250K+ retail outlets, 6,000+ concurrent users and 200K+ daily transactions.',
    'Most of my work sits in sales and distribution: orders, inventory, challans, delivery, returns, claims and commissions, and the integrations that keep those processes consistent across HRMS, DMS, SAP and VAT platforms. That domain knowledge lets me turn complex business rules into software that field teams and distributors rely on every day.',
    'Alongside delivery, I lead technically and mentor other engineers, with growing ownership of architecture strategy across client engagements.',
  ],
  now: 'Learning and working on AI: RAG and LLM optimization. Bringing AI into enterprise software, with retrieval-augmented assistants over sales and inventory data, built on .NET and Angular.',
  clients: ['Unilever', 'JTI', 'A.O. Smith', 'Arla', 'AutoCrop Care', 'Lipton Tea', 'TDCL'],
  workingStyle: [
    {
      title: 'Specs before code',
      body: 'I write the requirement down first: an SRS, an API contract or a diagram. It is cheaper to argue with a document than with a release.',
    },
    {
      title: 'Close to the business',
      body: 'I work directly with stakeholders to turn complex requirements into something that can be built, tested and explained.',
    },
    {
      title: 'Reviews that teach',
      body: 'Code review is where I mentor. Five junior developers have come through that process, and production incidents fell by 30%.',
    },
    {
      title: 'AI as a tool, not a shortcut',
      body: 'I use Claude and GitHub Copilot in my daily workflow, and I teach the team to check what they produce.',
    },
  ],
  topics: [
    {
      title: 'An integration that has to be right',
      body: 'SAP, HRMS, VAT or payment systems that must agree with each other, every time.',
    },
    {
      title: 'A system slowing down under load',
      body: 'APIs, queries or batch jobs that were fine at launch and are not any more.',
    },
    {
      title: 'A codebase that needs clearer boundaries',
      body: 'Moving towards Clean Architecture, messaging or services without stopping delivery.',
    },
  ],
  industries: [
    'FMCG',
    'Sales & Distribution',
    'Tobacco',
    'HRMS',
    'Payroll',
    'POS',
    'Insurance',
    'Automobile ERP',
    'Payments',
  ],
};

/** Shown in the scrolling strip under the hero. */
export const coreTech: string[] = [
  'C#',
  '.NET 10',
  'ASP.NET Core',
  'Angular',
  'TypeScript',
  'SQL Server',
  'Azure',
  'RabbitMQ',
  'Redis',
  'Hangfire',
  'SignalR',
  'gRPC',
  'EF Core',
  'Dapper',
  'Docker',
  'Kubernetes',
  'SAP SD',
];

export const stats: Stat[] = [
  { value: '5+', label: 'Years of experience' },
  { value: '250K+', label: 'Retail outlets supported' },
  { value: '6,000+', label: 'Concurrent users' },
  { value: '200K+', label: 'Daily transactions' },
  { value: '60%', label: 'Lower API latency' },
  { value: '4×', label: 'Faster batch processing' },
  { value: '97%', label: 'Fewer reconciliation errors' },
  { value: '50%', label: 'Faster deployments' },
];

export const expertise: Expertise[] = [
  {
    icon: 'integration',
    proof: { value: '500+', label: 'Distributors kept in real-time sync' },
    related: { label: 'HRMS–DMS Integration', path: '/work/hrms-dms-integration' },
    title: 'Enterprise integration',
    description:
      'Connecting SAP SD, HRMS, DMS, VAT and payment platforms so data agrees across systems. I build REST and XML services, two-way sync through background jobs, and the validation that keeps master data consistent.',
    tools: ['SAP SD', 'SAP CPI', 'OData V2', 'REST', 'XML Web Services'],
  },
  {
    icon: 'distributed',
    proof: { value: 'At-least-once', label: 'Delivery across 4 service databases' },
    related: { label: 'E-Commerce Microservices', path: '/projects/ecommerce-microservices' },
    title: 'Distributed and event-driven systems',
    description:
      'Microservices and modular monoliths on Clean Architecture, DDD and CQRS. Messaging with the Outbox pattern, idempotent processing and retries, so work is neither lost nor done twice.',
    tools: ['RabbitMQ', 'Azure Service Bus', 'MassTransit', 'gRPC', 'SignalR'],
  },
  {
    icon: 'performance',
    proof: { value: '700ms', label: 'Challan processing, down from 2.5s' },
    related: {
      label: 'Online Sales & Distribution',
      path: '/work/online-sales-distribution-system',
    },
    title: 'Performance and scale',
    description:
      'Platforms serving 6,000+ concurrent users and 200K+ daily transactions. Query and index tuning, caching and asynchronous processing brought average API response time from 1.2s to under 500ms.',
    tools: ['SQL Server', 'Redis', 'Dapper', 'EF Core', 'Hangfire'],
  },
  {
    icon: 'fullstack',
    proof: { value: 'Order → invoice', label: 'One workflow from capture to final invoice' },
    related: { label: 'Tertiary Sales Module', path: '/work/tertiary-sales-module' },
    title: 'Full-stack delivery',
    description:
      'Complete modules from database to screen in ASP.NET Core and Angular: order-to-cash, inventory, challans, claims and returns, commissions and reporting.',
    tools: ['C#', 'ASP.NET Core', 'Angular', 'TypeScript', 'PrimeNG'],
  },
  {
    icon: 'cloud',
    proof: { value: '50%', label: 'Less manual deployment effort' },
    title: 'Cloud and DevOps',
    description:
      'Azure Functions for heavy batch work, App Service and AKS for hosting, and automated pipelines that cut manual deployment effort by 50%.',
    tools: ['Azure', 'Docker', 'Kubernetes', 'Azure DevOps', 'GitHub Actions', 'Jenkins'],
  },
  {
    icon: 'leadership',
    proof: { value: '30%', label: 'Fewer production incidents' },
    title: 'Technical leadership',
    description:
      'Architecture decisions on async processing, caching, messaging and integration. Mentoring junior developers through code reviews and Clean Architecture training, which reduced production incidents by 30%.',
    tools: ['Architecture', 'Code review', 'Mentoring', 'SRS writing', 'Agile / Scrum'],
  },
];

export const principles: Principle[] = [
  {
    title: 'Reliability before speed',
    example:
      'On the Field Order platform, sync jobs are guarded against concurrent execution, so an order never reaches SAP twice.',
    related: { label: 'Field Order & SAP Integration', path: '/work/field-order-sap-integration' },
    body: 'Money and stock move through these systems, so every message has to be processed exactly as intended. I use the Outbox pattern, idempotent handlers, retries and concurrency guards so work is neither lost nor done twice.',
  },
  {
    title: 'Asynchronous by default',
    example:
      'In the Technician Sales Module, RabbitMQ and Hangfire carry the follow-up work, so recording a sale never waits on it.',
    related: { label: 'Technician Sales Module', path: '/work/technician-sales-module' },
    body: 'Anything that does not need an immediate answer leaves the request path. RabbitMQ and Hangfire absorb the spikes, and the API stays fast for the person in the field.',
  },
  {
    title: 'Measure, then tune',
    example: 'Challan processing on the Online Sales platform went from 2.5s to 700ms.',
    related: {
      label: 'Online Sales & Distribution',
      path: '/work/online-sales-distribution-system',
    },
    body: 'Performance work starts from the slow query or the hot path, not from a guess. Indexing, query tuning, Redis caching and separate read and write paths took APIs from 1.2s to under 500ms.',
  },
  {
    title: 'Architecture that fits the problem',
    example: 'SalesPulse uses Clean Architecture layers and stops there.',
    related: { label: 'SalesPulse', path: '/projects/salespulse' },
    body: 'Clean Architecture and DDD where the domain is complex, and CQRS only where reads and writes really differ. SalesPulse deliberately skips CQRS because it does not need it.',
  },
  {
    title: 'Integration is a product',
    example:
      'The HRMS–DMS integration keeps two systems in step for 500+ distributors, in real time.',
    related: { label: 'HRMS–DMS Integration', path: '/work/hrms-dms-integration' },
    body: 'Contracts, validation and reconciliation matter as much as the code behind them. Standardizing REST and XML contracts cut new-client integration time by 30%.',
  },
  {
    title: 'Write it down, automate it',
    example:
      'The Issue Tracker ships with architecture docs, 350 automated tests and a recorded tutorial.',
    related: { label: 'Issue Tracker', path: '/projects/issue-tracker' },
    body: 'SRS documents, architecture diagrams and API contracts keep teams aligned. CI/CD pipelines make a release routine instead of risky.',
  },
];

export const caseStudies: Project[] = [
  {
    slug: 'online-sales-distribution-system',
    company: 'Computer Ease',
    title: 'Online Sales & Distribution System',
    context: 'FMCG & Tobacco',
    summary:
      'Turned an offline distribution management system into a high-availability online platform serving 6,000+ concurrent users.',
    problem:
      'Distributor and field-sales operations ran on an offline distribution management system. The business needed reliable order processing, inventory tracking, delivery management and sales visibility online, with data kept in sync between distributor sites and the central platform.',
    role: 'Senior engineer across backend and frontend: module design, API development, performance tuning, data strategy and documentation.',
    contributions: [
      'Moved an offline DMS to a high-availability online platform serving 6,000+ concurrent users.',
      'Delivered five core modules: Orders, Sales, Promotion, Market Returns and Inventory.',
      'Built the workflows around them: employee management, stock, challans, delivery confirmation and sales returns.',
      'Implemented distribution business rules for TP/CLP, commissions and damages.',
      'Integrated sales and stock processes with external enterprise systems.',
      'Cut challan processing time from 2.5s to 700ms.',
      'Defined the data archiving and warehousing strategy.',
      'Wrote the full documentation set: SRS, architecture diagrams and API contracts.',
    ],
    engineering: [
      {
        title: 'Performance under load',
        body: 'Redis caching and SQL Server query and index tuning took read pressure off the database. Challan processing, one of the heaviest operations, dropped from 2.5s to 700ms.',
      },
      {
        title: 'Asynchronous processing',
        body: 'RabbitMQ moves work that does not need an immediate answer off the request path, so order capture stays responsive when thousands of users are active at once.',
      },
      {
        title: 'Offline to online',
        body: 'Distributor-side operations that used to run offline now synchronize their operational data with the online platform.',
      },
      {
        title: 'Data lifecycle',
        body: 'An archiving and warehousing strategy keeps the transactional database lean while history stays available for reporting.',
      },
    ],
    architecture: [
      { label: 'Clients', nodes: ['Angular web app', 'Mobile clients'] },
      { label: 'API', nodes: ['ASP.NET API layer'] },
      { label: 'Services', nodes: ['Orders', 'Sales', 'Promotion', 'Market Returns', 'Inventory'] },
      { label: 'Messaging & cache', nodes: ['RabbitMQ', 'Redis'] },
      { label: 'Data', nodes: ['SQL Server', 'Archive & warehouse'] },
      { label: 'External', nodes: ['Enterprise sales & stock systems'] },
    ],
    steps: [
      'Field sales and distributors work through the Angular web app and mobile clients.',
      'The API layer validates, authenticates and routes each request.',
      '.NET services apply the order, sales, promotion, returns and inventory rules.',
      'Redis serves cached reads; RabbitMQ carries asynchronous events.',
      'SQL Server holds transactional data, with older data archived and warehoused.',
      'Sales and stock data flow to and from external enterprise systems.',
    ],
    stack: ['ASP.NET Framework', '.NET 8', 'Angular', 'SQL Server', 'Redis', 'RabbitMQ', 'Azure'],
    metrics: [
      { value: '6,000+', label: 'Concurrent users' },
      { value: '700ms', label: 'Challan processing, down from 2.5s' },
      { value: '5', label: 'Core modules delivered' },
    ],
  },
  {
    slug: 'technician-sales-module',
    company: 'Computer Ease',
    title: 'Technician Sales Module',
    context: 'Sales & Distribution',
    summary:
      'A full-stack module for challans, promotions, commissions, returns and claims that processes 200,000+ transactions a day with zero data loss.',
    problem:
      'Technician-driven sales produce a high volume of challans, promotions, commissions, returns and claims every day. Processing had to be fast and reliable, and no transaction could be lost along the way.',
    role: 'Built the module end to end: .NET 10 backend, Angular front end, messaging and background processing.',
    contributions: [
      'Built the full module, covering challans, promotions, commissions, returns and claims.',
      'Used RabbitMQ and Hangfire to run heavy work asynchronously and in the background.',
      'Engineered Azure Functions to process multi-terabyte datasets, cutting batch time from several hours to under 30 minutes.',
      'Processes 200,000+ daily transactions with zero data loss.',
    ],
    engineering: [
      {
        title: 'Asynchronous by design',
        body: 'RabbitMQ separates transaction capture from downstream processing. Spikes in volume queue up and drain instead of failing requests.',
      },
      {
        title: 'Background jobs',
        body: 'Hangfire runs scheduled and long-running work outside the request cycle, with retries when a job fails.',
      },
      {
        title: 'Large-scale batch processing',
        body: 'Azure Functions took over the processing of multi-terabyte datasets. A run that took several hours now finishes in under 30 minutes.',
      },
    ],
    architecture: [
      { label: 'Client', nodes: ['Angular front end'] },
      { label: 'API', nodes: ['ASP.NET Core API (.NET 10)'] },
      { label: 'Processing', nodes: ['RabbitMQ', 'Hangfire jobs', 'Azure Functions'] },
      { label: 'Data', nodes: ['SQL Server'] },
    ],
    steps: [
      'Users record sales activity in the Angular front end.',
      'The ASP.NET Core API validates and stores each transaction.',
      'Follow-up work is published to RabbitMQ.',
      'Hangfire jobs process queued and scheduled work in the background.',
      'Azure Functions handle the large dataset batches.',
    ],
    stack: ['.NET 10', 'Angular', 'Hangfire', 'RabbitMQ', 'Azure Functions', 'SQL Server'],
    metrics: [
      { value: '200K+', label: 'Daily transactions' },
      { value: '4×', label: 'Faster batch processing' },
      { value: '0', label: 'Data loss' },
    ],
  },
  {
    slug: 'hrms-dms-integration',
    company: 'Computer Ease',
    title: 'HRMS–DMS Integration',
    context: 'Unilever DFF',
    summary:
      'High-throughput REST APIs that keep HRMS and the distribution management system in sync for 500+ distributors.',
    problem:
      'Distributor and field-sales operations depend on employee and sales-representative data being the same in HRMS and in the distribution management system. When the two drift apart, every downstream process has to be reconciled.',
    role: 'Architected the integration APIs and the connections to SAP SD.',
    contributions: [
      'Architected high-throughput REST APIs connecting HRMS with DMS, giving 500+ distributors real-time sync.',
      'Synchronized sales-representative and distributor data between the two systems.',
      'Cut reconciliation errors by 97%.',
      'Integrated SAP SD with HRMS, Primary-to-Secondary Sales and VAT platforms, improving data accuracy and cross-system efficiency by 60%.',
    ],
    engineering: [
      {
        title: 'Real-time sync',
        body: 'Changes to employees and sales reps move between HRMS and DMS through REST APIs as they happen, across a network of 500+ distributors. Reconciliation errors fell by 97%.',
      },
      {
        title: 'SAP SD integration',
        body: 'SAP SD is connected to HRMS, Primary-to-Secondary Sales and the VAT platform, so sales, billing and tax data agree from one system to the next.',
      },
    ],
    architecture: [
      { label: 'Source', nodes: ['HRMS'] },
      { label: 'Integration', nodes: ['REST integration APIs (.NET)'] },
      { label: 'Target', nodes: ['DMS', '500+ distributors'] },
      { label: 'Enterprise', nodes: ['SAP SD', 'Primary-to-Secondary Sales', 'VAT platform'] },
    ],
    steps: [
      'HRMS holds employee and sales-representative records.',
      'REST integration APIs carry changes to the DMS in real time.',
      'Distributors work in the DMS with current people and territory data.',
      'SAP SD exchanges sales and billing data with HRMS, Primary-to-Secondary Sales and VAT.',
    ],
    stack: ['.NET', 'REST APIs', 'SQL Server', 'SAP SD'],
    metrics: [
      { value: '500+', label: 'Distributors in real-time sync' },
      { value: '97%', label: 'Fewer reconciliation errors' },
      { value: '60%', label: 'Better cross-system accuracy and efficiency' },
    ],
  },
  {
    slug: 'field-order-sap-integration',
    company: 'Computer Ease',
    title: 'Field Order & SAP Integration Platform',
    context: 'AutoCrop Care',
    summary:
      'A field order app for market-level sales staff with two-way SAP sync, live GPS tracking and multi-step approval.',
    problem:
      'Market-level sales staff needed to take orders in the field with the right discounts, payment terms and approvals. Every approved order then had to reach SAP, with product, pricing and customer data kept consistent on both sides.',
    role: 'Full-stack development of the order app and the SAP integration.',
    contributions: [
      'Built a full-stack field order app with real-time discount and FOC calculation, configurable payment terms and multi-step order approval.',
      'Added live GPS tracking for field staff.',
      'Implemented two-way SAP sync through Hangfire jobs: approved orders are pushed, delivery status is pulled, and product, pricing and customer master data stay aligned.',
      'Submitted sales orders through an SAP CPI endpoint and read the customer ledger over OData V2.',
      'Built a demand-forecasting engine at territory, region and area level.',
    ],
    engineering: [
      {
        title: 'No double submission',
        body: 'The sync jobs are guarded against concurrent execution, so an approved order is never submitted to SAP twice.',
      },
      {
        title: 'Two-way sync',
        body: 'Hangfire jobs push approved orders to SAP and pull delivery status back, while separate jobs keep product, pricing and customer master data aligned.',
      },
      {
        title: 'Pricing at the point of order',
        body: 'Discounts and free-of-charge quantities are calculated as the order is entered, so staff and approvers see the final numbers before anything reaches SAP.',
      },
    ],
    architecture: [
      { label: 'Client', nodes: ['Angular field order app', 'Live GPS tracking'] },
      { label: 'API', nodes: ['.NET API', 'Discount & FOC rules', 'Approval workflow'] },
      { label: 'Data', nodes: ['SQL Server'] },
      { label: 'Sync', nodes: ['Hangfire jobs'] },
      { label: 'SAP', nodes: ['SAP CPI (orders)', 'OData V2 (customer ledger)', 'Master data'] },
    ],
    steps: [
      'Sales staff create an order in the field, with discounts and FOC calculated live.',
      'The order moves through multi-step approval.',
      'A Hangfire job pushes the approved order to SAP.',
      'Delivery status is pulled back from SAP.',
      'Master data jobs keep products, pricing and customers aligned.',
    ],
    stack: ['.NET', 'Angular', 'Hangfire', 'SAP Order APIs', 'SAP CPI', 'OData V2', 'SQL Server'],
    metrics: [],
  },
  {
    slug: 'tertiary-sales-module',
    company: 'Computer Ease',
    title: 'Tertiary Sales Module',
    context: 'Pureit (A.O. Smith)',
    summary:
      'End-consumer order capture for field agents, with distributor approval, automated challans and a full claims workflow.',
    problem:
      'Tertiary sales, from distributor to end consumer, needed to be digitized, with order capture, delivery documents and distributor claims tied together in one workflow.',
    role: 'Full-stack development on .NET 9 and Angular 20.',
    contributions: [
      'Field agents capture end-consumer orders, and distributor approval feeds automated Challan and Memo generation.',
      'Delivered end-to-end distributor claims for discount, damage and CLP.',
      'Added a second approval step for post-installation adjustments before final invoicing.',
      'Added SMS and email notifications at every step.',
      'Added real-time location tracking of agents and customers at delivery.',
    ],
    engineering: [
      {
        title: 'Two-step claim approval',
        body: 'Claims pass a first approval, then a second one after installation, so adjustments are settled before the final invoice is raised.',
      },
      {
        title: 'Notifications at every step',
        body: 'SMS and email messages go out as an order moves from capture to approval, delivery and invoicing.',
      },
      {
        title: 'Location at delivery',
        body: 'The positions of the agent and the customer are recorded in real time when a delivery is made.',
      },
    ],
    architecture: [
      { label: 'Users', nodes: ['Field agents', 'Distributors'] },
      { label: 'App', nodes: ['Angular 20 app'] },
      { label: 'API', nodes: ['.NET 9 API on Azure App Service'] },
      { label: 'Workflows', nodes: ['Orders', 'Challan & Memo', 'Claims', 'SMS & email'] },
      { label: 'Data', nodes: ['SQL Server', 'Redis'] },
    ],
    steps: [
      'A field agent captures an end-consumer order.',
      'The distributor approves it.',
      'Challan and Memo are generated automatically.',
      'Delivery is made, with agent and customer location tracked.',
      'Claims go through two approval steps.',
      'The final invoice is issued.',
    ],
    stack: ['.NET 9', 'Angular 20', 'Redis', 'SQL Server', 'Azure App Service'],
    metrics: [],
  },
  {
    slug: 'doorbin-lever-bazar',
    company: 'Computer Ease',
    title: 'Doorbin & Lever Bazar',
    context: 'Unilever',
    summary:
      'A sales-rep management platform and a B2B self-ordering platform serving 6,000+ reps and 250,000+ retail outlets.',
    problem:
      'A very large network of field representatives and retail outlets needed to take part in digital ordering and sales, at a scale where peak traffic is a daily event.',
    role: 'Backend API development and mobile-to-backend synchronization.',
    contributions: [
      'Doorbin: sales-rep management for 6,000+ reps and 250,000+ retail outlets.',
      'Built and hardened the Market Visit, Target Distribution and Order Tracking APIs for peak traffic.',
      'Lever Bazar: B2B self-ordering that simplifies retailer sign-up and ordering.',
      'Implemented real-time Firebase sync across mobile and web.',
    ],
    engineering: [
      {
        title: 'Hardened for peak traffic',
        body: 'The Market Visit, Target Distribution and Order Tracking APIs were tuned to stay stable when thousands of reps are active at the same time.',
      },
      {
        title: 'Real-time sync',
        body: 'Firebase keeps mobile and web clients in step, so a retailer’s order shows up everywhere without a refresh.',
      },
    ],
    architecture: [
      { label: 'Apps', nodes: ['Doorbin (sales reps)', 'Lever Bazar (retailers)'] },
      { label: 'API', nodes: ['Market Visit', 'Target Distribution', 'Order Tracking'] },
      { label: 'Sync', nodes: ['Firebase real-time sync'] },
      { label: 'Data', nodes: ['SQL Server 2019'] },
    ],
    steps: [
      'Sales reps plan and record market visits in Doorbin.',
      'Targets are distributed and orders tracked through REST APIs.',
      'Retailers sign up and place their own orders in Lever Bazar.',
      'Firebase syncs changes across mobile and web in real time.',
    ],
    stack: ['.NET', 'SQL Server 2019', 'REST services', 'Firebase'],
    metrics: [
      { value: '6,000+', label: 'Sales reps' },
      { value: '250K+', label: 'Retail outlets' },
    ],
  },
  {
    slug: 'hrms-payroll',
    company: 'Synergy Interface',
    title: 'HRMS & Payroll',
    context: 'HR & Payroll',
    summary:
      'A full-cycle HR and payroll system: employees, attendance, leave, salary, loans, provident fund, gratuity and tax in one place.',
    problem:
      'Employee records, attendance, leave, payroll and loans were handled as separate processes, and every month-end meant bringing them together by hand before salaries could be paid.',
    role: 'Developed and maintained the HR, leave, payroll and loan modules and their reports.',
    contributions: [
      'Streamlined the full HR cycle of employee management, leave, payroll and loans, saving 400+ hours a year.',
      'Built employee management on a company, branch, department and designation structure, through to separation.',
      'Built leave management: leave types, yearly allotment and applications.',
      'Built payroll: salary heads, salary structure and the monthly salary calculation.',
      'Built the loan workflow: application, recommendation, approval and installment schedules.',
      'Designed and tuned the HR and payroll reports, part of 150+ parameterized reports across the product line.',
    ],
    modules: [
      {
        title: 'Organization',
        items: ['Companies', 'Branches', 'Departments', 'Designations', 'Users & roles'],
      },
      {
        title: 'Employees',
        items: ['Employee records', 'Additional information', 'Separation & reasons'],
      },
      {
        title: 'Time & attendance',
        items: [
          'Duty slots',
          'Off days',
          'Holiday calendar',
          'Attendance',
          'Late attendance',
          'Overtime',
        ],
      },
      {
        title: 'Leave',
        items: ['Leave types', 'Leave allotment', 'Leave applications'],
      },
      {
        title: 'Payroll',
        items: [
          'Salary heads',
          'Salary structure',
          'Salary calculation',
          'Bonus',
          'Tax slabs',
          'Tax exclusions',
        ],
      },
      {
        title: 'Benefits & loans',
        items: [
          'Provident fund contributions',
          'PF interest',
          'Gratuity setup & calculation',
          'Loan applications',
          'Loan approval',
          'Installments',
        ],
      },
    ],
    engineering: [
      {
        title: 'Payroll built from configurable heads',
        body: 'Allowances and deductions are salary heads set up as data, so a pay structure changes without a release. Bonus, overtime, provident fund, tax slabs and loan installments each have their own module around the monthly calculation.',
      },
      {
        title: 'Loans with a three-step approval',
        body: 'A loan moves from application to recommendation to approval, and only then produces its installment schedule.',
      },
      {
        title: 'Attendance as its own service',
        body: 'Attendance capture runs as a separate API beside the main application, so devices and other systems can post attendance without going through the HR screens.',
      },
      {
        title: 'Direct SQL where it counts',
        body: 'Data access uses Dapper, which keeps salary and report queries explicit and fast.',
      },
    ],
    architecture: [
      { label: 'Users', nodes: ['HR staff', 'Managers', 'Employees'] },
      { label: 'Application', nodes: ['ASP.NET Core MVC', 'Attendance API'] },
      { label: 'Modules', nodes: ['Employees', 'Attendance', 'Leave', 'Payroll', 'Loans'] },
      { label: 'Data', nodes: ['SQL Server', 'Dapper'] },
      { label: 'Output', nodes: ['Payslips', 'HR & payroll reports'] },
    ],
    steps: [
      'HR sets up the company structure, duty slots, holidays and leave types.',
      'Employees are added with their salary structure.',
      'Attendance, leave and overtime are recorded through the month.',
      'Loans are applied for, recommended and approved.',
      'Payroll calculates each salary with bonus, provident fund, tax and installments.',
      'Reports go to management and accounts.',
    ],
    stack: ['C#', 'ASP.NET Core MVC', 'Dapper', 'SQL Server', 'RDLC', 'Crystal Reports'],
    metrics: [
      { value: '400+', label: 'Hours saved a year' },
      { value: '6', label: 'Functional areas in one system' },
    ],
  },
  {
    slug: 'point-of-sale',
    company: 'Synergy Interface',
    title: 'Point of Sale',
    context: 'Retail',
    summary:
      'A retail point-of-sale system where billing, purchasing and stock stay in step with the ledger, with mobile payments at the counter.',
    problem:
      'A shop needs every sale, purchase, return and transfer to update stock and the accounts at the same moment. When those are entered separately, the stock count and the books drift apart and someone has to reconcile them.',
    role: 'Built the billing, purchasing, stock movement and payment features, and the reports around them.',
    contributions: [
      'Shipped Sale Bill Entry and Purchase Entry with real-time ledger and inventory sync.',
      'Delivered Stock Transfer and Sale Return, reducing reconciliation discrepancies by 35%.',
      'Integrated bKash and Nagad payment gateways with PCI-DSS compliance, bringing digital payments to 65% of transactions.',
      'Designed and tuned sales, purchase and stock reports, part of 150+ parameterized reports across the product line.',
    ],
    modules: [
      {
        title: 'Sales counter',
        items: ['Sale bill entry', 'Receipts', 'Discounts', 'Sale returns', 'Customers'],
      },
      {
        title: 'Payments',
        items: ['Cash', 'bKash', 'Nagad', 'Daily cash position'],
      },
      {
        title: 'Purchasing',
        items: ['Purchase entry', 'Suppliers', 'Purchase returns'],
      },
      {
        title: 'Inventory',
        items: [
          'Products & categories',
          'Stock on hand',
          'Stock transfer between branches',
          'Stock adjustments',
        ],
      },
      {
        title: 'Accounts & reports',
        items: ['Ledger posting', 'Sales reports', 'Purchase reports', 'Stock reports'],
      },
    ],
    engineering: [
      {
        title: 'One entry, three effects',
        body: 'A sale bill reduces stock, posts to the ledger and records the payment together, so the counter, the stockroom and the accounts always agree.',
      },
      {
        title: 'Returns that reverse cleanly',
        body: 'A sale return puts the goods back into stock and reverses the ledger entry it came from, which is where most reconciliation gaps used to start.',
      },
      {
        title: 'Mobile wallets at the counter',
        body: 'bKash and Nagad are integrated as payment methods with PCI-DSS compliance, and grew to 65% of transactions.',
      },
    ],
    architecture: [
      { label: 'Counter', nodes: ['Sale bill', 'Returns', 'Receipts'] },
      { label: 'Payments', nodes: ['Cash', 'bKash', 'Nagad'] },
      { label: 'Back office', nodes: ['Purchase', 'Stock transfer', 'Suppliers'] },
      { label: 'Posting', nodes: ['Inventory', 'Ledger'] },
      { label: 'Data', nodes: ['SQL Server', 'Reports'] },
    ],
    steps: [
      'Goods arrive and are recorded through purchase entry.',
      'The cashier bills a sale and takes payment in cash or by mobile wallet.',
      'Stock and the ledger are updated in the same step.',
      'Returns and branch transfers adjust stock and accounts the same way.',
      'Daily sales, stock and ledger reports close the day.',
    ],
    stack: ['C#', 'ASP.NET Framework', 'SQL Server', 'Crystal Reports', 'bKash', 'Nagad'],
    metrics: [
      { value: '65%', label: 'Of transactions paid digitally' },
      { value: '35%', label: 'Fewer reconciliation discrepancies' },
    ],
  },
  {
    slug: 'automobile-garage-erp',
    company: 'Synergy Interface',
    title: 'Automobile Garage ERP',
    context: 'Automobile service',
    summary:
      'An ERP for a vehicle service business, from the job estimate at reception to the invoice, with parts inventory and accounts behind it.',
    problem:
      'A garage runs on job sheets: what the customer asked for, what was estimated, which parts and labour were used, and what was billed. On paper those steps are disconnected, so jobs take longer and nobody can see how satisfied customers are.',
    role: 'Delivered the workshop, order, inventory and feedback modules and their reports.',
    contributions: [
      'Delivered the Job Sheet, Job Estimate, Order Management, Inventory and Customer Feedback modules.',
      'Reduced operational time by 30% by connecting the estimate, the job and the bill.',
      'Improved customer satisfaction tracking by 40% through the feedback module.',
      'Delivered Stock Transfer and Sale Return for parts.',
      'Designed and tuned workshop, stock and sales reports, part of 150+ parameterized reports across the product line.',
    ],
    modules: [
      {
        title: 'Workshop',
        items: [
          'Vehicle check-in',
          'Job estimates',
          'Job sheets',
          'Technicians',
          'Parts requisition',
          'Vehicle service history',
        ],
      },
      {
        title: 'Customers',
        items: ['Customer & vehicle records', 'Appointments', 'Customer feedback'],
      },
      {
        title: 'Parts inventory',
        items: [
          'Parts catalogue',
          'Stock on hand',
          'Stock transfer',
          'Stock adjustments',
          'Suppliers',
        ],
      },
      {
        title: 'Purchase & sales',
        items: ['Purchase orders', 'Purchase receipts', 'Sales orders', 'Invoices', 'Sale returns'],
      },
      {
        title: 'Accounts',
        items: [
          'Chart of accounts',
          'Payment & receipt vouchers',
          'Journal vouchers',
          'Financial reports',
        ],
      },
    ],
    engineering: [
      {
        title: 'The job sheet is the spine',
        body: 'An estimate becomes a job sheet, the job sheet draws parts from inventory, and the finished job becomes the invoice. Nothing is typed twice.',
      },
      {
        title: 'Parts tied to jobs',
        body: 'Parts are requisitioned against a job, so stock, job cost and the customer’s bill come from the same record.',
      },
      {
        title: 'Feedback as data',
        body: 'Customer feedback is captured against the job it relates to, which made satisfaction something the business could measure and track.',
      },
    ],
    architecture: [
      { label: 'Reception', nodes: ['Vehicle check-in', 'Job estimate'] },
      { label: 'Workshop', nodes: ['Job sheet', 'Parts requisition', 'Technicians'] },
      { label: 'Stores', nodes: ['Parts inventory', 'Purchase'] },
      { label: 'Billing', nodes: ['Invoice', 'Accounts'] },
      { label: 'After service', nodes: ['Customer feedback', 'Service history'] },
    ],
    steps: [
      'A vehicle is checked in and an estimate is prepared.',
      'The approved estimate becomes a job sheet.',
      'Technicians requisition parts, which come out of inventory.',
      'The finished job is invoiced and posted to accounts.',
      'The customer’s feedback is recorded against the job.',
    ],
    stack: ['C#', 'ASP.NET Framework', 'SQL Server', 'RDLC', 'Crystal Reports'],
    metrics: [
      { value: '30%', label: 'Less operational time' },
      { value: '40%', label: 'Better satisfaction tracking' },
      { value: '5', label: 'Modules delivered' },
    ],
  },
  {
    slug: 'life-insurance-erp',
    company: 'Synergy Interface',
    title: 'Life Insurance ERP',
    context: 'Life insurance',
    summary:
      'An ERP for a life insurer, covering policies, premium collection and the field agents who bring the business in.',
    problem:
      'A life insurer depends on data entered by field agents across the country. Every mistake in a proposal or a premium entry has to be found and corrected by the head-office data team before it reaches the policy and the accounts.',
    role: 'Developed and maintained ERP features, validation rules and reports.',
    contributions: [
      'Strengthened validation of field-agent submissions, cutting processing errors by 60%.',
      'Saved the data team 8 hours a week that had been spent correcting entries.',
      'Delivered stock transfer and return features shared with the other products in the line.',
      'Designed and tuned insurance reports, part of 150+ parameterized reports across the product line.',
    ],
    modules: [
      {
        title: 'Policies',
        items: ['Proposals', 'Underwriting', 'Policy issue', 'Renewals & lapses'],
      },
      {
        title: 'Premiums',
        items: ['Premium collection', 'Receipts', 'Due & overdue tracking'],
      },
      {
        title: 'Agents',
        items: ['Agent hierarchy', 'Field submissions', 'Commission'],
      },
      {
        title: 'Claims',
        items: ['Claim registration', 'Maturity & survival benefits', 'Settlement'],
      },
      {
        title: 'Accounts & reports',
        items: ['Ledger posting', 'Business reports', 'Regulatory reports'],
      },
    ],
    engineering: [
      {
        title: 'Catch errors where they are made',
        body: 'Validation runs when a field agent submits, not when head office reviews. Stopping a wrong entry at the source is what cut processing errors by 60%.',
      },
      {
        title: 'Reports on large tables',
        body: 'Parameterized reports in RDLC and Crystal Reports were tuned in SQL so they stay usable as policy and premium history grows.',
      },
    ],
    architecture: [
      { label: 'Field', nodes: ['Agents', 'Branch offices'] },
      { label: 'Entry', nodes: ['Proposal & premium entry', 'Validation rules'] },
      { label: 'Core', nodes: ['Policies', 'Premiums', 'Commission', 'Claims'] },
      { label: 'Data', nodes: ['Oracle', 'SQL Server'] },
      { label: 'Output', nodes: ['Receipts', 'Reports'] },
    ],
    steps: [
      'A field agent submits a proposal or a premium entry.',
      'Validation rules check it before it is accepted.',
      'The policy is issued and premiums are collected against it.',
      'Commission is worked out for the agent hierarchy.',
      'Claims and maturities are settled, and reports go to management.',
    ],
    stack: ['C#', 'ASP.NET Framework', 'Oracle', 'SQL Server', 'RDLC', 'Crystal Reports'],
    metrics: [
      { value: '60%', label: 'Fewer processing errors' },
      { value: '8 hrs', label: 'Saved each week for the data team' },
    ],
  },
];

export const experience: Role[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Computer Ease Limited',
    location: 'Dhaka, Bangladesh',
    period: 'Sep 2023 – Present',
    start: '2023-09',
    projects: [
      { label: 'Online Sales & Distribution', path: '/work/online-sales-distribution-system' },
      { label: 'Technician Sales Module', path: '/work/technician-sales-module' },
      { label: 'HRMS–DMS Integration', path: '/work/hrms-dms-integration' },
      { label: 'Field Order & SAP Integration', path: '/work/field-order-sap-integration' },
      { label: 'Tertiary Sales Module', path: '/work/tertiary-sales-module' },
      { label: 'Doorbin & Lever Bazar', path: '/work/doorbin-lever-bazar' },
    ],
    summary:
      'Enterprise sales, distribution, inventory and integration systems for clients including Unilever, A.O. Smith and AutoCrop Care.',
    impact: [
      { value: '200K+', label: 'Daily transactions processed' },
      { value: '30%', label: 'Faster new-client integration' },
      { value: '<500ms', label: 'Average API response, from 1.2s' },
    ],
    highlights: [
      'Architected high-throughput REST APIs connecting HRMS with DMS for Unilever DFF, giving 500+ distributors real-time sync and cutting reconciliation errors by 97%.',
      'Led the design of Primary and Secondary Sales modules across two enterprise systems, covering order processing, inventory and sales tracking for a 500+ distributor network.',
      'Built a full-stack Technician Sales Module (.NET 10, Angular, Hangfire, RabbitMQ) that handles challans, promotions, commissions, returns and claims, processing 200,000+ daily transactions with zero data loss.',
      'Engineered Azure Functions to process multi-terabyte datasets, cutting batch time from several hours to under 30 minutes.',
      'Integrated SAP SD with HRMS, Primary-to-Secondary Sales and VAT platforms, improving data accuracy and cross-system efficiency by 60%.',
      'Standardized REST APIs and XML Web Services across web, mobile and desktop, cutting new-client integration time by 30%.',
      'Tuned SQL Server queries and indexing, bringing average API response time down from 1.2s to under 500ms.',
      'Integrated the American Express payment gateway with PCI-DSS compliance, raising payment success rates by 35%.',
      'Automated CI/CD with Azure DevOps, GitHub Actions and Jenkins, cutting manual deployment effort by 50%.',
      'Mentored 5 junior developers through code reviews, Clean Architecture training and AI-assisted workflows (Claude, GitHub Copilot), reducing production incidents by 30%.',
      'Worked with business stakeholders to turn complex requirements into scalable solutions, and contributed to architecture decisions on async processing, caching, messaging and integrations.',
    ],
    stack: [
      'C#',
      '.NET 8–10',
      'ASP.NET Core',
      'Angular',
      'SQL Server',
      'Azure Functions',
      'RabbitMQ',
      'Redis',
      'Hangfire',
      'SAP SD',
    ],
  },
  {
    title: '.NET Developer',
    company: 'Synergy Interface Ltd',
    location: 'Dhaka, Bangladesh',
    period: 'Jul 2021 – Aug 2023',
    start: '2021-07',
    end: '2023-08',
    projects: [
      { label: 'HRMS & Payroll', path: '/work/hrms-payroll' },
      { label: 'Point of Sale', path: '/work/point-of-sale' },
      { label: 'Automobile Garage ERP', path: '/work/automobile-garage-erp' },
      { label: 'Life Insurance ERP', path: '/work/life-insurance-erp' },
    ],
    summary:
      'Business applications across life insurance, automobile garage ERP, point of sale, inventory, HR and payroll.',
    impact: [
      { value: '150+', label: 'Reports designed and tuned' },
      { value: '400+', label: 'Hours saved a year in HR workflows' },
      { value: '65%', label: 'Of transactions paid digitally' },
    ],
    highlights: [
      'Streamlined full-cycle HR workflows (employee management, leave, payroll, loans), saving 400+ hours a year.',
      'Strengthened validation of field-agent submissions, cutting processing errors by 60% and saving the data team 8 hours a week.',
      'Delivered Job Sheet, Job Estimate, Order Management, Inventory and Customer Feedback modules for an Automobile Garage ERP, reducing operational time by 30% and improving satisfaction tracking by 40%.',
      'Shipped Sale Bill Entry and Purchase Entry modules with real-time ledger and inventory sync, keeping financial records accurate.',
      'Delivered Stock Transfer and Sale Return features across Insurance ERP, Automobile ERP and POS, reducing reconciliation discrepancies by 35%.',
      'Integrated bKash and Nagad payment gateways with PCI-DSS compliance, bringing digital payments to 65% of transactions.',
      'Designed and tuned 150+ parameterized reports across HR, Payroll, POS and Automobile ERP using RDLC, Crystal Reports and SQL Server.',
    ],
    stack: [
      'C#',
      'ASP.NET Framework',
      'SQL Server',
      'Oracle',
      'RDLC',
      'Crystal Reports',
      'bKash',
      'Nagad',
    ],
  },
];

export const sideProjects: Project[] = [
  {
    slug: 'issue-tracker',
    title: 'Issue Tracker',
    context: 'Multi-client support platform',
    summary:
      'A support ticket platform where clients raise issues, support triages them against SLA targets and developers resolve them, with every step audited.',
    problem:
      'A team that supports several client companies needs one system where each client sees only its own tickets, every ticket follows a defined workflow, and response times are measured against the SLA agreed with that client.',
    role: 'Designing and building the whole system: database, API, Angular client, tests and documentation.',
    contributions: [
      'Built a multi-client model with client-scoped visibility, user types, roles and permission groups.',
      'Implemented JWT authentication with rotating refresh tokens.',
      'Built the issue module: a raise form with a mandatory screenshot and size-capped video, reference links, staff-only severity and attachment retention.',
      'Implemented the status workflow with team queues, claiming, triage and assignment, plus a conversation log on every ticket.',
      'Added per-client severity and SLA targets, tracked against actual response times.',
      'Added notifications in the app, by email, SMS and WhatsApp, and an email inbox that turns incoming mail into tickets.',
      'Added automation rules, auto-close and customer feedback.',
      'Built the dashboard and reports on SQL stored procedures, plus a full audit log.',
      'Supports Bangla text end to end, covered by its own integration tests.',
      'Wrote 350 automated tests: 159 unit tests and 191 integration tests that run against a throw-away SQL Server database.',
      'Recorded a twelve-chapter captioned video tutorial covering every role.',
    ],
    engineering: [
      {
        title: 'Four assemblies with enforced boundaries',
        body: 'Domain references nothing, Application references only Domain, and Infrastructure implements their interfaces. The rules are enforced by the project references, not by convention.',
      },
      {
        title: 'Two data paths',
        body: 'EF Core 10 handles transactional work. Reporting reads SQL stored procedures, views and functions through plain ADO.NET.',
      },
      {
        title: 'Roles as data',
        body: 'A role is a record with a default permission group and behaviour flags. Nothing in the code branches on a hard-coded role name, so roles can be added without a release.',
      },
      {
        title: 'Ownership drives the workflow',
        body: 'Only the current owner may advance a ticket. A ticket in a team queue has no owner yet, so claiming it is the only way forward besides triage pulling it back.',
      },
      {
        title: 'Observable by default',
        body: 'Serilog and OpenTelemetry cover logging and tracing, and every endpoint answers in the same result envelope.',
      },
    ],
    architecture: [
      { label: 'Client', nodes: ['Angular 21'] },
      { label: 'API', nodes: ['ASP.NET Core (.NET 10)', 'JWT auth', 'SignalR hub'] },
      { label: 'Application', nodes: ['Use cases', 'Validators', 'Workflow'] },
      { label: 'Domain', nodes: ['Entities', 'Value objects', 'Rules'] },
      { label: 'Infrastructure', nodes: ['EF Core 10', 'ADO.NET', 'File storage'] },
      { label: 'Data', nodes: ['SQL Server'] },
    ],
    steps: [
      'An administrator onboards a client and sets its severity and SLA targets.',
      'A client user raises a ticket with a screenshot.',
      'Support triages it: reviews, rates the severity and assigns it.',
      'A developer works on the ticket and resolves it.',
      'The client confirms the fix or sends the ticket back.',
      'The ticket closes and is rated; the dashboard and audit log record it.',
    ],
    stack: [
      '.NET 10',
      'ASP.NET Core',
      'Angular 21',
      'EF Core 10',
      'ADO.NET',
      'SQL Server',
      'SignalR',
      'JWT',
      'Serilog',
      'OpenTelemetry',
      'xUnit',
    ],
    metrics: [
      { value: '350', label: 'Automated tests' },
      { value: '140', label: 'API endpoints' },
      { value: '4', label: 'Notification channels' },
      { value: '12', label: 'Tutorial chapters recorded' },
    ],
    videos: [
      {
        src: '/projects/issue-tracker/05-triage-and-assign.webm#t=30,90',
        title: 'Sixty seconds of triage',
        caption:
          'A support agent reviews a ticket, sets the severity and watches the SLA deadline appear. Sample data, no sound.',
        poster: '/projects/issue-tracker/triage.webp',
      },
      {
        src: '/projects/issue-tracker/04-raise-a-ticket.webm#t=8',
        title: 'Raising a ticket',
        caption: 'A client user raises a ticket with a screenshot attached.',
        poster: '/projects/issue-tracker/raise-ticket.webp',
      },
      {
        src: '/projects/issue-tracker/11-dashboard-and-reports.webm#t=8',
        title: 'Dashboard and reports',
        caption: 'The administrator dashboard and the report tabs.',
        poster: '/projects/issue-tracker/reports-overview.webp',
      },
    ],
    screenshots: [
      {
        src: '/projects/issue-tracker/raise-ticket.webp',
        width: 1280,
        height: 720,
        alt: 'The raise-a-ticket form with client, type, priority, category and module fields',
        caption:
          'Raising a ticket: the client sets the priority, and support decides the severity.',
      },
      {
        src: '/projects/issue-tracker/triage.webp',
        width: 1280,
        height: 720,
        alt: 'A ticket open in triage, showing attachments, the conversation log and the SLA panel',
        caption: 'Triage: setting the severity stamps the SLA deadline from that client’s targets.',
      },
      {
        src: '/projects/issue-tracker/reports-overview.webp',
        width: 1280,
        height: 720,
        alt: 'The reports overview with raised, attended, resolved and sent-back counts',
        caption: 'Reports overview: volumes, response times and SLA compliance for a period.',
      },
      {
        src: '/projects/issue-tracker/reports-breakdown.webp',
        width: 1280,
        height: 720,
        alt: 'A report table breaking tickets down by severity',
        caption: 'Breakdown by severity, with CSV export.',
      },
      {
        src: '/projects/issue-tracker/audit-log.webp',
        width: 1280,
        height: 720,
        alt: 'The audit log listing configuration changes with who made them and when',
        caption: 'Audit log: every change with its old and new value. Entries cannot be edited.',
      },
    ],
    decisions: [
      {
        title: 'Permissions travel in the token',
        chose:
          'Every effective permission and every assigned client is a claim in a 15-minute access token.',
        why: 'Authorization becomes a pure claim check, with no database round-trip on each request.',
        tradeOff:
          'A permission change only takes effect at the next refresh. To keep that window short, refresh tokens are rotated on every use and revoked on any group, role or client change.',
      },
      {
        title: 'Client scope enforced in one place',
        chose:
          'Client-owned entities share one interface, every query passes through a single scope filter, and writes check access explicitly.',
        why: 'Tenant isolation does not depend on each feature remembering to filter. The Angular guards are a convenience; the API is the authority.',
        tradeOff:
          'Every new client-owned entity has to opt in to the interface before it is safe to expose.',
      },
      {
        title: 'One codebase for shared and dedicated hosting',
        chose:
          'Whether an installation serves many clients or exactly one is a configuration setting, not a separate build.',
        why: 'Tickets, SLA, notifications, automation and reports behave identically in both, and there is one build to maintain.',
        tradeOff:
          'The installations do not talk to each other, so moving a client to dedicated hosting does not carry its history across.',
      },
      {
        title: 'EF Core for writes, stored procedures for reports',
        chose:
          'Transactional work goes through EF Core and the domain model. Dashboard and report figures come from SQL stored procedures read with ADO.NET.',
        why: 'Reports are set-based questions that SQL answers best, and they stay fast as ticket volume grows.',
        tradeOff: 'There are two data-access styles to keep in step when the schema changes.',
      },
    ],
    limits: [
      'A dedicated installation starts empty. Carrying a client’s existing tickets across is a one-off migration, not part of the application.',
      'Central and dedicated installations keep separate accounts, so staff sign in to each one.',
      'Connecting real email, SMS and WhatsApp providers is configuration done at install time, and parts of the notification module are still being finished.',
    ],
    inProgress: true,
  },
  {
    slug: 'mediato',
    title: 'Mediato',
    context: 'Open-source library',
    summary:
      'A MediatR-compatible mediator library for .NET, built after MediatR moved to commercial licensing.',
    problem:
      'MediatR is the default mediator for CQRS-style .NET applications. When it moved to commercial licensing, projects that depend on it needed an alternative that works the same way.',
    role: 'Designed and wrote the library.',
    contributions: [
      'Reached feature parity with MediatR: requests and handlers, notifications, pipeline behaviors and streaming.',
      'Implemented configurable publish strategies for notifications.',
      'Kept the API compatible, so existing handlers and behaviors carry over.',
    ],
    engineering: [
      {
        title: 'Pipeline behaviors',
        body: 'Cross-cutting concerns such as validation, logging and transactions wrap a handler as an ordered pipeline, the same model MediatR users already know.',
      },
      {
        title: 'Publish strategies',
        body: 'Notifications can be delivered to their handlers in different ways, so the caller chooses how handlers run and how failures surface.',
      },
      {
        title: 'Streaming',
        body: 'Stream requests return results as an asynchronous sequence instead of a single response.',
      },
    ],
    architecture: [
      { label: 'Caller', nodes: ['Send', 'Publish', 'CreateStream'] },
      { label: 'Mediator', nodes: ['Mediato'] },
      { label: 'Pipeline', nodes: ['Behavior 1', 'Behavior 2', 'Behavior n'] },
      { label: 'Handlers', nodes: ['Request handler', 'Notification handlers', 'Stream handler'] },
    ],
    steps: [
      'A request is sent to the mediator.',
      'Pipeline behaviors run in order around the handler.',
      'The matching handler produces the response.',
      'Notifications fan out to their handlers through the chosen publish strategy.',
    ],
    stack: ['C#', '.NET'],
    metrics: [],
  },
  {
    slug: 'ecommerce-microservices',
    title: 'E-Commerce Microservices',
    context: 'Microservices architecture',
    summary:
      'An event-driven e-commerce platform split into independent services behind an API gateway.',
    problem:
      'A study in building an online shop as independently deployable services, where a failure in one service does not take the others down and data stays consistent without distributed transactions.',
    role: 'Designed the architecture and built the services, messaging and deployment pipeline.',
    contributions: [
      'Split the platform into Catalog, Basket, Discount, Ordering, Payment, Identity and Notifications services behind an API gateway.',
      'Applied Clean Architecture with CQRS handlers and validation behaviors inside the services.',
      'Implemented the Outbox pattern with RabbitMQ for at-least-once delivery across 4 service databases.',
      'Moved internal calls from REST to gRPC and added Redis caching, cutting latency by 45%.',
      'Containerized with Docker and deployed to Kubernetes (AKS), with automated CI/CD that cut deployment time by 70%.',
    ],
    engineering: [
      {
        title: 'Reliable messaging',
        body: 'Each service writes its events to an outbox table in the same transaction as its data. A publisher then delivers them to RabbitMQ, which gives at-least-once delivery across 4 service databases.',
      },
      {
        title: 'Faster service-to-service calls',
        body: 'Internal calls moved from REST to gRPC, and Redis caches hot reads. Together they cut latency by 45%.',
      },
      {
        title: 'Data owned by the services',
        body: 'Services own their data and use the store that fits: SQL Server, PostgreSQL, MongoDB or Redis.',
      },
    ],
    architecture: [
      { label: 'Entry', nodes: ['API gateway'] },
      {
        label: 'Services',
        nodes: [
          'Catalog',
          'Basket',
          'Discount',
          'Ordering',
          'Payment',
          'Identity',
          'Notifications',
        ],
      },
      { label: 'Communication', nodes: ['gRPC', 'RabbitMQ + Outbox'] },
      { label: 'Data', nodes: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis'] },
      { label: 'Platform', nodes: ['Docker', 'Kubernetes (AKS)', 'CI/CD'] },
    ],
    steps: [
      'Clients call the API gateway.',
      'The gateway routes each request to the owning service.',
      'Services call each other over gRPC when they need an immediate answer.',
      'State changes are written with an outbox record and published to RabbitMQ.',
      'Other services consume the events and update their own data.',
    ],
    stack: [
      '.NET 9',
      'RabbitMQ',
      'gRPC',
      'Redis',
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'Hangfire',
      'Docker',
      'AKS',
    ],
    metrics: [
      { value: '45%', label: 'Lower latency' },
      { value: '70%', label: 'Faster deployments' },
      { value: '7', label: 'Services' },
    ],
    repo: 'https://github.com/DibakorRoy46/E-CommerceApp',
  },
  {
    slug: 'ticket-booking-platform',
    title: 'Ticket Booking Platform',
    context: 'Reference architecture',
    summary:
      'A modular monolith that solves the last-seat problem with distributed locking and a transactional outbox.',
    problem:
      'When two people try to book the last seat at the same moment, exactly one of them must get it. This project is a reference for handling that race correctly inside a modular monolith.',
    role: 'Designed and built the architecture as a reference implementation.',
    contributions: [
      'Structured the system as a modular monolith with Identity and Events modules on a SharedKernel.',
      'Applied Clean Architecture, DDD and CQRS throughout.',
      'Used RedLockNet distributed locking to resolve the last-seat race condition.',
      'Implemented a Transactional Outbox for reliable event publishing.',
      'Split data access: EF Core for writes, Dapper for reads.',
    ],
    engineering: [
      {
        title: 'The last-seat race',
        body: 'A distributed lock from RedLockNet is taken on the seat before a booking is written, so concurrent requests are serialized and only one succeeds.',
      },
      {
        title: 'Shared building blocks',
        body: 'The SharedKernel carries domain primitives, value objects and domain events. A shared application layer adds CQRS abstractions, pipeline behaviors, guards, result types and the outbox.',
      },
      {
        title: 'Writes and reads take different paths',
        body: 'Commands go through EF Core and the domain model. Queries use Dapper for direct, fast reads.',
      },
    ],
    architecture: [
      { label: 'Entry', nodes: ['Web API'] },
      { label: 'Modules', nodes: ['Identity', 'Events'] },
      { label: 'Shared', nodes: ['SharedKernel', 'Outbox', 'RedLock'] },
      { label: 'Data access', nodes: ['EF Core (writes)', 'Dapper (reads)'] },
    ],
    steps: [
      'A booking command arrives at the API.',
      'A distributed lock is taken on the seat.',
      'The domain model validates and records the booking through EF Core.',
      'A domain event is saved to the outbox in the same transaction.',
      'The outbox publisher delivers the event to other modules.',
    ],
    stack: ['.NET', 'EF Core', 'Dapper', 'RedLockNet', 'CQRS', 'DDD'],
    metrics: [],
    repo: 'https://github.com/DibakorRoy46/Ticket-Booking-System',
  },
  {
    slug: 'salespulse',
    title: 'SalesPulse',
    context: 'Real-time application',
    summary: 'Real-time sales order tracking with live updates over SignalR.',
    problem:
      'Sales reps, approvers and managers each need to see an order change state the moment it happens, with each role limited to what it is allowed to do.',
    role: 'Designing and building the application.',
    contributions: [
      'Pushes live order updates to connected clients over SignalR.',
      'Uses Clean Architecture without CQRS, to keep the design as simple as the problem.',
      'Secures the API with JWT and three roles: Rep, Approver and Manager.',
      'Covers each role with integration tests.',
    ],
    engineering: [
      {
        title: 'Live updates',
        body: 'SignalR pushes order changes to every connected client, so nobody has to refresh to see the current state.',
      },
      {
        title: 'Role-based access, tested',
        body: 'Rep, Approver and Manager each have their own permissions, and integration tests exercise the API as each role.',
      },
      {
        title: 'Deliberately simple',
        body: 'The domain does not need separate read and write models, so the project uses Clean Architecture layers without CQRS.',
      },
    ],
    architecture: [
      { label: 'Users', nodes: ['Rep', 'Approver', 'Manager'] },
      { label: 'API', nodes: ['.NET 10 API + JWT', 'SignalR hub'] },
      { label: 'Core', nodes: ['Application', 'Domain'] },
      { label: 'Data', nodes: ['EF Core'] },
    ],
    steps: [
      'A rep submits a sales order.',
      'An approver reviews and approves or rejects it.',
      'SignalR broadcasts each change to connected clients.',
      'Managers follow orders as they move.',
    ],
    stack: ['.NET 10', 'SignalR', 'EF Core', 'JWT'],
    metrics: [],
    inProgress: true,
  },
  {
    slug: 'movie-app',
    title: 'Movie App',
    context: 'Full-stack application',
    summary: 'A movie catalog with real-time search and role-based access.',
    problem:
      'A full-stack exercise in building a searchable catalog with a secured API and a component-based Angular front end.',
    role: 'Built the API and the Angular client.',
    contributions: [
      'Built a movie catalog with real-time search that returns results in under 600ms.',
      'Implemented JWT authentication with role-based access control.',
      'Built the interface with Angular and PrimeNG components.',
    ],
    engineering: [
      {
        title: 'Search as you type',
        body: 'Queries go to the API as the user types and results return in under 600ms.',
      },
      {
        title: 'Secured API',
        body: 'JWT tokens carry the user’s role, and endpoints are restricted by role.',
      },
    ],
    architecture: [
      { label: 'Client', nodes: ['Angular', 'PrimeNG'] },
      { label: 'API', nodes: ['ASP.NET Core Web API', 'JWT + roles'] },
      { label: 'Data', nodes: ['Movie catalog'] },
    ],
    steps: [
      'The user signs in and receives a JWT.',
      'The Angular client sends search queries to the Web API.',
      'The API checks the role and returns matching movies.',
    ],
    stack: ['ASP.NET Core Web API', 'Angular', 'PrimeNG', 'JWT'],
    metrics: [],
    repo: 'https://github.com/DibakorRoy46/movies-app',
  },
  {
    slug: 'university-management-system',
    title: 'University Management System',
    context: 'Web application',
    summary: 'Student records and an automated GPA engine with configurable grading scales.',
    problem:
      'Grading and student record keeping done by hand are slow and error-prone. This system automates GPA calculation and makes records and reports fast to work with.',
    role: 'Built the application and designed the database.',
    contributions: [
      'Built an automated GPA engine with configurable scales, cutting manual grading time by 80%.',
      'Built AJAX workflows that handle 1,000+ student records without page reloads.',
      'Redesigned the schema and indexes, making reporting queries 50% faster.',
    ],
    engineering: [
      {
        title: 'Configurable GPA engine',
        body: 'Grading scales are data, not code, so a scale can change without a release.',
      },
      {
        title: 'Faster reporting',
        body: 'A schema and index redesign made reporting queries 50% faster.',
      },
    ],
    architecture: [
      { label: 'Browser', nodes: ['jQuery', 'AJAX forms'] },
      { label: 'App', nodes: ['ASP.NET Core MVC', 'GPA engine', 'Reports'] },
      { label: 'Data', nodes: ['SQL Server'] },
    ],
    steps: [
      'Staff enter marks through AJAX forms.',
      'The GPA engine applies the configured scale.',
      'Results are stored in SQL Server and surfaced in reports.',
    ],
    stack: ['ASP.NET Core MVC', 'SQL Server', 'jQuery', 'AJAX'],
    metrics: [
      { value: '80%', label: 'Less manual grading time' },
      { value: '50%', label: 'Faster reporting queries' },
    ],
    repo: 'https://github.com/DibakorRoy46/University-Management-System',
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Languages & Frameworks',
    items: [
      'C#',
      '.NET Framework to .NET 10',
      'ASP.NET Core',
      'Web API',
      'MVC',
      'Angular 14–20',
      'TypeScript',
      'JavaScript',
      'jQuery',
    ],
  },
  {
    title: 'Architecture',
    items: [
      'Microservices',
      'Event-Driven',
      'Distributed Systems',
      'Clean Architecture',
      'DDD',
      'CQRS',
      'Vertical Slice',
      'MediatR',
      'Repository / Unit of Work',
      'SOLID',
      'Outbox',
      'Saga',
      'Solution Architecture',
    ],
  },
  {
    title: 'Enterprise Integration',
    items: [
      'SAP SD',
      'SAP CPI',
      'OData V2',
      'HRMS',
      'DMS',
      'Order-to-Cash',
      'Field Force Automation',
      'Claims & Returns',
      'VAT systems',
    ],
  },
  {
    title: 'Databases',
    items: [
      'SQL Server (performance tuning, indexing)',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Oracle',
      'Firebase',
      'EF Core',
      'Dapper',
      'ADO.NET',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Azure Functions',
      'Azure App Service',
      'Azure Storage',
      'AKS',
      'Azure Service Bus',
      'Key Vault',
      'Docker',
      'Kubernetes',
      'Azure DevOps',
      'GitHub Actions',
      'Jenkins',
    ],
  },
  {
    title: 'Messaging & Background Jobs',
    items: [
      'RabbitMQ',
      'Azure Service Bus',
      'MassTransit',
      'Hangfire',
      'gRPC',
      'SignalR',
      'SMS / Email gateways',
    ],
  },
  {
    title: 'Security & Payments',
    items: [
      'OAuth 2.0',
      'JWT',
      'RBAC',
      'API security',
      'PCI-DSS',
      'bKash',
      'Nagad',
      'American Express',
    ],
  },
  {
    title: 'Testing',
    items: ['xUnit', 'NUnit', 'TDD', 'Unit testing', 'Integration testing', 'Code review'],
  },
  {
    title: 'Reporting & UI',
    items: ['RDLC', 'Crystal Reports', 'PrimeNG', 'Telerik / Kendo UI'],
  },
  {
    title: 'Tools',
    items: ['Git', 'SVN', 'Visual Studio', 'SSMS', 'Postman'],
  },
  {
    title: 'AI-Assisted Development',
    items: ['Claude', 'GitHub Copilot'],
  },
  {
    title: 'Methods & Leadership',
    items: [
      'Agile / Scrum',
      'Sprint planning',
      'SRS writing',
      'Architecture decisions',
      'Mentoring',
      'Reducing technical debt',
    ],
  },
];

export const timeline: Milestone[] = [
  {
    when: '2017',
    title: 'Started B.Sc. in CSE',
    detail: 'Southeast University, Dhaka',
  },
  {
    when: 'Jul 2021',
    title: '.NET Developer',
    detail: 'Synergy Interface Ltd',
  },
  {
    when: 'Jun 2022',
    title: 'Graduated',
    detail: 'CGPA 3.80 / 4.00',
  },
  {
    when: 'Sep 2023',
    title: 'Senior Software Engineer',
    detail: 'Computer Ease Limited',
  },
  {
    when: '2026',
    title: 'Built Mediato',
    detail: 'Now working on AI, RAG and LLM optimization',
  },
];

export const education: Education = {
  degree: 'B.Sc. in Computer Science and Engineering',
  school: 'Southeast University, Dhaka',
  period: 'Jun 2017 – Jun 2022',
  result: 'CGPA 3.80 / 4.00',
};

/** Skills highlighted in the Skills section: the ones named in my profile summary. */
export const coreSkills: ReadonlySet<string> = new Set([
  'C#',
  '.NET Framework to .NET 10',
  'ASP.NET Core',
  'Angular 14–20',
  'Microservices',
  'Event-Driven',
  'Distributed Systems',
  'Clean Architecture',
  'DDD',
  'CQRS',
  'SAP SD',
  'SQL Server (performance tuning, indexing)',
  'Azure Functions',
  'Azure App Service',
]);
