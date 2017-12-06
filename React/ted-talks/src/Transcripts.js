import React from 'react';
import './Transcripts.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const transcripts = [
  {name: 'Talks with transcripts', value: 2022},
  {name: 'Talks without transcripts', value: 88}
];

const colors = ['#8586D2', '#929292'];

const Transcripts = () =>
  <div className="transcriptsContent">
    <div className="title">Transcript analysis</div>
    <div className="space"/>
    <div className="tagText">
      <div className="smallTitle">Cleaning the data</div>
      <div>After creating a better representation of all the transcripts we got 88 talks without a legitimate transcript and over 2000 with transcripts.</div>
      <div>In order to make this more valid, we're going to exclude all talks with less than 1000 words, so that the analysis
        we conduct will have more validity. This brings us down to 2022 talks, with new statistics.</div>
      <PieChart width={1200} height={400}>
        <Pie data={transcripts} cx={250} cy={200} innerRadius={80} outerRadius={160} fill="#8884d8" label>
          {
            transcripts.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
          }
        </Pie>
        <Tooltip/>
      </PieChart>
    </div>
  </div>;

export default Transcripts;