// styles/theme.ts　MUIのテーマを定義
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#58495d' },
    secondary: { main: '#ff4081' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
  },
});

export default theme;
