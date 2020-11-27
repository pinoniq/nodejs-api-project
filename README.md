# Simple nodejs example for training purposes

## p.sh development
1. create a free trial account on platform.sh
2. clone this repo
3. `git remote delete origin`: I don't want your commits
4. Copy the git remote from platform.sh
5. `git remote add origin $PLATFORMSH_REMOTE`
6. `git push`
7. profit

## Local development
Get a mongo up and running somewhere.

e.g. use docker:
* `docker run -d -p 27017:27017 mongo:3.6`

The hot-reload server doesn't work yet due to it running on a different port.
I was to lazy to add environment variables for the host-endpoint.
Mostly in app/src/Voter/index.js

Feel free to add it however!
