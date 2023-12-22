import TimeSheet from "./timeSheet";
import Task from "./task";

const projectUsers1 = [
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
];
const projectUsers2 = [
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
];
const projectUsers3 = [
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
const projectUsers4 = [
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
];
const projectUsers5 = [
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
const projects = [
  {
    ProjectId: 1,
    ProjectName: "Landmark",
    TotalHours: TimeSheet[0],

    Tasks: { Task },
    FloorAreas: 10000,
    ListMember: projectUsers1,

    StartDate: new Date(2023, 1, 17),
    CompletedDate: new Date(2023, 11, 17),
    TargetDate: new Date(2023, 12, 17),
  },
  {
    ProjectId: 2,
    ProjectName: "Bitexco",
    TotalHours: TimeSheet[1],
    Tasks: { Task },
    FloorAreas: 8000,
    ListMember: projectUsers2,

    StartDate: new Date(2022, 2, 17),
    CompletedDate: new Date(2023, 7, 17),
    TargetDate: new Date(2023, 5, 27),
  },
  {
    ProjectId: 3,
    ProjectName: "Vinhome",
    TotalHours: TimeSheet[2],
    Tasks: { Task },
    FloorAreas: 14000,
    ListMember: projectUsers3,

    StartDate: new Date(2023, 3, 17),
    CompletedDate: new Date(2023, 12, 17),
    TargetDate: new Date(2023, 10, 7),
  },
  {
    ProjectId: 4,
    ProjectName: "Hanhouse",
    TotalHours: TimeSheet[3],
    Tasks: { Task },
    FloorAreas: 1000,
    ListMember: projectUsers4,

    StartDate: new Date(2023, 4, 17),
    CompletedDate: new Date(2023, 9, 17),
    TargetDate: new Date(2023, 11, 2),
  },
  {
    ProjectId: 5,
    ProjectName: "Supvilla",
    TotalHours: TimeSheet[4],
    Tasks: { Task },
    FloorAreas: 20000,
    ListMember: projectUsers5,

    StartDate: new Date(2022, 5, 17),
    CompletedDate: new Date(2023, 11, 17),
    TargetDate: new Date(2023, 12, 17),
  },
];

export default projects;
