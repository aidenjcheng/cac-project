import Blog from "./blog.jsx";
import React from "react";
import Header from "../header/header.jsx";
import Logo1 from "../svg/logowithbg.jsx";

const CrisisNumbers = () => {
  return (
    <div className="w-screen">
      <div className="fixed w-full flex justify-center">
        <Header />
      </div>
      <Blog>
        {[
          <Logo1 />,
          "CRISIS NUMBERS",
          "List of Crisis Numbers",
          "Crisis Numbers are a list of phone numbers and websites that can be called in an emergency situation. These numbers are designed to provide immediate help and support to those in need, whether they are in a crisis or not.",
          <ul class="level-1">
            <li>
              Emergency and Immediate Help
              <ul class="level-2">
                <li>911: For immediate emergencies.</li>
              </ul>
            </li>
            <li>
              School Safety
              <ul class="level-2">
                <li>
                  Safe2Tell: 1-877-542-7233
                  <ul class="level-3">
                    <li>
                      Provides a safe and anonymous way to report any
                      threatening behaviors or activities endangering students,
                      teachers, or schools.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Mental Health Crisis Lines
              <ul class="level-2">
                <li>
                  National Suicide Prevention Lifeline: 988
                  <ul class="level-3">
                    <li>
                      Provides free and confidential support for people in
                      distress, prevention, and crisis resources.
                    </li>
                  </ul>
                </li>
                <li>
                  Crisis Text Line: Text HOME to 741741
                  <ul class="level-3">
                    <li>Offers free, 24/7 support via text message.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Youth and Teen Specific
              <ul class="level-2">
                <li>
                  Teen Line: 1-800-852-8336 or Text TEEN to 839863
                  <ul class="level-3">
                    <li>
                      Provides support, resources, and hope to young people
                      through a hotline of professionally trained peers.
                    </li>
                  </ul>
                </li>
                <li>
                  The Trevor Project: 1-866-488-7386 or Text START to 678678
                  <ul class="level-3">
                    <li>
                      Focuses on crisis intervention and suicide prevention
                      services to LGBTQ+ youth.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              General Mental Health
              <ul class="level-2">
                <li>
                  SAMHSA's National Helpline: 1-800-662-HELP (4357)
                  <ul class="level-3">
                    <li>
                      Provides confidential and free help from public health
                      agencies to find substance use treatment and information.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Child Abuse and Domestic Violence
              <ul class="level-2">
                <li>
                  Childhelp National Child Abuse Hotline: 1-800-4-A-CHILD
                  (1-800-422-4453)
                  <ul class="level-3">
                    <li>
                      Offers support and resources for children who are being
                      abused or need to report abuse.
                    </li>
                  </ul>
                </li>
                <li>
                  National Domestic Violence Hotline: 1-800-799-7233 or Text
                  START to 88788
                  <ul class="level-3">
                    <li>
                      Provides confidential support and resources for victims of
                      domestic violence.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Bullying and Cyberbullying
              <ul class="level-2">
                <li>
                  StopBullying.gov: No direct hotline, but offers resources and
                  information for dealing with bullying and cyberbullying.
                </li>
              </ul>
            </li>
            <li>
              Substance Abuse
              <ul class="level-2">
                <li>
                  Partnership to End Addiction Helpline: 1-855-378-4373
                  <ul class="level-3">
                    <li>
                      Offers support and resources for those struggling with
                      addiction and their families.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Eating Disorders
              <ul class="level-2">
                <li>
                  National Eating Disorders Association (NEDA) Helpline:
                  1-800-931-2237 or Text NEDA to 741741
                  <ul class="level-3">
                    <li>
                      Provides support for those struggling with eating
                      disorders.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>,
        ]}
      </Blog>
    </div>
  );
};

export default CrisisNumbers;
