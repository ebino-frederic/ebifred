// Ebino Frederic R – Recruiter-safe, reality-aligned portfolio data

export const portfolioData = {
  hero: {
    name: "Ebino Frederic R",
    title: "Software & Data Enthusiast",
    subtitle: "Building Reliable Systems with Logic and Precision",
    tagline: "Clean code. Clear thinking. Real impact."
  },

  about: {
    description:
      "I am a detail-oriented software professional with a strong foundation in testing, system analysis, and problem-solving. Starting my journey as a Manual Test Engineer, I developed a deep understanding of software quality, edge cases, and real-world system behavior. I am now transitioning into development-focused roles, where I apply the same discipline to building scalable, user-focused applications.",

    quote:
      "Good software is not just built — it is understood, tested, and refined.",

    stats: [
      { label: "Years of Experience", value: "1+" },
      { label: "Projects Built", value: "10+" },
      { label: "Test Scenarios Executed", value: "500+" },
      { label: "Technologies Used", value: "12+" }
    ]
  },

  skills: [
    {
      id: 1,
      name: "Frontend Development",
      icon: "layout",
      description:
        "Building responsive, accessible, and component-driven user interfaces.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
      level: 80,
      color: "#d4af37"
    },
    {
      id: 2,
      name: "Backend & Databases",
      icon: "server",
      description:
        "Designing APIs and working with structured data efficiently.",
      techStack: ["Node.js", "Express", "MongoDB", "SQL"],
      level: 70,
      color: "#cd7f32"
    },
    {
      id: 3,
      name: "Software Testing & QA",
      icon: "check-circle",
      description:
        "Manual testing, test case design, defect tracking, and quality assurance.",
      techStack: ["Test Case Design", "Regression Testing", "Bug Tracking"],
      level: 85,
      color: "#8b7355"
    },
    {
      id: 4,
      name: "Tools & Practices",
      icon: "tool",
      description:
        "Using industry tools and workflows to ship stable software.",
      techStack: ["Git", "Postman", "CI/CD Basics", "Agile"],
      level: 75,
      color: "#6b4e71"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Inventory Management System",
      description:
        "A full-stack application to manage products, stock levels, and basic user roles. Focused on data accuracy and edge-case handling.",
      features: [
        "CRUD operations",
        "Form validation",
        "Role-based access"
      ],
      tags: ["React", "Node.js", "MongoDB"],
      year: "2024"
    },
    {
      id: 2,
      title: "Test Case Management Dashboard",
      description:
        "A dashboard-style application to organize test cases, track execution status, and log defects efficiently.",
      features: [
        "Test case categorization",
        "Execution status tracking",
        "Bug reference linking"
      ],
      tags: ["React", "JavaScript", "JSON"],
      year: "2024"
    },
    {
      id: 3,
      title: "API Testing & Automation Practice",
      description:
        "Hands-on project focused on validating REST APIs, handling edge cases, and verifying responses.",
      features: [
        "Status code validation",
        "Schema checks",
        "Negative testing"
      ],
      tags: ["Postman", "REST API"],
      year: "2023"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Senior QA Lead",
      role: "Product Team",
      text:
        "Ebino shows strong attention to detail and a solid understanding of system behavior. His transition into development is backed by a strong quality mindset."
    }
  ],

  contact: {
    email: "ebinofrederic@gmail.com",
    location: "Chennai, India",
    social: {
      github: "https://github.com/your-username",
      linkedin: "https://linkedin.com/in/your-profile"
    }
  }
};