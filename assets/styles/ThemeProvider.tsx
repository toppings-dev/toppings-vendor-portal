import * as React from 'react';
import {useColorScheme} from 'react-native-appearance';
import {lightColors, darkColors} from './colorThemes';
import {getStyles} from './commonStyles';

const styles: any = {};

export const ThemeContext = React.createContext({
    isDark: true,
    colors: lightColors,
    styles: styles,
    setScheme: (scheme: any) => {},
});

export const ThemeProvider = (props) => {
    // Getting the device color theme, this will also work with react-native-web
    const colorScheme = useColorScheme(); // Can be dark | light | no-preference

    /*
    * To enable changing the app theme dynamicly in the app (run-time)
    * we're gonna use useState so we can override the default device theme
    */
    const [isDark, setIsDark] = React.useState(colorScheme === "dark");

    // Listening to changes of device appearance while in run-time
    React.useEffect(() => {
        setIsDark(colorScheme === "dark");
    }, [colorScheme]);

    const defaultTheme = {
        isDark,
        // Chaning color schemes according to theme
        colors: isDark ? darkColors : lightColors,
        // Overrides the isDark value will cause re-render inside the context.  
        setScheme: (scheme) => setIsDark(scheme === "dark"),
        styles: getStyles(isDark ? darkColors : lightColors)
    };

  return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);

export const Theme = () => {
    // const {colors} = useTheme();
    const colors = {text: "TODO"}
    // console.log("INSIDE THEME")
    return colors.text;
}