import React from 'react';
import entertainmentNetwork from './img/entertainment_network.png';
import healthNetwork from './img/health_network.png';
import scienceNetwork from './img/science_network.png';
import societyNetwork from './img/society_network.png';
import technologyNetwork from './img/technology_network.png';
import sentimentInTagCommunities from './img/sentimentInTagCommunities.png';
import './Tags.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Slider from 'react-slick';

const data = [
  {
    community: 'Science',
    meanHappiness: 6.21020833333
  },
  {
    community: 'Technology',
    meanHappiness: 6.24425
  },
  {
    community: 'Society',
    meanHappiness: 5.435
  },
  {
    community: 'Health',
    meanHappiness: 4.66739130435
  },
  {
    community: 'Entertainment',
    meanHappiness: 6.80130434783
  }
];

const columns = [
  {
    Header: 'Community',
    accessor: 'community'
  },
  {
    Header: 'Mean happiness',
    accessor: 'meanHappiness'
  }
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "slick-dots slick-thumb"
};

const Tags = () =>
  <div className="tagContent">
    <div className="tagTitle"> Tag network analysis </div>
    <div className="space"/>
    <div className="tagText">
    <div className="smallTitle">Building the talks network</div>
      <div className="space"/>
      <div>Some statistics:</div>
      <ul>
        <li>2891 nodes</li>
        <li>18512 edges</li>
        <li>2474 talks</li>
        <li>417 tags</li>
        <li>1 component</li>
      </ul>
      <div className="space"/>
      <div className="smallTitle">Building the tags network</div>
      <div className="space"/>
      <div>Some statistics:</div>
      <ul>
        <li>417 nodes</li>
        <li>21708 edges</li>
        <li>0.2502767017155506 density</li>
        <li>1 component</li>
      </ul>
      <div>
        So this graph is relatively highly connected, with a density of 25%.
        It has more edges than the original network, which is to be expected since its linking every tag to every tag
        each of it's neighbors links to.
      </div>
      <div className="space"/>
      <div className="smallTitle">Finding communities of tags</div>
      <div className="topic">Modularity </div>
      <div>Modularity of Louvian communities: 0.22976228208865354</div>
      <div>
        This implies sub-optimal communities, which is expected due to the high density of our graph.
        However the existence of communities is still supported; the interpretation is that the communities provide 23%
        higher density than the density of the graph; considering that our network is very dense to begin with, having such
        a significant increase in density is impressive.
      </div>
      <div className="space"/>
      <div className="topic">Partitions </div>
      <div className="space"/>
      <Slider {...settings}>
        <div className="centeredTitle">Society network<div className="space"/>
          <img src={societyNetwork} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">Entertainment network <div className="space"/>
         <img src={entertainmentNetwork} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">Health network <div className="space"/>
         <img src={healthNetwork} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">Science network <div className="space"/>
         <img src={scienceNetwork} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">Technology network <div className="space"/>
         <img src={technologyNetwork} width={1000} height={600} className="img" alt="" />
        </div>
      </Slider>
      <div className="space"/><div className="space"/><div className="space"/>
      <div>
        All nodes are connected, but due to the sheer number of edges roughly the top 25% of edges are shown
        (top 25% cutoff estimated by an exponential distribution). Its fascinating how these tags are arranged;
        we have, in order of community:
        <ul>
          <li>Sciences</li>
          <li>Technology, Design, and Innovation</li>
          <li>Global Issues</li>
          <li>Arts</li>
          <li>Medicine</li>
        </ul>
        It's also interesting how the categories can be aptly named by the central members of the network.
        Earlier, we had tried manually creating communities based on top tags. Our tags were:
        <ul>
          <li>Tech</li>
          <li>Science</li>
          <li>Sociopolitical</li>
          <li>Business</li>
          <li>Humanity & Arts</li>
        </ul>Tech
        All in all, the only real change is the merging of "Business" and "Tech" in favor of spliting "Science" into "Medicine" and "Science".
      </div>
      <div className="space"/>
      <div className="space"/>
      <div className="smallTitle">Tag sentiments</div>
      <div className="topic">Mean happiness</div>
      <div className="space"/>
      <ReactTable columns={columns} data={data} pageSize={5} showPagination={false} className="-striped -highlight" />
      <div className="space"/>
      <img src={sentimentInTagCommunities} width={800} height={700} alt="" className="sentimentImg"/>
      <div className="space"/>
      <div>Naturally, health, the most depressing of topics, has the lowest happiness, while the most "frivolous",
        entertainment, has the most. </div>
    </div>
  </div>;


export default Tags;