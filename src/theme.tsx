import { extendTheme, ThemeConfig } from '@chakra-ui/react'
// import { Button } from './theming/button'
import { Heading, Text } from './theming/textstyles'
import { BoxStyles } from './theming/boxstyles'

const fonts = { Heading: "Space Grotesk",
                Button: "Space Grotesk" }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const config : ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: 'rgba(5,21,52,0.99)',
    dark: 'rgba(5,21,52,0.88)',
    light : 'rgba(228,228,228,0.99)',
    accent: '#2491EB'
  },
  fonts,
  breakpoints,
  components: {
    // Button,
    Heading,
    Text,
  },
  layerStyles: BoxStyles,
})

export default theme
