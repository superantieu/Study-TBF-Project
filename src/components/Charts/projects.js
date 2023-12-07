export const member = {
  teamA: ["Lufy", "Zoro", "Sanji"],
  teamB: ["Nami", "Chopper", "Brook"],
  teamC: ["Franky", "Robin", "Usopp"],
  teamD: ["Kaido", "BBeard", "Bigmom", "Shanks"],
};

const projects = [
  {
    name: "Landmark",
    totalhours: 1000,
    floorareas: 10000,
    listmember: [...member.teamA, ...member.teamB, ...member.teamC],
    expect: 1200,
  },
  {
    name: "Bitexco",
    totalhours: 900,
    floorareas: 8000,
    listmember: [...member.teamB, ...member.teamC],
    expect: 800,
  },
  {
    name: "Vinhome",
    totalhours: 1200,
    floorareas: 14000,
    listmember: [...member.teamA, ...member.teamC, ...member.teamD],
    expect: 1300,
  },
  {
    name: "Hanhouse",
    totalhours: 500,
    floorareas: 1000,
    listmember: [...member.teamA],
    expect: 300,
  },
  {
    name: "Supvilla",
    totalhours: 1500,
    floorareas: 20000,
    listmember: [
      ...member.teamA,
      ...member.teamB,
      ...member.teamC,
      ...member.teamD,
    ],
    expect: 2000,
  },
];

export default projects;
