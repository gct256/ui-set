import { configure } from '@storybook/react';

import '../css/ui-set.css';
import '../stories/utils/example.css';

configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
