export type Language = 'en' | 'am' | 'om' | 'ti';

export interface Sector {
  id: string;
  title: string;
  titleAm: string;
  titleOm?: string;
  titleTi?: string;
  iconName: string;
  summary: string;
  summaryAm: string;
  summaryOm?: string;
  summaryTi?: string;
  keyStats: string;
  description: string;
  image: string;
  activeProjectsCount: number;
  highlightPoints: string[];
}

export interface RegionData {
  id: string;
  name: string;
  nameAm: string;
  nameOm?: string;
  nameTi?: string;
  capital: string;
  capitalAm?: string;
  capitalOm?: string;
  capitalTi?: string;
  beneficiaries: string;
  beneficiariesCount: number;
  activeProjects: string[];
  activeProjectsAm?: string[];
  activeProjectsOm?: string[];
  activeProjectsTi?: string[];
  activeProjectsCount: number;
  solarWellsCount: number;
  budgetDeployed: string;
  woredasCount: number;
  fieldHub: string;
  fieldHubAm?: string;
  fieldHubOm?: string;
  fieldHubTi?: string;
  primaryInterventions: string[];
  primaryInterventionsAm?: string[];
  primaryInterventionsOm?: string[];
  primaryInterventionsTi?: string[];
  summary: string;
  summaryAm?: string;
  summaryOm?: string;
  summaryTi?: string;
  svgPath: string;
  labelCoord: { x: number; y: number };
  gisCoordinates: [number, number]; // [lat, lng]
  zoomLevel: number;
  boundary: [number, number][]; // [lat, lng][] polygon
}

export interface GISProject {
  id: number;
  sector: string;
  location: string;
  name: string;
  objective: string;
  duration: string;
  beneficiaries: string;
  status: 'Ongoing' | 'Recently Completed' | string;
  coordinates: [number, number]; // [lat, lng]
  region: string;
}

export interface Project {
  id: string;
  projectNo?: number;
  title: string;
  sector: string;
  sectorCategory?: string;
  region: string;
  duration: string;
  budget?: string;
  partners?: string[];
  beneficiaries: string;
  beneficiariesCount?: number;
  status: 'Active' | 'Completed' | 'Scaling' | 'Active / Ongoing' | 'Recently Completed' | 'Ongoing';
  image: string;
  summary: string;
  objective?: string;
  woredas_towns?: string;
  goals: string[];
  hardComponents?: string[];
  softComponents?: string[];
  materialsProvisions?: string[];
}

export interface Story {
  id: string;
  name: string;
  role: string;
  location: string;
  sector: string;
  quote: string;
  quoteAm: string;
  quoteOm?: string;
  quoteTi?: string;
  fullStory: string;
  image: string;
  year: string;
}

export interface Opportunity {
  id: string;
  type: 'tender' | 'career';
  title: string;
  titleAm?: string;
  titleOm?: string;
  titleTi?: string;
  category: string;
  categoryAm?: string;
  categoryOm?: string;
  categoryTi?: string;
  location: string;
  deadline: string;
  referenceNumber: string;
  description: string;
  descriptionAm?: string;
  descriptionOm?: string;
  descriptionTi?: string;
  requirements: string[];
  requirementsAm?: string[];
  requirementsOm?: string[];
  requirementsTi?: string[];
}

export interface Publication {
  id: string;
  title: string;
  titleAm?: string;
  titleOm?: string;
  titleTi?: string;
  year: string;
  fileSize: string;
  category: string;
  categoryAm?: string;
  categoryOm?: string;
  categoryTi?: string;
  summary: string;
  summaryAm?: string;
  summaryOm?: string;
  summaryTi?: string;
}
