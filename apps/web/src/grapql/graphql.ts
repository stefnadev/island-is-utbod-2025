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
  taxReportList: TaxReportListResponse;
};

export type TaxReportListItem = {
  __typename?: 'TaxReportListItem';
  status: TaxReportListItemStatus;
  year: Scalars['Int']['output'];
};

export enum TaxReportListItemStatus {
  Draft = 'DRAFT',
  Reviewed = 'REVIEWED',
  Submitted = 'SUBMITTED'
}

export type TaxReportListResponse = {
  __typename?: 'TaxReportListResponse';
  items: Array<TaxReportListItem>;
};

export type GetTaxReportListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaxReportListQuery = { __typename?: 'Query', taxReportList: { __typename?: 'TaxReportListResponse', items: Array<{ __typename?: 'TaxReportListItem', year: number, status: TaxReportListItemStatus }> } };


export const GetTaxReportListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaxReportList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxReportList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetTaxReportListQuery, GetTaxReportListQueryVariables>;