# Introduction Review

## Theirs

```javaScript
$ node
Welcome to Node.js v14.19.1.
Type ".help" for more information.
> console.log('test')
test
undefined
> console.count()
default: 1
undefined
> console.log('test')
test
undefined
> console.count()
default: 2
undefined
> 
...
$ node -e "require('./test/count.js').count_console(); require('./test/count.js').get_mem();"
default: 1
default: 2
default: 3
default: 4
default: 5
default: 6
default: 7
default: 8
default: 9
default: 10
$ node -e "require('./test/count.js').get_mem();"
Free Memory: 36649132032 bytes, or 35790168 kilobytes, or 34951.3359375 megabytes, or 34.132164001464844 gigabytes
$
```

## Mine

```JavaScript
 review   main  node                    
Welcome to Node.js v12.22.9.
Type ".help" for more information.
> console.count()
default: 1
undefined
> console.count()
default: 2
undefined
> console.count()
default: 3
undefined
> console.read("hello, world")
Uncaught TypeError: console.read is not a function
> console.log("hello, world")
hello, world
undefined
> console.count()
default: 4
undefined
> 
...
node -e "for(let i = 0; i < 3; i++) {require('./count.js').count_console();}; require('./count.js').get_mem();"
default: 1
default: 2
default: 3
default: 4
default: 5
default: 6
default: 7
default: 8
default: 9
default: 10
default: 11
default: 12
default: 13
default: 14
default: 15
default: 16
default: 17
default: 18
default: 19
default: 20
default: 21
default: 22
default: 23
default: 24
default: 25
default: 26
default: 27
default: 28
default: 29
default: 30
Free Memory: 5121691648 bytes, or 5001652 kilobytes, or 4884.42578125 megabytes, or 4.769706726074219 gigabytes
```

## npm stuff

Run the following commands as your user, not root

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
## Close and reopen terminal before continuing
nvm install node  # Ouput A
node -v  # v22.4.0
npm -v  # 10.8.1
npm init  # Output B
npm i nodemon  # Output C
npm config ls -l  # Output D
```

### Output A `nvm install node`

```log
Downloading and installing node v22.4.0...
Downloading https://nodejs.org/dist/v22.4.0/node-v22.4.0-linux-x64.tar.xz...
####################################################################################################################################################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v22.4.0 (npm v10.8.1)
Creating default alias: default -> node (-> v22.4.0)
```

### Output B `npm init`

```log
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (review) 
version: (1.0.0) 
description: Trying out Node from Codecademy course
entry point: (app.js) 
test command: 
git repository: 
keywords: 
author: Jason Hardman
license: (ISC) 
About to write to /home/jasonhardman/Documents/CodingProjects/Beginning_NodeJS/I-Introduction/review/package.json:

{
  "name": "review",
  "version": "1.0.0",
  "description": "Trying out Node from Codecademy course",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jason Hardman",
  "license": "ISC"
}


Is this OK? (yes) 

```

### Output C `npm i nodemon`

```log
added 29 packages, and audited 30 packages in 2s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Output D `npm config ls -l`

```log
; "default" config from default values

_auth = (protected)
access = null
all = false
allow-same-version = false
also = null
audit = true
audit-level = null
auth-type = "web"
before = null
bin-links = true
browser = null
ca = null
cache = "/home/jasonhardman/.npm"
cache-max = null
cache-min = 0
cafile = null
call = ""
cert = null
cidr = null
color = true
commit-hooks = true
cpu = null
depth = null
description = true
dev = false
diff = []
diff-dst-prefix = "b/"
diff-ignore-all-space = false
diff-name-only = false
diff-no-prefix = false
diff-src-prefix = "a/"
diff-text = false
diff-unified = 3
dry-run = false
editor = "vi"
engine-strict = false
expect-result-count = null
expect-results = null
fetch-retries = 2
fetch-retry-factor = 10
fetch-retry-maxtimeout = 60000
fetch-retry-mintimeout = 10000
fetch-timeout = 300000
force = false
foreground-scripts = false
format-package-lock = true
fund = true
git = "git"
git-tag-version = true
global = false
global-style = false
globalconfig = "/home/jasonhardman/.nvm/versions/node/v22.4.0/etc/npmrc"
heading = "npm"
https-proxy = null
if-present = false
ignore-scripts = false
include = []
include-staged = false
include-workspace-root = false
init-author-email = ""
init-author-name = ""
init-author-url = ""
init-license = "ISC"
init-module = "/home/jasonhardman/.npm-init.js"
init-version = "1.0.0"
init.author.email = ""
init.author.name = ""
init.author.url = ""
init.license = "ISC"
init.module = "/home/jasonhardman/.npm-init.js"
init.version = "1.0.0"
install-links = false
install-strategy = "hoisted"
json = false
key = null
legacy-bundling = false
legacy-peer-deps = false
libc = null
link = false
local-address = null
location = "user"
lockfile-version = null
loglevel = "notice"
logs-dir = null
logs-max = 10
; long = false ; overridden by cli
maxsockets = 15
message = "%s"
node-options = null
noproxy = [""]
npm-version = "10.8.1"
offline = false
omit = []
omit-lockfile-registry-resolved = false
only = null
optional = null
os = null
otp = null
pack-destination = "."
package = []
package-lock = true
package-lock-only = false
parseable = false
prefer-dedupe = false
prefer-offline = false
prefer-online = false
prefix = "/home/jasonhardman/.nvm/versions/node/v22.4.0"
preid = ""
production = null
progress = true
provenance = false
provenance-file = null
proxy = null
read-only = false
rebuild-bundle = true
registry = "https://registry.npmjs.org/"
replace-registry-host = "npmjs"
save = true
save-bundle = false
save-dev = false
save-exact = false
save-optional = false
save-peer = false
save-prefix = "^"
save-prod = false
sbom-format = null
sbom-type = "library"
scope = ""
script-shell = null
searchexclude = ""
searchlimit = 20
searchopts = ""
searchstaleness = 900
shell = "/usr/bin/zsh"
shrinkwrap = true
sign-git-commit = false
sign-git-tag = false
strict-peer-deps = false
strict-ssl = true
tag = "latest"
tag-version-prefix = "v"
timing = false
umask = 0
unicode = true
update-notifier = true
usage = false
user-agent = "npm/{npm-version} node/{node-version} {platform} {arch} workspaces/{workspaces} {ci}"
userconfig = "/home/jasonhardman/.npmrc"
version = false
versions = false
viewer = "man"
which = null
workspace = []
workspaces = null
workspaces-update = true
yes = null

; "cli" config from command line options

long = true
```
