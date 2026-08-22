import { projects } from './projects';

export const now = {
  location: "Ottawa, ON, Canada",
};

export const currentProject = projects.find(p => p.duration?.includes('present'));

// Nothing in flight → fall back to the newest entry (the data file is kept newest-first).
export const latestProject = currentProject ?? projects[0];
