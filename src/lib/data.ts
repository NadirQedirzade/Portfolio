export const profile = {
  name: "Nadir Qədirzadə",
  headline: "AzTU — Mechatronics & Robotics Engineer",
  location: "Baku, Azerbaijan",
  email: "nqedirzade08@gmail.com",
  github: "https://github.com/nqedirzade08",
  linkedin:
    "https://www.linkedin.com/in/nadir-q%C9%99dirzad%C9%99-667b13408/",
  resumeUrl:
    "https://drive.google.com/file/d/1BMTG82cRXWEVqYezROA5J48K-MjCG_UR/view?usp=sharing",
};

export const badges = [
  {
    id: "medscan",
    label: "MedScan AI",
    role: "Team Leader",
    note: "Idea to Project Hackathon — 3rd Place",
  },
  {
    id: "abituriyentx",
    label: "AbituriyentX",
    role: "Team Leader & Data Engineer",
    note: "Startup Days 4 — 2nd Place",
  },
  {
    id: "smartcity",
    label: "SmartCityPulse",
    role: "Team Leader",
    note: "Hackathon project",
  },
];

export const aboutParagraphs = [
  "I am a Mechatronics and Robotics Engineering student at Azerbaijan Technical University, building my career toward becoming a Machine Learning Engineer. My current focus is on developing a strong foundation in data analysis, mathematics, statistics, and programming — essential skills for working effectively with machine learning.",
  "I work with Python, NumPy, Pandas, Matplotlib, and Seaborn, and I am currently expanding my skills in SQL, Power BI, and Excel to strengthen my understanding of data and analytical workflows. After building this foundation, my next step is to advance into Machine Learning and Deep Learning with Scikit-learn, PyTorch, and TensorFlow, followed by specialization in Computer Vision and Natural Language Processing."
];

export const skills = {
  current: [
    "Python",
    "Linear Algebra",
    "Statistics",
    "NumPy",
    "Pandas",
    "Matplotlib", 
    "Seaborn"
  ],
  inProgress: ["SQL", "Power BI", "Excel"],
  next: ["Scikit-learn", "PyTorch", "Computer Vision", "NLP"],
};

export type CaseStudyBlock =
  | { type: "p"; text: string }
  | { type: "sub"; text: string }
  | { type: "list"; items: string[] };

export type CaseStudySection = {
  heading: string;
  blocks: CaseStudyBlock[];
};

export type CaseStudy = {
  emojiTitle: string;
  intro: string;
  sections: CaseStudySection[];
};

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  featured?: boolean;
  tags?: string[];
  coverImage?: string;
  githubUrl?: string;
  caseStudy?: CaseStudy;
  videoUrl?: string;
  youtubeId?: string;
};

function getYoutubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{6,})/);
  return match ? match[1] : "";
}

