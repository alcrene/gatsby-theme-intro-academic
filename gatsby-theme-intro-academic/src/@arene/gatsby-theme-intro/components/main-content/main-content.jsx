import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Projects from "@arene/gatsby-theme-intro/src/components/projects/projects"
import Summary from "@arene/gatsby-theme-intro/src/components/summary/summary"
import Tools from "@arene/gatsby-theme-intro/src/components/tools/tools"
import WorkHistory from "@arene/gatsby-theme-intro/src/components/work-history/work-history"

import Topics from "@arene/gatsby-theme-intro-academic/src/components/topics/topics"
import Publications from "@arene/gatsby-theme-intro-academic/src/components/publications/publications"
import Teaching from "@arene/gatsby-theme-intro-academic/src/components/teaching/teaching"

const MainContent = ({ history, projects, teaching, profile,
                       papers }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />

      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.topics && <Topics topics={profile.topics} />}
        </div>
        <div className="md:w-1/4 pb-12">
          {profile.tools && <Tools tools={profile.tools} />}
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>
            <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase">
            Publications</h5>
          </Tab>
          <Tab>
            <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase">
            Teaching</h5>
          </Tab>
          <Tab>
            <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase">
            Software projects</h5>
          </Tab>
          <Tab>
            <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase">
            Academic history</h5>
          </Tab>
        </TabList>

        <TabPanel>
          <Publications papers={papers} />
        </TabPanel>
        <TabPanel>
          <Teaching teaching={teaching} />
        </TabPanel>
        <TabPanel>
          <Projects projects={projects} />
        </TabPanel>
        <TabPanel>
          <WorkHistory history={history} />
        </TabPanel>
      </Tabs>

    </main>
  )
}

export default MainContent
