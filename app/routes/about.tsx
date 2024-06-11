import Bass from "../icons/Bass";
import Glasses from "../icons/Glasses";
import Golf from "../icons/Golf";
import Hockey from "../icons/Hockey";

import PageWrapper from "../components/PageWrapper";

// const StyledWrapMaster = styled.div`
//   margin: 0 -15px;
// `;

// const StyledCardsWrapper = styled.div`
//   display: flex;
//   flex-direction: column;

//   ${mediaQueries.tablet} {
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: center;
//   }
// `;

// const StyledCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 35px 15px;

//   ${mediaQueries.tablet} {
//     flex: 0 0 ${(props) => (props.count >= 3 ? 100 / props.count : 25)}%;
//     max-width: ${(props) => (props.count >= 3 ? 100 / props.count : 25)}%;
//   }
// `;

// const StyledCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   padding: 15px;
//   border: 1px solid ${theme.colors.border};
//   border-radius: 8px;
//   background: #fff;
// `;

// const StyledCardIcon = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: -55px;
//   width: 80px;
//   height: 80px;
//   border-radius: 100%;
//   background-color: ${theme.colors.lightGrey};
//   border: 1px solid ${theme.colors.border};
//   box-shadow: 0 5px 10px -8px ${theme.colors.darkGrey};

//   svg {
//     width: 70%;
//     height: auto;
//   }
// `;

// const StyledCardImageWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 80px;
//   width: 100%;
// `;

// const StyledCardImage = styled.img`
//   width: auto;
//   height: 100%;
// `;

// const CodeWrapper = styled.pre`
//   white-space: pre-wrap;
//   display: flex;
//   flex-direction: column;
//   font-family: monospace;
//   background-color: #fff;
//   width: em(440);
//   margin: 30px auto;
//   padding: 8px;
//   border-radius: 0.25em;
//   line-height: 0;
//   counter-reset: line;
//   border: 1px solid ${theme.colors.border};

//   span {
//     min-height: 1.5rem;
//     display: block;
//     position: relative;
//     padding-left: 45px;
//     max-width: em(400);
//     line-height: 1.5rem;

//     &:before {
//       position: absolute;
//       left: 0;
//       text-align: right;
//       width: 20px;
//       height: 100%;
//       counter-increment: line;
//       content: counter(line);
//       display: inline-block;
//       border-right: 1px solid ${theme.colors.border};
//       padding: 0 8px;
//       color: ${theme.colors.textDefault};
//     }
//   }
// `;

const Hobbies = [<Bass key={1} />, <Golf key={2} />, <Hockey key={3} />];

export default function About() {
  //   const { page, sections, sectionItems } = data || {};
  //   const { name, emoji } = page || {};

  return (
    <PageWrapper heading="About" emoji="😎">
      <div>
        <div className="mb-6">
          <p className=" text-body">
            I am committed to fostering a collaborative environment where
            creativity and technical prowess thrive. As a mentor and leader, I
            inspire and elevate my peers, contributing to a culture of
            continuous learning and improvement. I take pride in pushing the
            boundaries of what’s possible and delivering unparalleled value to
            clients and stakeholders.
          </p>
        </div>
        <div>
          <h2 className="text-title2 font-bold uppercase tracking-wider pb-3">
            Experience
          </h2>
          <div>
            <div className="space-y-4 mb-6 text-footnote pl-4">
              <p>
                <strong>FRONTEND DEVELOPMENT:</strong>
                <br /> Led the development of scalable and maintainable web
                applications, ensuring technical feasibility and optimizing for
                speed and scalability. Collaborated with cross-functional teams
                to define, design, and implement new features. Stayed abreast of
                industry trends, technologies, and best practices to
                continuously improve frontend development processes
              </p>
              <p>
                <strong>CI/CD INFRASTRUCTURE:</strong>
                <br />
                Worked with SRE teams to implement and maintain robust CI/CD
                pipelines to streamline the deployment process. Automated and
                improved build, test, and release processes for frontend
                applications.Ensured high availability, scalability, and
                security requirements were met in the CI/CD infrastructure.
                Troubleshot and resolved issues related to CI/CD pipelines,
                ensuring smooth and efficient deployments.
              </p>
              <p>
                <strong>MENTORSHIP and LEADERSHIP:</strong>
                <br />
                Mentored and guided junior and mid-level frontend engineers,
                fostering their professional growth and technical expertise.
                Promoted best practices in coding standards, testing, and
                documentation through leading by example. Conducted code
                reviews, providing constructive feedback to ensure code quality.
                Facilitated knowledge sharing and collaboration within the team
                through regular technical sessions and discussions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-title2 font-bold uppercase tracking-wider pb-3">
            Work History
          </h2>
          <div>
            <div className="space-y-4 mb-6 text-footnote pl-4">
              <p>
                <strong>Fliff</strong>
                <br />
                Staff software Engineer
                <br /> 2024 - Current
              </p>
              <p>
                <strong>Mojo</strong>
                <br />
                Staff software Engineer
                <br />
                2021 - 2024
              </p>
              <p>
                <strong>Walmart Global Tech</strong>
                <br />
                Staff software Engineer
                <br />
                2019 - 2021
              </p>
              <p>
                <strong>NHL</strong>
                <br />
                Application Developer
                <br />
                2017 - 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
