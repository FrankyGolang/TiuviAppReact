'use-strict'
import callLocalStorage from "../callLocalStorage";



const userOptionsDefault = {

    modeTheme: "light",

};

const userOptions = {

    getMode: () => {

        let modeThemeString = callLocalStorage.getKey('userOptions', 'modeTheme');

        if ( !modeThemeString) {

            callLocalStorage.setObjectDefer('userOptions', userOptionsDefault)

            return userOptionsDefault.modeTheme
        }
       
        userOptionsDefault.modeTheme =  modeThemeString

        return userOptionsDefault.modeTheme;
    },

    setMode: async (modeTheme) => {

        userOptionsDefault.modeTheme =  modeTheme

        callLocalStorage.setObjectDefer('userOptions', userOptionsDefault)

    },

    modeTheme: () =>  userOptionsDefault.modeTheme,

}

export default userOptions;