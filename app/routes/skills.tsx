import PageWrapper from "~/components/PageWrapper";
import { useLoaderData, type MetaFunction } from "react-router";
import { useMemo } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Nolan Thompson - Skills" },
    { name: "description", content: "My skills" },
  ];
};

export function loader() {
  const softSkills: any = [
    "Active Listening",
    "Verbal Communication",
    "Collaboration",
    "Empathy",
    "Creativity",
    "Attention to Detail",
    "Decision-Making",
    "Delegation",
    "Inspiration",
    "Accountability",
    "Meeting Deadlines",
    "Openness to Feedback",
    "Integrity",
    "Dependability",
    "Stakeholder Management",
  ];
  const techSkills: any = [
    "Deep expertise in system design, architecture, and scalable solutions.",
    "Proficiency in modern tools, languages, and frameworks (e.g., React, Vite, etc.).",
    "Ability to troubleshoot complex technical issues and introduce innovative solutions.",
    "Leading by example with hands-on contributions while fostering autonomy.",
    "Encouraging collaboration and maintaining team alignment with organizational goals.",
    "Assessing trade-offs between speed, scalability, and maintainability.",
    "Effectively communicating with diverse stakeholders, including engineers, PMs, and executives.",
    "Documenting and evangelizing best practices and key technical insights.",
    "Advocating for and implementing processes that improve efficiency and quality.",
    "Keeping up-to-date with industry trends and integrating them where relevant.",
    "Promoting a culture of learning, experimentation, and adaptability.",
  ];

  return { softSkills, techSkills };
}

export default function Skills() {
  const loaderData = useLoaderData<typeof loader>();
  const { softSkills, techSkills } = useMemo(() => loaderData || {}, []);

  return (
    <PageWrapper heading="Skills" emoji="👍">
      <div className="space-y-4">
        <p className="px-2">
          As a Staff Engineer, my role is about more than just writing great
          code—it's about driving impact at scale through technical leadership,
          strategic thinking, and collaboration. Over the years, I've honed a
          set of core skills that enable me to deliver robust solutions, guide
          teams, and align technology with business goals.
        </p>

        <p className="px-2">
          This page highlights the areas I focus on as a Staff Engineer,
          showcasing my approach to solving complex challenges, fostering
          innovation, and empowering teams to excel.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 pb-6 p-2 mt-10">
        <div className="bg-gray-200 p-4 rounded-md border border-gray-300 shadow-md">
          <h2 className="mb-4">Tech Skills</h2>
          <ul className="list-disc pl-6 space-y-2">
            {techSkills.map((skill: string) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </div>

        <div className="bg-gray-200 p-4 rounded-md border border-gray-300 shadow-md">
          <h2 className="mb-4">Soft Skills</h2>
          <ul className="list-disc pl-6 space-y-2">
            {softSkills.map((skill: string) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
