import { projects } from "./Float/config";
import { SectionLayout } from "./Layout";
import SplitText from "./SplitText/SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";
import Image from "next/image";

export default function Writing() {
  return (
    <SectionLayout
      className="w-full items-start space-y-8 overflow-y-scroll h-screen no-scrollbar"
    >
      <div className="md:max-w-2/3 flex w-full flex-col items-start space-y-6">
        <SubHeading dark align={Align.Left}>
          <SplitText text="Projects" />
        </SubHeading>

        <div>
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="Explore Our Work" />
          </Heading>
          <p>Check out the projects below!</p>
        </div>

        <div className="h-[1cm]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/50 backdrop-blur-md border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-80 h-80 flex flex-col justify-between"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={320}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="text-lg font-bold text-gray-800 text-center">{project.title}</h3>
                <button
                  className="mt-4 px-6 py-3 bg-blue-500 text-red border-2 border-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:border-blue-600 transition-all duration-200"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 5cm gap for background display */}
        <div className="h-[3cm]"></div>
      </div>
    </SectionLayout>
  );
}








