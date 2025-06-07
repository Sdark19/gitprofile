// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'suswar', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Sdark19/Distracted-Driver-MultiAction-Classification', 'Sdark19/AI_Enhanced_Self_Healing_RPA_Invoice_Processing_System','Sdark19/quora_spam_detection','Sdark19/pharma-counterfeit-analysis','Sdark19/Hazard_Score_Prediction'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Distracted-Driver-MultiAction-Classification',
          description: 'This project classifies driver actions into 10 distinct classes using a deep learning model based on MobileNetV2.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Sdark19/Distracted-Driver-MultiAction-Classification',
        },
        {
          title: 'quora_spam_detection',
          description:
            'This project implements a deep learning model to detect spam questions on Quora using a bidirectional LSTM architecture.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Sdark19/quora_spam_detection',
        },
         {
          title: 'pharma-counterfeit-analysis',
          description:
            'This project focuses on analyzing counterfeit pharmaceutical sales data using machine learning techniques. The goal is to predict counterfeit sales based on various features such as medicine type, area distribution, and other relevant attributes.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Sdark19/pharma-counterfeit-analysis',
        },
         {
          title: 'Hazard_Score_Prediction',
          description:
            'This project focuses on predicting the hazard score for maintenance tasks in heavy equipment operations. The goal is to assess the potential danger associated with these tasks before they are executed, enabling organizations to implement appropriate safety measures proactively. The dataset provided contains masked features related to maintenance tasks, and the target variable is the hazard score. The project involves building a predictive model using the training dataset and generating predictions for the test dataset.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Sdark19/Hazard_Score_Prediction',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Suswar Sawant',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'suswar sawant',
    email: 'suswarsawantcd19@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1dVSi4p5Maysny6530gbWw_3Cmw3QoePP/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Scikit-learn',
    'Pandas',
    'Numpy',
    'FireDucks',
    'TensorFlow',
    'MySQL',
    'Pytorch',
    'Git',
    'Chatbot Development',
    'Feature Engineering',
    'Fine Tuning',
  ],
  experiences: [
    {
      company: 'STEP ONE STEP AHEAD',
      position: 'Senior RPA Developer',
      from: 'JULY 2022',
      to: 'October 2024',
      companyLink: 'https://www.steponestepahead.com/',
    },
  ],
  certifications: [
    {
      name: 'Advanced Certification in AI & Machine Learning from IIT, Kanpur.',
      body: 'Advanced Certification in AI & Machine Learning',
      year: 'January 2025',
      link: 'https://drive.google.com/file/d/17zt2oOTJBXIHeQfv6muldbnw8fBuWWnb/view',
    },
    {
      name: 'Certified Data Analyst using SQL from Edvancer.',
      body: 'Certified Data Analyst using SQL',
      year: 'January 2025',
      link: 'https://drive.google.com/file/d/1Q8dbh3RKhZ_UhEFAdQGWGez8WmOh_HvO/view',
    },
    {
      name: 'Certified Deep Learning Expert from Edvancer.',
      body: 'Certified Deep Learning Expert',
      year: 'January 2025',
      link: 'https://drive.google.com/file/d/1wwA-IJ9NJd9cZ_a-fI2miE87HtPplRMr/view',
    },
    {
      name: 'Certified Machine Learning Expert from Edvancer.',
      body: 'Certified Machine Learning Expert',
      year: 'January 2025',
      link: 'https://drive.google.com/file/d/1PzfG91WVLufd56uJ3l_Qjm8_7Jt7nM9m/view',
    },
  ],
  educations: [
    {
      institution: 'VIDYALANKAR POLYTECHNIC',
      degree: 'DIPLOMA (ELECTRONICS AND TELE-COMMUNICATION)',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'SVKM',
      degree: 'B. TECH (MECHATRONICS)',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'K J SOMAIYA',
      degree: 'M. TECH (ARTIFICAL INTELLIGENCE AND DATA SCIENCE)',
      from: '2024',
      to: 'present',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default CONFIG;
