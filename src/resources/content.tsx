import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Majdeldin",
  lastName: "Salah",
  name: `Majdeldin Salah`,
  role: "Cloud/Infra & DevOps Engineer",
  avatar: "/images/avatar.jpg",
  email: "me@majdeldin.dev",
  location: "Africa/Cairo", 
  languages: ["Arabic", "English"], 
};

const newsletter: Newsletter = {
  display: false, // Disabled for a portfolio
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about cloud computing and DevOps</>,
};

const social: Social = [
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/majdeldin7",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/majdeldin",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "discord", // Fallback icon in case whatsapp isn't in your icons list yet
    link: "https://wa.me/249990007091",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Automating deployments and improving reliability.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Cloud & DevOps</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
	I'm Majdeldin, a DevOps Engineer focused on automation and scale. I bridge the gap between code and infrastructure to ensure seamless growth.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Forward-thinking DevOps Engineer dedicated to building resilient cloud infrastructure across 
        AWS and OVH. I specialize in reducing operational bottlenecks through CI/CD automation, 
        containerization, and proactive monitoring. With a strong focus on security and 
        scalability, I partner with cross-functional teams to deliver systems that drive continuous 
        business value.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      {
        company: "Bravo Sudan | Istinara MATC", //[cite: 1]
        timeframe: "Dec 2024 - Present", //[cite: 1]
        role: "Cloud & DevOps Engineer", //[cite: 1]
        achievements: [
          <>
            Engineered a GitOps-driven CI/CD ecosystem using Jenkins, ArgoCD, and SonarQube,
            enabling 100+ weekly production releases with automated security gates that reduced
            vulnerabilities by 30% and ensured PCI-compliant code quality.
          </>,
          <>
            Architected high-availability hybrid infrastructure (AWS/OVH) for a platform with 1M+ Play
            Store downloads; maintained 99.99% uptime via global failover and automated disaster
            recovery for mission-critical services.
          </>,
          <>
            Optimized application scalability and performance by configuring AWS Application Load
            Balancers (ALB) and Kubernetes horizontal pod autoscaling, ensuring seamless system
            reliability during high-volume transaction surges.
          </>,
          <>
            Secured critical financial integrations by designing and deploying encrypted Site-to-Site
            VPN tunnels via NetGate firewalls, facilitating compliant and secure data exchange with
            banking partners and external billers.
          </>,
          <>
            Developed a full-stack observability framework leveraging Zabbix, Prometheus/Grafana,
            and the ELK Stack, providing proactive Slack/SMS alerting and Elastic APM tracing to cut
            system downtime by 40%.
          </>,
          <>
            Centralized Identity and Access Management (IAM) for 200+ accounts by integrating
            LDAP/AD with corporate platforms.
          </>,
        ],
        images: [], 
      },
      {
        company: "Systech Digital", //[cite: 1]
        timeframe: "Jan 2024 - Present", //[cite: 1]
        role: "Infra & DevOps Engineer", //[cite: 1]
        achievements: [
          <>
            Architected and executed the migration of a legacy monolithic architecture to a
            containerized microservices environment, leveraging [Docker/Kubernetes] to increase
            developer velocity by 300%.
          </>,
          <>
            Engineered a comprehensive observability stack to monitor 50+ microservices, utilizing
            [Prometheus/Grafana/Loki] to reduce system downtime by 40% through proactive
            alerting.
          </>,
          <>
            Optimized CI/CD pipelines by streamlining build stages and implementing advanced
            caching, resulting in a 15% reduction in deployment lead times.
          </>,
          <>
            Provisioned and managed enterprise-grade self-hosted infrastructure, including internal
            mail and file-sharing platforms, ensuring 99.9% availability for 70+ stakeholders.
          </>,
          <>
            Integrated automated vulnerability scanning and security auditing into the infrastructure
            lifecycle, significantly reducing the attack surface and ensuring compliance.
          </>,
          <>
            Deployed and maintained secure remote access solutions (VPN/Zero Trust), providing
            high-performance, encrypted connectivity for a globally distributed team.
          </>,
          <>
            Developed automation scripts for critical backup and disaster recovery (DR) workflows,
            eliminating 100+ hours of manual overhead annually and improving data integrity.
          </>,
        ],
        images: [],
      },
      {
        company: "Systech Digital",
        timeframe: "Oct 2022 - Dec 2023",
        role: "IT Support Engineer",
        achievements: [
          <>
            Managed and maintained enterprise email and collaboration platforms for internal
            accounts, ensuring 99.9% service availability through proactive configuration and end-user
            technical support.
          </>,
          <>
            Administered virtualized server environments using Proxmox VE, overseeing VM
            deployment, resource allocation, and hardware monitoring to ensure stable hosting for
            internal applications.
          </>,
          <>
            Provisioned Identity and Access Management (IAM) via LDAP/Active Directory,
            streamlining user onboarding/offboarding and managing secure permissions across
            corporate systems.
          </>,
          <>
            Configured secure networking and remote access solutions using NetGate firewalls and
            VPN tunnels, while automating weekly backup tasks to guarantee organizational data
            integrity.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Alzaiem Alazhari University",
        description: <>Bachelor of Computer Engineering (Dec 2021)</>,
      },
    ],
  },
  technical: {
    display: false,
    title: "Technical skills",
    skills: [],
  },
};

// Formerly Blog page
const skills: any = {
  path: "/skills",
  label: "Skills",
  title: "Technical Stack",
  description: `Tools and technologies`,
  categories: [
    {
      title: "Cloud & Infrastructure",
      tools: ["AWS EC2, S3, RDS, EKS, Route53, SES, WAF, AGC, VPC, IAM, CloudFront", "Proxmox", "ESXi"]
    },
    {
      title: "IaC & Automation",
      tools: ["Terraform", "Ansible", "Bash"]
    },
    {
      title: "Containers & Orchestration",
      tools: ["Docker", "Kubernetes"]
    },
    {
      title: "CI/CD & Security",
      tools: ["Jenkins", "Gitops ArgoCD", "SonarQube", "Trivy"]
    },
    {
      title: "Monitoring & Observability",
      tools: ["Zabbix", "Prometheus & Grafana", "ELK Stack"]
    },
    {
      title: "OS & Networking",
      tools: ["Windows", "Linux/Unix", "Firewalls - PfSense"]
    }
  ]
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `DevOps projects and case studies by ${person.name}`,
};

// Formerly Gallery page
const contact: any = {
  path: "/contact",
  label: "Contact",
  title: `Let's Connect`,
  description: `Always eager to tackle new engineering challenges. If you're looking for a DevOps partner, want to chat about cloud infrastructure, or just want to connect, my inbox is always open!`,
  links: [
    { type: "Email", value: "me@majdeldin.dev", link: "mailto:me@majdeldin.dev" },
    { type: "GitHub", value: "github.com/majdeldin7", link: "https://github.com/majdeldin7" },
    { type: "LinkedIn", value: "linkedin.com/in/majdeldin", link: "https://www.linkedin.com/in/majdeldin" },
    { type: "WhatsApp", value: "+249 99 000 7091", link: "https://wa.me/249990007091" }
  ]
};

export { person, social, newsletter, home, about, skills, work, contact };
