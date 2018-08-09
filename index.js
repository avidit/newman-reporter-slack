let {
    IncomingWebhook
} = require('@slack/client');
let markdowntable = require('markdown-table');
let prettyms = require('pretty-ms');

const webhook_url = process.env.SLACK_WEBHOOK_URL || '';
const channel = process.env.SLACK_CHANNEL || '';
const header = process.env.HEADER || 'newman run';


class SlackReporter {
    constructor(emitter, reporterOptions, options) {
        const backticks = '```';

        emitter.on('done', (err, summary) => {
            let run = summary.run;
            let data = []
            let headers = [header, 'total', 'failed'];
            let arr = ['iterations', 'requests', 'testScripts', 'prerequestScripts', 'assertions'];

            data.push(headers);
            arr.forEach(function (element) {
                data.push([element, run.stats[element].total, run.stats[element].failed]);
            });

            let duration = prettyms(run.timings.completed - run.timings.started);
            data.push(['------------------', '-----', '-------']);
            data.push(['total run duration', duration]);

            let table = markdowntable(data);
            let text = `${backticks}${table}${backticks}`

            let msg = {
                channel: channel,
                text: text
            }

            const webhook = new IncomingWebhook(webhook_url);
            webhook.send(msg, (error, response) => {
                if (error) {
                    return console.log(error.message);
                }
                console.log(response);
            });
        });
    }
}

module.exports = SlackReporter;
