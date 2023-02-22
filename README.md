# Apply to be a subject matter specialist (prototype)

This prototype is based on the [GOV.UK prototype kit](https://github.com/alphagov/govuk-prototype-kit)

----

## Deployed versions

### Latest designs

URL: https://experts-prototype.herokuapp.com/
Password: ofqual

Link to application: https://experts-prototype.herokuapp.com/application 

Link to account area: https://experts-prototype.herokuapp.com/application-submitted-vtq

This version will deploy automatically from merges to main and is the 'latest' version.

### Admin settings

URL: https://experts-prototype.herokuapp.com/admin

The <code>Admin</code> section allows us to set up the prototype in different states.

### Design history

URL: https://dev.azure.com/ofqual/Ofqual%20IM/_wiki/wikis/Design%20and%20research/1117/External-experts

A history of the design of this service

----

## Installation

### Requirements

- node.js - version 14.x.x or later

### Install dependencies

`npm install`

### Start the app

`npm start`

Go to [http://localhost:3000]() in your browser.

## Some differences you might notice

The prototype uses a function called `decorateAttributes`. This is a helper that means we can write less code in nunjucks form macros. For example...

In the design system:

```
{{ govukInput({
  label: {
    text: "What is the name of the event?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "event-name",
  name: "event-name"
}) }}
```
The Prototyping kit tutorial suggests you display the data for this input like this:

`{{ data['event-name'] }}`

In this project we do it this way:

```
{{ govukInput({
  label: {
    text: "What is the name of the event?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
} | decorateAttributes(data, "data.eventName")) }}
```
Data is dispayed like this:

`{{ data.eventName }}`

This is the pattern to follow for all form inputs.

## Updating the data in the subjects search

`subjectSearchData2.json` contains the data which populates the subject search in the Areas that you can provide expertise on. The data is stored in an Excel spreadsheet but the autocomplete component needs it in json format. 

To convert the data, @JoeIngledew has built us a handy tool: https://github.com/JoeIngledew/csv-to-json
