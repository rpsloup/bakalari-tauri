import PageNavigation from '../components/blocks/PageNavigation';

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: IProps): JSX.Element => (
  <div className="default-layout">
    <PageNavigation />
    <div className="page-content">{children}</div>
  </div>
);

export default DefaultLayout;
