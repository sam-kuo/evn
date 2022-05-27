import {
  daoAccessFlagsMap,
  bankExtensionAclFlagsMap,
  erc721ExtensionAclFlagsMap,
  erc1155ExtensionAclFlagsMap,
  erc1271ExtensionAclFlagsMap,
  vestingExtensionAclFlagsMap,
  entryBank,
  entryERC20,
  entryERC721,
  entryERC1155,
  entryERC1271,
  entryExecutor,
  entryVesting,
  ACLBuilder,
  SelectedACLs,
  governanceRoles,
} from "../../utils/access-control-util";

import { extensionsIdsMap, adaptersIdsMap } from "../../utils/dao-ids-util";

// Matches the DaoArtifacts.sol ArtifactType enum
export enum ContractType {
  Core = 0,
  Factory = 1,
  Extension = 2,
  Adapter = 3,
  Util = 4,
  Test = 5,
}

/**
 * Each contract contains different configurations that will be required by the deployment
 * script. This type helps you to define these configs.
 */
export type ContractConfig = {
  /**
   * The id of the contract, usually it is imported from dao-ids-util.ts.
   */
  id: string;
  /**
   *  The name of the solidity contract, not the file name, but the contract itself.
   */
  name: string;
  /**
   * The javascript variable name that will be named
   * to access the contract. This is useful for variables
   * that are created during the deployment such as
   * adapters and extension. Using this alias you will be
   * able to access it in the test context,
   * e.g: adapters.<alias> will return the deployed contract.
   */
  alias?: string;
  /**
   * The path to the solidity contract.
   */
  path: string;
  /**
   * If true indicates that the contract must be deployed.
   */
  enabled: boolean;
  /**
   * Optional
   * skip auto deploy true indicates that the contract do need to be
   * automatically deployed during the migration script execution.
   * It is useful to skip the auto deploy for contracts that are not required
   * to launch a DAO, but that you manually configure them after the DAO is created,
   * but not finalized, e.g: Offchain Voting.
   */
  skipAutoDeploy?: boolean;
  /**
   * Version of the solidity contract.
   * It needs to be the name of the contract, and not the name of the .sol file.
   */
  version: string;
  /**
   * Type of the contract based on the ContractType enum.
   */
  type: ContractType;
  /**
   * The Access Control Layer flags selected to be granted to this contract in the DAO.
   */
  acls: SelectedACLs;
  /**
   * Optional
   * The function that computes the correct ACL value based on the selected ACL flags.
   */
  buildAclFlag?: ACLBuilder;
  /**
   * Optional
   * A contract may need custom arguments during the deployment time,
   * declare here all the arguments that are read from the env,
   * and passed to the configuration/deployment functions.
   * The names of the arguments must match the arguments provided
   * in the deployment script 2_deploy_contracts.js
   */
  deploymentArgs?: Array<string>;
  /**
   * Optional
   * Set of arguments to be passed to the `configureDao` call
   * after the contract has been deployment.
   */
  daoConfigs?: Array<Array<string>>;
  /**
   * Optional
   * The id of the extension generated by the factory, usually you will import that from extensionsIdsMap.
   * e.g: a BankFactory generates instances of contract BankContract, so the BankFactory config needs to
   * set the extensionsIdsMap.BANK_EXT in this attribute to indicate it generates bank contracts.
   */
  generatesExtensionId?: string;

  /**
   * Optional
   * The governor roles defined in the DaoHelper and verified using GovernanceGuard.onlyGovernor.
   * A role is essentially a DAO config, and the config is read by the GovernanceGuard.
   * If not present in the DAO Registry it will revert with an error, otherwise it will verify
   * if the caller is allowed to execute the call.
   * Roles are used to limit the access to a given member by checking which token the member holds.
   * So the DAO members can decide and set the configuration with the internal or external token address
   * that indicates the access to a given resource.
   */
  roles?: Array<String>;
};

