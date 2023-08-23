---
title: "List RollApp"
slug: "list-rollapp"
---

Now that we have a RollApp deployed, we can list it on the [Dymension Portal](https://portal.dymension.xyz). This will allow other users to discover and interact with the RollApp.

:::info NOTE:
Only developers with the `RollApp-fam` discord role are eligible for listing their RollApp on the portal.
:::
## List RollApp

To list your RollApp, ensure you've funded the discord faucet with your rollapp token as detailed in the [IBC transfer](/docs/build/quick-start/roller-quick/ibc-transfer.md) section.

Once you've funded your rollapp, you can list your RollApp on the [portal](https://portal.dymension.xyz) by submitting a PR to [Dymension's Networks repo](https://github.com/dymensionxyz/networks/).

For the PR, you'll need:
1. The Rollapp network json.
2. The Rollapp tokens json.

To obtain these jsons, navigate to the [portal](https://portal.dymension.xyz), click the `Add your RollApp` button, complete the form, and hit the `Download Jsons` button. This action will download the `network.json` and `tokens.json` files to your device.

Once you have the json files:
1. Clone the [Dymension's Networks repo](https://github.com/dymensionxyz/networks/).
2. Append the content from the `network.json` file you downloaded to `testnet/networks.json`.
3. Append the content from the `tokens.json` file you downloaded to `testnet/tokens.json`.
4. (Optional) Add a logo for your RollApp to the `logos` directory. The logo should be a 256x256 png, named <your-rollapp-id>.png.

After submitting the PR, the Dymension team will review it. If everything checks out, your RollApp will be showcased on the [portal](https://portal.dymension.xyz).
