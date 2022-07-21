// Common Styles that can be used anywhere via this.context.h1, for example. 
// Can use colors from colorThemes.js ! 

const FONT_BOLD = "nunito-bold"
const FONT = 'nunito'

export const getStyles = (colors) => {
    return {
        h1: {
            fontSize: 25,
            color: colors.primaryText,
        },
    
        h2: {
            fontSize: 17,
            color: colors.primaryText,
            fontFamily: FONT
        },
    
        h3: {
            fontSize: 12,
            color: colors.primaryText,
            fontFamily: FONT,
        },
    
        bold: {
            fontFamily: FONT_BOLD
        },
    
        pad: {
            marginVertical: 15
        },
    
        textInput: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.07)',
            padding: 10,
            marginVertical: 15,
            width: "100%",
            borderRadius: 7,
            textAlign: 'left',
        },
    
        pastelsArray: [
            "#D8E3FF",
            "#F4ECCE",
            "#E3D9D2",
            "#F1DEDE"
        ], 
    }
}