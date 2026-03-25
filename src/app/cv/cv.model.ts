export interface CvContent {
  profile: {
    heading: string;
    paragraphs: string[];
  };
  ui: {
    experienceLeftHeading: string;
    educationLeftHeading: string;
    knowledgeLeftHeading: string;
    softSkillsLeftHeading: string;
    educationFormalHeading: string;
    educationNonFormalHeading: string;
  };
  info: {
    name: string;
    role: string;
    photo: {
      src: string;
      alt: string;
    };
    headlines: string[];
    links: Array<{
      label: string;
      url: string;
      iconClass: string;
    }>;
    locationLabel: string;
    addressLines: string[];
    phoneLabel: string;
    phone: {
      display: string;
      href: string;
    };
    emailLabel: string;
    email: {
      display: string;
      href: string;
    };
  };
  experience: Array<{
    company: string;
    dateRange: string;
    description: string;
  }>;
  education: {
    formal: Array<{
      school: string;
      title: string;
      date: string;
    }>;
    nonFormal: Array<{
      org: string;
      title: string;
      date: string;
    }>;
  };
  knowledge: {
    sections: Array<{
      heading: string;
      body: string;
    }>;
  };
  softSkillsHeading: string;
  softSkills: string[];
}

