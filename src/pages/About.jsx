import AboutMe from "../components/about/AboutMe";
import GoBack from "../components/about/GoBack";
import SummarySkills from "../components/about/SummarySkills";
import Studies from "../components/about/Studies";
import WorkingExperience from "../components/about/WorkingExperience";
import Chart from "../components/about/Chart";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-5 pb-8 font-poppins sm:pt-12">
      <Studies />
      <WorkingExperience />
      <AboutMe />
      <SummarySkills />
      <Chart />
      <GoBack />
    </div>
  );
};

export default About;
