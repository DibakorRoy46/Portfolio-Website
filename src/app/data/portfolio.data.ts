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
  resumeUrl: '',
  photoUrl: '',
  about: [
    'Senior Software Engineer with 5+ years of experience designing and delivering scalable enterprise applications with .NET, C#, ASP.NET Core, Angular, Azure, SQL Server and microservices.',
    'I specialize in Clean Architecture, DDD, CQRS and event-driven distributed systems, with deep experience integrating enterprise platforms such as SAP SD. I have delivered solutions for global organizations including Unilever, JTI, A.O. Smith and Arla, supporting 250K+ retail outlets, 6,000+ concurrent users and 200K+ daily transactions.',
    'Most of my work sits in sales and distribution: orders, inventory, challans, delivery, returns, claims and commissions, and the integrations that keep those processes consistent across HRMS, DMS, SAP and VAT platforms. That domain knowledge lets me turn complex business rules into software that field teams and distributors rely on every day.',
    'Alongside delivery, I lead technically and mentor other engineers, with growing ownership of architecture strategy across client engagements.',
  ],
  now: 'Building Mediato and going deeper into .NET 10, SignalR and distributed systems.',
  exploring:
    'Bringing AI into enterprise software: retrieval-augmented assistants over sales and inventory data, built on .NET and Angular.',
  clients: ['Unilever', 'JTI', 'A.O. Smith', 'Arla', 'AutoCrop Care'],
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
    title: 'Enterprise integration',
    description:
      'Connecting SAP SD, HRMS, DMS, VAT and payment platforms so data agrees across systems. I build REST and XML services, two-way sync through background jobs, and the validation that keeps master data consistent.',
    tools: ['SAP SD', 'SAP CPI', 'OData V2', 'REST', 'XML Web Services'],
  },
  {
    icon: 'distributed',
    title: 'Distributed and event-driven systems',
    description:
      'Microservices and modular monoliths on Clean Architecture, DDD and CQRS. Messaging with the Outbox pattern, idempotent processing and retries, so work is neither lost nor done twice.',
    tools: ['RabbitMQ', 'Azure Service Bus', 'MassTransit', 'gRPC', 'SignalR'],
  },
  {
    icon: 'performance',
    title: 'Performance and scale',
    description:
      'Platforms serving 6,000+ concurrent users and 200K+ daily transactions. Query and index tuning, caching and asynchronous processing brought average API response time from 1.2s to under 500ms.',
    tools: ['SQL Server', 'Redis', 'Dapper', 'EF Core', 'Hangfire'],
  },
  {
    icon: 'fullstack',
    title: 'Full-stack delivery',
    description:
      'Complete modules from database to screen in ASP.NET Core and Angular: order-to-cash, inventory, challans, claims and returns, commissions and reporting.',
    tools: ['C#', 'ASP.NET Core', 'Angular', 'TypeScript', 'PrimeNG'],
  },
  {
    icon: 'cloud',
    title: 'Cloud and DevOps',
    description:
      'Azure Functions for heavy batch work, App Service and AKS for hosting, and automated pipelines that cut manual deployment effort by 50%.',
    tools: ['Azure', 'Docker', 'Kubernetes', 'Azure DevOps', 'GitHub Actions', 'Jenkins'],
  },
  {
    icon: 'leadership',
    title: 'Technical leadership',
    description:
      'Architecture decisions on async processing, caching, messaging and integration. Mentoring junior developers through code reviews and Clean Architecture training, which reduced production incidents by 30%.',
    tools: ['Architecture', 'Code review', 'Mentoring', 'SRS writing', 'Agile / Scrum'],
  },
];

export const principles: Principle[] = [
  {
    title: 'Reliability before speed',
    body: 'Money and stock move through these systems, so every message has to be processed exactly as intended. I use the Outbox pattern, idempotent handlers, retries and concurrency guards so work is neither lost nor done twice.',
  },
  {
    title: 'Asynchronous by default',
    body: 'Anything that does not need an immediate answer leaves the request path. RabbitMQ and Hangfire absorb the spikes, and the API stays fast for the person in the field.',
  },
  {
    title: 'Measure, then tune',
    body: 'Performance work starts from the slow query or the hot path, not from a guess. Indexing, query tuning, Redis caching and separate read and write paths took APIs from 1.2s to under 500ms.',
  },
  {
    title: 'Architecture that fits the problem',
    body: 'Clean Architecture and DDD where the domain is complex, and CQRS only where reads and writes really differ. SalesPulse deliberately skips CQRS because it does not need it.',
  },
  {
    title: 'Integration is a product',
    body: 'Contracts, validation and reconciliation matter as much as the code behind them. Standardizing REST and XML contracts cut new-client integration time by 30%.',
  },
  {
    title: 'Write it down, automate it',
    body: 'SRS documents, architecture diagrams and API contracts keep teams aligned. CI/CD pipelines make a release routine instead of risky.',
  },
];

export const caseStudies: Project[] = [
  {
    slug: 'online-sales-distribution-system',
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
    title: 'Technician Sales Module',
    context: 'Sales & Distribution',
    summary:
      'A full-stack module for challans, promotions, commissions, returns and claims that processes 200,000+ transactions a day with zero data loss.',
    problem:
      'Technician-driven sales produce a high volume of challans, promotions, commissions, returns and claims every day. Processing had to be fast and reliable, and no transaction could be lost along the way.',
    role: 'Built the module end to end: .NET 10 backend, Angular front end, messaging and background processing.',
    contributions: [
      'Built the full module, covering challans, promotions, commissions, returns and claims.',
      'Processes 200,000+ daily transactions with zero data loss.',
      'Used RabbitMQ and Hangfire to run heavy work asynchronously and in the background.',
      'Engineered Azure Functions to process multi-terabyte datasets, cutting batch time from several hours to under 30 minutes.',
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
];

export const experience: Role[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Computer Ease Limited',
    location: 'Dhaka, Bangladesh',
    period: 'Sep 2023 – Present',
    summary:
      'Enterprise sales, distribution, inventory and integration systems for clients including Unilever, A.O. Smith and AutoCrop Care.',
    impact: [
      { value: '200K+', label: 'Daily transactions processed' },
      { value: '97%', label: 'Fewer reconciliation errors' },
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
    steps: [
      'A booking command arrives at the API.',
      'A distributed lock is taken on the seat.',
      'The domain model validates and records the booking through EF Core.',
      'A domain event is saved to the outbox in the same transaction.',
      'The outbox publisher delivers the event to other modules.',
    ],
    stack: ['.NET', 'EF Core', 'Dapper', 'RedLockNet', 'CQRS', 'DDD'],
    metrics: [],
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
    detail: 'Deeper into .NET 10, SignalR and distributed systems',
  },
];

export const education: Education = {
  degree: 'B.Sc. in Computer Science and Engineering',
  school: 'Southeast University, Dhaka',
  period: 'Jun 2017 – Jun 2022',
  result: 'CGPA 3.80 / 4.00',
};
