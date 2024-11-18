import { MetaFunction } from "@remix-run/react";

import PageWrapper from "../components/PageWrapper";

export const meta: MetaFunction = () => {
  return [{ title: 'Nolan Thompson - About' }, { name: 'description', content: 'About me' }];
};

export default function About() {
  return (
    <PageWrapper heading="About" emoji="😎">
      <div className="space-y-10">
        <div>
          <p className="px-2">
            I am committed to building a collaborative environment where
            creativity and technical prowess thrive. As a mentor and leader, I
            inspire and elevate my peers, contributing to a culture of
            continuous learning and improvement. I take pride in pushing the
            boundaries of what's possible while delivering great value to
            clients and stakeholders.
          </p>
        </div>

        <div>
          <h2 className="pb-3">Experience</h2>
          <div className="px-2">
            <div className="space-y-4">
              <div>
                <p className="pb-2 font-bold uppercase">
                  Javascript Development
                </p>
                Help lead the development of scalable and maintainable web
                applications, ensuring technical feasibility and optimizing for
                speed and scalability. Collaboration with cross-functional teams
                to define, design, and implement new features while staying
                abreast of industry trends, technologies, and best practices to
                continuously improve on development processes.
              </div>
              <div>
                <p className="pb-2 font-bold uppercase">
                  CI/CD Infrastructure
                </p>
                Implement and maintain robust CI/CD
                pipelines to streamline the deployment process. Automate and
                improve build, test, and release processes for applications.
                Ensuring high availability, scalability, and security
                requirements are met in the CI/CD infrastructure. Troubleshoot
                and resolve issues related to CI/CD pipelines, ensuring smooth
                and efficient deployments.
              </div>
              <div>
                <p className="pb-2 font-bold uppercase">
                  Mentoring & Leadership
                </p>
                Mentor and guide junior and mid-level engineers, fostering
                their professional growth and technical expertise. Promote best
                practices in coding standards, testing, and documentation
                through leading by example. Conduct code reviews, providing
                constructive feedback to ensure code quality. Facilitate
                knowledge sharing and collaboration within the team through
                regular technical sessions and discussions.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="pb-3">Who I've worked for</h2>
          <div className="px-2">
            <div className="space-y-4 mb-6">
              <div>
                <p className="pb-2 font-bold">Fliff</p>
                Staff software Engineer
                <br /> 2024 - Current
              </div>

              <div>
                <p className="pb-2 font-bold">Mojo</p>
                Staff software Engineer
                <br />
                2021 - 2024
              </div>

              <div>
                <p className="pb-2 font-bold">Walmart Global Tech</p>
                Staff software Engineer
                <br />
                2019 - 2021
              </div>

              <div>
                <p className="pb-2 font-bold">NHL</p>
                Application Developer
                <br />
                2017 - 2019
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
