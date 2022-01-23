# Developer Guide

## Codebase
* Express nodejs (Typescript)
* Typeorm && sqlite3 database
* React (Typescript)
* Semantic-ui-react
* graphql / type-graphql && codegen


## Prerequisites

These packages needs to be installed

* Docker
* Docker Compose
* Visual Studio Code

## Github repository  
[https://github.com/sinamics/uavcast](https://github.com/sinamics/uavcast)

## Open the repo with Visual Studio Code

Upon opening, you should be prompted to open the project in a **remote container**. This will build a container on top of the base uavcast container with all the development dependencies installed. This ensures everyone uses a consistent development environment without the need to install any dependencies on your host machine.

If vscode does not start the remote container automatically, use hotkeys: <kbd>Ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> and select <kbd>Remote-Container: Rebuild and Reopen container</kbd>

After starting the container for the first time, it will install some additional package, give it few minutes to complete.
![install](https://i.ibb.co/6XWg1sV/Skjermbilde-2022-01-19-202346.png)

## Run uavcast from the command line

VSCode will start the docker compose file for you and open a terminal window connected to `/app/uavcast` folder.

:heavy_minus_sign: Run `cd backend && npm install`\
:heavy_minus_sign: Run `cd frontend && npm install`\
:heavy_minus_sign: Run `npm start` from the project root to start both frontend & backend.

## Supervisor

Uavcast uses a supervisor container to manage the application update ect. Supervisor is not needed for development.
To run the supervisor, type `cd supervisor && npm install && npm start` from the uavcast project root.

## Teardown

After closing VSCode, you may still have containers running. To close everything down, just run\
`docker-compose down -v` to cleanup all containers.

## Making changes

Do not make large sweeping changes. Open a discussion on GitHub for any large or architectural ideas.
Ensure lint passes. `npm run lint` This command will ensure basic conformance to styles, applying as many automatic fixes as possible, including Prettier formatting.

## Build docker locally

Use these commands in the project root (!not in the vscode developer container).
Type `./compile_release.sh` + arguments to genereate local docker image, or you can publish to your own container registery.

Example external publish:

``` js
./compile_release.sh --version 5.x.x --build_gcc --build_frontend --build_backend --docker_publish
```

Example local build:

``` js
./compile_release.sh --version 5.x.x --build_gcc --build_frontend --build_backend --docker_local
```

## Images

![Map](https://i.ibb.co/1zZTysD/Skjermbilde-2022-01-19-204037.png)
![Dashboard](https://i.ibb.co/7CpNwQS/Skjermbilde-2022-01-19-204107.png)

## Copyright and License

uavcast is provided under the [GNU Affero General Public License v3.0](https://github.com/sinamics/uavcast/blob/main/LICENSE).