export const projects: Project[] = [
  {
    id: "house-prices-regression",
    index: "01",
    name: "House Prices: EDA & Regression Analysis",
    tagline: "Multivariate regression on residential sale prices",
    description:
      "An end-to-end analysis of residential property prices, combining data cleaning, exploratory analysis, statistical testing, feature engineering, and multivariate regression.",
    role: "Data Analyst",
    featured: true,
    tags: ["DATA ANALYTICS", "STATISTICS", "REGRESSION"],
    coverImage: "/images/bank-analytics-cover.jpg",
    githubUrl: "https://github.com/nqedirzade08/House-Prices-End-to-End-EDA-Regression-Analysis",
    caseStudy: {
      emojiTitle: "🏠 House Prices: EDA & Regression Analysis",
      intro:
        "An end-to-end data analysis and regression project focused on understanding the key factors that influence residential property prices and building an interpretable multivariate regression model.",
      sections: [
        {
          heading: "01. The Problem",
          blocks: [
            {
              type: "p",
              text: "House prices are influenced by many different factors — property quality, living area, garage capacity, neighborhood, age, and other characteristics.",
            },
            {
              type: "p",
              text: "The challenge was not simply to build a model that predicts house prices, but to understand:",
            },
            {
              type: "sub",
              text: "What characteristics have the strongest relationship with house prices, and how can statistical analysis and feature engineering improve a regression model?",
            },
            {
              type: "p",
              text: "The project started with a raw dataset containing 80+ explanatory variables and followed a complete analytical workflow from data cleaning to regression modeling.",
            },
          ],
        },
        {
          heading: "02. What I Solved",
          blocks: [
            {
              type: "p",
              text: "I transformed the raw housing dataset into a structured analytical and regression pipeline by:",
            },
            {
              type: "list",
              items: [
                "Cleaning missing and inconsistent data",
                "Identifying and removing influential outliers",
                "Performing exploratory data analysis",
                "Investigating correlations between property characteristics and price",
                "Comparing prices across neighborhoods and quality levels",
                "Performing statistical hypothesis testing",
                "Transforming the skewed target variable",
                "Engineering new domain-specific features",
                "Building a baseline OLS regression model",
                "Building and evaluating a multivariate regression model",
                "Comparing model performance before and after improvements",
              ],
            },
          ],
        },
        {
          heading: "03. Dataset",
          blocks: [
            {
              type: "p",
              text: "Dataset: House Prices — Advanced Regression Techniques",
            },
            {
              type: "p",
              text: "The dataset contains residential property records from Ames, Iowa, with 80+ explanatory variables describing different aspects of each property.",
            },
            { type: "p", text: "Target Variable: SalePrice" },
            {
              type: "p",
              text: "The objective was to understand and model the factors associated with residential sale prices.",
            },
          ],
        },
        {
          heading: "04. Initial Challenges",
          blocks: [
            {
              type: "p",
              text: "The raw dataset presented several challenges before modeling could begin.",
            },
            { type: "sub", text: "Missing Data" },
            {
              type: "p",
              text: 'Several columns contained extremely high levels of missing values (>80% missing): Alley, PoolQC, Fence, MiscFeature. These features were removed rather than introducing unreliable imputations.',
            },
            { type: "p", text: "For the remaining missing values:" },
            {
              type: "list",
              items: [
                "Numerical features → median imputation",
                'Categorical features → mode / "None" where appropriate',
              ],
            },
            { type: "sub", text: "Outliers" },
            {
              type: "p",
              text: "Two properties had extremely large living areas (GrLivArea > 4000 sq ft) but were sold for unexpectedly low prices (SalePrice < $300,000). These observations strongly distorted the relationship and were removed from the analytical dataset.",
            },
            { type: "sub", text: "Target Skewness" },
            {
              type: "p",
              text: "SalePrice was strongly right-skewed with an initial skewness of 1.88, creating a less favorable distribution for linear regression assumptions.",
            },
          ],
        },
        {
          heading: "05. Exploratory Data Analysis",
          blocks: [
            { type: "p", text: "Top Correlated Features with SalePrice:" },
            {
              type: "list",
              items: [
                "OverallQual: 0.7958",
                "GrLivArea: 0.7350",
                "TotalBsmtSF: 0.6512",
                "GarageCars: 0.6410",
                "1stFlrSF: 0.6315",
                "GarageArea: 0.6292",
                "FullBath: 0.5622",
                "TotRmsAbvGrd: 0.5378",
                "YearBuilt: 0.5236",
                "YearRemodAdd: 0.5077",
              ],
            },
            {
              type: "p",
              text: "Key Observation: OverallQual was the strongest individual feature correlated with SalePrice (r = 0.7958), showing a stronger relationship than raw living-area measures.",
            },
          ],
        },
        {
          heading: "06. Neighborhood Analysis",
          blocks: [
            {
              type: "p",
              text: "The five neighborhoods with the highest median sale prices were:",
            },
            {
              type: "list",
              items: [
                "NridgHt: $315,000",
                "NoRidge: $301,500",
                "StoneBr: $278,000",
                "Timber: $228,475",
                "Somerst: $225,500",
              ],
            },
          ],
        },
        {
          heading: "07. Statistical Hypothesis Testing",
          blocks: [
            { type: "sub", text: "7.1 Welch's Two-Sample T-Test" },
            {
              type: "p",
              text: "Research Question: Is there a statistically significant difference in average house prices between properties with and without Central Air Conditioning?",
            },
            {
              type: "list",
              items: [
                "Group Central AC Mean: $186,206.98",
                "Group No Central AC Mean: $105,264.07",
                "T-statistic: 17.2670 | P-value: 2.2071e-37 (Reject H₀)",
              ],
            },
            {
              type: "p",
              text: "Conclusion: Statistically significant difference (~$81,000 higher average sale price for homes with central AC).",
            },
            { type: "sub", text: "7.2 Chi-Square Test of Independence" },
            { type: "p", text: "Variables: OverallQual vs CentralAir" },
            {
              type: "list",
              items: [
                "Chi-Square Statistic: 212.6065 | P-value: 7.4945e-41 | Degrees of Freedom: 9 (Reject H₀)",
              ],
            },
            {
              type: "p",
              text: "Conclusion: OverallQual and CentralAir are statistically dependent. Higher-quality properties were significantly more likely to have central air conditioning.",
            },
          ],
        },
        {
          heading: "08. Baseline Regression Model",
          blocks: [
            { type: "p", text: "Model: GrLivArea → SalePrice" },
            {
              type: "p",
              text: "Result: R² = 0.5402 (GrLivArea alone explained approximately 54.02% of the variance in SalePrice).",
            },
          ],
        },
        {
          heading: "09. Target Transformation",
          blocks: [
            {
              type: "p",
              text: "Applied np.log1p(SalePrice) to address target skewness:",
            },
            {
              type: "list",
              items: [
                "Original SalePrice Skewness: 1.88",
                "Log-transformed SalePrice Skewness: 0.12 (Reduced skewness by ~94%).",
              ],
            },
          ],
        },
        {
          heading: "10. Feature Engineering",
          blocks: [
            {
              type: "list",
              items: [
                "TotalSF = GrLivArea + TotalBsmtSF (r = 0.8290 with SalePrice, stronger than either individually).",
                "HouseAge = YrSold - YearBuilt (r = -0.5878 with SalePrice_Log, reflecting lower values for older properties).",
              ],
            },
          ],
        },
        {
          heading: "11. Final Multivariate Regression",
          blocks: [
            {
              type: "p",
              text: "Model: SalePrice_Log = β₀ + β₁(GrLivArea) + β₂(OverallQual) + β₃(GarageCars) + ε",
            },
            {
              type: "list",
              items: [
                "Baseline R²: 54.02%",
                "Final Multivariate Model R²: 79.68% (Improved explained variance by ~25.6 percentage points).",
              ],
            },
          ],
        },
        {
          heading: "12. Model Interpretation",
          blocks: [
            {
              type: "p",
              text: "All three predictors were statistically significant (p < 0.001), reinforcing the importance of Property Size + Quality + Garage Capacity when explaining house prices.",
            },
          ],
        },
        {
          heading: "13. Key Findings",
          blocks: [
            {
              type: "list",
              items: [
                "🏆 Overall Quality was the strongest individual predictor (r = 0.7958).",
                "🏗️ TotalSF improved the representation of property size (r = 0.8290).",
                "❄️ Central Air Conditioning showed a statistically significant price difference (~$81,000 higher, p ≈ 2.21 × 10⁻³⁷).",
                "📈 Feature engineering and transformation improved the model (54.02% → 79.68% R²).",
              ],
            },
          ],
        },
        {
          heading: "14. Limitations & Future Improvements",
          blocks: [
            {
              type: "p",
              text: "Potential multicollinearity/feature-scale issues indicated by OLS condition number.",
            },
            {
              type: "p",
              text: "Future steps: Ridge/Lasso Regression, Cross-validation, Residual diagnostics, Tree-based models (Random Forest, Gradient Boosting).",
            },
          ],
        },
        {
          heading: "15. Technical Skills Demonstrated",
          blocks: [
            {
              type: "list",
              items: [
                "Programming: Python",
                "Data Analysis: Pandas, NumPy, Data Cleaning, Data Transformation, EDA",
                "Visualization: Matplotlib, Seaborn",
                "Statistics: Descriptive Statistics, Correlation Analysis, Welch's T-Test, Chi-Square Test, P-values, Hypothesis Testing",
                "Machine Learning / Modeling: Linear Regression, OLS, Feature Engineering, Target Transformation, Model Evaluation",
                "Statistical Computing: SciPy, Statsmodels",
              ],
            },
          ],
        },
        {
          heading: "16. What This Project Demonstrates",
          blocks: [
            {
              type: "p",
              text: "Raw Data → Data Cleaning → Outlier Treatment → EDA → Statistical Testing → Target Transformation → Feature Engineering → Baseline Regression → Multivariate Regression → Model Evaluation.",
            },
          ],
        },
        {
          heading: "17. Conclusion",
          blocks: [
            {
              type: "p",
              text: "Starting from a single-feature baseline with an R² of 54.02%, the final multivariate model explained 79.68% of the variance in the log-transformed sale price.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "bank-churn-risk",
    index: "02",
    name: "Bank Customer Churn & Risk Analysis",
    tagline: "Statistical churn & portfolio risk analysis",
    description:
      "An analytical study of customer churn and financial risk using statistical analysis, outlier detection, and a custom risk index.",
    role: "Data Analyst",
    featured: true,
    tags: ["DATA ANALYTICS", "STATISTICS", "RISK ANALYSIS"],
    coverImage: "/images/bank-analytics-cover.jpg",
    githubUrl:
      "https://github.com/nqedirzade08/Bank-Customer-Churn-Prediction-dataset",
    caseStudy: {
      emojiTitle: "🏦 Bank Customer Churn & Risk Analysis",
      intro:
        "A data analysis and statistical risk assessment project focused on understanding customer churn, identifying high-risk customer segments, and quantifying portfolio risk using statistical and linear algebra techniques.",
      sections: [
        {
          heading: "01. The Problem",
          blocks: [
            {
              type: "p",
              text: "Customer churn is a major challenge for banks. When customers leave, banks can lose revenue, long-term relationships, and opportunities for future business.",
            },
            { type: "p", text: "The main question behind this project was:" },
            {
              type: "sub",
              text: "What factors and customer characteristics are associated with churn, and how can we identify customers who may represent higher risk?",
            },
            {
              type: "p",
              text: "The analysis focused on comparing customers who stayed with the bank against those who churned, while also investigating demographic, financial, and behavioral characteristics.",
            },
          ],
        },
        {
          heading: "02. What I Solved",
          blocks: [
            {
              type: "p",
              text: "I transformed a raw customer dataset into a structured risk analysis by:",
            },
            {
              type: "list",
              items: [
                "Cleaning and preparing the dataset",
                "Comparing churned and retained customers",
                "Analyzing demographic and financial characteristics",
                "Detecting statistical outliers",
                "Performing statistical hypothesis testing",
                "Identifying high-value inactive customers as a potential risk segment",
                "Building a custom Bank Risk Calculator using Object-Oriented Programming",
                "Applying normalization and linear algebra to calculate a custom risk index",
              ],
            },
          ],
        },
        {
          heading: "03. Dataset",
          blocks: [
            { type: "p", text: "Dataset: Bank Customer Churn Prediction" },
            { type: "p", text: "File: Churn_Modelling.csv" },
            { type: "p", text: "Source: Kaggle" },
            {
              type: "p",
              text: "The dataset contains customer-level banking information, including:",
            },
            {
              type: "list",
              items: [
                "Credit Score",
                "Geography",
                "Gender",
                "Age",
                "Tenure",
                "Balance",
                "Number of Products",
                "Credit Card status",
                "Active Member status",
                "Estimated Salary",
                "Churn status (Exited)",
              ],
            },
            { type: "p", text: "Target Variable: Exited" },
            {
              type: "list",
              items: [
                "1 → Customer churned",
                "0 → Customer remained",
              ],
            },
          ],
        },
        {
          heading: "04. Analytical Approach",
          blocks: [
            {
              type: "p",
              text: "The project followed a structured data analysis workflow.",
            },
            { type: "sub", text: "Step 1 — Data Cleaning & Transformation" },
            {
              type: "p",
              text: "The first stage focused on preparing the dataset for analysis.",
            },
            { type: "p", text: "I:" },
            {
              type: "list",
              items: [
                "Removed non-informative columns such as RowNumber and Surname",
                "Checked the dataset for missing values",
                "Confirmed that 0 null values were present",
                "Converted binary variables such as HasCrCard and IsActiveMember into more readable Yes / No values",
                "Filtered inactive customers with account balances of ≥ 50,000 to investigate a potentially important risk segment",
              ],
            },
            { type: "sub", text: "Step 2 — Customer Comparison" },
            {
              type: "p",
              text: "I compared churned and retained customers across important demographic and financial variables:",
            },
            {
              type: "list",
              items: ["CreditScore", "Age", "Balance", "EstimatedSalary"],
            },
            {
              type: "p",
              text: "For each variable, I examined: Mean, Median, Standard deviation. This allowed me to identify differences between customers who left and those who stayed.",
            },
            { type: "sub", text: "Step 3 — Statistical Analysis" },
            {
              type: "p",
              text: "Statistical methods were used to move beyond simple visual observations.",
            },
            {
              type: "p",
              text: "A Z-test was performed on customer credit scores against a baseline average.",
            },
            {
              type: "p",
              text: "The purpose was to determine whether the observed credit-score behavior provided statistically meaningful evidence relative to the selected baseline.",
            },
            { type: "sub", text: "Step 4 — Outlier Detection" },
            {
              type: "p",
              text: "I applied Z-score normalization to identify unusual observations.",
            },
            {
              type: "p",
              text: "Customers with |Z| > 3 were treated as statistical outliers.",
            },
            {
              type: "p",
              text: "This helped identify observations that were substantially different from the typical customer population.",
            },
          ],
        },
        {
          heading: "05. Custom Bank Risk Calculator",
          blocks: [
            {
              type: "p",
              text: "One of the main technical components of the project was the implementation of a custom: BankRiskCalculator.",
            },
            {
              type: "p",
              text: "Instead of only describing risk, I created an OOP-based framework to calculate a numerical risk measure.",
            },
            {
              type: "p",
              text: "Min-Max Scaling: Credit scores and balances were normalized to a [0, 1] range. Credit Score was inverted so that Lower Credit Score → Higher Risk.",
            },
            {
              type: "p",
              text: "Vectorized Risk Calculation: NumPy's np.dot() was used for vectorized matrix multiplication to calculate Total Risk Index and Average Risk per Customer.",
            },
          ],
        },
        {
          heading: "06. Key Findings",
          blocks: [
            {
              type: "list",
              items: [
                "🔹 Age was strongly associated with churn — Customers who churned had an average age of approximately 44.8 years, while customers who stayed had an average age of approximately 37.4 years.",
                "🔹 High-value inactive customers represent a potential risk segment — Inactive members with balances ≥ 50,000 combine High account value + Low activity.",
                "🔹 Outlier analysis provides another view of customer risk (|Z| > 3).",
              ],
            },
          ],
        },
        {
          heading: "07. Technical Skills Demonstrated",
          blocks: [
            {
              type: "list",
              items: [
                "Programming: Python, Object-Oriented Programming",
                "Data Analysis: Pandas, NumPy, Data Cleaning, Data Transformation, Descriptive Statistics",
                "Statistics: Z-score, Z-test, Mean, Median, Standard Deviation, Outlier Detection",
                "Mathematics: Normalization, Vectorized Computation, Dot Product, Linear Algebra",
              ],
            },
          ],
        },
        {
          heading: "08. What This Project Demonstrates",
          blocks: [
            {
              type: "p",
              text: "Data Cleaning → Exploratory Analysis → Statistical Testing → Outlier Detection → Risk Modeling → Business Interpretation.",
            },
          ],
        },
        {
          heading: "09. Conclusion",
          blocks: [
            {
              type: "p",
              text: "The analysis identified meaningful differences between churned and retained customers, particularly in age, and highlighted inactive high-balance customers as a potentially important risk segment.",
            },
          ],
        },
        {
          heading: "10. Project Links",
          blocks: [
            {
              type: "list",
              items: [
                "GitHub: https://github.com/nqedirzade08/Bank-Customer-Churn-Prediction-dataset",
                "Dataset: Churn_Modelling.csv",
                "Notebook: Cleaned.ipynb",
                "Technologies: Python · Pandas · NumPy · Statsmodels",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "bank-marketing-campaign",
    index: "03",
    name: "Bank Marketing Campaign Analysis",
    tagline: "Segmentation & hypothesis testing on term deposits",
    description:
      "An analysis of customer behavior and term-deposit conversion using segmentation, Z-score standardization, and statistical hypothesis testing.",
    role: "Data Analyst",
    featured: true,
    tags: ["DATA ANALYTICS", "HYPOTHESIS TESTING", "STATISTICS"],
    coverImage: "/images/bank-analytics-cover.jpg",
    githubUrl: "https://github.com/nqedirzade08/UCI-Bank-Marketing-Dataset",
    caseStudy: {
      emojiTitle: "🏦 Bank Marketing Campaign Analysis & Hypothesis Testing",
      intro:
        "A data analysis and statistical evaluation project focused on understanding customer characteristics, measuring term-deposit conversion, and testing whether account balance differs significantly between subscribers and non-subscribers.",
      sections: [
        {
          heading: "01. The Problem",
          blocks: [
            {
              type: "p",
              text: "Banks use telemarketing campaigns to encourage customers to subscribe to financial products such as term deposits.",
            },
            {
              type: "p",
              text: "The main question behind this project was: What can customer characteristics and account balance data tell us about term-deposit subscription?",
            },
          ],
        },
        {
          heading: "02. What I Solved",
          blocks: [
            {
              type: "list",
              items: [
                "Performing Exploratory Data Analysis",
                "Analyzing customer demographics",
                "Grouping customers by job and marital status",
                "Calculating average account balances",
                "Calculating customer counts",
                "Measuring the term-deposit conversion rate",
                "Standardizing numerical variables using Z-scores",
                "Performing an Independent Two-Sample T-Test",
                "Interpreting the statistical result from a business perspective",
              ],
            },
          ],
        },
        {
          heading: "03. Dataset",
          blocks: [
            { type: "p", text: "Dataset: Bank Marketing Dataset" },
            { type: "p", text: "File: bank.csv (Delimiter: ;)" },
            {
              type: "p",
              text: "Target Variable: y (yes → Subscribed, no → Did not subscribe)",
            },
          ],
        },
        {
          heading: "04. Analytical Approach",
          blocks: [
            {
              type: "p",
              text: "Step 1 — Exploratory Data Analysis (describe() on Age & Balance)",
            },
            {
              type: "p",
              text: "Step 2 — Segmented Customer Analysis (Grouping by job & marital status)",
            },
            { type: "p", text: "Step 3 — Conversion Rate (~11.52%)" },
          ],
        },
        {
          heading: "05. NumPy Standardization",
          blocks: [
            {
              type: "p",
              text: "Standardized age, balance, and duration using Z-scores.",
            },
            { type: "p", text: "Positive Z-score → Above-average balance" },
            { type: "p", text: "Negative Z-score → Below-average balance" },
          ],
        },
        {
          heading: "06. Hypothesis Testing",
          blocks: [
            {
              type: "p",
              text: "Research Question: Do customers who subscribe to a term deposit have significantly different account balances from customers who do not subscribe?",
            },
            {
              type: "list",
              items: [
                "Null Hypothesis (H₀): No statistically significant difference.",
                "Alternative Hypothesis (H₁): Statistically significant difference exists.",
              ],
            },
          ],
        },
        {
          heading: "07. Independent Two-Sample T-Test",
          blocks: [
            { type: "p", text: "Tested via scipy.stats.ttest_ind:" },
            {
              type: "list",
              items: [
                "Subscribers Mean Balance: ~$1,571.96",
                "Non-subscribers Mean Balance: ~$1,403.21",
                "P-Value: p = 0.2287 (α = 0.05)",
              ],
            },
            {
              type: "p",
              text: "Since 0.2287 > 0.05 → Fail to reject H₀.",
            },
          ],
        },
        {
          heading: "08. Key Findings",
          blocks: [
            {
              type: "list",
              items: [
                "🔹 Campaign Conversion Rate: ~11.52%",
                "🔹 Subscribers Had a Higher Average Balance ($1,571.96 vs $1,403.21)",
                "🔹 Balance Alone Was Not a Statistically Significant Differentiator (p = 0.2287)",
              ],
            },
          ],
        },
        {
          heading: "09. Technical Skills Demonstrated",
          blocks: [
            {
              type: "list",
              items: [
                "Programming: Python",
                "Data Analysis: Pandas, NumPy, Data Aggregation, Filtering, Grouping, EDA",
                "Statistics: Descriptive Statistics, Z-score Standardization, Independent Two-Sample T-Test, Hypothesis Testing, P-value Interpretation",
              ],
            },
          ],
        },
        {
          heading: "10. What This Project Demonstrates",
          blocks: [
            {
              type: "p",
              text: "Raw Data → EDA → Customer Segmentation → Conversion Analysis → Z-score Standardization → Hypothesis Formulation → T-Test → Statistical Interpretation.",
            },
          ],
        },
        {
          heading: "11. Conclusion",
          blocks: [
            {
              type: "p",
              text: "Account balance alone does not provide sufficient statistical evidence to distinguish term-deposit subscribers from non-subscribers.",
            },
          ],
        },
        {
          heading: "12. Project Links",
          blocks: [
            {
              type: "list",
              items: [
                "GitHub: https://github.com/nqedirzade08/UCI-Bank-Marketing-Dataset",
                "Dataset: bank.csv",
                "Notebook: UCI Bank Marketing Dataset.ipynb",
                "Technologies: Python · Pandas · NumPy · SciPy",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "abituriyentx",
    index: "04",
    name: "AbituriyentX",
    tagline: "AI-guided university major selection",
    description:
      "An AI-powered education platform for Azerbaijani students — analyzing exam scores, exploring university majors, and delivering AI-assisted career guidance through a modern, intelligent interface.",
    videoUrl: "https://www.youtube.com/watch?v=EIJv-5aOIsk",
    youtubeId: getYoutubeId("https://www.youtube.com/watch?v=EIJv-5aOIsk"),
    role: "Founder & Data Engineer",
  },
  {
    id: "medscan-ai",
    index: "05",
    name: "MedScan AI",
    tagline: "AI-powered medical image analysis",
    description:
      "An AI-powered medical image analysis platform built with FastAPI and PyTorch, designed to support faster, more accessible diagnostics.",
    videoUrl: "https://www.youtube.com/watch?v=lyizue7samw",
    youtubeId: getYoutubeId("https://www.youtube.com/watch?v=lyizue7samw"),
    role: "Team Leader",
  },
  {
    id: "smartcitypulse",
    index: "06",
    name: "SmartCityPulse",
    tagline: "Real-time urban infrastructure monitoring",
    description:
      "A hackathon project exploring how real-time data can make urban infrastructure more responsive and easier to monitor.",
    videoUrl: "https://www.youtube.com/watch?v=Y_A5R-6i74Q",
    youtubeId: getYoutubeId("https://www.youtube.com/watch?v=Y_A5R-6i74Q"),
    role: "Team Leader",
  },
];

export const achievements = [
  {
    id: "cash-prize",
    title: "1000 AZN Cash Prize",
    subtitle: '"From Idea to Project" Hackathon — 3rd Place',
    image: "/images/award-cash-prize.jpg",
  },
  {
    id: "pitch",
    title: "Pitch Presentation",
    subtitle: "Presenting MedScan AI on stage",
    image: "/images/award-pitch.jpg",
  },
];

// The 14 certificates Nadir provided, in a fixed display order.
export const certificates = [
  {
    id: "cert-01",
    title: "IBM — Data Analysis with Python",
    src: "/certificates/cert-01.jpg",
  },
  {
    id: "cert-02",
    title: "IBM — Data Analysis Using Python (Badge)",
    src: "/certificates/cert-02.jpg",
  },
  {
    id: "cert-03",
    title: "IBM — Python for Data Science",
    src: "/certificates/cert-03.jpg",
  },
  {
    id: "cert-04",
    title: "IBM — Python for Data Science (Badge)",
    src: "/certificates/cert-04.jpg",
  },
  {
    id: "cert-05",
    title: "Deloitte — Data Analytics Job Simulation",
    src: "/certificates/cert-05.jpg",
  },
  {
    id: "cert-06",
    title: "DevJoint — AI Engineering Internship",
    src: "/certificates/cert-06.jpg",
  },
  {
    id: "cert-07",
    title: '"Gələcəyi Kodla" Seminar',
    src: "/certificates/cert-07.jpg",
  },
  {
    id: "cert-08",
    title: "AzTU — İdeyadan Layihəyə (3rd Place)",
    src: "/certificates/cert-08.jpg",
  },
  {
    id: "cert-09",
    title: "Kaggle — Data Visualization",
    src: "/certificates/cert-09.jpg",
  },
  {
    id: "cert-10",
    title: "Kaggle — Pandas",
    src: "/certificates/cert-10.jpg",
  },
  {
    id: "cert-11",
    title: "Kaggle — Python",
    src: "/certificates/cert-11.jpg",
  },
  {
    id: "cert-12",
    title: "ElTek — Qəbul Məktubuna Aparan Yol",
    src: "/certificates/cert-12.jpg",
  },
  {
    id: "cert-13",
    title: "AzTU Startup Days — 2nd Place Diploma",
    src: "/certificates/cert-13.jpg",
  },
  {
    id: "cert-14",
    title: "AzTU Startup Days — Participation",
    src: "/certificates/cert-14.jpg",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#resume", label: "Resume" },
];
