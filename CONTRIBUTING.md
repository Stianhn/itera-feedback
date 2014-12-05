<!---
Copyright (C) 2014 Jonas Amundsen, Trygve Aaberge

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->

Contributing
============

## Table of contents

* [Language](#language)
* [Code style](#code-style)
* [Git commits](#git-commits)
* [Git branching style](#git-branching-style)
* [Reviewing pull requests](#reviewing-pull-requests)
* [Collaborating on branches](#collaborating-on-branches)

## Language

The language in the code (names, comments etc.) as well as the language in git
(commit messages, pull requests etc.) should always be English. In addition,
every name should be deliberate and carefully weighed.

## Code style

All the code in the project must adhere to the linting rules that we have
specified. Some notable rules are 2-space indenting (absolutely no tab
characters ever), every file must end with a newline and no trailing
whitespace. Run `grunt eslint` to check for errors.

## Git commits

The commits should be short and specific to one task. The saying for git is:
Commit early, commit often.

If you have changed lots of things, and want to commit parts of it, you can use
`git add -p` to choose which parts you want to commit.

The commit messages consists of a summary, which is the first line of the
commit message and a detailed text. The summary and the detailed text should be
separated by a single blank line.

The summary should briefly explain what the commit does. It should be about 50
characters at most.

If everything the commit does is not clear by the summary, you should also
write a detailed text. This text should make it easy for others to understand
what the commit does. It may also include why and how something is done, if not
obvious. The text should be wrapped to max 72 characters per line.

## Git branching style

This project follows the [Github Flow][github-flow] branching model. This means
that we have one main branch, namely `master`, and this branch is always
deployable. Any work on new features is done on separate branches, created off
of `master`.

[github-flow]: http://scottchacon.com/2011/08/31/github-flow.html

## Reviewing pull requests

Submitted pull requests should be reviewed and tested by others. Therefore, you
should generally not merge your own pull requests.

To review a pull request, you check out the branch and check that all the tests
run, using `grunt eslint`. The code should be sufficiently tested in order to
be accepted. Any major change in behavior should also be manually tested.
Additionally, the code itself should obviously be reviewed.

When finished, you should merge the pull request into master. If there are no
conflicts, you may use the merge button in the pull request. Note however that
this will use your primary email address on Github, which may not be the one
you want to use.

To merge from the command line, you check out develop and run `git merge
--no-ff <branch-name>`. If there are conflicts, you should resolve those before
committing.

Note that the `--no-ff`-option is important here. If there are no commits in
develop after the branch was created and `--no-ff` is not used, the merge will
be a fast-forward, which means that the commits will just be pushed onto
develop, without a merge commit. We want to preserve information about which
feature branches the commits comes from, so this is not desirable.

## Collaborating on branches

When multiple persons commit to the same branch, you may end up with unwanted
merge commits. Normally, you create feature branches which is merged into
develop, and this will not be a problem in this case. However, if you commit
directly to develop, or multiple persons collaborate on the same feature
branch, you may have this problem.

The problem occurs when you pull a branch, commit something, and before you
push, someone else has pushed a change to the same branch. If you try to push,
it will be rejected. In this case, you should do `git pull -r` to get the new
changes, and rebase your own changes on top of this. This will put your commits
"on top of" the new commits, so you can push your commits.

If you instead to a normal pull, the commits will be merged onto your branch,
and you will end up with a merge commit. This merge commit gives us no useful
information, so it is just noise which is why we want to avoid it.
