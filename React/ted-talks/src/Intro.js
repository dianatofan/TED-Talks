import React from 'react';
import Typist from 'react-typist';
import video from './galaxy.gif';
import timeVsViews from './img/timeVsViews.png';
import tagsAndPopularity from './img/tagsAndPopularity.png';
import './App.css';
import { withRouter } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const popularTags = [
  {'Tag name': 'Technology', 'Occurrences': 710},
  {'Tag name': 'Science', 'Occurrences': 541},
  {'Tag name': 'Global issues', 'Occurrences': 495},
  {'Tag name': 'Culture', 'Occurrences': 484},
  {'Tag name': 'TEDx', 'Occurrences': 432},
  {'Tag name': 'Design', 'Occurrences': 410},
  {'Tag name': 'Business', 'Occurrences': 341},
  {'Tag name': 'Entertainment', 'Occurrences': 298},
  {'Tag name': 'Health', 'Occurrences': 228},
  {'Tag name': 'Innovation', 'Occurrences': 217},
  {'Tag name': 'Art', 'Occurrences': 217},
  {'Tag name': 'Society', 'Occurrences': 203},
  {'Tag name': 'Social change', 'Occurrences': 200},
  {'Tag name': 'Politics', 'Occurrences': 186},
  {'Tag name': 'Communication', 'Occurrences': 186},
  {'Tag name': 'Future', 'Occurrences': 182},
  {'Tag name': 'Biology', 'Occurrences': 181},
  {'Tag name': 'Creativity', 'Occurrences': 181},
  {'Tag name': 'Humanity', 'Occurrences': 169}
];

