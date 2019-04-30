# newman-reporter-slack

A [newman](https://github.com/postmanlabs/newman) reporter for [slack](https://slack.com/)

## Installation
    npm install newman-reporter-slack

## Usage

### Set the reporter options

Reporter option can be set as environment variables or from reporter options arguments
```
export SLACK_WEBHOOK_URL='https://hooks.slack.com/services/xxx/yyy/zzzzzzzzzzzz'
export SLACK_CHANNEL='#slack-channel'
export TITLE='newman run title'
export HEADER='newman run header'
```

### Run newman test with the reporter option `-r slack`
    newman run my-collection.postman_collection.json -r cli,slack --reporter-slack-channel '#slack-channel' --reporter-slack-webhook-url 'https://hooks.slack.com/services/xxx/yyy/zzzzzzzzzzzz'
