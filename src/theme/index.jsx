import { rgb, rgba } from 'polished'

export default {
  borderRadius: {
    bit: '4px',
    byte: '8px',
    kilo: '12px',
    mega: '16px',
    giga: '24px',
    tera: '32px',
    peta: '40px',
    exa: '48px',
    zetta: '56px',
  },

  colors: {
    main: {
      accentBlue: {
        hex: '#4360DF',
        rgb: rgb(67, 96, 223),
        title: 'Accent Blue',
      },
      lightBlue: {
        hex: '#ECEFFC',
        rgb: rgb(236, 239, 252),
        title: 'Light Blue',
      },
      black: {
        hex: '#000000',
        rgb: rgb(0, 0, 0),
        title: 'Black',
      },
      darkGrey: {
        hex: '#939BA1',
        rgb: rgb(147, 155, 161),
        title: 'Dark Grey',
      },
      lightGrey: {
        hex: '#EEF2F5',
        rgb: rgb(238, 242, 245),
        title: 'Light Grey',
      },
      green: {
        hex: '#44D058',
        rgb: rgb(68, 208, 88),
        title: 'Green',
      },
      red: {
        hex: '#FF2D55',
        rgb: rgb(255, 45, 85),
        title: 'Red',
      },
      white: {
        hex: '#FFFFFF',
        rgb: rgb(255, 255, 255),
        title: 'White',
      },
    },
    shades: {
      black10: {
        hex: '#000000',
        rgb: rgba(0, 0, 0, 0.1),
        title: '10% of Black',
      },
      darkGrey40: {
        hex: '#939BA1',
        rgb: rgba(147, 155, 161, 0.4),
        title: '40% of Dark Grey',
      },
      white70: {
        hex: '#FFFFFF',
        rgb: rgba(255, 255, 255, 0.7),
        title: '70% of White',
      },
      white40: {
        hex: '#FFFFFF',
        rgb: rgba(255, 255, 255, 0.4),
        title: '40% of White',
      },
      white10: {
        hex: '#FFFFFF',
        rgb: rgba(255, 255, 255, 0.1),
        title: '10% of White',
      },
    },
  },

  spacings: {
    bit: '4px',
    byte: '8px',
    kilo: '12px',
    mega: '16px',
    giga: '24px',
    tera: '32px',
    peta: '40px',
    exa: '48px',
    zetta: '56px',
  },

  fontSizes: {
    xs: '10px',
    s: '12px',
    m: '15px',
    l: '17px',
    xl: '22px',
  },

  fontWeights: {
    normal: 400,
    semi: 500,
    bold: 700,
  },

  lineHeights: {
    small: '120%',
    normal: '140%',
  },
}
