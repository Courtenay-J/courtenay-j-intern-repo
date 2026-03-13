# Creating and Reviewing Pull Requests
## Notes:
(From [Beginner's Guide to GitHub](https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/))
- **Pull request:** proposal to merge a set of changes from one branch into another
- **Source branch:** the one with your changes
- **Target branch:** where you're trying to move your stuff to

Writing comments into commits via command line:
`git commit -m "title" -m "description"`

## Reflections - Pull Requests
### Why are PRs important in a team workflow?
Branches allow team members to work on multiple aspects of the project simultaneously. Pull requests allow them to merge their changes with another branch (including the main one) once they're complete.

Pull Requests do not automatically take effect. Instead, they first check for conflicts between files and alert team members if some are found. This allows team members to pick-and-choose which changes to keep and which to discard. This minimises the chance of accidentally saving over another person's work. (Changes can always be reverted, but it's still better to avoid that where possible.)

### What makes a well-structured PR?
Smaller pull requests are easier to review and merge. A lot of files being changed at once means a lot of potential bugs or conflicts. It also makes it somewhat more difficult to track or reverse the changes of a single function, if it's buried inside larger updates.

Titles of pull requests should be clear and to the point. Descriptions should include the purpose of the pull request, a summary of key changes, and links to extra context (issues, tickets, etc)

### What did you learn from reviewing an open-source PR?
The better PRs in the [linked open-source repo](https://github.com/facebook/react/pulls) provides explanations in roughly the same format:

- Title: Descriptive, stating what issue is being updated and how
- Summary: A quick description of the changes being made and their purpose, and/or a link to an issue or ticket
- Problem: The bug or issue the commit is designed to fix
- Fix/Solution/Scope: How the code has been altered to fix the problem
- Testing: How the commit was tested and the results of it

This is a big repo with a lot of contributors. While the comments may seem lengthy (especially for 'smaller' updates), keeping all the information together in one place ensures anyone can quickly review the context and assess if the code does what it's supposed to do.

Some of the titles here are inconsistently formatted. e.g. some start with '[devtools]' or '[compiler]' to specify what aspect of the project it targets, but most do not. Labels seem to be inconsistently applied as well, which may cause organisational issues in the long run.

A few titles are just 'Bug Fix' - very uninformative.


## Reflections - Commit Messages

### What makes a good commit message?
- Starts with what type of change it is (e.g. add, remove, fix, test...)
- Is short, direct, and specific
- Avoids unnecessary punctuation, capitalisation, and filler words
- Uses imperative mood (written as if speaking a command)
- Follows team conventions. (I'm currently unsure of what style guide Focus Bear uses internally for git commits, if any. But in general if a project has an established outline for a commit message, I'll follow them.)

### How does a clear commit message help in team collaboration?
A good commit message quickly communicates to the team what the purpose of the commit is, without having to read the full description or examine the code. This is useful for both the team updated on what has been accomplished. It also gives code reviewers much-needed context, so they can double-check the commit does what the programmer thinks it does.

A good commit message also makes it easier to find a specific commit in the log. This is useful if a team needs to roll back an aspect of the project for any reason.


### How can poor commit messages cause issues later?
Basically the inverse of the above. If a comment is unclear, it becomes impossible to learn what has been added to the project without wasting time analysing the code. Code reviewers would have to speak directly to the team member who made the commit to learn what the code is *supposed* to be doing.

The more poorly-commented updates, the harder it becomes to find anything, and the longer it will take to roll things back. 