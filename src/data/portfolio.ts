/**
 * Single source of truth for all portfolio content.
 * Update the values here — the UI reads everything from this file.
 * Leave a URL as an empty string ("") and the related button is hidden automatically.
 */

export type ProjectDetails = {
  overview: string;
  problemStatement: string;
  dataset: string;
  dataCleaning: string[];
  dataAnalysis: string[];
  methodology: string[];
  keyInsights: string[];
  visualizations: string[];
  results: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  githubUrl: string;
  /** Main screenshot shown on the project card. Leave "" until the real screenshot is added. */
  image: string;
  /** Additional screenshots shown in the gallery on the project detail page. */
  gallery: string[];
  details: ProjectDetails;
};

export const profile = {
  name: "Ashmita E",
  role: "Data Analyst",
  greeting: "Hi, I'm Ashmita E",
  heading: "Aspiring Data Analyst",
  subtitle: "Turning Data into Meaningful Insights",
  intro:
    "I am a B.E. CSE (AI & ML) student passionate about Data Analytics, Data Visualization and building data-driven solutions. I enjoy transforming raw data into meaningful insights using Excel, SQL, Power BI and Python.",
  about:
    "I am a Computer Science and Engineering student specialising in Artificial Intelligence and Machine Learning, focused on a career in data analytics. I work with Excel, SQL, Power BI and Python to clean messy data, explore it for patterns and turn the findings into dashboards and reports that support clear business decisions. I enjoy the full analysis cycle — from understanding the question, to preparing the data, to presenting insights that people can actually act on.",
};

export const education = {
  degree: "B.E. Computer Science and Engineering",
  specialisation: "(AI & Machine Learning)",
  institution: "Jeppiaar Engineering College",
  period: "2024 – 2028",
  cgpa: "8.90",
};

/** Contact details. Leave a field as "" to hide it everywhere. */
export const contact = {
  email: "ashmita3721@gmail.com",
  phone: "+91 7339544867",
  linkedin: "https://www.linkedin.com/in/ashmita-e31",
  github: "https://github.com/Ashmita-31",
  leetcode: "https://leetcode.com/u/Ashmita_31/",
};

/** Put your resume PDF in /public and set this to e.g. "/Ashmita-E-Resume.pdf". */
export const resumeUrl = "";

export const skills: { name: string; icon: string }[] = [
  { name: "Excel", icon: "table" },
  { name: "SQL", icon: "database" },
  { name: "Power BI", icon: "bar-chart" },
  { name: "Python", icon: "code" },
  { name: "Pandas", icon: "panda" },
  { name: "NumPy", icon: "sigma" },
  { name: "Matplotlib", icon: "line-chart" },
  { name: "Data Visualization", icon: "pie-chart" },
  { name: "Statistics", icon: "activity" },
  { name: "Machine Learning", icon: "brain" },
];

export const certifications: {
  name: string;
  organization: string;
  certificateUrl: string;
}[] = [
  {
    name: "Excel Basics for Data Analytics",
    organization: "IBM / Coursera",
    certificateUrl: "",
  },
  {
    name: "Programming in Python",
    organization: "Infosys Springboard",
    certificateUrl: "",
  },
  {
    name: "Data Analytics 30 Day Masterclass",
    organization: "Novitech Pvt Ltd",
    certificateUrl: "",
  },
  {
    name: "Data Visualization and Dashboards with Excel and Cognos",
    organization: "IBM / Coursera",
    certificateUrl: "",
  },
  {
    name: "Python for Data Science, AI & Development",
    organization: "IBM / Coursera",
    certificateUrl: "",
  },
  {
    name: "Database and SQL for Data Science with Python",
    organization: "IBM / Coursera",
    certificateUrl: "",
  },
];

