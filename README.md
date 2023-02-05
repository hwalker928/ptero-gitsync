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
      - uses: hwalker928/ptero-gitsync@v1
        with:
          panel-url: ${{ secrets.PANEL_URL }}
          api-key: ${{ secrets.API_KEY }}
          server-id: ${{ secrets.SERVER_ID }}
```
