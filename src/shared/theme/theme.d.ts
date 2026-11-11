import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    shape: {
      borderRadius: number;
      borderRadiusSm: number;
    };
  }
  interface ThemeOptions {
    shape?: {
      borderRadius?: number;
      borderRadiusSm?: number;
    };
  }
}
