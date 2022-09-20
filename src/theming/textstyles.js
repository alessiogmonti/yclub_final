import { mode } from "@chakra-ui/theme-tools"

export const Heading = {
    variants: {
        'Landing' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: ['80px', null, null, null, null],
            lineHeight: ['80px', null, null, null, null],
            letterSpacing: '-2%',
            textTransform: 'uppercase',
            color: mode( 'dark', 'light' ) (props)
        }),
        'SubLanding' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'medium',
            fontSize: ['45px', null, null, null, null],
            lineHeight: ['55px', null, null, null, null],
            letterSpacing: '4%',
            textTransform: 'uppercase',
            color: 'light'
        }),
        'Menu' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'medium',
            fontSize: ['50px', null, null, null, null],
            lineHeight: ['55px', null, null, null, null],
            letterSpacing: '20%',
            textTransform: 'uppercase',
            color: mode( 'dark', 'light' ) (props)
        }),
        'SubMenu' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'regular',
            fontSize: ['40px', null, null, null, null],
            lineHeight: ['45px', null, null, null, null],
            letterSpacing: '20%',
            textTransform: 'none',
            color: mode( 'dark', 'light' ) (props)
        })
    }
}

export const Text = {
    variants: {
        'main-link' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: ['39px',null,null,null,null],
            lineHeight: '44px',
            color: mode( 'dark', 'light') (props)
        }),

        'form' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: ['28px', null, null, null, null],
            lineHeight: '28px',
            color: mode( 'light', 'dark') (props)
        })
    }
}