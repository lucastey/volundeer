// data.ts
export const proposals = [
  {
    id: 1,
    title: "Proposal for Urban Green Spaces",
    content: "A proposal to increase urban green spaces in the city to improve air quality and provide recreational areas for residents.",
    votes: 45,
  },
  {
    id: 2,
    title: "Community Education Initiative",
    content: "An initiative to provide free educational workshops on various topics such as finance, health, and technology for community members.",
    votes: 30,
  },
  {
    id: 3,
    title: "Local Farmers Market Support",
    content: "A proposal to support local farmers markets by providing subsidies and marketing assistance to boost local agriculture.",
    votes: 22,
  },
];
  
  export const comments = [
    { id: 1, proposalId: 1, body: "This is a great idea! More green spaces are definitely needed." },
    { id: 2, proposalId: 1, body: "I support this proposal. It will improve our quality of life." },
    { id: 3, proposalId: 2, body: "Educational workshops are a wonderful way to empower our community." },
    { id: 4, proposalId: 3, body: "Supporting local farmers is crucial for our economy." },
    { id: 5, proposalId: 3, body: "Great proposal! Local markets need more visibility." },
  ];