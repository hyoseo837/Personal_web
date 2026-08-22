export interface TimelineEntry {
  id: string;
  period: string;
  place: string;
  detail: string;
}

// Kept newest-first, the same ordering convention as projects.ts.
export const timeline: TimelineEntry[] = [
  {
    id: "timeline-ottawa-coop",
    period: "2026.09 - Now",
    place: "Ottawa, Canada",
    detail: "Co-op at Statistics Canada",
  },
  {
    id: "timeline-waterloo-cs",
    period: "2026.05 - 2026.08",
    place: "Waterloo, Canada",
    detail: "Honours Computer Science",
  },
  {
    id: "timeline-roka",
    period: "2024.10 - 2026.04",
    place: "ROKA",
    detail: "Republic of Korea Army",
  },
  {
    id: "timeline-waterloo-math",
    period: "2023.09 - 2024.09",
    place: "Waterloo, Canada",
    detail: "Honours Mathematics",
  },
  {
    id: "timeline-warsaw",
    period: "2020.08 - 2023.05",
    place: "Warsaw, Poland",
    detail: "American School of Warsaw, IB",
  },
  {
    id: "timeline-anyang",
    period: "- 2020.07",
    place: "Anyang, Korea",
    detail: "Born and raised",
  },
];
