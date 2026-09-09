"use client";
import styles from "./PolicyContent.module.css";

interface PolicySection {
  id: number;
  title: string;
  paragraphs: string;
}

interface TypeProps {
  type: "terms" | "privacy";
}

const termsData: PolicySection[] = [
  {
    id: 1,
    title: "1- Acceptance of Terms",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 2,
    title: "2- User Eligibility & Account Responsibilities",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 3,
    title: "3- Intellectual Property Rights",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 4,
    title: "4- Prohibited Activities & Usage Rules",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 5,
    title: "5- Limitation of Liability & Disclaimers",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 6,
    title: "6- Termination & Changes to Terms",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
];

const privacyData: PolicySection[] = [
  {
    id: 1,
    title: "1- Information We Collect",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 2,
    title: "2- How We Use Your Information",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 3,
    title: "3- Information Sharing and Disclosure",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 4,
    title: "4- Data Security & Retention",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 5,
    title: "5- Cookies & Tracking Technologies",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
  {
    id: 6,
    title: "6- Your Rights & Contact Us",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque.\nUllamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.",
  },
];

export default function PolicyContent({ type }: TypeProps) {
  const data = type === "terms" ? termsData : privacyData;

  return (
    <section className={styles.container}>
      {data.map((section) => (
        <div key={section.id} className={styles.section}>
          <h2 className={styles.title}>{section.title}</h2>
          <p className={styles.paragraph}>{section.paragraphs}</p>
        </div>
      ))}
    </section>
  );
}
