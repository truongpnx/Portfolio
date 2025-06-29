export interface Project {
  name: string;
  image: string;
  description: string;
  technologies: string;
  link: string;
}

export interface License {
  name: string;
  description: string;
  link: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export interface PersonalInfo {
  name: string;
  nameStructure: {
    firstName: string;
    middleName: string;
    familyName: string;
  };
  title: string;
  phone: string;
  email: string;
  birthDate: string;
  github: string;
  linkedin: string;
  summary: string;
  technicalSkills: {
    programmingLanguages: string[];
    frameworks: string[];
    apis: string[];
    other: string[];
  };
}
