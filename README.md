# Fearless Alexa Skill

This is a custom Alexa skill for helping people discover and learn about Fearless and its culture.  The skill is currently in Development stage and is deployed in an AWS Lambda function.

## Local Development

### Environment Setup
This skill uses the Ask CLI to enable local development and simulation.  To do this, the following needs to be installed on your workstation:
- NodeJS
- AWS CLI

Then, configure the AWS CLI with your AWS credentials.  This will allow the Ask CLI to interact with AWS resources, such as deploying the skill to the lambda function.

Next, install the Ask CLI globally by running `npm install -g ask-cli`.

Finally, `cd` into the `lambda` folder in this project.  Run `npm install` to install all JavaScript dependencies for this project.

### Run Unit Tests
This project is currently using a custom library for automating Alexa skills called `ask-sdk-test`.  Run all tests by running `npm run test` from within the `lambda` directory.  The test code can be found in the `lambda/test` directory.

### Building the Skill for Deployment
The source code for this skill is written in TypeScript.  This needs to be compiles to JavaScript in order to work properly in the Lambda function.  To do this, run `npm run build` in the `lambda` directory.  This will create a build directory that will be referenced by the Ask CLI.  

### Running the Simulator
The Ask CLI has a built-in simulator that creates a chat-like session with an Alexa service.  This session can be opened against the deployed skill, or your local one.  To simulate the deployed skill, simply run `ask dialog` in the root of this project.  To simulate the local skill that may have undeployed changes, first make sure to build the project as specified above.  Then, open two terminals and set their working directories to the root of this project.  In one terminal, run `ask run`.  This will start a local Alexa service using the compiled JavaScript code.  In the second terminal, run `ask dialog` again.  The Ask CLI will be smart enough to point to the local service instead of the deployed one.

## Deploying the Code
Manual deployments are done by running `ask deploy`.  This will package up all necessary files, and upload them to the Lambda function specified in `skill-package/skill.json`.  

## CI/CD
While manual deployments are possible, we encourage deployments do be done using a CI/CD pipeline.  GitHub Actions have been configured for this project.  When a push is made to the `main` branch, GitHub will kick off a process to run all unit tests, compile the code to JavaScript, and deploy them.  This should be the default method for deployments, especially for production deployments.