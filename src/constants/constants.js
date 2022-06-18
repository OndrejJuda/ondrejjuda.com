import { DiReact, DiWindows } from 'react-icons/di';

/*
EXAMPLE

{
  title: 'MERN Memories',
  description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: '/images/1.png',
    tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0,
}
*/

export const projects = [
];

export const TimeLineData = [
  { year: 2020, text: 'Started working as Power Platform App Developer', },
  { year: 2021, text: 'Founded passion in front-end and started learning', },
  { year: 2022, text: 'Sharing my work on this very site', },
];

/*
EXPAMPLE

{ number: 20, text: 'Open Source Projects' }
*/
export const acomplisments = [
];

export const technologies = [
  { stack: 'Front-End', tech: ['TypeScript', 'ReactJS',], icon: <DiReact size='3rem' style={{ marginBottom: '8px' }} /> },
  { stack: 'Power Platform', tech: ['Power Apps', 'Power Automate', 'Power Apps Component Framework',], icon: <DiWindows size='3rem' style={{ marginBottom: '8px' }} /> },
] 