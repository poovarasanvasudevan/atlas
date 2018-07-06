const SMTPServer = require('smtp-server').SMTPServer;
const Config = use('Config')
const Logger = use('Logger')

const SMTP_OPTION = Config.get('smtp.option')
const server = new SMTPServer(SMTP_OPTION);
server.listen(465);

Logger.info('Server Started')
server.on('error' , err => {
  Logger.error(err)
})
