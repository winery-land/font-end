/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LotteryInterface extends utils.Interface {
  functions: {
    "adminAddress()": FunctionFragment;
    "rolloverAllocation()": FunctionFragment;
    "burnAllocation()": FunctionFragment;
    "allocation(uint256)": FunctionFragment;
    "cake()": FunctionFragment;
    "historyAmount(uint256,uint256)": FunctionFragment;
    "historyNumbers(uint256,uint256)": FunctionFragment;
    "issueIndex()": FunctionFragment;
    "lastTimestamp()": FunctionFragment;
    "lotteryInfo(uint256,uint256)": FunctionFragment;
    "lotteryNFT()": FunctionFragment;
    "maxNumber()": FunctionFragment;
    "minPrice()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "totalAddresses()": FunctionFragment;
    "totalAmount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userBuyAmountSum(uint256,uint64)": FunctionFragment;
    "userInfo(address,uint256)": FunctionFragment;
    "winningNumbers(uint256)": FunctionFragment;
    "initialize(address,address,uint256,uint8,address,address)": FunctionFragment;
    "drawed()": FunctionFragment;
    "reset()": FunctionFragment;
    "drawing()": FunctionFragment;
    "buy(uint256,uint8[4])": FunctionFragment;
    "multiBuy(uint256,uint8[4][])": FunctionFragment;
    "claimReward(uint256)": FunctionFragment;
    "multiClaim(uint256[])": FunctionFragment;
    "generateNumberIndexKey(uint8[4])": FunctionFragment;
    "getMatchingRewardAmount(uint256,uint256)": FunctionFragment;
    "getTotalRewards(uint256)": FunctionFragment;
    "getRewardView(uint256)": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
    "adminWithdraw(uint256)": FunctionFragment;
    "setMinPrice(uint256)": FunctionFragment;
    "setMaxNumber(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "adminAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rolloverAllocation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burnAllocation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allocation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "cake", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "historyAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "historyNumbers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "issueIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryNFT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "maxNumber", values?: undefined): string;
  encodeFunctionData(functionFragment: "minPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userBuyAmountSum",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "winningNumbers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "drawed", values?: undefined): string;
  encodeFunctionData(functionFragment: "reset", values?: undefined): string;
  encodeFunctionData(functionFragment: "drawing", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [
      BigNumberish,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "multiBuy",
    values: [
      BigNumberish,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish][]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "multiClaim",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "generateNumberIndexKey",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "getMatchingRewardAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardView",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "adminWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxNumber",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "adminAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rolloverAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allocation", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "historyAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "historyNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "issueIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lotteryNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxNumber", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userBuyAmountSum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "winningNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drawed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drawing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multiBuy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multiClaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateNumberIndexKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMatchingRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxNumber",
    data: BytesLike
  ): Result;

  events: {
    "Buy(address,uint256)": EventFragment;
    "Claim(address,uint256,uint256)": EventFragment;
    "DevWithdraw(address,uint256)": EventFragment;
    "Drawing(uint256,uint8[4])": EventFragment;
    "MultiBuy(address,uint256)": EventFragment;
    "MultiClaim(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Reset(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DevWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Drawing"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MultiBuy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MultiClaim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Reset"): EventFragment;
}

export type BuyEvent = TypedEvent<
  [string, BigNumber],
  { user: string; tokenId: BigNumber }
>;

export type BuyEventFilter = TypedEventFilter<BuyEvent>;

export type ClaimEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; tokenid: BigNumber; amount: BigNumber }
>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export type DevWithdrawEvent = TypedEvent<
  [string, BigNumber],
  { user: string; amount: BigNumber }
>;

export type DevWithdrawEventFilter = TypedEventFilter<DevWithdrawEvent>;

export type DrawingEvent = TypedEvent<
  [BigNumber, [number, number, number, number]],
  { issueIndex: BigNumber; winningNumbers: [number, number, number, number] }
>;

export type DrawingEventFilter = TypedEventFilter<DrawingEvent>;

export type MultiBuyEvent = TypedEvent<
  [string, BigNumber],
  { user: string; amount: BigNumber }
>;

export type MultiBuyEventFilter = TypedEventFilter<MultiBuyEvent>;

export type MultiClaimEvent = TypedEvent<
  [string, BigNumber],
  { user: string; amount: BigNumber }
>;

export type MultiClaimEventFilter = TypedEventFilter<MultiClaimEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type ResetEvent = TypedEvent<[BigNumber], { issueIndex: BigNumber }>;

export type ResetEventFilter = TypedEventFilter<ResetEvent>;

export interface Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    adminAddress(overrides?: CallOverrides): Promise<[string]>;

    rolloverAllocation(overrides?: CallOverrides): Promise<[number]>;

    burnAllocation(overrides?: CallOverrides): Promise<[number]>;

    allocation(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    cake(overrides?: CallOverrides): Promise<[string]>;

    historyAmount(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    historyNumbers(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    issueIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    lotteryInfo(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lotteryNFT(overrides?: CallOverrides): Promise<[string]>;

    maxNumber(overrides?: CallOverrides): Promise<[number]>;

    minPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalAddresses(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userBuyAmountSum(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userInfo(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    winningNumbers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    initialize(
      _cake: string,
      _lottery: string,
      _minPrice: BigNumberish,
      _maxNumber: BigNumberish,
      _owner: string,
      _adminAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    drawed(overrides?: CallOverrides): Promise<[boolean]>;

    reset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    drawing(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buy(
      _price: BigNumberish,
      _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiBuy(
      _price: BigNumberish,
      _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimReward(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiClaim(
      _tickets: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    generateNumberIndexKey(
      number: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getMatchingRewardAmount(
      _issueIndex: BigNumberish,
      _matchingNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalRewards(
      _issueIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardView(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setAdmin(
      _adminAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adminWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinPrice(
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxNumber(
      _maxNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  adminAddress(overrides?: CallOverrides): Promise<string>;

  rolloverAllocation(overrides?: CallOverrides): Promise<number>;

  burnAllocation(overrides?: CallOverrides): Promise<number>;

  allocation(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  cake(overrides?: CallOverrides): Promise<string>;

  historyAmount(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  historyNumbers(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  issueIndex(overrides?: CallOverrides): Promise<BigNumber>;

  lastTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  lotteryInfo(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lotteryNFT(overrides?: CallOverrides): Promise<string>;

  maxNumber(overrides?: CallOverrides): Promise<number>;

  minPrice(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalAddresses(overrides?: CallOverrides): Promise<BigNumber>;

  totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userBuyAmountSum(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userInfo(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  winningNumbers(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  initialize(
    _cake: string,
    _lottery: string,
    _minPrice: BigNumberish,
    _maxNumber: BigNumberish,
    _owner: string,
    _adminAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  drawed(overrides?: CallOverrides): Promise<boolean>;

  reset(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  drawing(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buy(
    _price: BigNumberish,
    _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiBuy(
    _price: BigNumberish,
    _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish][],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimReward(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiClaim(
    _tickets: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  generateNumberIndexKey(
    number: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getMatchingRewardAmount(
    _issueIndex: BigNumberish,
    _matchingNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalRewards(
    _issueIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardView(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setAdmin(
    _adminAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adminWithdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinPrice(
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxNumber(
    _maxNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    adminAddress(overrides?: CallOverrides): Promise<string>;

    rolloverAllocation(overrides?: CallOverrides): Promise<number>;

    burnAllocation(overrides?: CallOverrides): Promise<number>;

    allocation(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    cake(overrides?: CallOverrides): Promise<string>;

    historyAmount(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    historyNumbers(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    issueIndex(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryInfo(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryNFT(overrides?: CallOverrides): Promise<string>;

    maxNumber(overrides?: CallOverrides): Promise<number>;

    minPrice(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    totalAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userBuyAmountSum(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userInfo(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    winningNumbers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    initialize(
      _cake: string,
      _lottery: string,
      _minPrice: BigNumberish,
      _maxNumber: BigNumberish,
      _owner: string,
      _adminAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    drawed(overrides?: CallOverrides): Promise<boolean>;

    reset(overrides?: CallOverrides): Promise<void>;

    drawing(overrides?: CallOverrides): Promise<void>;

    buy(
      _price: BigNumberish,
      _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    multiBuy(
      _price: BigNumberish,
      _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish][],
      overrides?: CallOverrides
    ): Promise<void>;

    claimReward(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    multiClaim(
      _tickets: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    generateNumberIndexKey(
      number: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getMatchingRewardAmount(
      _issueIndex: BigNumberish,
      _matchingNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalRewards(
      _issueIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardView(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAdmin(_adminAddress: string, overrides?: CallOverrides): Promise<void>;

    adminWithdraw(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinPrice(_price: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setMaxNumber(
      _maxNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Buy(address,uint256)"(
      user?: string | null,
      tokenId?: null
    ): BuyEventFilter;
    Buy(user?: string | null, tokenId?: null): BuyEventFilter;

    "Claim(address,uint256,uint256)"(
      user?: string | null,
      tokenid?: null,
      amount?: null
    ): ClaimEventFilter;
    Claim(
      user?: string | null,
      tokenid?: null,
      amount?: null
    ): ClaimEventFilter;

    "DevWithdraw(address,uint256)"(
      user?: string | null,
      amount?: null
    ): DevWithdrawEventFilter;
    DevWithdraw(user?: string | null, amount?: null): DevWithdrawEventFilter;

    "Drawing(uint256,uint8[4])"(
      issueIndex?: BigNumberish | null,
      winningNumbers?: null
    ): DrawingEventFilter;
    Drawing(
      issueIndex?: BigNumberish | null,
      winningNumbers?: null
    ): DrawingEventFilter;

    "MultiBuy(address,uint256)"(
      user?: string | null,
      amount?: null
    ): MultiBuyEventFilter;
    MultiBuy(user?: string | null, amount?: null): MultiBuyEventFilter;

    "MultiClaim(address,uint256)"(
      user?: string | null,
      amount?: null
    ): MultiClaimEventFilter;
    MultiClaim(user?: string | null, amount?: null): MultiClaimEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Reset(uint256)"(issueIndex?: BigNumberish | null): ResetEventFilter;
    Reset(issueIndex?: BigNumberish | null): ResetEventFilter;
  };

  estimateGas: {
    adminAddress(overrides?: CallOverrides): Promise<BigNumber>;

    rolloverAllocation(overrides?: CallOverrides): Promise<BigNumber>;

    burnAllocation(overrides?: CallOverrides): Promise<BigNumber>;

    allocation(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cake(overrides?: CallOverrides): Promise<BigNumber>;

    historyAmount(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    historyNumbers(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issueIndex(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryInfo(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryNFT(overrides?: CallOverrides): Promise<BigNumber>;

    maxNumber(overrides?: CallOverrides): Promise<BigNumber>;

    minPrice(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userBuyAmountSum(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userInfo(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    winningNumbers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _cake: string,
      _lottery: string,
      _minPrice: BigNumberish,
      _maxNumber: BigNumberish,
      _owner: string,
      _adminAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    drawed(overrides?: CallOverrides): Promise<BigNumber>;

    reset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    drawing(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buy(
      _price: BigNumberish,
      _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiBuy(
      _price: BigNumberish,
      _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimReward(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiClaim(
      _tickets: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    generateNumberIndexKey(
      number: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMatchingRewardAmount(
      _issueIndex: BigNumberish,
      _matchingNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalRewards(
      _issueIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardView(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAdmin(
      _adminAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adminWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinPrice(
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxNumber(
      _maxNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    adminAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rolloverAllocation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allocation(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    historyAmount(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    historyNumbers(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issueIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lotteryInfo(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lotteryNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userBuyAmountSum(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    winningNumbers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _cake: string,
      _lottery: string,
      _minPrice: BigNumberish,
      _maxNumber: BigNumberish,
      _owner: string,
      _adminAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    drawed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    drawing(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buy(
      _price: BigNumberish,
      _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiBuy(
      _price: BigNumberish,
      _numbers: [BigNumberish, BigNumberish, BigNumberish, BigNumberish][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimReward(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiClaim(
      _tickets: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    generateNumberIndexKey(
      number: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMatchingRewardAmount(
      _issueIndex: BigNumberish,
      _matchingNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalRewards(
      _issueIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardView(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAdmin(
      _adminAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adminWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinPrice(
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxNumber(
      _maxNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
