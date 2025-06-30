import 'styled-components';
import { lightTheme } from '@/constants/theme';

type Theme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
} 