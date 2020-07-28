import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      elements: string;

      background: string;
      text: string;
      input: string;
      select: string;
      shadow: string;
    };
  }
}
