import { TimetableResponse } from '../../../typings/apiTypes';

interface IProps {
  timetable: TimetableResponse;
}

const Timetable = ({ timetable }: IProps): JSX.Element => (
  <table className="timetable">
    <tbody>
      {timetable.Days.map((day, dayIndex) => (
        <tr key={dayIndex}>
          {day.Atoms.map((atom, atomIndex) => (
            <td key={atomIndex}>{atom.SubjectId}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Timetable;
