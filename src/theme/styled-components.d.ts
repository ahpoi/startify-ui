import 'src/theme/styled-components';
import {AppTheme} from "..";

declare module "styled-components" {

  export interface DefaultTheme extends AppTheme {}

}
