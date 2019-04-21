export default class Logger {
    public static logger = require('simple-node-logger').createSimpleLogger('./logfile.log')

    public static trace(data: any): void {
        this.logger.log('trace', data)
    }

    public static notify(data: any): void { 
        this.logger.info(data)
    }
}