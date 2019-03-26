// const theme = 'dark';
const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : '#f7f7fc';
export const color2 = lightTheme ? 'white' : '#FCFFFC';
export const color3 = lightTheme ? 'black' : '#040F0F';

if (lightTheme) {
  document.body.style.background = '#f7f7fc';
  document.body.style.color = '#2D3A3A';
}

export const lightBackground = `background-color: ${color2}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const blueBackgroundColor = `background-color: ${color3};`;

export const fontColorYellow = `color: #12233c`;
export const fontColorWhite = `color: #f7f7fc`;
export const subtleBoxShadow = `box-shadow: 0px 0px 1px 0px ${lightTheme ? '#248232' : '#2D3A3A'}`;
export const blueBoxShadow = `box-shadow: 0px 0px 4px 2px #33658A`;
export const greenBoxShadow = `box-shadow: 0px 0px 2px 2px #248232`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #ee3c3d`;


export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em;';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';