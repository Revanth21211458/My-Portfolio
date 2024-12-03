import { useEffect, useState } from "react";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import MobileTechList from "./MobileTechList";
import TechList from "./TechList";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SectionLayout className="w-full items-start">
      <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
        <SubHeading dark align={Align.Left}>
          About
        </SubHeading>

        <Heading size="sm" dark className="font-extrabold">
        I am a Machine Learning enthusiast passionate
        about solving complex, data-driven problems.
        </Heading>

        <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
          <p className="w-full whitespace-pre-line md:w-1/2">
            {`I am an undergrad at KLEF . At KLEF, Department of Computer Science and Engineering, I am a Undergraduate Research Fellow and advised by Prof. R. Venu Babu . I've also contributed to AI Policy at Politics for Impact working with parliamentarians and held a research internship at IIT Jammu and EY.`}
          </p>

          <div className="w-full md:w-1/2">
            Currently, I am a Machine Learning Engineer,{" "}
            <span className="font-bold"> with a strong emphasis on frontend development</span>. On a
            daily basis, I work with a variety of technologies, including <MobileTechList />
            <TechList /> among others, in building and maintaining web
            applications and design systems —
            <span className="font-bold">all built from the ground up</span>.
          </div>
        </div>
      </div>
      <Float config={about} />
    </SectionLayout>
  );
}
