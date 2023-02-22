import type { Hour, Day, Teacher, Subject, Room } from './timetableTypes';

export type APIEndpoint = string;

export type TimetableResponse = {
  Hours: Hour[];
  Days: Day[];
  Teachers: Teacher[];
  Subjects: Subject[];
  Rooms: Room[];
};
