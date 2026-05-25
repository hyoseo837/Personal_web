import { projects } from './projects';

export const now = {
  location: "Waterloo, ON, Canada",
};

export const currentProject = projects.find(p => p.duration?.includes('present'));
