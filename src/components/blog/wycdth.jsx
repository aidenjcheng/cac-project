import Blog from "./blog.jsx";
import React from "react";
import Header from "../header/header.jsx";
import Logo1 from "../svg/logowithbg.jsx";

const Mission = () => {
  return (
    <div>
      <div className="fixed w-full flex justify-center">
        <Header />
      </div>
      <Blog>
        {[
          <Logo1 />,
          "HOW YOU CAN HELP",
          "How You Can Help Prevent Gun and Knife Violence in Schools",
          "Gun and knife violence in schools is a critical problem that requires, if anything, a multi-dimensional approach to policy level, community and school-based interventions.",
          <div className="w-full">
            <p className="pt-10 text-[rgb(190,190,190)]">
              <br />
              <br />
              <strong className="med">Encourage Safe Gun Storage.</strong>
              <br />
              <br />
              Advocate safe storage of guns to help prevent gun violence in
              schools. Nearly three-quarters of shooters under 18 get their guns
              from their homes or the homes of relatives. Reduce these risks by
              ensuring guns are stored unloaded in locked safes and out of
              reach. Parents can make a big difference since so many shooters
              under 18 have parents in their orbit also.
              <strong>Child-Access Prevention Laws</strong>
              <br />
              <br />
              These are laws that hold gun owners liable when children access
              firearms that are not properly locked away. This is important
              since there are millions of children living in homes with guns,
              and some are loaded and unlocked. Extreme Risk Laws: Such laws
              enable the concerned family, along with the police, and in some
              cases educators, to petition courts to have guns taken temporarily
              away from individuals who are a danger to themselves or others.
              <br />
              <br />
              <strong>Background Checks</strong>
              <br />
              <br />
              Ensure universal background checks that will help plug loopholes
              in the processes of gun sales that have been exploited to allow
              unauthorized persons to get guns.
              <br />
              <br />
              <strong>Establish Safe and Supportive Schools</strong>
              <br />
              <br />
              Ensure that every student feels safe, accepted, and supported
              through a positive school climate. In respect to this, schools
              should:
              <br />
              <br />
              <strong>Implement Crisis Intervention Programs</strong>: Identify
              behavioral red flags and take appropriate action before they ramp
              up to violence. Effective crisis intervention requires linkages
              with organizations and community mental health support programs.
              <br />
              <br />
              <strong>Increase Access to Mental Health</strong>: Students must
              have access to mental health professionals; this is usually one
              school psychologist per 500 students, although most schools are
              way below that threshold.
              <br />
              <br />
              <strong>
                Participate in Community-Based Violence Intervention Initiatives
              </strong>
              <br />
              <br />
              Participate in community violence interventions consisting of
              collaborations among community members, local organizations, and
              government agencies. These programs have the objective of
              minimizing violence by constructing structural relationships and
              support systems. These will have youth-centered activities such as
              employment opportunities and after-school programming. Restorative
              Discipline Practices Go beyond no-tolerance policies and punitive
              measures and shift toward restorative practices, including
              conflict resolution and mediation processes. This approach
              engenders a sense of community in schools and helps to reduce the
              likelihood of student marginalization or violent behavior.
              <br />
              <br />
              <strong>Engage and Inform Parents and the Community</strong>
              <br />
              <br />
              Educate the community on safe gun storage and warning signs for
              impending violence. Knowledge empowers parents and other
              stakeholders within the community to make critical, proactive
              decisions about school safety. This can be done through an
              information campaign via the schools or other community
              organizations. These may include handouts on gun safety and mental
              health support. If you put all of these mitigations into place,
              you will have done much toward preventing gun and knife violence
              in schools and make them safer, more supportive places for all
              students.
            </p>
          </div>,
        ]}
      </Blog>
    </div>
  );
};

export default Mission;
