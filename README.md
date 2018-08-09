# newman-reporter-slack

A [newman](https://github.com/postmanlabs/newman) reporter for [slack](https://slack.com/)

## Installation
    npm install newman-reporter-slack.git

## Usage

### Set the environment variables.
```
SLACK_WEBHOOK_URL='https://hooks.slack.com/services/xxx/yyy/zzzzzzzzzzzz'
SLACK_CHANNEL='#slack-channel'
HEADER='newman run'
```

### Run newman test with the reporter option `-r slack`
    newman run my-collection.postman_collection.json -r cli,slack
