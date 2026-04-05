import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Majdeldin",
  lastName: "Salah",
  name: `Majdeldin Salah`,
  role: "Cloud/Infra & DevOps Engineer",
  avatar: "/images/avatar.jpg",
  email: "majdeldinsalah@gmail.com",
  location: "Africa/Khartoum", 
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
        company: "Istinara MATC", //[cite: 1]
        timeframe: "Dec 2024 - Present", //[cite: 1]
        role: "Cloud & DevOps Engineer", //[cite: 1]
        achievements: [
          <>
            Built deployment pipeline that let our 6-person team ship 70+ releases/week without ever
            working weekends.
          </>,
          <>
            Managed AWS infrastructure supporting 300K+ users with 99.99% uptime and implemented 
            load balancing and auto-scaling.
          </>,
          <>
            Implemented automated security scanning, reducing vulnerabilities in production by 30%.
          </>
        ],
        images: [], 
      },
      {
        company: "Systech Digital", //[cite: 1]
        timeframe: "Jan 2024 - Present", //[cite: 1]
        role: "Infra & DevOps Engineer", //[cite: 1]
        achievements: [
          <>
            Migrated legacy monolith to microservices, improving developer velocity by 300%.
          </>,
          <>
            Helped set up monitoring system that supported 70+ microservices, cutting downtime by
            40%.
          </>,
          <>
            Assisted in optimizing CI/CD pipelines, contributing to a 15% faster build process.
          </>
        ],
        images: [],
      },
      {
        company: "Systech Digital",
        timeframe: "Oct 2022 - Dec 2023",
        role: "IT Support Engineer",
        achievements: [
          <>
            Deployed and supported internal email and file-sharing platforms, providing direct 
            configuration and troubleshooting for 70+ user accounts.
          </>,
          <>
            Configured and supported privacy-focused remote access solutions, ensuring secure and 
            reliable connectivity for distributed and remote teams.
          </>,
          <>
            Managed proactive system monitoring tools, quickly identifying and resolving network 
            and infrastructure issues to minimize daily operational downtime for staff.
          </>
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
    { type: "Email", value: "majdeldinsalah@gmail.com", link: "mailto:majdeldinsalah@gmail.com" },
    { type: "GitHub", value: "github.com/majdeldin7", link: "https://github.com/majdeldin7" },
    { type: "LinkedIn", value: "linkedin.com/in/majdeldin", link: "https://www.linkedin.com/in/majdeldin" },
    { type: "WhatsApp", value: "+249 99 000 7091", link: "https://wa.me/249990007091" }
  ]
};

export { person, social, newsletter, home, about, skills, work, contact };
