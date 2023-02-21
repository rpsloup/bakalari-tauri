import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

interface IProps {
  name: IconName;
  type: IconPrefix;
}

library.add(fas);

const Icon = ({ name, type }: IProps): JSX.Element => (
  <div className="icon">
    <FontAwesomeIcon icon={[type, name]} />
  </div>
);

export default Icon;
