import DefaultLayout from '../layouts/DefaultLayout';
import Loader from '../components/elements/Loader';

import { useAuth } from '../hooks/authHooks';
import { useEndpoint } from '../hooks/dataHooks';

const MarksPage = (): JSX.Element => {
  const { auth } = useAuth();
  const { data, loading } = useEndpoint(auth, '/marks');
  console.log(data);

  return (
    <DefaultLayout>
      <h1>Marks</h1>
      {data
        ? (data as any).Subjects?.map((entry: any) => (
            <>
              <p>{entry.Subject.Name}</p>
              <p>{entry.AverageText}</p>
            </>
          ))
        : null}
      {loading ? <Loader /> : null}
    </DefaultLayout>
  );
};

export default MarksPage;
