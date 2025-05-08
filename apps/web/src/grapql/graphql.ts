/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  taxReportDetails?: Maybe<TaxReportDetails>;
  taxReportList: TaxReportListResponse;
};


export type QueryTaxReportDetailsArgs = {
  input: TaxReportDetailsInput;
};

export type TaxReporDebts = {
  __typename?: 'TaxReporDebts';
  id: Scalars['ID']['output'];
  otherDebts?: Maybe<TaxReportAssetDebtCollection>;
  realEstateCharges?: Maybe<TaxReportDebtRealEstateCharges>;
};

export type TaxReportAssetDebtCollection = {
  __typename?: 'TaxReportAssetDebtCollection';
  items: Array<TaxReportAssetDebtCollectionItem>;
};

export type TaxReportAssetDebtCollectionItem = {
  __typename?: 'TaxReportAssetDebtCollectionItem';
  description: Scalars['String']['output'];
  interestCharges: Scalars['Int']['output'];
  remainingDebtsAmount: Scalars['Int']['output'];
};

export type TaxReportAssetRealEstate = {
  __typename?: 'TaxReportAssetRealEstate';
  address: Scalars['String']['output'];
  appraisal: Scalars['Int']['output'];
  number: Scalars['String']['output'];
};

export type TaxReportAssetRealEstateCollection = {
  __typename?: 'TaxReportAssetRealEstateCollection';
  items: Array<TaxReportAssetRealEstate>;
};

export type TaxReportAssets = {
  __typename?: 'TaxReportAssets';
  id: Scalars['ID']['output'];
  realEstates?: Maybe<TaxReportAssetRealEstateCollection>;
  vehicles?: Maybe<TaxReportAssetRealEstateCollection>;
};

export type TaxReportDebtRealEstateCharges = {
  __typename?: 'TaxReportDebtRealEstateCharges';
  destination: Scalars['String']['output'];
  interestChargesAmount: Scalars['Int']['output'];
  lender: Scalars['String']['output'];
  lenderSsn: Scalars['String']['output'];
  loanDate: Scalars['String']['output'];
  loanNumber: Scalars['String']['output'];
  loanTotalNumberOfYears: Scalars['Int']['output'];
  remainingDebtsAmount: Scalars['Int']['output'];
  totalPaymentAmountOfYear: Scalars['Int']['output'];
  totalPaymentOfNominalValue: Scalars['Int']['output'];
  yearOfPurchase: Scalars['Int']['output'];
};

export type TaxReportDetails = {
  __typename?: 'TaxReportDetails';
  assets?: Maybe<TaxReportAssets>;
  debts?: Maybe<TaxReporDebts>;
  id: Scalars['ID']['output'];
  incomes?: Maybe<TaxReportDetailsIncome>;
  status: TaxReportStatus;
  year: Scalars['Int']['output'];
};

export type TaxReportDetailsIncome = {
  __typename?: 'TaxReportDetailsIncome';
  benefits?: Maybe<TaxReportDetailsIncomeUnitCollection>;
  compensations?: Maybe<TaxReportDetailsIncomeCompensationCollection>;
  id: Scalars['ID']['output'];
  salaries?: Maybe<TaxReportDetailsIncomeUnitCollection>;
};

export type TaxReportDetailsIncomeCompensation = {
  __typename?: 'TaxReportDetailsIncomeCompensation';
  company: Scalars['String']['output'];
  compensations: TaxReportDetailsIncomeUnitCollection;
};

export type TaxReportDetailsIncomeCompensationCollection = {
  __typename?: 'TaxReportDetailsIncomeCompensationCollection';
  items: Array<TaxReportDetailsIncomeCompensation>;
};

export type TaxReportDetailsIncomeUnit = {
  __typename?: 'TaxReportDetailsIncomeUnit';
  amount: Scalars['Int']['output'];
  description: Scalars['String']['output'];
};

export type TaxReportDetailsIncomeUnitCollection = {
  __typename?: 'TaxReportDetailsIncomeUnitCollection';
  items: Array<TaxReportDetailsIncomeUnit>;
};

export type TaxReportDetailsInput = {
  id: Scalars['String']['input'];
};

export type TaxReportListItem = {
  __typename?: 'TaxReportListItem';
  id: Scalars['ID']['output'];
  status: TaxReportStatus;
  year: Scalars['Int']['output'];
};

export type TaxReportListResponse = {
  __typename?: 'TaxReportListResponse';
  items: Array<TaxReportListItem>;
};

export enum TaxReportStatus {
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED'
}

export type GetTaxReportDetailsQueryVariables = Exact<{
  input: TaxReportDetailsInput;
}>;


export type GetTaxReportDetailsQuery = { __typename?: 'Query', taxReportDetails?: { __typename?: 'TaxReportDetails', id: string, year: number, status: TaxReportStatus } | null };

export type GetTaxReportListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaxReportListQuery = { __typename?: 'Query', taxReportList: { __typename?: 'TaxReportListResponse', items: Array<{ __typename?: 'TaxReportListItem', id: string, year: number, status: TaxReportStatus }> } };


export const GetTaxReportDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxReportDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TaxReportDetailsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxReportDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetTaxReportDetailsQuery, GetTaxReportDetailsQueryVariables>;
export const GetTaxReportListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxReportList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxReportList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetTaxReportListQuery, GetTaxReportListQueryVariables>;