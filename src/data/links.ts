export interface SocialLink {
  id: string;
  label: string;
  href: string;
  /** lucide-astro icon name, resolved by the component that renders it. */
  icon: 'github' | 'blog' | 'instagram' | 'linkedin' | 'mail' | 'cv' | 'kofi';
  external: boolean;
}

export const socialLinks: SocialLink[] = [
  { id: "link-github", label: "GitHub", href: "https://github.com/hyoseo837", icon: "github", external: true },
  { id: "link-blog", label: "Blog", href: "/blog", icon: "blog", external: false },
  { id: "link-instagram", label: "Instagram", href: "https://www.instagram.com/hyoseo837/", icon: "instagram", external: true },
  { id: "link-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/hyoseo-lee-564b95246/", icon: "linkedin", external: true },
  { id: "link-mail", label: "Email", href: "mailto:hyoseo837@gmail.com", icon: "mail", external: true },
  { id: "link-cv", label: "CV", href: "/Hyoseo_Lee_CV.pdf", icon: "cv", external: true },
  { id: "link-kofi", label: "Buy me a coffee", href: "https://ko-fi.com/hyoseo", icon: "kofi", external: true },
];
