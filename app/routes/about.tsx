import PageWrapper from '../components/PageWrapper';
import type { Route } from './+types/about';
import { useLoaderData } from 'react-router';
import { useMemo } from 'react';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Nolan Thompson - About' }, { name: 'description', content: 'About me' }];
}

export function loader() {
  const experience = [
    {
      title: 'Javascript Development',
      copy: 'Help lead the development of scalable and maintainable web applications, ensuring technical feasibility and optimizing for speed and scalability. Collaboration with cross-functional teams to define, design, and implement new features while staying abreast of industry trends, technologies, and best practices to continuously improve on development processes.',
    },
    {
      title: 'CI/CD Infrastructure',
      copy: 'Implement and maintain robust CI/CD pipelines to streamline the deployment process. Automate and improve build, test, and release processes for applications. Ensuring high availability, scalability, and security requirements are met in the CI/CD infrastructure. Troubleshoot and resolve issues related to CI/CD pipelines, ensuring smooth and efficient deployments.',
    },
    {
      title: 'Mentoring & Leadership',
      copy: 'Mentor and guide junior and mid-level engineers, fostering their professional growth and technical expertise. Promote best practices in coding standards, testing, and documentation through leading by example. Conduct code reviews, providing constructive feedback to ensure code quality. Facilitate knowledge sharing and collaboration within the team through regular technical sessions and discussions.',
    },
  ];

  const workHistory = [
    {
      company: 'Fliff',
      title: 'Staff Software Engineer',
      dates: '2024 - 2026',
    },
    {
      company: 'Mojo',
      title: 'Staff Software Engineer',
      dates: '2021 - 2024',
    },
    {
      company: 'Walmart Global Tech',
      title: 'Staff Software Engineer',
      dates: '2019 - 2021',
    },
    {
      company: 'NHL',
      title: 'Application Developer',
      dates: '2017 - 2019',
    },
  ];

  return { experience, workHistory };
}

export default function About() {
  const loaderData = useLoaderData<typeof loader>();
  const { experience, workHistory } = useMemo(() => loaderData || {}, []);

  return (
    <PageWrapper heading='About' emoji='😎'>
      <div className='space-y-10 mt-4'>
        <div>
          <p className='px-2 text-title3 italic'>
            I am committed to building a collaborative environment where creativity and technical
            prowess thrive. As a mentor and leader, I inspire and elevate my peers, contributing to
            a culture of continuous learning and improvement. I take pride in pushing the boundaries
            of what's possible while delivering great value to clients and stakeholders.
          </p>
        </div>

        <div>
          <h2 className='pb-3'>Experience</h2>
          <div className='px-2'>
            <div className='space-y-4'>
              {experience.map(({ title, copy }: { title: string; copy: string }, idx: number) => {
                return (
                  <ExperienceItem
                    key={`${title.toLowerCase().split(' ').join('-')}-${idx}`}
                    title={title}
                    copy={copy}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h2 className='pb-3'>Who I've worked for</h2>
          <div className='px-2'>
            <div className='space-y-4 mb-6'>
              {workHistory.map(
                (
                  { company, title, dates }: { company: string; title: string; dates: string },
                  idx: number
                ) => {
                  return (
                    <WorkItem
                      key={`${title.toLowerCase().split(' ').join('-')}-${idx}`}
                      company={company}
                      title={title}
                      dates={dates}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

const ExperienceItem = ({ title, copy }: { title: string; copy: string }) => {
  return (
    <div>
      <p className='pb-2 font-bold uppercase tracking-wider'>{title}</p>
      {copy}
    </div>
  );
};

const WorkItem = ({ company, title, dates }: { company: string; title: string; dates: string }) => {
  return (
    <div>
      <p className='pb-2 font-bold tracking-wider'>{company}</p>
      {title}
      <br />
      {dates}
    </div>
  );
};
