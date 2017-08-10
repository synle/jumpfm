import { Plugin } from './Plugin'

import * as moment from 'moment'

class PluginClock extends Plugin {
    onLoad(): void {
        setInterval(() =>
            this.jumpFm.statusBar.msg('clock',
                moment(Date.now()).format('hh:mm:ss')
            )
            , 1000
        )
    }
}

module.exports = PluginClock