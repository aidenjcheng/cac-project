import Blog from "./components/blog/blog.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header/header.jsx";
import Chart from "./components/blog/chart.tsx";
import { ThemeProvider } from "./components/themeprovider";
import NumberTicker from "./components/magicui/number-ticker";
import Quote from "./components/blog/blockquote.jsx";

const Mission = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen">
        <div className="fixed w-full flex justify-center">
          <Header />
        </div>
        <Blog>
          {[
            "dsaodj",
            "GUN SAFETY",
            "The Impact of Guns in Schools ",
            "Examining the devastating effects of firearms in educational settings, including rising incidents, psychological trauma, and the broader societal impact.",
            <div className="w-full">
              <p className="pt-10 text-[rgb(190,190,190)]">
                The availability and presence of guns in schools have created
                both deep and devastating effects on students, teachers, and
                communities. This impact is double-edged, occurring on the
                immediate victims as well as on the larger educational context
                and public perception of safety.
                <br />
                <br />
                <strong className="med text-xl">
                  School Shootings: Frequency and Severity
                </strong>
                <br />
                <br />
                School shootings in the United States have become alarmingly
                frequent.{" "}
                <strong className="text-white med">
                  In 2021, for example, there were <NumberTicker value="250" />{" "}
                  incidents with a gun on school property.
                </strong>{" "}
                These shootings involve tragic loss of life, serious injuries,
                and psychological trauma that impacts survivors and witnesses
                long term. Offenses range from targeted attacks to accidental
                discharges, all leading to a very fearful and uncertain
                environment.
                <br />
                <br />
                <Chart />
                <br />
                <strong className="med text-xl">
                  Increase in School Shootings
                </strong>
                <br />
                <br />
                Over the past two decades, school shootings and their related
                fatalities have increased to heights at an alarming rate, with
                several high-profile and horrific incidents that have served to
                heighten public awareness of this issue. According to the Center
                for Homeland Defense and Security, violence acts in educational
                settings have gotten to all times high levels, increasing over
                the past few years significantly (
                <a
                  href="https://www.pewresearch.org/short-reads/2023/04/26/what-the-data-says-about-gun-deaths-in-the-u-s/"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  Pew Research Center
                </a>
                ).{" "}
                <strong className="med">
                  The tragic shooting in Uvalde, Texas, at Robb Elementary
                  School on May 24, 2022, left 21 people dead: 19 children and
                  two teachers.{" "}
                </strong>{" "}
                Therefore, the said incident is one of the deadliest school
                shootings in the U.S. to date. This incident points out the
                terribly devastating effect of the occurrence of school
                shootings and possibility that this crisis will occur.{" "}
                <strong className="med">
                  Other major events were the 2018 shooting at Marjory Stoneman
                  Douglas High School in Parkland, Florida, that killed 17
                  people and injured 17 others
                </strong>{" "}
                (
                <a
                  href="https://www.pewresearch.org/short-reads/2023/04/26/what-the-data-says-about-gun-deaths-in-the-u-s/"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  Pew Research Center
                </a>
                ). That act of insanity done on December 14, 2012, at the Sandy
                Hook Elementary School located in Newtown, Connecticut took the
                lives of 20 children and 6 adults. (
                <a
                  href="https://www.pewresearch.org/short-reads/2023/04/26/what-the-data-says-about-gun-deaths-in-the-u-s/"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  Pew Research Center
                </a>
                ). These examples prove the point that gun violence is,
                therefore, a consistent and even expanding risk for school
                settings.
                <br />
                <br />
                <strong className="med text-xl">
                  Psychological Implications for the Students and Staff
                </strong>
                <br />
                <br />
                The psychological implications of school shootings are powerful.
                Chances of enhanced levels of anxiety, fear, and trauma in
                students who had been the victims or have witnessed shootings in
                their schools are very high. In a recent study published in the
                Journal of the American Medical Association, it was concluded
                that there are higher rates of mental health problems like PTSD,
                depression, and anxiety disorders among individuals exposed to
                school shootings (
                <a
                  href="https://www.cdc.gov/firearm-violence/data-research/facts-stats/index.html"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  CDC
                </a>
                ). Such a condition negatively influences academic performance
                as well as overall well-being, which is why some students need
                psychological support for a long time.
                <br />
                <br />
                <strong className="med text-xl">
                  Disruption of Educational Environment
                </strong>
                <br />
                <br />
                School shootings disrupt the educational environment, leading to
                lost instructional time and decreased academic performance. If
                an institution has this kind of incident, it would be closed for
                a longer period and even disrupt the consecutive learning of the
                students. In addition, just the anticipation of violence causes
                an atmosphere of mistrust and insecurity among pupils and
                teachers, thus making effective learning difficult to achieve (
                <a
                  href="https://publichealth.jhu.edu/center-for-gun-violence-solutions/research-reports/firearm-violence-in-the-united-states"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  JHSPH
                </a>
                ).
                <br />
                <br />
                <strong className="med text-xl">
                  Community and Public Perception
                </strong>
                <br />
                <br />
                School shootings have a huge ripple effect on the broader
                community. They erode public trust in the safety of educational
                institutions and contribute to a culture of fear. Communities
                affected by school shootings often experience a decline in
                property values and face challenges in attracting new residents
                and businesses. The pervasive media coverage of these incidents
                further amplifies the fear across the nation (
                <a
                  href="https://publichealth.jhu.edu/center-for-gun-violence-solutions/research-reports/firearm-violence-in-the-united-states"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  JHSPH
                </a>
                ).
                <br />
                <br />
                <strong className="med text-xl">
                  Statistics on School Shooting Fatalities
                </strong>
                <br />
                <br />
                The fatal outcomes of school shootings are stark. The Everytown
                Research & Policy further noted that <br />
                <br />
                <blockquote className="border-l-2 border-blue-400 pl-3">
                  "Over 100 school shooting fatalities occurred in 2022, with
                  hundreds more injured".
                </blockquote>
                <br />
                The effects of the presence of guns in schools include
                psychological trauma, education interruption, economic costs,
                and far-reaching societal consequences. These are data and
                statistics that reveal the urgency to comprehend and deal with
                the complex dynamics of gun violence in places of learning.
              </p>
            </div>,
          ]}
        </Blog>
      </div>
    </ThemeProvider>
  );
};

const gunSafetyRootElement = document.getElementById("gunsafety");
const gunSafetyRoot = createRoot(gunSafetyRootElement);
gunSafetyRoot.render(<Mission />);