export const contracts: Array<ContractConfig> = [
  /**
   * Test Util Contracts
   */
  {
    id: "ol-token",
    name: "OLToken",
    path: "../../contracts/test/OLToken",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Test,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["supplyOLToken"],
  },
  {
    id: "mock-dao",
    name: "MockDao",
    path: "../../contracts/test/MockDao",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Test,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: "test-token-1",
    name: "TestToken1",
    alias: "testToken1",
    path: "../../contracts/test/TestToken1",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Test,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["supplyTestToken1"],
  },
  {
    id: "test-token-2",
    name: "TestToken2",
    alias: "testToken2",
    path: "../../contracts/test/TestToken2",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Test,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["supplyTestToken2"],
  },
  {
    id: "test-fairshare-calc",
    name: "TestFairShareCalc",
    path: "../../contracts/test/TestFairShareCalc",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Test,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: "pixel-nft",
    name: "PixelNFT",
    alias: "pixelNFT",
    path: "../../contracts/test/PixelNFT",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Test,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["supplyPixelNFT"],
  },
  {
    id: "prox-token",
    name: "ProxTokenContract",
    alias: "proxToken",
    path: "../../contracts/test/ProxTokenContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Test,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: "erc20-minter",
    name: "ERC20MinterContract",
    path: "../../contracts/test/ERC20MinterContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Test,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: "erc1155-test-token",
    name: "ERC1155TestToken",
    alias: "erc1155TestToken",
    path: "../../contracts/test/ERC1155TestToken",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Test,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["erc1155TestTokenUri"],
  },

  /**
   * DAO Factories Contracts
   */
  {
    id: "dao-factory",
    name: "DaoFactory",
    path: "../../contracts/core/DaoFactory",
    enabled: true,
    skipAutoDeploy: true,
    version: "1.0.0",
    type: ContractType.Factory,
    acls: {
      dao: [],
      extensions: {},
    },
    generatesExtensionId: "dao-registry",
  },
  {
    id: "dao-registry",
    name: "DaoRegistry",
    path: "../../contracts/core/DaoRegistry",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Core,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: "nft-collection-factory",
    name: "NFTCollectionFactory",
    alias: "erc721ExtFactory",
    path: "../../contracts/extensions/NFTCollectionFactory",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Factory,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["daoAddress"],
    generatesExtensionId: extensionsIdsMap.ERC721_EXT,
  },
  {
    id: "bank-factory",
    name: "BankFactory",
    alias: "bankExtFactory",
    path: "../../contracts/extensions/bank/BankFactory",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Factory,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["daoAddress", "maxExternalTokens"],
    generatesExtensionId: extensionsIdsMap.BANK_EXT,
  },
  {
    id: "erc20-extension-factory",
    name: "ERC20TokenExtensionFactory",
    alias: "erc20ExtFactory",
    path: "../../contracts/extensions/token/erc20/ERC20TokenExtensionFactory",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Factory,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: [
      "daoAddress",
      "erc20TokenName",
      "erc20TokenAddress",
      "erc20TokenSymbol",
      "erc20TokenDecimals",
    ],
    generatesExtensionId: extensionsIdsMap.ERC20_EXT,
  },
  {
    id: "vesting-extension-factory",
    name: "InternalTokenVestingExtensionFactory",
    alias: "vestingExtFactory",
    path: "../../contracts/extensions/token/erc20/InternalTokenVestingExtensionFactory",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Factory,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["daoAddress"],
    generatesExtensionId: extensionsIdsMap.VESTING_EXT,
  },
  {
    id: "erc1271-extension-factory",
    name: "ERC1271ExtensionFactory",
    alias: "erc1271ExtFactory",
    path: "../../contracts/extensions/erc1271/ERC1271ExtensionFactory",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Factory,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["daoAddress"],
    generatesExtensionId: extensionsIdsMap.ERC1271_EXT,
  },
  {
    id: "executor-extension-factory",
    name: "ExecutorExtensionFactory",
    alias: "executorExtFactory",
    path: "../../contracts/extensions/executor/ExecutorExtensionFactory",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Factory,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["daoAddress"],
    generatesExtensionId: extensionsIdsMap.EXECUTOR_EXT,
  },
  {
    id: "erc1155-extension-factory",
    name: "ERC1155TokenCollectionFactory",
    alias: "erc1155ExtFactory",
    path: "../../contracts/extensions/erc1155/ERC1155TokenCollectionFactory",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Factory,
    acls: {
      dao: [],
      extensions: {},
    },
    deploymentArgs: ["daoAddress"],
    generatesExtensionId: extensionsIdsMap.ERC1155_EXT,
  },

  /**
   * Extensions
   */
  {
    id: extensionsIdsMap.ERC721_EXT,
    name: "NFTExtension",
    alias: "erc721Ext",
    path: "../../contracts/extensions/nft/NFTExtension",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Extension,
    buildAclFlag: entryERC721,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: extensionsIdsMap.BANK_EXT,
    name: "BankExtension",
    alias: "bankExt",
    path: "../../contracts/extensions/bank/BankExtension",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Extension,
    buildAclFlag: entryBank,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: extensionsIdsMap.ERC20_EXT,
    name: "ERC20Extension",
    alias: "erc20Ext",
    path: "../../contracts/extensions/token/erc20/ERC20Extension",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Extension,
    buildAclFlag: entryERC20,
    acls: {
      dao: [daoAccessFlagsMap.NEW_MEMBER],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,
        ],
      },
    },
  },
  {
    id: extensionsIdsMap.VESTING_EXT,
    name: "InternalTokenVestingExtension",
    alias: "vestingExt",
    path: "../../contracts/extensions/token/erc20/InternalTokenVestingExtension",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Extension,
    buildAclFlag: entryVesting,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: extensionsIdsMap.ERC1271_EXT,
    name: "ERC1271Extension",
    alias: "erc1271Ext",
    path: "../../contracts/extensions/erc1271/ERC1271Extension",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Extension,
    buildAclFlag: entryERC1271,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: extensionsIdsMap.EXECUTOR_EXT,
    name: "ExecutorExtension",
    alias: "executorExt",
    path: "../../contracts/extensions/executor/ExecutorExtension",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Extension,
    buildAclFlag: entryExecutor,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: extensionsIdsMap.ERC1155_EXT,
    name: "ERC1155TokenExtension",
    alias: "erc1155Ext",
    path: "../../contracts/extensions/erc1155/ERC1155TokenExtension",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Extension,
    buildAclFlag: entryERC1155,
    acls: {
      dao: [],
      extensions: {},
    },
  },

  /**
   * Adapters
   */
  {
    id: adaptersIdsMap.DAO_REGISTRY_ADAPTER,
    name: "DaoRegistryAdapterContract",
    alias: "daoRegistryAdapter",
    path: "../../contracts/adapters/DaoRegistryAdapterContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [daoAccessFlagsMap.UPDATE_DELEGATE_KEY],
      extensions: {},
    },
  },
  {
    id: adaptersIdsMap.BANK_ADAPTER,
    name: "BankAdapterContract",
    alias: "bankAdapter",
    path: "../../contracts/adapters/BankAdapterContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.WITHDRAW,
          bankExtensionAclFlagsMap.SUB_FROM_BALANCE,
          bankExtensionAclFlagsMap.UPDATE_TOKEN,
        ],
      },
    },
  },
  {
    id: adaptersIdsMap.ERC721_ADAPTER,
    name: "NFTAdapterContract",
    alias: "nftAdapter",
    path: "../../contracts/adapters/NFTAdapterContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [],
      extensions: {
        [extensionsIdsMap.ERC721_EXT]: [erc721ExtensionAclFlagsMap.COLLECT_NFT],
        [extensionsIdsMap.ERC1155_EXT]: [
          erc1155ExtensionAclFlagsMap.COLLECT_NFT,
        ],
      },
    },
  },
  {
    id: adaptersIdsMap.CONFIGURATION_ADAPTER,
    name: "ConfigurationContract",
    alias: "configuration",
    path: "../../contracts/adapters/ConfigurationContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [
        daoAccessFlagsMap.SUBMIT_PROPOSAL,
        daoAccessFlagsMap.SET_CONFIGURATION,
      ],
      extensions: {},
    },
    roles: [governanceRoles.CONFIGURATION_GOVERNOR],
  },
  {
    id: adaptersIdsMap.ERC1155_ADAPTER,
    name: "ERC1155AdapterContract",
    alias: "erc1155Adapter",
    path: "../../contracts/adapters/ERC1155AdapterContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [],
      extensions: {
        [extensionsIdsMap.ERC721_EXT]: [
          erc721ExtensionAclFlagsMap.COLLECT_NFT,
          erc721ExtensionAclFlagsMap.WITHDRAW_NFT,
          erc721ExtensionAclFlagsMap.INTERNAL_TRANSFER,
        ],
        [extensionsIdsMap.ERC1155_EXT]: [
          erc1155ExtensionAclFlagsMap.COLLECT_NFT,
          erc1155ExtensionAclFlagsMap.WITHDRAW_NFT,
          erc1155ExtensionAclFlagsMap.INTERNAL_TRANSFER,
        ],
      },
    },
  },
  {
    id: adaptersIdsMap.MANAGING_ADAPTER,
    name: "ManagingContract",
    alias: "managing",
    path: "../../contracts/adapters/ManagingContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [
        daoAccessFlagsMap.SUBMIT_PROPOSAL,
        daoAccessFlagsMap.REPLACE_ADAPTER,
        daoAccessFlagsMap.ADD_EXTENSION,
        daoAccessFlagsMap.REMOVE_EXTENSION,
      ],
      extensions: {},
    },
    roles: [governanceRoles.MANAGING_GOVERNOR],
  },

  // Signature Adapters
  {
    id: adaptersIdsMap.ERC1271_ADAPTER,
    name: "SignaturesContract",
    alias: "signatures",
    path: "../../contracts/adapters/SignaturesContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [daoAccessFlagsMap.SUBMIT_PROPOSAL],
      extensions: {
        [extensionsIdsMap.ERC1271_EXT]: [erc1271ExtensionAclFlagsMap.SIGN],
      },
    },
  },

  // Voting Adapters
  {
    id: adaptersIdsMap.VOTING_ADAPTER,
    name: "VotingContract",
    alias: "voting",
    path: "../../contracts/adapters/VotingContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [],
      extensions: {},
    },
    daoConfigs: [["daoAddress", "votingPeriod", "gracePeriod"]],
  },
  {
    id: adaptersIdsMap.SNAPSHOT_PROPOSAL_ADAPTER,
    name: "SnapshotProposalContract",
    alias: "snapshotProposalAdapter",
    path: "../../contracts/adapters/voting/SnapshotProposalContract",
    enabled: true,
    skipAutoDeploy: true,
    version: "1.0.0",
    type: ContractType.Util,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: adaptersIdsMap.VOTING_ADAPTER,
    name: "OffchainVotingContract",
    alias: "voting",
    path: "../../contracts/adapters/voting/OffchainVotingContract",
    // Disabled because it is not deployed with all the other contracts
    enabled: true,
    skipAutoDeploy: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.ADD_TO_BALANCE,
          bankExtensionAclFlagsMap.SUB_FROM_BALANCE,
          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,
        ],
      },
    },
  },
  {
    id: adaptersIdsMap.VOTING_HASH_ADAPTER,
    name: "OffchainVotingHashContract",
    alias: "offchainVotingHashAdapter",
    path: "../../contracts/adapters/voting/OffchainVotingHashContract",
    // Disabled because it is not deployed with all the other contracts
    enabled: true,
    skipAutoDeploy: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: adaptersIdsMap.KICK_BAD_REPORTER_ADAPTER,
    name: "KickBadReporterAdapter",
    alias: "kickBadReporterAdapter",
    path: "../../contracts/adapters/voting/KickBadReporterAdapter",
    // Disabled because it is not deployed with all the other contracts
    enabled: true,
    skipAutoDeploy: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [],
      extensions: {},
    },
  },

  // Withdraw / Kick Adapters
  {
    id: adaptersIdsMap.RAGEQUIT_ADAPTER,
    name: "RagequitContract",
    alias: "ragequit",
    path: "../../contracts/adapters/RagequitContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,
          bankExtensionAclFlagsMap.SUB_FROM_BALANCE,
          bankExtensionAclFlagsMap.ADD_TO_BALANCE,
        ],
      },
    },
  },
  {
    id: adaptersIdsMap.GUILDKICK_ADAPTER,
    name: "GuildKickContract",
    alias: "guildkick",
    path: "../../contracts/adapters/GuildKickContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [daoAccessFlagsMap.SUBMIT_PROPOSAL],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,
          bankExtensionAclFlagsMap.SUB_FROM_BALANCE,
          bankExtensionAclFlagsMap.ADD_TO_BALANCE,
          bankExtensionAclFlagsMap.REGISTER_NEW_TOKEN,
        ],
      },
    },
  },
  {
    id: adaptersIdsMap.DISTRIBUTE_ADAPTER,
    name: "DistributeContract",
    alias: "distribute",
    path: "../../contracts/adapters/DistributeContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [daoAccessFlagsMap.SUBMIT_PROPOSAL],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,
        ],
      },
    },
  },

  // Funding/Onboarding Adapters
  {
    id: adaptersIdsMap.FINANCING_ADAPTER,
    name: "FinancingContract",
    alias: "financing",
    path: "../../contracts/adapters/FinancingContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [daoAccessFlagsMap.SUBMIT_PROPOSAL],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,
          bankExtensionAclFlagsMap.SUB_FROM_BALANCE,
          bankExtensionAclFlagsMap.ADD_TO_BALANCE,
        ],
      },
    },
  },
  {
    id: adaptersIdsMap.ONBOARDING_ADAPTER,
    name: "OnboardingContract",
    alias: "onboarding",
    path: "../../contracts/adapters/OnboardingContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [
        daoAccessFlagsMap.SUBMIT_PROPOSAL,
        daoAccessFlagsMap.UPDATE_DELEGATE_KEY,
        daoAccessFlagsMap.NEW_MEMBER,
      ],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.ADD_TO_BALANCE,
          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,
        ],
      },
    },
    daoConfigs: [
      //config to mint UNITS
      [
        "daoAddress",
        "unitTokenToMint",
        "unitPrice",
        "nbUnits",
        "maxChunks",
        "tokenAddr",
      ],
      //config to mint LOOT
      [
        "daoAddress",
        "lootTokenToMint",
        "unitPrice",
        "nbUnits",
        "maxChunks",
        "tokenAddr",
      ],
    ],
  },
  {
    id: adaptersIdsMap.COUPON_ONBOARDING_ADAPTER,
    name: "CouponOnboardingContract",
    alias: "couponOnboarding",
    path: "../../contracts/adapters/CouponOnboardingContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [daoAccessFlagsMap.NEW_MEMBER],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,
          bankExtensionAclFlagsMap.ADD_TO_BALANCE,
        ],
      },
    },
    daoConfigs: [
      //config to mint coupons
      [
        "daoAddress",
        "couponCreatorAddress",
        extensionsIdsMap.ERC20_EXT, //loads the address from the ext
        "unitTokenToMint",
        "maxAmount",
      ],
    ],
  },
  {
    id: adaptersIdsMap.TRIBUTE_ADAPTER,
    name: "TributeContract",
    alias: "tribute",
    path: "../../contracts/adapters/TributeContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [daoAccessFlagsMap.SUBMIT_PROPOSAL, daoAccessFlagsMap.NEW_MEMBER],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.ADD_TO_BALANCE,
          bankExtensionAclFlagsMap.REGISTER_NEW_TOKEN,
        ],
      },
    },
    daoConfigs: [
      //config to mint UNITS
      ["daoAddress", "unitTokenToMint"],
      //config to mint LOOT
      ["daoAddress", "lootTokenToMint"],
    ],
  },
  {
    id: adaptersIdsMap.TRIBUTE_NFT_ADAPTER,
    name: "TributeNFTContract",
    alias: "tributeNFT",
    path: "../../contracts/adapters/TributeNFTContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [daoAccessFlagsMap.SUBMIT_PROPOSAL, daoAccessFlagsMap.NEW_MEMBER],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [bankExtensionAclFlagsMap.ADD_TO_BALANCE],
        [extensionsIdsMap.ERC721_EXT]: [erc721ExtensionAclFlagsMap.COLLECT_NFT],
      },
    },
    daoConfigs: [
      //config to mint UNITS
      ["daoAddress", "unitTokenToMint"],
    ],
  },
  {
    id: adaptersIdsMap.LEND_NFT_ADAPTER,
    name: "LendNFTContract",
    alias: "lendNFT",
    path: "../../contracts/adapters/LendNFTContract",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [daoAccessFlagsMap.SUBMIT_PROPOSAL, daoAccessFlagsMap.NEW_MEMBER],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.SUB_FROM_BALANCE,
          bankExtensionAclFlagsMap.ADD_TO_BALANCE,
        ],
        [extensionsIdsMap.ERC721_EXT]: [
          erc721ExtensionAclFlagsMap.COLLECT_NFT,
          erc721ExtensionAclFlagsMap.WITHDRAW_NFT,
        ],
        [extensionsIdsMap.ERC1155_EXT]: [
          erc1155ExtensionAclFlagsMap.COLLECT_NFT,
          erc1155ExtensionAclFlagsMap.WITHDRAW_NFT,
        ],
        [extensionsIdsMap.VESTING_EXT]: [
          vestingExtensionAclFlagsMap.NEW_VESTING,
          vestingExtensionAclFlagsMap.REMOVE_VESTING,
        ],
      },
    },
  },
  {
    id: adaptersIdsMap.ERC20_TRANSFER_STRATEGY_ADAPTER,
    name: "ERC20TransferStrategy",
    alias: "erc20TransferStrategy",
    path: "../../contracts/extensions/token/erc20/ERC20TransferStrategy",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Adapter,
    acls: {
      dao: [],
      extensions: {
        [extensionsIdsMap.BANK_EXT]: [
          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,
        ],
      },
    },
  },

  /**
   * Utils
   */
  {
    id: "dao-artifacts",
    name: "DaoArtifacts",
    path: "../../contracts/utils/DaoArtifacts",
    enabled: true,
    skipAutoDeploy: true,
    version: "1.0.0",
    type: ContractType.Util,
    acls: {
      dao: [],
      extensions: {},
    },
  },
  {
    id: "multicall",
    name: "Multicall",
    path: "../../contracts/utils/Multicall",
    enabled: true,
    version: "1.0.0",
    type: ContractType.Util,
    acls: {
      dao: [],
      extensions: {},
    },
  },
];

export const getConfig = (name: string) => {
  return contracts.find((c) => c.name === name);
};

export const isDeployable = (name: string) => {
  const c = getConfig(name);
  return c && c.enabled;
};
