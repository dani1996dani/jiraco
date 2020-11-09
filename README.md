# jiraco
A tool that auto signs commits with your jira ticket name.

# How to use?
Clone the repository.

`cd` into the project.

Run `npm link`. The `jiraco` command will now be available globally.

# .jiraco File

Create a `.jiraco` file in your project (jiraco will use the closest file it can find while searchin upwards in the directory tree).
It should be in a valid json format.

An example .jiraco file:

```
{
  "jiraTicketKey": "JIC",
  "searchUntilFound": "/",
  "emojiFaction": "animals"
}
```
### Parameters 
*jiraTicketKey* - The key jira appends to your project's tickets. For example, for a ticket id "ABS-123", the *jiraTicketKey* value should be "ABS".
*searchUntilFound* - jiraco parses your branch name to automatically add the ticket id to your commit message. it will use the value from *jiraTicketKey* (including)
to *searchUntilFound* (excluding).
