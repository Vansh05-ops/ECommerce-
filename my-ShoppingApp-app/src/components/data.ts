export interface Project {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    teamMembers: string[];
    budget: number;
    image: string; // Added the image field
  }
  
  export const projects: Project[] = [
    {
      id: "1",
      name: "Project Alpha",
      description: "A cutting-edge AI research project.",
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      status: "Ongoing",
      teamMembers: ["John Doe", "Alice Smith", "Robert Brown"],
      budget: 500000,
      image: "https://t4.ftcdn.net/jpg/03/62/36/73/360_F_362367329_o0RTO2FJou21nEnHNqbBsPwMopx1ZCtD.jpg"
    },
    {
      id: "2",
      name: "E-Commerce Platform",
      description: "An online marketplace for various products.",
      startDate: "2023-06-10",
      endDate: "2024-08-15",
      status: "Completed",
      teamMembers: ["Emily Davis", "Michael Johnson", "Sarah Wilson"],
      budget: 750000,
      image: "https://t4.ftcdn.net/jpg/05/37/98/49/360_F_537984937_gWpifxNfewjVeQZfZQyKjXRlD5lVC9dK.jpg"
    },
    {
      id: "3",
      name: "Mobile Banking App",
      description: "A secure and user-friendly banking application.",
      startDate: "2024-02-01",
      endDate: "2025-05-20",
      status: "In Progress",
      teamMembers: ["Chris White", "David Black", "Olivia Green"],
      budget: 1200000,
      image: "https://cdn-icons-png.freepik.com/256/4563/4563620.png?semt=ais_hybrid"
    },
    {
      id: "4",
      name: "Cybersecurity Framework",
      description: "Developing advanced security protocols.",
      startDate: "2022-11-20",
      endDate: "2024-07-30",
      status: "Ongoing",
      teamMembers: ["Sophia Blue", "Liam Red", "Emma Yellow"],
      budget: 850000,
      image: "https://www.zarla.com/images/zarla-digitalock-1x1-2400x2400-20220525-dvxqqfqp8wcw9689ggfx.png?crop=1:1,smart&width=250&dpr=2"
    },
    {
      id: "5",
      name: "Smart Home Automation",
      description: "Integrating IoT devices for home automation.",
      startDate: "2023-09-01",
      endDate: "2025-02-15",
      status: "In Progress",
      teamMembers: ["Noah Green", "Ava Purple", "Isabella Orange"],
      budget: 450000,
      image: "https://uploads.turbologo.com/uploads/design/preview_image/68465850/preview_image20241130-1-jnusau.png"
    },
    {
      id: "6",
      name: "Healthcare AI",
      description: "AI-powered diagnostics and treatment solutions.",
      startDate: "2023-05-15",
      endDate: "2024-11-10",
      status: "Ongoing",
      teamMembers: ["James Brown", "Mia Black", "Ethan White"],
      budget: 980000,
      image: "https://t4.ftcdn.net/jpg/01/02/95/93/360_F_102959300_Y4tmVIHJO9CQ7IJqwlTFj0IcaF7VUlLt.jpg"
    },
    {
      id: "7",
      name: "Autonomous Vehicles",
      description: "Developing self-driving car technology.",
      startDate: "2024-03-05",
      endDate: "2026-08-20",
      status: "Planned",
      teamMembers: ["William Gray", "Charlotte Silver", "Alexander Gold"],
      budget: 2000000,
      image: "https://cdn.vectorstock.com/i/preview-1x/14/08/logo-autonomous-car-vector-19811408.jpg"
    },
    {
      id: "8",
      name: "Blockchain Voting System",
      description: "Secure and transparent voting through blockchain.",
      startDate: "2022-08-12",
      endDate: "2024-06-30",
      status: "Completed",
      teamMembers: ["Benjamin Cyan", "Lily Magenta", "Mason Indigo"],
      budget: 650000,
      image: "https://t3.ftcdn.net/jpg/08/21/40/74/360_F_821407426_pPAXWfm6RWNjsRIz3iRhL0isarJYVxOV.jpg"
    },
    {
      id: "9",
      name: "AR Shopping Experience",
      description: "Augmented reality for online shopping.",
      startDate: "2023-12-01",
      endDate: "2025-03-15",
      status: "Ongoing",
      teamMembers: ["Ella Brown", "Henry Red", "Lucas Blue"],
      budget: 730000,
      image: "https://tryon.kivisense.com/blog/wp-content/uploads/2024/06/ar-for-ecommerce-1-1280x854.jpg"
    },
    {
      id: "10",
      name: "Renewable Energy Solutions",
      description: "Innovative approaches to solar and wind energy.",
      startDate: "2024-04-10",
      endDate: "2026-12-25",
      status: "Planned",
      teamMembers: ["Grace Violet", "Daniel Green", "Sophia Rose"],
      budget: 1500000,
      image: "https://companieslogo.com/img/128/REGI-4cd06ac6.png?t=1720244493"
    }
  ];
  