import DefaultLayout from '../layouts/DefaultLayout';
import Timetable from '../components/blocks/Timetable';
import Loader from '../components/elements/Loader';

import { useAuth } from '../hooks/authHooks';
import { useEndpoint } from '../hooks/dataHooks';

import type { TimetableResponse } from '../typings/apiTypes';

const TimetablePage = (): JSX.Element => {
  const { auth } = useAuth();
  const { data, loading } = useEndpoint(auth, '/timetable/permanent');

  return (
    <DefaultLayout>
      <h1>Timetable</h1>
      {data ? <Timetable timetable={data as TimetableResponse} /> : null}
      {loading ? <Loader /> : null}
    </DefaultLayout>
  );
};

export default TimetablePage;
