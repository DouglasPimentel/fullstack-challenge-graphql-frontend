import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
    borderRadius: string;
  }
}
