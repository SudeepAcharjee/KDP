export type TechnologyData = {
    title: string;
    description: string;
    image: string;
    expertiseList: string[];
  };
  
  export const technologies: Record<string, TechnologyData> = {
    "cyber-security": {
      title: "Cyber Security",
      description:
        `The number of connected devices are expected cross 24 billion by 2030. All these systems and devices generate incredibly large volumes of information and all this information must be protected in some way.\nThe number of data breaches has grown exponentially from last 5 years and due to COVID pandemic and WFH options the attack surface has been increased exponentially. Cybersecurity plays a very crucial role in protecting all the devices and their associated data.`,
      image: "/images/cyber.jpeg",
      expertiseList: [
        "Vulnerability Testing",
        "Threat Modelling and Threat Intelligence",
        "Penetration Testing",
        "Web Application Testing",
        "Identifying and Fixing OSWAP Top 10 Vulnerabilities",
        "Identifying and Fixing SANS Top 25 Vulnerabilities",
        "IT Staffing",
      ],
    },
    blockchain: {
      title: "Blockchain",
      description:
        `Blockchain is becoming an inevitable phenomenon owing to the core-enabling technologies and significant opportunities it offers to digital businesses.\nBlockchain has the potential to drive major changes and create new opportunities across industries – from banking , Healthcare,Banking, Finance, Mobility, Automobile and Cyber Security.\nWe have professionals with rich industry experience inBlockchain and related DLT’s.`,
      image: "/images/blocknew.webp",
      expertiseList: [
        "Setting up Blockchain infrastructure for Ethereum , HyperLedger, BitCoin , IOTA using Kubernetes.",
        "Creating Wallets for BitCoin, Ethereum , IOTA and other blockchain based on customer needs.",
        "Writing Smart Contracts in Ethereum for creating ERC Tokens like ERC 20 and ERC 721.",
        "Building Supply Chain Management Solution using Hyperledger Fabric.",
        "Building IOT / Smart Home / Solutions using IOTA Blockchain",
        "Building Smart Contracts for Escrow and Crowd Funding Services",
        "IT Staffing",
      ],
    },
    "cloud-computing": {
      title: "Cloud Computing",
      description:
        `Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.\nWe have good expertise in setting up cloud infrastructure based on your business use case.\nWe have a team of Certified Architects who have expertise in Azure , AWS , GCP and other Digital Cloud Platforms.`,
      image: "/images/cloud.png",
      expertiseList: [
        "Configure and automate the infrastructure and deployment of applications on multiple cloud environments.",
        "Deploy Microservices using Kubernetes . We have expertise in Azure Kubernetes [AKS] , AWS Kubernetes and GCP Kubernetes services.",
        "Expertise in Cloud Formation Templates for AWS , Terraform for Multi Cloud Platforms.",
        "Sound knowledge in implementing IAM, Cognito , VPC , Message Queues, Kinesis, Redis and other AWS related services",
        "IT Staffing",
      ],
    },
    "dot-net": {
      title: "Dot net",
      description:
        ` .NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework. The project is primarily developed by Microsoft employees by way of the .NET Foundation, and released under the MIT License.`,
      image: "/images/newnet.jpg",
      expertiseList: [
        "We have rich experience in developing and deploying planet scale application using .NET core.",
        "Expertise in Building REST API’s and Microservices using .NET Core",
        "IT Staffing",
      ],
    },
    "java": {
      title: "Java",
      description:
        ` Java Is the Language of Possibilities Java is powering the innovation behind the digital world.`,
      image: "/images/java.webp",
      expertiseList: [
        "Develop planet scale applications using Spring Boot",
        "Expertise in Developing and deploying Microservices at scale using Kubernetes",
        "Expertise in Developing Multi tentant applications using Spring Boot",
        "Web Application Testing",
        "We have cosultants with more than a decade experience in Java , Spring Boot and Micro services",
        "IT Staffing",
      ],
    },
    "machine-learning": {
      title: "Machine Learning",
      description:
        ` Artificial intelligence forms the basis for all computer learning and is the future of all complex decision making.\n“AI is going to change the world more than anything in the history of . More than electricity.”— Dr. Kai-Fu Lee, 2018\nAI is revolutionising all the industries like Banking , Finance, healhcare, Automative named to be few.\n We have consultants who have rich industry experience possessing Doctorate in AI / ML from premier institutes.`,
      image: "/images/ml.webp",
      expertiseList: [
        "Developing Chatbots for Healthcare and Food indusrty using Open Source Technologies",
        "Integrating Chatbot with Social media channels like Whatsapp , Slack and Telegram",
        "Expertise in building Knowledge graphs from domain knowledge and infer the results",
        "Expertise in Image Processing using OpenCV",
        "Sound knowledge in implementing OCR solutions using Python",
        "Expertise in solving real time business solution using various tools in Python",
        "IT Staffing",
      ],
    },
    "mule-soft": {
      title: "Mule Soft",
      description:
        `MuleSoft&apos;s Anypoint Platform™ is the world&apos;s leading integration platform for SOA, SaaS, and APIs. MuleSoft provides exceptional business agility to companies by connecting applications, data, and devices, both on-premises and in the cloud with an API-led approach.`,
      image: "/images/mulesoft.webp",
      expertiseList: [
        "We have a team of experts who can understand your business and do an seamless integration with Mulesoft Anypoint platform.",
        "IT Staffing",
      ],
    },
    "python": {
      title: "Python",
      description:
        `Python is powerful... and fast; plays well with others;runs everywhere;is friendly & easy to learn; is Open.`,
      image: "/images/python.jpg",
      expertiseList: [
        "Our team has rich experience in developing Web applications using Flask and Django.",
        "Experience in developing REST API’s using Flask / Klein frameworks",
        "Expertise in developing Microservices using python Frameworks.",
        "Web Application Testing",
        "IT Staffing",
      ],
    },
    "rpa": {
      title: "RPA",
      description:
        ` At Sheryl Tech, we specialize in Robotic Process Automation (RPA) to help businesses streamline repetitive tasks and enhance operational efficiency. RPA enables the automation of mundane processes, allowing organizations to reduce errors, save time, and focus on strategic initiatives.\nWith expertise in leading RPA tools and platforms, Sheryl Tech delivers tailored solutions that adapt to your unique workflows, ensuring seamless integration and measurable ROI.`,
      image: "/images/rpa.jpg",
      expertiseList: [
        "We have experienced consultants in Blue Prism , UI Path , Appian and Mendix who can automate your entire business process from end to end",
        "IT Staffing",
      ],
    },
    "sales-force": {
      title: "Sales Force",
      description:
        ` Salesforce is a leading CRM (Customer Relationship Management) software which is served form cloud. It has more than 800 applications to support various features like generating new leads, acquiring new leads, increasing sales and closing the deals. \n It is designed to manage the organization&apos;s data focused on customer and sales details. \nIt also offers features to customize its inbuilt data structures and GUI to suit the specific needs of a business. More recently, it has started offering the IOT (internet of things) connectivity to the CRM platform.`,
      image: "/images/sales.png",
      expertiseList: [
        "We have a team of experts who can understand your business and do an seamless integration with salesforce.",
        "Expertise in Sales force administration.",
        "IT Staffing",
      ],
    },
      "certificate-of-insurance": {
      title: "Certificate of Insurance",
      description: `
        Managing Certificates of Insurance (COIs) can be a complex and time-consuming process. 
        Insure Spark offers comprehensive COI management services designed to streamline operations, 
        reduce costs, and enhance accuracy. Their expertise ensures adherence to regulatory requirements 
        while enabling businesses to focus on core activities.
      `,
      image: "/images/coi.jpg",
      expertiseList: [
        "Streamlining and expediting COI issuance processes.",
        "Reducing expenses and easily scaling with demand.",
        "Enhancing precision with advanced technology for COI management.",
        "Providing prompt COI issuance and effective client communication.",
        "Ensuring adherence to regulatory requirements with specialized knowledge.",
        "Utilizing automated solutions for efficient data management.",
        "Offering detailed insights and analytics on COI performance.",
        "Minimizing errors and maintaining compliance.",
      ],
    },
      "Direct-Bill-Reconciliation": {
      title: "Direct Bill Reconciliation",
      description: `
        Reconciliation of statements is a crucial but time-intensive and meticulous task. Agency personnel often juggle multiple responsibilities, making it challenging to concentrate fully on reconciliation tasks. When focus is scattered, the likelihood of errors rises. By employing an Insure Spark Virtual Assistant to manage monthly commission and direct bill statement reconciliations, agencies can enhance efficiency and minimize expensive mistakes.
      `,
      image: "/images/dbr.jpg",
      expertiseList: [
        "Streamlining reconciliation processes to reduce administrative burden.",
        "Ensuring precise matching of payments and invoices to minimize errors.",
        "Leveraging specialized knowledge and technology for effective reconciliation.",
        "Reducing the need for in-house resources, potentially lowering operational costs.",
        "Allowing insurance agencies and carriers to focus on core business activities.",
      ],
      },

       "policyrenewals": {
        title: "Policy Renewals",
        description: `
          Outsourcing the policy renewal process to a specialized provider like Insure Spark offers numerous benefits to U.S. Property & Casualty insurance agencies, carriers, Managing General Agents (MGAs), and brokers. By partnering with Insure Spark for policy renewals, you can enhance operational efficiency, reduce costs, improve accuracy, and provide a better experience for policyholders, all while focusing on your core business objectives.
        `,
        image: "/images/policy.jpg",
        expertiseList: [
          "Increased Efficiency: Streamlined processes and quick turnaround times.",
          "Cost Savings: Reduced operational costs and flexible resource management.",
          "Enhanced Accuracy: Minimizes errors with specialized expertise and automated systems.",
          "Improved Client Experience: Timely renewals and effective communication with policyholders.",
          "Expertise and Compliance: Professional management with up-to-date regulatory adherence.",
          "Focus on Core Activities: Allows internal teams to concentrate on strategic initiatives.",
          "Advanced Technology: Utilizes cutting-edge tools for seamless integration and automation.",
          "Scalability: Adapts to varying volumes and complexities of renewals.",
          "Insightful Reporting: Provides detailed analytics for performance and improvement.",
          "Risk Management: Reduces the risk of errors and ensures compliance.",
        ],
        
      },

      "policyCancellations": {
        title: "Policy Cancellations",
        description: `
          Outsourcing policy cancellations to Insure Spark enhances operational efficiency, reduces costs, and improves accuracy. Our specialized services ensure timely and compliant management of policy cancellations, allowing your team to focus on strategic priorities.
        `,
        image: "/images/cancel.jpg",
        expertiseList: [
          "Streamlined Process: Efficiently handles policy cancellations with automated workflows.",
          "Cost Savings: Reduces operational costs and scales with the volume of cancellations.",
          "Accuracy: Minimizes errors through specialized systems and expertise.",
          "Timely Management: Ensures prompt processing and notification of cancellations.",
          "Regulatory Compliance: Maintains adherence to regulatory requirements and standards.",
          "Resource Optimization: Allows internal teams to focus on core business activities.",
          "Advanced Technology: Utilizes cutting-edge tools for efficient cancellation management.",
          "Scalability: Adapts to varying volumes of policy cancellations effortlessly.",
          "Detailed Reporting: Provides comprehensive reports and analytics on cancellation activities.",
          "Risk Mitigation: Reduces the risk of errors and ensures accurate, compliant cancellations.",
        ],
         },

         "endorsements":{
          title: "Endorsements",
          description: `
            Outsourcing endorsements to Insure Spark enhances efficiency, reduces costs, and ensures accurate, compliant processing. Our specialized services streamline the endorsement process, allowing your team to focus on core business objectives.
          `,
          image: "/images/endo.jpg",
          expertiseList: [
            "Efficiency: Streamlines and accelerates the endorsement process.",
            "Cost Savings: Reduces operational expenses and scales with demand.",
            "Accuracy: Minimizes errors with advanced technology and expertise.",
            "Timely Updates: Ensures prompt implementation of policy changes.",
            "Compliance: Maintains regulatory standards and requirements.",
            "Focus: Allows internal teams to concentrate on strategic tasks.",
            "Technology: Uses modern tools for efficient management.",
            "Scalability: Adapts to varying endorsement volumes effortlessly.",
            "Reporting: Provides detailed insights and performance analytics.",
            "Risk Reduction: Minimizes errors and compliance issues.",
          ],
             },

             "lossRunsAndMVRs": {
              title: "Loss Runs & MVR's",
              description: `
                Partner with Insure Spark to optimize your management of loss runs and Motor Vehicle Records (MVRs), improving accuracy and efficiency in your risk assessment and underwriting processes.
              `,
              image: "/images/loss.jpg",
              expertiseList: [
                "Efficient Processing: We handle the collection and analysis of loss runs to assess risk and inform underwriting decisions.",
                "Accuracy Assurance: Ensure accurate and timely compilation of historical claims data to support policy renewals and risk management.",
                "Record Retrieval: Efficiently obtain and review MVRs to evaluate driver risk and ensure compliance with insurance requirements.",
                "Data Integration: Integrate MVR data into your risk assessment and underwriting processes to enhance decision-making and minimize liability.",
                "Streamlined Operations: Simplify the management of loss runs and MVRs with our dedicated processing services.",
                "Improved Accuracy: Reduce errors and ensure that all records are current and complete.",
                "Enhanced Risk Management: Use accurate loss data and driving records to better assess and manage risk, leading to more informed underwriting and policy decisions.",
              ],
            },
            
            "policyChecking": {
              title: "Policy Checking",
              description: `
                Outsourcing policy checking to Insure Spark ensures that insurance policies are accurate, compliant, and aligned with clients' needs. Our thorough review process enhances operational efficiency and supports better risk management.
              `,
              image: "/images/pcheck.jpg",
              expertiseList: [
                "Error Prevention: Reduces the risk of mistakes that could impact claims or lead to compliance issues.",
                "Compliance Assurance: Maintains adherence to regulatory requirements, avoiding legal and financial penalties.",
                "Accuracy Enhancement: Ensures policies are correctly documented and reflect the agreed-upon terms.",
                "Process Efficiency: Streamlines policy management, reducing time and resources needed for manual checks.",
                "Risk Management Support: Provides thorough verification to support better risk assessment and mitigation.",
                "Client Satisfaction: Delivers accurate policies that meet clients' expectations and needs.",
                "Regulatory Alignment: Keeps policies in line with current laws and industry standards.",
                "Operational Streamlining: Improves workflow efficiency by minimizing manual errors.",
                "Quality Assurance: Implements rigorous checks to maintain high standards of policy documentation.",
                "Resource Optimization: Allows internal teams to focus on strategic initiatives by handling detailed policy reviews.",
              ],

            },
            
            "accountingAndBookkeeping": {
              title: "Accounting & Bookkeeping Services",
              description: `
                Outsourcing accounting and bookkeeping services to Insure Spark provides your insurance agency with specialized expertise, cost-effective solutions, and dedicated support tailored to your unique requirements. Let us handle your financial management so you can focus on growing your business with confidence.
              `,
              image: "/images/acc.jpg",
              expertiseList: [
                "Specialized Expertise: Understanding the unique financial intricacies of insurance agencies, including commission structures, policy accounting, and regulatory compliance.",
                "Agency Management Systems: Proficiency in various agency management systems, ensuring seamless integration and accurate financial reporting.",
                "Cost-Effective Solution: Eliminating the need for an in-house finance department, reducing overhead costs associated with salaries, benefits, and training.",
                "Customized Services: Offering personalized accounting and bookkeeping solutions tailored to the specific needs and workflows of insurance agencies.",
                "Advanced Technology: Leveraging advanced accounting software and tools to provide real-time financial insights and secure data management.",
                "Focus on Growth: Allowing your team to concentrate on core business activities, client relationships, and strategic growth initiatives.",
              ],
             
            },
            "quotingAndSubmissions": {
              title: "Quoting & Submissions",
              description: `
                Outsourcing your quoting and submissions process to Insure Spark allows you to benefit from specialized expertise, streamlined operations, and cost savings. Our tailored approach ensures that your processes are handled efficiently, enabling your agency to focus on its core business functions and growth opportunities.
              `,
              image: "/images/qout.jpg",
              expertiseList: [
                "Expert Handling: Deep knowledge of insurance industry processes and systems.",
                "Increased Efficiency: Streamlined, automated processes reduce turnaround times and errors.",
                "Cost Savings: Lower overhead costs and scalable solutions eliminate the need for an in-house team.",
                "Enhanced Focus: Allows your team to concentrate on client relationships and growth.",
                "Compliance and Accuracy: Ensures adherence to regulations and minimizes errors.",
              ],
            
            },
           "agencyInvoicing":{
              title: "Agency Invoicing",
              description: `
                Outsource your invoicing process to Insure Spark for a cost-effective, efficient solution that allows you to focus on growing your agency.
              `,
              image: "/images/agency.jpg",
              expertiseList: [
                "Expert Handling: Our team is experienced in managing invoicing processes specific to insurance agencies, ensuring accuracy and compliance.",
                "Increased Efficiency: We streamline invoicing tasks, reducing processing times and minimizing errors through automation and best practices.",
                "Cost Savings: Outsourcing reduces the need for an in-house invoicing team, cutting down on overhead costs related to salaries and benefits.",
                "Enhanced Focus: Your team can concentrate on core activities and client relationships while we handle the invoicing details.",
                "Improved Cash Flow: Timely and accurate invoicing helps maintain steady cash flow and reduces delays in payments.",
                "Compliance and Accuracy: We ensure adherence to industry standards and regulatory requirements, reducing the risk of billing errors and disputes.",
              ],
              
            },
            "policyAdministration": {
              title: "Policy Administration",
              description: `
                Partner with Insure Spark to optimize your new business processing and policy servicing, improving efficiency, customer satisfaction, and overall productivity. Let us handle the administrative tasks so your team can focus on driving sales and serving clients.
              `,
              image: "/images/admin.jpg",
              expertiseList: [
                "Speed Up Quoting: We assist your sales team by managing Acord applications, conducting quotes through carrier websites or comparative raters, and gathering necessary documents such as loss runs, motor vehicle records, and CLUE reports.",
                "Proposal Management: Efficiently create and manage proposals.",
                "Comprehensive Processing: Beyond binding, we handle manual policy entry, policy downloads and distribution, and manage trailing documents, including binders, certificates, and evidence of insurance.",
                "Efficient Administration: We manage tasks such as policy and endorsement checking, client and policy entry, pending cancellation follow-ups, carrier downloads, and document indexing.",
                "24/5 Availability: Our team operates round-the-clock during weekdays, keeping your agency productive even outside regular office hours.",
              ],
             
            },
            
            
        

  };
    
  