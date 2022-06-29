'use-strict'
import callLocalStorage from "../callLocalStorage";
import timeunix from '../timeunix.js'


const viewerOptionDefault = {
    access: false,
    firstDay: Date.now(),
    nowDay: Date.now(),

    startViewer: Date.now(),
    timeViewer: 600,
    endViewer: 0,

}


const viewerOptions = {
    ...timeunix,

    getKeyViewer: function (keyViewer) {

        let viewerNumber = callLocalStorage.getKeyNumber('viewerOptions', keyViewer);

        console.log(viewerOptionDefault)

        if (!viewerNumber) {

            callLocalStorage.setObjectDefer('viewerOptions', viewerOptionDefault)

            return viewerOptionDefault[keyViewer]
        }

        viewerOptionDefault[keyViewer] = viewerNumber

        return viewerOptionDefault[keyViewer];
    },


    getEndViewer: function () {

        return this.getKeyViewer('endViewer')

    },

    getTimeViewer: function () {

        return this.getKeyViewer('timeViewer')

    },

    getAccess: function () {

        let viewerBoolean = callLocalStorage.getKeyBoolean('viewerOptions', 'access');

        if (!viewerBoolean) {

            let timeViewer = this.getTimeViewer()

            if(timeViewer < 0 ) return false
        }

        viewerOptionDefault.access = viewerBoolean

        return viewerOptionDefault.access;

    },

    setKeyViewer: async (keyViewer, value) => {

        viewerOptionDefault[keyViewer] = value

        callLocalStorage.setObjectDefer('viewerOptions', viewerOptionDefault)

    },

    access: () => viewerOptionDefault.access,
    firstDay: () => viewerOptionDefault.firstDay,
    nowDay: () => viewerOptionDefault.nowDay,
    startViewer: () => viewerOptionDefault.startViewer,
    timeViewer: () => viewerOptionDefault.timeViewer,
    endViewer: () => viewerOptionDefault.endViewer,
    
}

export default viewerOptions;