const fs = require('fs');
require('dotenv').config(); // to access env variables

const envVariables = {
'color-black': process.env.VUE_APP_COLOR_BLACK,
'color-grey': process.env.VUE_APP_COLOR_GREY,
'color-light-black': process.env.VUE_APP_COLOR_LIGHT_BLACK,
'color-light-blue': process.env.VUE_APP_COLOR_LIGHT_BLUE,
'color-white': process.env.VUE_APP_COLOR_WHITE,
'color-blue': process.env.VUE_APP_COLOR_BLUE,
'color-disabled': process.env.VUE_APP_COLOR_DISABLED,
'color-bg': process.env.VUE_APP_COLOR_BG
};

const scssContent = Object.entries(envVariables)
  .map(([key, value]) => `$${key}: ${value};`)
  .join('\n');

fs.writeFileSync('./source/scss/config/_colors.scss', scssContent);
