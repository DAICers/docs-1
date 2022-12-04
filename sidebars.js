const sidebars = {
    sidebar: [
        "index",
        {
            type: "category",
            label: "Learn",
            collapsed: true,
            items: [
                {
                    type: "doc",
                    label: "Modular Architecture",
                    id: "learn/modular-intro",
                },
                {
                    type: "doc",
                    label: "Dymension Hub",
                    id: "learn/dymension-hub",
                },
                {
                    type: "doc",
                    label: "RollApps",
                    id: "learn/rollapps",
                },
            ],
        },
        {
            type: "category",
            label: "Develop",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Start",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Overview",
                            id: "developers/start/overview",
                        },
                        {
                            type: "doc",
                            label: "Setup work environment",
                            id: "developers/start/setup",
                        },
                        {
                            type: "doc",
                            label: "Dymension Hub node",
                            id: "developers/start/run-a-hub-node",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Build",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Overview",
                            id: "developers/build/overview",
                        },
                        {
                            type: "category",
                            label: "Install Virtual Machine",
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    label: "CosmWasm",
                                    id: "developers/build/install-vm/cosmwasm-install",
                                },
                                {
                                    type: "doc",
                                    label: "EVM",
                                    id: "developers/build/install-vm/evm-install",
                                },
                            ],
                        },
                        {
                            type: "doc",
                            label: "Register RollApp",
                            id: "developers/build/register-rollapp",
                        },
                        {
                            type: "doc",
                            label: "Add Sequencer",
                            id: "developers/build/add-sequencer",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Run",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Overview",
                            id: "developers/run/overview",
                        },
                        {
                            type: "category",
                            label: "Connect a Data Layer",
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    label: "Mock",
                                    id: "developers/run/connect-data-layer/mock",
                                },
                                {
                                    type: "doc",
                                    label: "Celestia",
                                    id: "developers/run/connect-data-layer/celestia",
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Deploy Smart Contracts",
                            collapsed: true,
                            items: [
                                {
                                    type: "category",
                                    label: "CosmWasm",
                                    collapsed: true,
                                    items: [
                                        {
                                            type: "doc",
                                            label: "Deploy",
                                            id: "developers/run/smart-contract/cosmwasm/deploy",
                                        },
                                        {
                                            type: "doc",
                                            label: "Interact",
                                            id: "developers/run/smart-contract/cosmwasm/interact",
                                        },
                                        {
                                            type: "doc",
                                            label: "Add Wallet",
                                            id: "developers/run/smart-contract/cosmwasm/add-keplr-wallet",
                                        },
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "EVM",
                                    collapsed: true,
                                    items: [
                                        {
                                            type: "doc",
                                            label: "Create",
                                            id: "developers/run/smart-contract/evm/create",
                                        },
                                        {
                                            type: "doc",
                                            label: "Deploy",
                                            id: "developers/run/smart-contract/evm/deploy",
                                        },
                                        {
                                            type: "doc",
                                            label: "Add Wallet",
                                            id: "developers/run/smart-contract/evm/add-metamask-wallet",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "doc",
                            label: "Query Dymension Hub",
                            id: "developers/run/query-dymension-hub",
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Full node",
            items: [
                {
                    type: "doc",
                    label: "Overview",
                    id: "full-node/index",
                },
                {
                    type: "doc",
                    label: "Run a node",
                    id: "full-node/run-a-node",
                },
                {
                    type: "doc",
                    label: "Reset and troubleshooting",
                    id: "full-node/reset-node",
                },
            ],
        },
        {
            type: "doc",
            label: "Litepaper",
            id: "dymension-litepaper/index",
        },
        {
            type: "doc",
            label: "Glossary",
            id: "reference/glossary",
        },
        {
            type: "link",
            href: "https://github.com/dymensionxyz/awesome",
            label: "Resources",
        },
    ],
};

module.exports = sidebars;