const popularTopics = [
  {name: 'Tech', value: 892},
  {name: 'Science', value: 1260},
  {name: 'Sociopolitical', value: 1460},
  {name: 'Business', value: 1071},
  {name: 'Humanity & arts', value: 1749}
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8586D2'];

const data1 = [
  {
    speaker: 'Amy Cuddy',
    views: 41505006,
    videoCount: 1,
    viewsPerVideo: 41505006
  },
  {
    speaker: 'Mary Roach',
    views: 21902550,
    videoCount: 1,
    viewsPerVideo: 21902550
  },
  {
    speaker: 'Jill Bolte Taylor',
    views: 20643201,
    videoCount: 1,
    viewsPerVideo: 20643201
  },
  {
    speaker: 'Tony Robbins',
    views: 19981744,
    videoCount: 1,
    viewsPerVideo: 19981744
  },
  {
    speaker: 'Simon Sinek',
    views: 38901229,
    videoCount: 2,
    viewsPerVideo: 19450614.5
  }
];

const data2 = [
  {
    speaker: 'Ken Robinson ',
    views: 60923649,
    videoCount: 4,
    viewsPerVideo: 15230912.25
  },
  {
    speaker: 'Amy Cuddy',
    views: 41505006,
    videoCount: 1,
    viewsPerVideo: 41505006
  },
  {
    speaker: 'Simon Sinek',
    views: 38901229,
    videoCount: 2,
    viewsPerVideo: 19450614.50
  },
  {
    speaker: 'Brenè Brown',
    views: 37497319,
    videoCount: 2,
    viewsPerVideo: 18748659.50
  },
  {
    speaker: 'Julian Treasure',
    views: 28438682,
    videoCount: 5,
    viewsPerVideo: 5687736.40
  }
];

const data3 = [
  {
    speaker: 'Hans Rosling',
    views: 27085020,
    videoCount: 9,
    viewsPerVideo: 3.009447e+06
  },
  {
    speaker: 'Juan Enriquez',
    views: 12240152,
    videoCount: 7,
    viewsPerVideo: 1.748593e+06
  },
  {
    speaker: 'Rives',
    views: 9800057,
    videoCount: 6,
    viewsPerVideo: 1.633343e+06
  },
  {
    speaker: 'Marco Tempest',
    views: 13161660,
    videoCount: 6,
    viewsPerVideo: 2.193610e+06
  },
  {
    speaker: 'Nicholas Negroponte',
    views: 3922351,
    videoCount: 5,
    viewsPerVideo: 7.844702e+05
  }
];

const columns = [
  {
    Header: 'Speaker',
    accessor: 'speaker'
  },
  {
    Header: 'Views',
    accessor: 'views'
  },
  {
    Header: 'Video count',
    accessor: 'videoCount'
  },
  {
    Header: 'Views per video',
    accessor: 'viewsPerVideo'
  }
];

const Intro = withRouter(({ history }) =>
  <div className="content">
    <div className="video">
      <Typist className="purpose" startDelay={2000} avgTypingDelay={90} cursor={{show: false}}>
        What makes a TED Talk successful?
        <div className="space" />
        <div>
          <Link activeClass="button" to="textContent" smooth>
            <button className="button" onClick={() => { history.push('/') }}>Find out</button>
          </Link>
        </div>
      </Typist>
      <img className="video" src={video} alt=""/>
    </div>
    <Element name="textContent" className="textContent">
      <div className="space" />
      <div className="title">Analyzing what makes a TED Talk successful</div>
      <div className="space" />
      <div className="text">
        <div className="smallTitle">Purpose</div>
        <div>TED Talks are popular and insightful, but not all TED talks are equal.
          Some get tens of thousands of more views than others, so we hope to look into what makes a TED Talk popular.
          We will look at the tags, the key-words, the groups, and do some moral/sentiment analysis on a database of over 2,000 TED talks and transcripts.
          We will then search for patterns in our segmented data, and see if we can learn anything about what makes an idea spread and tick.
          We will use a <a href="https://data.world/owentemple/ted-talks-complete-list">database</a> of over 2,000 TED talks and transcripts. We will then search for patterns in our segmented data, and see if we can learn anything about what makes an idea spread and tick.
        </div>
        <div className="smallTitle">Data source</div>
        We used <a href="https://data.world/owentemple/ted-talks-complete-list/workspace/file?filename=TED_Talks_by_ID_plus-transcripts-and-LIWC-and-MFT-plus-views.csv">this .csv file</a> to analyze the TED Talks.
        The table has 29.57 MB and contains 123 columns and 2,475 rows, including transcripts of the talk and number of views.
        <div className="smallTitle">General outline</div>
        <div className="topic">The most popular tags</div>
        <div>There are 418 tags in total.</div>
        <div>The 20 most popular tags are the following:</div>
        <div className="space" />
        <BarChart width={1340} height={500} data={popularTags} barSize={50}
                  margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="Tag name" interval={0} />
          <YAxis/>
          <Tooltip />
          <Bar dataKey="Occurrences" fill="#8884d8"/>
        </BarChart>
        <div className="space" />
        <div>
          At a quick glance, we can tell that STEM is the most popular topic.
          <div>Manually grouping the top 5% (25 top) into 5 broad groups gives us:</div>
          <ul>
            <li>Tech (technology, future)</li>
            <li>Science (science, biology, medicine, brain, health)</li>
            <li>Sociopolitical (global issues, TEDx, education, social change, society, environment, politics)</li>
            <li>Business: (business, innovation, commuincation, collaboration, economics)</li>
            <li>Humanity & Arts: (culture, design, entertainment, art, creativity, humanity)</li>
          </ul>
          <div>These each have the totals shown below. </div>
          <div className="space" />
          <PieChart width={1200} height={400}>
            <Pie data={popularTopics} cx={250} cy={200} outerRadius={160} fill="#8884d8" label>
              {
                popularTopics.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
              }
            </Pie>
            <Tooltip/>
          </PieChart>
          <div>Evidently, there are certain topics that are more popular than others.</div>
        </div>
        <div className="space" />
        <div className="space" />
        <div className="topic">Relationship between time and number of tags</div>
        <div>There is a clear pattern between the time when a TED Talk was published and the number of tags.</div>
        <img src={timeVsViews} width={800} height={500} alt=""/>
        <div>We can now confirm that in recent years, the number of tags per video has clearly increased.</div>
        <div className="space" />
        <div className="space" />
        <div className="topic">Tags and popularity over time</div>
        <img src={tagsAndPopularity} width={1200} height={650} alt=""/>
        <div>
          It's interesting to see how the top tags per each year changed over time.
          We see that there are only four top tags over the last ten years, which in and of itself speaks volumes about our
          focus as a society. Speaking of society, the tag society starts off low, but suddenly rockets to the top of the charges
          in the years after 2015. Culture simultaneously declines, as evidently people start to lose interest. TEDx rises as a tag,
          through the slow gain of TEDx in popularity instead of having only TED talks.
          (For the unaware, TEDx are local ted talks organized by communities instead of by the official TED organization).
          Technology is reliable; it is relatively constant throughout the lifespan of our dataset.
        </div>
        <div className="space" />
        <div className="space" />
        <div className="topic">Are there any popular speakers?</div>
        <div className="space" />
        <div>Top 5 speakers by views per video:</div>
        <div className="space" />
        <ReactTable columns={columns} data={data1} pageSize={5} showPagination={false} className="-striped -highlight" />
        <div className="space" />
        <div className="space" />
        <div>Top 5 speakers by total views:</div>
        <div className="space" />
        <ReactTable columns={columns} data={data2} pageSize={5} showPagination={false} className="-striped -highlight" />
        <div className="space" />
        <div className="space" />
        <div>Top 5 speakers by number of videos:</div>
        <div className="space" />
        <ReactTable columns={columns} data={data3} pageSize={5} showPagination={false} className="-striped -highlight" />
        <div className="space" />
        <div className="space" />
        <div>Wow. Ken Robinson. Maintaining 15,231,000 views per video for all his videos is quite impressive.</div>
        <div>
          Of course, reaching 41,500,000 views itself is quite a feat, one that Amy Cuddy achieved.
          She's quite a one-hit-wonder, being the only individual with one video reaching the top 5 total view count.
        </div>
      </div>
    </Element>
  </div>);


export default Intro;