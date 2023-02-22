import DefaultLayout from '../layouts/DefaultLayout';
import Timetable from '../components/blocks/Timetable';

const TimetablePage = (): JSX.Element => (
  <DefaultLayout>
    <h1>Timetable</h1>
    <Timetable />
  </DefaultLayout>
);

export default TimetablePage;
