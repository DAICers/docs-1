---
title: "Dymension Litepaper"
slug: "dymension-litepaper-index"
---

## Home of the RollApps

Present day blockchains operate as shared bandwidth systems which impede the growth of decentralized applications. Dymension disaggregates resource consumption by introducing a multi-layer blockchain protocol with robust tooling for building and deploying permission-less application-specific rollups. Dymension is akin to a hub and factory for such applications, which are referred to as RollApps. In this document we examine the technological, economic and social aspects of the Dymension protocol. Furthermore, we present the grand vision for Dymension, the modular architecture of its design and a high level overview of Dymension’s prominent core concepts.

### RollApp Development Kit (RDK)

A RollApp instance in Dymension is an application-specific rollup, built using the Dymension RollApp Development Kit, termed RDK. The development kit is a pre-packaged set of generic modules for common functionalities such as creating accounts and token management. The RDK simplifies the process of deploying a RollApp on top of the Dymension Hub.

### Dymension Hub

A Cosmos SDK Proof-of-Stake chain which utilizes the Tendermint Core state replication model for networking and consensus. Contrary to a monolithic blockchain, Dymension’s settlement layer, also referred to as the Dymension Hub, is specifically designed to provide an optimized service for rollups. As such, rollup servicing logic is enshrined within the settlement layer, resulting in a hub for native interoperability between RollApps.

### Inter-Blockchain Communication (IBC)

RollApps natively interact with the Inter-Blockchain Communication (IBC) protocol which provides safe message transferring between Dymension RollApps. RollApps leverage the common communication ground of all Dymension RollApps, the Dymension Hub.

### RollApp Virtual Machine (RVM)

Dymension introduces a novel dispute-resolution mechanism which simulates a RollApp execution environment within the Dymension Hub. The Dymension Hub spins up an RVM instance which is being fed with the exact context of a given transaction, resulting in a deterministic output. As such, Dymension is capable of supporting various execution environments.

### Embedded Hub AMM

Dymension embeds a native Automated Market Maker (AMM) into the Dymension Hub to achieve shared liquidity on top of shared security. The AMM is designated for RollApp facilitation and is regarded as essential infrastructure for RollApps. The embedded AMM is the sole applicative logic on the Dymension Hub which is not restricted for RollApp usage only.

### Full PDF

Click [here](https://litepaper.dymension.xyz/) for the full PDF of the Dymension litepaper.
