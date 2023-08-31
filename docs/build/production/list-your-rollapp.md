---
title: "List RollApp"
slug: "list-rollapp"
---

Now that we have a RollApp deployed, we can list it on the [Dymension Portal](https://portal.dymension.xyz). This will allow other users to discover and interact with the RollApp.

:::info NOTE:
Only developers with the `RollApp-fam` discord role are eligible for listing their RollApp on the portal.
:::

### Interacting with the RollApp

Developers are expected to provide the following end-points under either [http](https://en.wikipedia.org/wiki/HTTP) or [https](https://en.wikipedia.org/wiki/HTTPS). This will allow for users to be able to interact with your RollApp:

1. RollApp RPC Endpoint (by default `26657`)
2. Rest Endpoint (by default `1317`)
3. JSON RPC Endpoint (by default `8545`. Only relevant for EVM RollApps)

:::info NOTE:
If you are using a self-signed certificate for [https](https://en.wikipedia.org/wiki/HTTPS), please add it to your browser's trusted certificates.
:::

## List RollApp

The following steps are required for listing a RollApp on the Portal:

1. Make sure to have successfully deployed and are running a RollApp instance. All outputs on `Roller Run` screen should show the RollApp running in `active` state.

2. IBC connections take up to thirty minutes to establish a connection with the Dymension Hub. Test the IBC connection by submitting an IBC transfer to the Dymension Hub faucet with the following command:

    ```
    roller tx fund-faucet
    ```

    Subsequently, check the balance of the RollApp token on the Dymension Hub faucet which should arrive within 15-30 minutes:

    ```
    $balance dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 <RollApp-ID>
    ```

3. Fork the RollApp-registry repo [here](https://github.com/dymensionxyz/rollapp-registry) into your GitHub account and then clone it using:

    ```bash
    git clone https://github.com/<your-github-username>/rollapp-registry
    ```

4. Create a new folder with the following structure:

    ```tree
    ├── <RollApp-ID>
    │   ├── <RollApp-ID>.json
    │   └── logos
    │       └── <RollApp-ID>-logo.svg
    ```

5. Export the RollApps configuration JSON file by running:

    ```
    roller config export
    ```

    This will return a file that you will open a PR in this repository with. Add this information to the `<RollApp-ID>.json` file created. Add your RollApp logo in the `logos` folder. This can be SVG, PNG, or JPG format. Please keep the size of the file under 50KB.

6. Create a PR to https://github.com/dymensionXYZ/rollapp-registry. For a demonstration of a step-by-step guide to creating a PR please follow the [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) or watch this helpful [youtube video](https://www.youtube.com/watch?v=a_FLqX3vGR4).

7. Pair the RollApp on the Discord channel: [here](https://discord.com/channels/956961633165529098/1140590139022782474) by entering `$pair <RollApp-ID>` (replace `<RollApp-ID>` with your customized RollApp ID). A community moderator will then begin a conversation with you in Discord. Please follow attentively to get the listing process fulfilled quickly. If you have any question please feel free to reach out to the coreteam and community on Discord. We're here for you!
