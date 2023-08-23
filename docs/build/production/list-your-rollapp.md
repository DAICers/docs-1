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

In order to list your RollApp, please make sure the following requirements are met:

-   Funded the discord faucet with your rollapp token as described in the [IBC transfer](/docs/build/quick-start/roller-quick/ibc-transfer.md) section.
-   Using the template below create a JSON file on your local machine:

:::info NOTE:
Note the following JSON data can be found with Roller by following the instructions [here](info.md)). EVM RollApps default to coinType 60.
:::

### Example JSON

```json
{
    "da": "<CELESTIA-OR-AVAIL>",
    "chainName": "<RollApp-Name>",
    "rpc": "<RPC-URL>",
    "rest": "<REST-URL>",
    "evm": {
        "chainId": "<HEXADECIMAL>",
        "rpc": "<EVM-RPC-URL>"
    },
    "description": "<DESCRIPTION-HERE>",
    "type": "RollApp",
    "coinType": 60,
    "ibc": {
        "timeout": 172800000,
        "srcChannel": "channel-<NUMBER>",
        "dstChannel": "channel-<NUMBER>"
    },
    "logo": "/logos/<NAME-OF-FILE>",
    "chainId": "example_1234-1",
    "currencies": [
        "<DENOM>"
    ],
    "bech32Prefix": "ethm",
    },
```

-   Fork the [networks repo](https://github.com/dymensionxyz/networks) into your GitHub account.
-   Add the file to the [testnet](https://github.com/dymensionxyz/networks/tree/main/testnet) folder called "list-rollapp"
-   Add your RollApp logo to the [logos](https://github.com/dymensionxyz/networks/tree/main/logos) folder
-   Submit a PR to [networks repo](https://github.com/dymensionxyz/networks). For a demonstration of a step-by-step guide to creating a PR please follow the [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) or watch this helpful [youtube video](https://www.youtube.com/watch?v=a_FLqX3vGR4).
-   Post link to the pull request on [#famfam](https://discord.com/channels/956961633165529098/1140590139022782474) channel to link the RollApp with your Discord username. A core team member will begin a short discussion with you.
-   Once the PR is approved it will be added to the Portal in a pending status. You will be provided a link to your RollApp dashboard.
-   Share on social media with a link to your RollApp dashboard and show proof of the post in the discussion.
-   Begin receiving rewards and track the estimated rewards!

<div class="image-container-secondary">
    <img class="image--primary" src={require('@site/static/img/reward-score.png').default} alt="reward-score" />
</div>

Your RollApp will now be listed on the [Dymension Portal](https://portal.dymension.xyz) !
