import Blog from "./components/blog/blog.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header/header.jsx";
import Chart from "./components/blog/chart.tsx";
import { ThemeProvider } from "./components/themeprovider.tsx";
import NumberTicker from "./components/magicui/number-ticker.tsx";

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
            "KNIFE SAFETY",
            "The Impact of Knives in Schools",
            "An examination of knife-related incidents in U.S. secondary schools, including statistical data, regional trends, and current prevention strategies. ",
            <div className="w-full">
              <p className="pt-10 text-[rgb(190,190,190)]">
                <br />
                <br />
                <strong className="med text-xl">
                  The Alarming Rise of Knife Attacks in High Schools
                </strong>
                <br />
                <br />
                Knife attacks and stabbings at high schools around the country
                are fast becoming an escalating problem. Many of the incidents
                result in serious injuries or even death, drawing attention to a
                dire situation that continues to affect students, educators, and
                communities. A mass stabbing at Franklin Regional High School in
                Murrysville, Pennsylvania, in 2014 left{" "}
                <strong className="text-white med">20</strong> students between
                14 and 17 years of age injured.{" "}
                <strong className="text-white med">
                  Four of the students were critically injured, with many others
                  receiving serious stab and slash wounds as they tried to run
                  from the attacker near the school gates​
                </strong>{" "}
                (
                <a
                  href="https://www.independent.co.uk/news/world/americas/pittsburgh-school-stabbings-20-students-injured-in-knife-attack-spree-at-us-high-school-9248774.html"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  The Independent
                </a>
                )​. This serves to remind us once more of the grave consequence
                that violence using knives brings in schools. Recent statistics
                show that knife crimes are a significant issue in America,
                today. The CDC states that
                <br />
                <br />
                <blockquote className="border-l-2 border-blue-400 pl-3">
                  "approximately <NumberTicker value="4000" /> adolescents
                  receive treatment for their injuries in connection with
                  knife-related assaults each year" (
                  <a
                    href="https://nces.ed.gov/fastfacts/display.asp?id=49#:~:text=URL%3A%20https%3A%2F%2Fnces.ed.gov%2Ffastfacts%2Fdisplay.asp%3Fid%3D49%0AVisible%3A%200%25%20"
                    className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                  >
                    NCES
                  </a>
                  ).
                </blockquote>{" "}
                <br /> Additionally, homicide accounts for about 1,600 youths
                per year, and many of these incidences <br />
                <br />
                <blockquote className="border-l-2 border-blue-400 pl-3">
                  "involve a knife or were committed with knives." (
                  <a
                    href="https://nces.ed.gov/fastfacts/display.asp?id=49#:~:text=URL%3A%20https%3A%2F%2Fnces.ed.gov%2Ffastfacts%2Fdisplay.asp%3Fid%3D49%0AVisible%3A%200%25%20"
                    className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                  >
                    NCES
                  </a>
                  )
                </blockquote>{" "}
                <br />
                These staggering statistics help to paint a picture of a very
                volatile school environment, in which measures of prevention are
                desperately needed.
                <br />
                <br />
                <strong className="med text-xl">
                  Regional Variations in School Knife Incidents
                </strong>
                <br />
                <br />
                The number of knife stabbings varies in high schools, depending
                on the state law. However, some states have shown more by state
                law compared to others. In fact, in New York City alone, the{" "}
                <strong class="text-white med">
                  NYPD has recovered <NumberTicker value="1088" /> knives and{" "}
                  <NumberTicker value="260" delay="5" /> box cutters in 2022{" "}
                </strong>
                ​(
                <a
                  href="https://nces.ed.gov/fastfacts/display.asp?id=49#:~:text=URL%3A%20https%3A%2F%2Fnces.ed.gov%2Ffastfacts%2Fdisplay.asp%3Fid%3D49%0AVisible%3A%200%25%20"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  NCES
                </a>
                )​. This only reflects alarming news in that students nowadays
                bring weapons to school, just raising the potential of causing
                violence. Also, schools in Chicago have told of many incidents
                that have happened with regard to knives being taken to schools,
                hence enforcement of more security and awareness efforts in the
                institutions​ (
                <a
                  href="https://knifesinfo.com/knife-stabbings-in-united-states-statistics/"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  KnifesInfo
                </a>
                )​. In yet another separate event,{" "}
                <strong className="med text-white">
                  a massive 20 people were injured in a Pennsylvania high school
                  by a knife attack
                </strong>
                , indicating the potential for such attacks to cause mass harm​
                (
                <a
                  href="https://www.independent.co.uk/news/world/americas/pittsburgh-school-stabbings-20-students-injured-in-knife-attack-spree-at-us-high-school-9248774.html"
                  className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
                >
                  The Independent
                </a>
                )​. This event just goes on to show the vulnerability of the
                school set-up towards such abrupt violence with massive harm.
                The psychological impact on students and staff who witness or
                are involved in such incidents is profound, often leading to
                long-term trauma and fear.
                <br />
                <br />
                <strong className="med text-xl">
                  Statistical Insights and Security Measures
                </strong>
                <br />
                <br />A 2020 report by the National Center for Education
                Statistics revealed that
                <strong class="text-white med">
                  {" "}
                  6% of students in grades 9-12 reported being threatened or
                  injured with a weapon on school property during the previous
                  year.
                </strong>{" "}
                This statistic demonstrates how pernicious the threat is and the
                need for more comprehensive strategies to assault the matter.
                Efforts to reduce knife violence within schools, through
                measures like increased security with metal detectors,
                surveillance cameras, and the presence of school resource
                officers, have shown varied results while simultaneously raising
                doubts about their effectiveness on the school environment. This
                debate remains on the balance between ensuring safety and
                maintaining a conducive atmosphere for learning.
              </p>
            </div>,
          ]}
        </Blog>
      </div>
    </ThemeProvider>
  );
};

const knifeSafetyRootElement = document.getElementById("knifesafety");
const knifeSafetyRoot = createRoot(knifeSafetyRootElement);
knifeSafetyRoot.render(<Mission />);
