import TimeSheet from "./timeSheet";

const projectUsers6 = [
  {
    UserId: 1,
    FullName: "Luffy",
    Discipline: "A",
  },
  {
    UserId: 2,
    FullName: "Zoro",
    Discipline: "A",
  },
  {
    UserId: 3,
    FullName: "Sanji",
    Discipline: "A",
  },
  {
    UserId: 4,
    FullName: "Nami",
    Discipline: "B",
  },
  {
    UserId: 5,
    FullName: "Chopper",
    Discipline: "B",
  },
  {
    UserId: 6,
    FullName: "Brook",
    Discipline: "B",
  },
  {
    UserId: 7,
    FullName: "Franky",
    Discipline: "C",
  },
  {
    UserId: 8,
    FullName: "Robin",
    Discipline: "C",
  },
  {
    UserId: 9,
    FullName: "Usopp",
    Discipline: "C",
  },
  {
    UserId: 10,
    FullName: "Kaido",
    Discipline: "D",
  },
  {
    UserId: 11,
    FullName: "BBeard",
    Discipline: "D",
  },
  {
    UserId: 12,
    FullName: "Bigmom",
    Discipline: "D",
  },
  {
    UserId: 13,
    FullName: "Shanks",
    Discipline: "D",
  },
];
const projectUsers7 = [
  {
    UserId: 7,
    FullName: "Franky",
    Discipline: "C",
  },
  {
    UserId: 8,
    FullName: "Robin",
    Discipline: "C",
  },
  {
    UserId: 9,
    FullName: "Usopp",
    Discipline: "C",
  },
  {
    UserId: 10,
    FullName: "Kaido",
    Discipline: "D",
  },
  {
    UserId: 11,
    FullName: "BBeard",
    Discipline: "D",
  },
  {
    UserId: 12,
    FullName: "Bigmom",
    Discipline: "D",
  },
  {
    UserId: 13,
    FullName: "Shanks",
    Discipline: "D",
  },
];
const projectUsers8 = [
  {
    UserId: 1,
    FullName: "Luffy",
    Discipline: "A",
  },
  {
    UserId: 2,
    FullName: "Zoro",
    Discipline: "A",
  },
  {
    UserId: 3,
    FullName: "Sanji",
    Discipline: "A",
  },
  {
    UserId: 4,
    FullName: "Nami",
    Discipline: "B",
  },
  {
    UserId: 5,
    FullName: "Chopper",
    Discipline: "B",
  },
  {
    UserId: 6,
    FullName: "Brook",
    Discipline: "B",
  },
  {
    UserId: 7,
    FullName: "Franky",
    Discipline: "C",
  },
  {
    UserId: 8,
    FullName: "Robin",
    Discipline: "C",
  },
  {
    UserId: 9,
    FullName: "Usopp",
    Discipline: "C",
  },
  {
    UserId: 10,
    FullName: "Kaido",
    Discipline: "D",
  },
  {
    UserId: 11,
    FullName: "BBeard",
    Discipline: "D",
  },
  {
    UserId: 12,
    FullName: "Bigmom",
    Discipline: "D",
  },
  {
    UserId: 13,
    FullName: "Shanks",
    Discipline: "D",
  },
];
const ongoingProject = [
  {
    ProjectId: 1,
    ProjectName: "Empires",
    TotalHours: TimeSheet[5],
    StartDate: new Date(2023, 1, 17),
    TargetDate: new Date(2025, 1, 17),
    ListMember: projectUsers6,
    Tasks: "20",
    Completion: "80",
  },
  {
    ProjectId: 2,
    ProjectName: "Vinpearl",
    TotalHours: TimeSheet[6],
    StartDate: new Date(2023, 8, 17),
    TargetDate: new Date(2025, 8, 17),
    ListMember: projectUsers7,
    Tasks: "15",
    Completion: "40",
  },
  {
    ProjectId: 3,
    ProjectName: "NhaTrang",
    TotalHours: TimeSheet[7],
    StartDate: new Date(2023, 11, 17),
    TargetDate: new Date(2025, 11, 17),
    ListMember: projectUsers8,
    Tasks: "10",
    Completion: "10",
  },
];
export default ongoingProject;
