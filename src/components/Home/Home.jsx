import React from 'react';
import HomeBanner from '../Banner/HomeBanner';
import SectionAdvantages from '../Advantages/SectionAdvantages';
import WorkingSection from '../Working/WorkingSection';
import TaskModulesSection from '../TasksModules/TaskModulesSection';
import FAQContainer from '../FAQ/FAQContainer';

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <SectionAdvantages />
      <WorkingSection />
      <TaskModulesSection />
      <FAQContainer />
    </main>
  )
}

export default Home