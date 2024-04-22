// theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          border: 0,
          outline: 0,
        },
      },
    },
  },
});

export default theme;
