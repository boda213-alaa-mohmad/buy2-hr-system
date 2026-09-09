"use client";
import styles from "./AboutBuys.module.css";

import {
  HelpCircle,
  Lightbulb,
  Target,
  ShieldCheck,
  History,
  Users,
} from "lucide-react";

interface AboutSection {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const aboutSections: AboutSection[] = [
  {
    id: 1,
    title: "Who are we",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    icon: <HelpCircle size={24} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    icon: <Lightbulb size={24} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Our Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    icon: <Target size={24} color="#ffffff" />,
  },
  {
    id: 4,
    title: "Our Values",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    icon: <ShieldCheck size={24} color="#ffffff" />,
  },
  {
    id: 5,
    title: "Our History",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    icon: <History size={24} color="#ffffff" />,
  },
  {
    id: 6,
    title: "Our Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    icon: <Users size={24} color="#ffffff" />,
  },
];

export default function AboutUs() {
  return (
    <section className={styles.container}>
      {aboutSections.map((section) => (
        <div key={section.id} className={styles.card}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>{section.icon}</div>
            <h2 className={styles.title}>{section.title}</h2>
          </div>
          <p className={styles.description}>{section.description}</p>
        </div>
      ))}
    </section>
  );
}
