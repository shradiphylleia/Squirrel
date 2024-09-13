# Squirrel
Squirrel-the seed exchange initiative

Created using:HTML,CSS,JavaScript

Working on backend.
1. User login using auth0
2. user validation
3. ability to add projects
4. ability to see the contribution-dashboard.


The aim is to create a full stack website which enables people to share native seed species amongst each other.


# CI/CD and GitHub Actions:
the project now will utilize github actions as of 13 sept,2024.
(should be taken with a pinch of salt:beginner. suggestions welcome)

workflows should be saved in .github/workflows.filename should be descriptive of what the file serves with the extension .yml or yaml
yaml is the markup language for configuration file.

* the first GitHub actions was setup.will be triggered on each pull request.
* task at hand:
  - setting up labels each time a new issue is opened
  - building and testing pull requests 


- the workflow must contain atleast one event which will trigger the workflow.workflows are reusable.
  - events could be push made to the main branch,issue opened or a release created.
  - to trigger an event use the on keyword
- one or more jobs, which will have a series of steps and finally will be exceuted on a runner machine.jobs will run in parallel by default.use needs keyword for dependent jobs.
- the step will run a script or an action 

