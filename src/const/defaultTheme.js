import { createTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';

const palette = createPalette({
  primary: {
    main: '#9c27b0',
    light: '#d3d3d3',
    contrastText: '#808080',
    white: '#fff',
  },
});

const defaultTheme = createTheme({
  palette,
});

export default defaultTheme;
