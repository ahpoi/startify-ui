import React from 'react';
import {StoriesDefaultThemeProvider} from "../stories/utils/stories-container";

export const decorators = [(Story) => <StoriesDefaultThemeProvider><Story/></StoriesDefaultThemeProvider>];
