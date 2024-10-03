import AboutMe from '../components/about/AboutMe';
import GoBack from '../components/about/GoBack';
import Projects from '../components/about/Projects';
import SummarySkills from '../components/about/SummarySkills';
import TrainingAndBeginnings from '../components/about/TrainingAndBeginnings';
import WorkingExperience from '../components/about/WorkingExperience';

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-5 pb-8 font-poppins sm:pt-12'>
      <TrainingAndBeginnings />
      <WorkingExperience />
      <AboutMe />
      <SummarySkills />
      <Projects />
      <GoBack />
    </div>
  );
};

export default About;
