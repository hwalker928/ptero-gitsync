# ptero-gitsync

ptero-gitsync is a GitHub Action for synchronizing a GitHub repository with a Pterodactyl® Panel server.

**Note:** ptero-gitsync is not affiliated with the Pterodactyl® Project.

## Usage

```yml
name: Sync with Panel

on:
  push:
    branches:
      - master

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: hwalker928/ptero-gitsync@v1.0
        with:
          panel-url: ${{ secrets.PANEL_URL }}
          api-key: ${{ secrets.API_KEY }}
          server-id: ${{ secrets.SERVER_ID }}
```

## Getting Started

1. Setup GitHub support for your Bot Hosting server, please check with your hosting provider for more information, however this is typically done via the Startup tab.
2. Create an API key for your account, which can be done via `/account/api`.
3. Add 3 secrets to your repository, `PANEL_URL`, `API_KEY`, and `SERVER_ID`. You can do this on GitHub via the Settings tab, then Secrets, then Actions. The `PANEL_URL` is the URL to your panel, the `API_KEY` is the API key you created in step 2, and the `SERVER_ID` is the ID of the server you want to sync with, which can be found in the URL of your server's console: `/server/{id}`.
4. Add the above workflow to your repository (`/.github/workflows/my_workflow.yml`), and push to master (if using a different branch, ensure to update the workflow).
