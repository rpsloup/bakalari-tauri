import { TimetableResponse } from '../../../typings/apiTypes';

interface IProps {
  timetable: TimetableResponse;
}

const WEEK_DAYS: string[] = ['Po', 'Út', 'St', 'Čt', 'Pá'];

const Timetable = ({ timetable }: IProps): JSX.Element => (
  <table className="timetable">
    <tbody>
      {timetable.Days?.map((day, dayIndex) => (
        <tr className="day-row" key={dayIndex}>
          <td className="day-name">{WEEK_DAYS[day.DayOfWeek - 1]}</td>
          {timetable.Hours.map((hour, i) => {
            const targetHour = day.Atoms.find(
              (atom) => atom.HourId === hour.Id
            );
            if (!targetHour) return <td key={i}>&nbsp;</td>;

            const targetSubject = timetable.Subjects.find(
              (subject) => subject.Id === targetHour.SubjectId
            );
            if (!targetSubject) return <td key={i}>&nbsp;</td>;

            const targetTeacher = timetable.Teachers.find(
              (teacher) => teacher.Id === targetHour.TeacherId
            );
            const targetRoom = timetable.Rooms.find(
              (room) => room.Id === targetHour.RoomId
            );

            return (
              <td className="subject-cell" key={i}>
                <p className="subject-teacher">{targetTeacher?.Abbrev ?? ''}</p>
                <p className="subject-abbrev">{targetSubject.Abbrev}</p>
                <p className="subject-room">{targetRoom?.Abbrev ?? ''}</p>
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Timetable;
