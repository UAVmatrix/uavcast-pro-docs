## Contributing

- Install ['MkDocs'](https://www.mkdocs.org/#installation) on your computer.
- Fork the uavcast-pro-docs to your git account.
- Clone your respository `git clone https://github.com/your_account_name/uavcast-pro-docs.git`
- Install Material Theme `pip install mkdocs-material`
- create a new branch for your changes `git checkout -b name_of_your_new_branch`
- In the root folder, open a new terminal and type `mkdocs serve`, this will start the dev server, can access the docs page by typing `localhost:8000` in chrome.

##Push changes

- `git add .`
- `git commit -m "name_your_changes"`
- `git push origin your_branch_name`

## Merge Request

- When you want to merge your changes with master, fill in a new merge request.

## Build
- `mkdocs build` will build the site and output it to a directory called `site`.
- `mike deploy 4.x` will deploy the site to the `4.x` branch of the `uavcast-pro-docs` repository.
- `mike deploy 5.x` will deploy the site to the `5.x` branch of the `uavcast-pro-docs` repository.