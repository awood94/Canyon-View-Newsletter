import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Newsletter sections data
const newsletterSections = [
  { title: "Welcome", type: "section" },
  { title: "Best in State", type: "section" },
  { title: "Updates:", type: "header" },
  { title: "2025 Events", type: "section" },
  { title: "Community", type: "section" },
  { title: "New Team Members", type: "section" },
  { title: "Incentives:", type: "header" },
  { title: "Auto Loan Special", type: "section" },
  { title: "Summer Savings", type: "section" },
  { title: "Product News:", type: "header" },
  { title: "Fraud Awareness", type: "section" },
];

export const CanyonViewHome = (): JSX.Element => {
  return (
    <main className="bg-white flex flex-col items-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Header Section */}
        <header className="relative w-full h-auto md:h-[509px] flex flex-col items-center">
          <div className="w-full max-w-[1040px] flex flex-col items-center">
            <img
              className="w-full max-w-[578px] h-auto object-contain mt-4 md:mt-0"
              alt="Canyon View Credit Union Logo"
              src="https://c.animaapp.com/mb5k144ihbN47Y/img/screenshot-2025-05-24-132140-1.png"
            />
            <img
              className="w-full h-auto object-contain mt-4 md:mt-8"
              alt="Mountain silhouette"
              src="https://c.animaapp.com/mb5k144ihbN47Y/img/image-52.png"
            />
          </div>
          <div className="w-full mt-4 [font-family:'Pacifico',Helvetica] font-normal text-[#52575c] text-4xl md:text-[57px] tracking-[-0.25px] leading-tight md:leading-[64px] text-center">
            Summer Echos
          </div>
        </header>

        {/* Banner Image */}
        <div className="w-full h-auto md:h-[481px] relative mt-8">
          <img
            className="w-full h-auto md:h-[481px] object-cover"
            alt="Canyon landscape with wildflowers"
            src="https://c.animaapp.com/mb5k144ihbN47Y/img/untitled-design-1.png"
          />
        </div>

        {/* Main Content Section */}
        <div className="w-full relative flex flex-col md:flex-row">
          {/* Left Sidebar - Table of Contents */}
          <Card className="w-full md:w-[688px] bg-[#52575c] rounded-none">
            <CardContent className="p-6">
              <div className="w-full md:w-[664px] h-auto md:h-[134px] flex items-center justify-center [font-family:'Montserrat',Helvetica] font-bold text-white text-4xl md:text-6xl text-center tracking-[0.10px]">
                In This Newsletter:
              </div>

              <Separator className="w-full max-w-[560px] h-1 mx-auto my-8 bg-white" />

              {/* Map through newsletter sections */}
              {newsletterSections.map((section, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`w-full md:w-[664px] h-auto md:h-[134px] [font-family:'${
                      section.type === "header" ? "Montserrat_Alternates" : "Montserrat"
                    }',Helvetica] 
                    font-${section.type === "header" ? "bold" : "semibold"} 
                    text-white 
                    ${
                      section.type === "header"
                        ? "text-4xl md:text-6xl"
                        : "text-3xl md:text-5xl"
                    } 
                    flex items-center justify-center
                    tracking-[0.10px] leading-tight text-center py-4 md:py-0`}
                  >
                    {section.title}
                  </div>
                  {index < newsletterSections.length - 1 && (
                    <Separator className="w-full max-w-[560px] h-1 mx-auto my-6 bg-white" />
                  )}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>

          {/* Right Content Area */}
          <div className="flex flex-col w-full md:w-[752px] bg-[url(https://c.animaapp.com/mb5k144ihbN47Y/img/rectangle-89.svg)] bg-[100%_100%]">
            {/* Credit Union Logo */}
            <div className="w-full h-auto md:h-[260px] bg-[url(https://c.animaapp.com/mb5k144ihbN47Y/img/image-53.png)] bg-cover bg-center py-8 md:py-0 mb-8">
              <div className="w-full h-[18px] mt-auto md:mt-[237px] ml-0.5 [font-family:'Montserrat',Helvetica] font-semibold text-[#a1a1a1] text-[10px] tracking-[0.10px] leading-[18px] whitespace-nowrap text-center md:text-left">
                Copyright Canyon View Credit Union 2024
              </div>
            </div>

            {/* Main Newsletter Content */}
            <div className="p-6 mt-8">
              <div className="w-full mb-8 [font-family:'Montserrat',Helvetica] font-semibold text-black text-3xl md:text-[50px] text-center tracking-[0.10px] leading-tight md:leading-[50px]">
                Welcome to the new look and feel - Canyon View Credit Union
                Echos Newsletter!
              </div>

              <div className="w-full mb-8 [font-family:'Montserrat',Helvetica] font-normal text-xl md:text-3xl tracking-[0.10px] leading-relaxed md:leading-[30px]">
                <span className="text-black tracking-[0.03px]">
                  Summer is here -- and so is your newest edition of the{" "}
                </span>

                <span className="font-extrabold text-black tracking-[0.03px]">
                  Canyon View Echos Newsletter!
                </span>

                <span className="text-black tracking-[0.03px]">
                  {" "}
                  As the days get longer and the pace picks up, we&apos;re
                  here to help you stay financially confident, informed, and
                  inspired.
                  <br />
                  <br />
                  Whether you&apos;re planning a vacation, tackling home
                  projects, or just soaking up the sun, this season brings new
                  opportunities and we&apos;re excited to share what&apos;s
                  ahead!
                  <br />
                  <br />
                  The Annual Survey is still open! Please submit your answers
                  so we can better support you. I know that it is another
                  survey, but we listen and make changes as per your feedback!
                  <br />
                  <br />
                  Thanks,
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center mt-8">
                <img
                  className="w-full md:w-[291px] h-auto md:h-[361px] object-cover mb-4 md:mb-0"
                  alt="Austin Wood"
                  src="https://c.animaapp.com/mb5k144ihbN47Y/img/0n7a0317-1.png"
                />

                <div className="flex-1 md:ml-4 [font-family:'Pacifico',Helvetica] font-normal text-black text-4xl sm:text-5xl md:text-6xl lg:text-[70px] tracking-[0.10px] leading-tight text-center flex items-center justify-center p-2 md:p-4">
                  <span className="break-words">Austin Wood</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keep Reading Button */}
        <div className="flex justify-center mt-[29px]">
          <Button className="w-[273px] h-[114px] bg-[#e91d2c] rounded-[36px] hover:bg-[#c91825]">
            <span className="[font-family:'Montserrat',Helvetica] font-bold text-white text-xl text-center tracking-[0.10px] leading-[18px]">
              Keep reading
            </span>
          </Button>
        </div>

        {/* Footer */}
        <footer className="w-full bg-[#52575c] mt-[29px]">
          <div className="max-w-[1364px] mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-sm text-center md:text-left mb-4 md:mb-0">
              <span className="block md:inline md:mr-4 mb-2 md:mb-0">Privacy Policy</span>
              <span className="block md:inline md:mr-4 mb-2 md:mb-0">Personal Information</span>
              <span className="block md:inline">Terms of Service</span>
            </div>
            <div className="text-white text-xl font-bold">
              Q2 2025
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};