export const projects: Project[] = [
  {
    id: "sales-dashboard",
    title: "Sales Analytics Dashboard",
    description:
      "Interactive dashboard for analyzing sales, profit, quantity and business performance across locations, industries and time periods.",
    tools: ["Excel", "Pivot Tables", "Charts", "Slicers", "Data Analysis"],
    githubUrl: "https://github.com/Ashmita-31/Dashboard-Excel",
    image: "",
    gallery: [],
    details: {
      overview:
        "An Excel-based sales analytics dashboard that consolidates transactional sales data into a single interactive view of revenue, profit and quantity performance.",
      problemStatement:
        "Sales data spread across many rows makes it hard to see how performance varies by location, industry and time period. The goal was a single dashboard that answers those questions instantly.",
      dataset: "Sales transaction records containing order details, location, industry, quantity, sales value and profit.",
      dataCleaning: [
        "Removed duplicate and incomplete order records",
        "Standardised date, location and industry fields",
        "Corrected data types for numeric sales, quantity and profit columns",
      ],
      dataAnalysis: [
        "Sales and profit trends across time periods",
        "Performance comparison by location and industry",
        "Quantity and profit-margin analysis",
      ],
      methodology: [
        "Structured the cleaned data as an Excel table",
        "Built pivot tables for each analytical question",
        "Connected charts and slicers to create an interactive dashboard layout",
      ],
      keyInsights: [
        "Revenue and profit are concentrated in a small set of locations and industries",
        "Clear seasonality is visible across the analysed time periods",
        "High sales volume does not always translate into high profit",
      ],
      visualizations: [
        "KPI cards for total sales, profit and quantity",
        "Trend charts by time period",
        "Location and industry comparison charts",
      ],
      results: [
        "A single interactive Excel dashboard replacing manual reporting",
        "Slicer-driven filtering by location, industry and period",
      ],
    },
  },
  {
    id: "blinkit-dashboard",
    title: "Blinkit Sales Analysis Dashboard",
    description:
      "Interactive dashboard analyzing sales performance, product trends, outlet performance and business insights.",
    tools: ["Power BI", "Data Cleaning", "DAX", "Data Visualization"],
    githubUrl: "https://github.com/Ashmita-31/Blinkit-Dashboard",
    image: "",
    gallery: [],
    details: {
      overview:
        "A Power BI dashboard exploring Blinkit sales data across outlets, item categories and outlet characteristics to surface business performance drivers.",
      problemStatement:
        "Understand which outlet types, sizes, locations and product categories drive sales, and where performance can be improved.",
      dataset: "Blinkit sales dataset containing item attributes, outlet attributes, ratings and sales values.",
      dataCleaning: [
        "Handled missing values in item weight and outlet size",
        "Standardised inconsistent fat-content category labels",
        "Validated numeric sales and rating columns",
      ],
      dataAnalysis: [
        "Total sales, average sales, item count and average rating",
        "Sales split by item type, fat content and outlet tier",
        "Outlet establishment-year trend analysis",
      ],
      methodology: [
        "Imported and transformed the dataset in Power Query",
        "Created DAX measures for the core KPIs",
        "Designed an interactive report page with slicers and cross-filtering",
      ],
      keyInsights: [
        "A handful of item categories account for a large share of total sales",
        "Outlet size and location tier are strongly associated with sales performance",
        "Ratings stay consistent across categories, so quality is not the differentiator",
      ],
      visualizations: [
        "KPI cards for total sales, average sales, items and rating",
        "Category and fat-content breakdowns",
        "Outlet type, size and location analysis",
      ],
      results: [
        "An interactive Power BI report for outlet and category performance review",
        "Reusable DAX measures for ongoing sales monitoring",
      ],
    },
  },
  {
    id: "swiggy-dashboard",
    title: "Swiggy Data Analysis Dashboard",
    description:
      "Interactive food-delivery analytics dashboard designed to identify sales trends, customer patterns and business insights.",
    tools: ["Power BI", "Excel", "Data Analysis", "Data Visualization"],
    githubUrl: "https://github.com/Ashmita-31/Swiggy-project",
    image: "",
    gallery: [],
    details: {
      overview:
        "A food-delivery analytics dashboard that studies restaurant, city and cuisine level performance along with customer rating behaviour.",
      problemStatement:
        "Identify what drives orders and ratings across cities, cuisines and restaurants in a food-delivery marketplace.",
      dataset: "Swiggy restaurant and order dataset covering city, cuisine, pricing, ratings and delivery details.",
      dataCleaning: [
        "Removed duplicate restaurant entries",
        "Normalised cuisine and city text values",
        "Converted rating and price fields to consistent numeric formats",
      ],
      dataAnalysis: [
        "City-level and cuisine-level performance comparison",
        "Rating distribution and its relationship with price",
        "Top-performing restaurants by volume and rating",
      ],
      methodology: [
        "Prepared and cleaned the raw data in Excel",
        "Modelled and visualised the cleaned data in Power BI",
        "Added slicers for city, cuisine and rating range",
      ],
      keyInsights: [
        "Order concentration is heavily skewed toward a few cities",
        "Popular cuisines differ noticeably between cities",
        "Higher price does not guarantee a higher rating",
      ],
      visualizations: [
        "KPI cards for restaurants, average rating and average price",
        "City and cuisine comparison charts",
        "Rating distribution visual",
      ],
      results: [
        "A dashboard that highlights growth cities and cuisines",
        "Clear view of rating and pricing patterns across the marketplace",
      ],
    },
  },
  {
    id: "iris-classification",
    title: "Iris Flower Classification",
    description:
      "Machine learning model that predicts the Iris flower species using four flower measurements.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Decision Tree", "Matplotlib"],
    githubUrl: "https://github.com/Ashmita-31/IRIS-flower-classification",
    image: "",
    gallery: [],
    details: {
      overview:
        "A supervised machine learning project that classifies Iris flowers into their species from sepal and petal measurements.",
      problemStatement:
        "Given four numeric flower measurements, predict which of the three Iris species a sample belongs to.",
      dataset: "The classic Iris dataset: sepal length, sepal width, petal length, petal width and species label.",
      dataCleaning: [
        "Checked for missing and duplicate records",
        "Verified value ranges for each measurement",
        "Encoded the species label for modelling",
      ],
      dataAnalysis: [
        "Descriptive statistics for each measurement",
        "Feature distribution and correlation exploration",
        "Class separability analysis between species",
      ],
      methodology: [
        "Split the data into training and testing sets",
        "Trained a Decision Tree classifier with scikit-learn",
        "Evaluated the model on the held-out test set",
      ],
      keyInsights: [
        "Petal measurements separate the species far better than sepal measurements",
        "One species is linearly separable from the other two",
        "A shallow tree is enough for this problem — deeper trees only overfit",
      ],
      visualizations: [
        "Feature distribution plots with Matplotlib",
        "Scatter plots of petal length vs petal width by species",
        "Decision tree structure plot",
      ],
      results: [
        "A trained Decision Tree classifier for Iris species prediction",
        "Evaluation on a held-out test split with a confusion matrix",
      ],
    },
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
