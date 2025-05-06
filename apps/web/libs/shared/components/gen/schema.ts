import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: Date
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any
}

export type AccessCategory = 'APIGW' | 'XROAD'

export type AddAttachmentInput = {
  id: Scalars['String']
  key: Scalars['String']
  url: Scalars['String']
}

export type Address = {
  city: Scalars['String']
  postalCode: Scalars['String']
  streetAddress: Scalars['String']
}

export type AirDiscountSchemeConfirmInvoiceInput = {
  age: AirDiscountSchemeRangeInput
  airline?: InputMaybe<Scalars['String']>
  flightLeg?: InputMaybe<AirDiscountSchemeTravelInput>
  gender?: InputMaybe<AirDiscountSchemeFlightLegGender>
  isExplicit?: InputMaybe<Scalars['Boolean']>
  nationalId?: InputMaybe<Scalars['String']>
  period: AirDiscountSchemePeriodInput
  postalCode?: InputMaybe<Scalars['Int']>
  state?: InputMaybe<Array<AirDiscountSchemeFlightLegState>>
}

export type AirDiscountSchemeCreateExplicitDiscountCodeInput = {
  comment: Scalars['String']
  isExplicit: Scalars['Boolean']
  nationalId: Scalars['String']
  needsConnectionFlight: Scalars['Boolean']
  numberOfDaysUntilExpiration: Scalars['Int']
  postalcode: Scalars['Int']
}

export type AirDiscountSchemeFlightLegGender = 'kk' | 'kvk' | 'manneskja' | 'x'

export type AirDiscountSchemeFlightLegState =
  | 'AWAITING_CREDIT'
  | 'AWAITING_DEBIT'
  | 'CANCELLED'
  | 'SENT_CREDIT'
  | 'SENT_DEBIT'

export type AirDiscountSchemeFlightLegsInput = {
  age: AirDiscountSchemeRangeInput
  airline?: InputMaybe<Scalars['String']>
  flightLeg?: InputMaybe<AirDiscountSchemeTravelInput>
  gender?: InputMaybe<AirDiscountSchemeFlightLegGender>
  isExplicit?: InputMaybe<Scalars['Boolean']>
  nationalId?: InputMaybe<Scalars['String']>
  period: AirDiscountSchemePeriodInput
  postalCode?: InputMaybe<Scalars['Int']>
  state?: InputMaybe<Array<AirDiscountSchemeFlightLegState>>
}

export type AirDiscountSchemePeriodInput = {
  from: Scalars['DateTime']
  to: Scalars['DateTime']
}

export type AirDiscountSchemeRangeInput = {
  from: Scalars['Int']
  to: Scalars['Int']
}

export type AirDiscountSchemeTravelInput = {
  from?: InputMaybe<Scalars['String']>
  to?: InputMaybe<Scalars['String']>
}

export type AircraftRegistryAllAircraftsInput = {
  pageNumber: Scalars['Float']
  pageSize: Scalars['Float']
  searchTerm?: InputMaybe<Scalars['String']>
}

export type AppendixInput = {
  text?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type ApplicationApplicationInput = {
  id: Scalars['String']
}

export type ApplicationApplicationsAdminInput = {
  nationalId: Scalars['String']
  status?: InputMaybe<Array<Scalars['String']>>
  typeId?: InputMaybe<Array<Scalars['String']>>
}

export type ApplicationApplicationsAdminStatisticsInput = {
  endDate: Scalars['String']
  startDate: Scalars['String']
}

export type ApplicationApplicationsInput = {
  scopeCheck?: InputMaybe<Scalars['Boolean']>
  status?: InputMaybe<Array<Scalars['String']>>
  typeId?: InputMaybe<Array<Scalars['String']>>
}

export type ApplicationApplicationsInstitutionAdminInput = {
  applicantNationalId?: InputMaybe<Scalars['String']>
  count: Scalars['Float']
  from?: InputMaybe<Scalars['String']>
  nationalId: Scalars['String']
  page: Scalars['Float']
  status?: InputMaybe<Array<Scalars['String']>>
  to?: InputMaybe<Scalars['String']>
}

export type ApplicationEligibilityInput = {
  applicationFor: Scalars['String']
}

export type ApplicationFileInput = {
  applicationId: Scalars['String']
  key: Scalars['String']
  name: Scalars['String']
  size: Scalars['Float']
  type: Scalars['String']
}

export type ApplicationListAdminResponseDtoStatusEnum =
  | 'approved'
  | 'completed'
  | 'draft'
  | 'inprogress'
  | 'notstarted'
  | 'rejected'

export type ApplicationListAdminResponseDtoTypeIdEnum =
  | 'AccidentNotification'
  | 'AdditionalSupportForTheElderly'
  | 'AlcoholTaxRedemption'
  | 'AnnouncementOfDeath'
  | 'AnonymityInVehicleRegistry'
  | 'CarRecycling'
  | 'ChangeCoOwnerOfVehicle'
  | 'ChangeMachineSupervisor'
  | 'ChangeOperatorOfVehicle'
  | 'ChildrenResidenceChangeV2'
  | 'Citizenship'
  | 'ComplaintsToAlthingiOmbudsman'
  | 'CriminalRecord'
  | 'DataProtectionAuthorityComplaint'
  | 'DeathBenefits'
  | 'DeregisterMachine'
  | 'DigitalTachographDriversCard'
  | 'DocumentProviderOnboarding'
  | 'DrivingAssessmentApproval'
  | 'DrivingInstructorRegistrations'
  | 'DrivingLearnersPermit'
  | 'DrivingLicense'
  | 'DrivingLicenseBookUpdateInstructor'
  | 'DrivingLicenseDuplicate'
  | 'DrivingSchoolConfirmation'
  | 'EnergyFunds'
  | 'Estate'
  | 'EuropeanHealthInsuranceCard'
  | 'ExampleCommonActions'
  | 'ExampleForm'
  | 'ExampleInputs'
  | 'ExampleNoInputs'
  | 'ExamplePayment'
  | 'ExampleStateTransfers'
  | 'FinancialAid'
  | 'FinancialStatementCemetery'
  | 'FinancialStatementIndividualElection'
  | 'FinancialStatementPoliticalParty'
  | 'FinancialStatementsInao'
  | 'FundingGovernmentProjects'
  | 'GeneralFishingLicense'
  | 'GeneralPetitionService'
  | 'GrindavikHousingBuyout'
  | 'HealthInsurance'
  | 'HealthInsuranceDeclaration'
  | 'HealthcareLicenseCertificate'
  | 'HealthcareWorkPermit'
  | 'HomeSupport'
  | 'HouseholdSupplement'
  | 'IdCard'
  | 'IncomePlan'
  | 'InheritanceReport'
  | 'InstitutionCollaboration'
  | 'LicensePlateRenewal'
  | 'LoginService'
  | 'MachineRegistration'
  | 'MarriageConditions'
  | 'MortgageCertificate'
  | 'MunicipalListCreation'
  | 'MunicipalListSigning'
  | 'NewPrimarySchool'
  | 'NoDebtCertificate'
  | 'OfficialJournalOfIceland'
  | 'OldAgePension'
  | 'OperatingLicense'
  | 'OrderVehicleLicensePlate'
  | 'OrderVehicleRegistrationCertificate'
  | 'PSign'
  | 'ParentalLeave'
  | 'ParliamentaryListCreation'
  | 'ParliamentaryListSigning'
  | 'Passport'
  | 'PassportAnnulment'
  | 'PensionSupplement'
  | 'PresidentialListCreation'
  | 'PresidentialListSigning'
  | 'PublicDebtPaymentPlan'
  | 'RequestInspectionForMachine'
  | 'SecondarySchool'
  | 'SeminarRegistration'
  | 'StreetRegistration'
  | 'TrainingLicenseOnAWorkMachine'
  | 'TransferOfMachineOwnership'
  | 'TransferOfVehicleOwnership'
  | 'University'
  | 'WorkAccidentNotification'

export type ApplicationResponseDtoStatusEnum =
  | 'approved'
  | 'completed'
  | 'draft'
  | 'inprogress'
  | 'notstarted'
  | 'rejected'

export type ApplicationResponseDtoTypeIdEnum =
  | 'AccidentNotification'
  | 'AdditionalSupportForTheElderly'
  | 'AlcoholTaxRedemption'
  | 'AnnouncementOfDeath'
  | 'AnonymityInVehicleRegistry'
  | 'CarRecycling'
  | 'ChangeCoOwnerOfVehicle'
  | 'ChangeMachineSupervisor'
  | 'ChangeOperatorOfVehicle'
  | 'ChildrenResidenceChangeV2'
  | 'Citizenship'
  | 'ComplaintsToAlthingiOmbudsman'
  | 'CriminalRecord'
  | 'DataProtectionAuthorityComplaint'
  | 'DeathBenefits'
  | 'DeregisterMachine'
  | 'DigitalTachographDriversCard'
  | 'DocumentProviderOnboarding'
  | 'DrivingAssessmentApproval'
  | 'DrivingInstructorRegistrations'
  | 'DrivingLearnersPermit'
  | 'DrivingLicense'
  | 'DrivingLicenseBookUpdateInstructor'
  | 'DrivingLicenseDuplicate'
  | 'DrivingSchoolConfirmation'
  | 'EnergyFunds'
  | 'Estate'
  | 'EuropeanHealthInsuranceCard'
  | 'ExampleCommonActions'
  | 'ExampleForm'
  | 'ExampleInputs'
  | 'ExampleNoInputs'
  | 'ExamplePayment'
  | 'ExampleStateTransfers'
  | 'FinancialAid'
  | 'FinancialStatementCemetery'
  | 'FinancialStatementIndividualElection'
  | 'FinancialStatementPoliticalParty'
  | 'FinancialStatementsInao'
  | 'FundingGovernmentProjects'
  | 'GeneralFishingLicense'
  | 'GeneralPetitionService'
  | 'GrindavikHousingBuyout'
  | 'HealthInsurance'
  | 'HealthInsuranceDeclaration'
  | 'HealthcareLicenseCertificate'
  | 'HealthcareWorkPermit'
  | 'HomeSupport'
  | 'HouseholdSupplement'
  | 'IdCard'
  | 'IncomePlan'
  | 'InheritanceReport'
  | 'InstitutionCollaboration'
  | 'LicensePlateRenewal'
  | 'LoginService'
  | 'MachineRegistration'
  | 'MarriageConditions'
  | 'MortgageCertificate'
  | 'MunicipalListCreation'
  | 'MunicipalListSigning'
  | 'NewPrimarySchool'
  | 'NoDebtCertificate'
  | 'OfficialJournalOfIceland'
  | 'OldAgePension'
  | 'OperatingLicense'
  | 'OrderVehicleLicensePlate'
  | 'OrderVehicleRegistrationCertificate'
  | 'PSign'
  | 'ParentalLeave'
  | 'ParliamentaryListCreation'
  | 'ParliamentaryListSigning'
  | 'Passport'
  | 'PassportAnnulment'
  | 'PensionSupplement'
  | 'PresidentialListCreation'
  | 'PresidentialListSigning'
  | 'PublicDebtPaymentPlan'
  | 'RequestInspectionForMachine'
  | 'SecondarySchool'
  | 'SeminarRegistration'
  | 'StreetRegistration'
  | 'TrainingLicenseOnAWorkMachine'
  | 'TransferOfMachineOwnership'
  | 'TransferOfVehicleOwnership'
  | 'University'
  | 'WorkAccidentNotification'

export type AssignApplicationInput = {
  token: Scalars['String']
}

export type AttachmentPresignedUrlInput = {
  attachmentKey: Scalars['String']
  id: Scalars['String']
}

export type AuthActorDelegationInput = {
  delegationTypes?: InputMaybe<Array<AuthDelegationType>>
}

export type AuthAdminClientClaimInput = {
  type: Scalars['String']
  value: Scalars['String']
}

export type AuthAdminClientInput = {
  clientId: Scalars['String']
  includeArchived?: InputMaybe<Scalars['Boolean']>
  tenantId: Scalars['String']
}

export type AuthAdminClientSso = 'disabled' | 'enabled'

export type AuthAdminClientType = 'machine' | 'native' | 'spa' | 'web'

export type AuthAdminClientsInput = {
  tenantId: Scalars['String']
}

export type AuthAdminCreateClientType = 'machine' | 'native' | 'web'

export type AuthAdminDeleteClientInput = {
  clientId: Scalars['String']
  tenantId: Scalars['String']
}

export type AuthAdminEnvironment = 'Development' | 'Production' | 'Staging'

export type AuthAdminPatchClientInput = {
  absoluteRefreshTokenLifetime?: InputMaybe<Scalars['Int']>
  accessTokenLifetime?: InputMaybe<Scalars['Int']>
  addedDelegationTypes?: InputMaybe<Array<Scalars['String']>>
  addedScopes?: InputMaybe<Array<Scalars['String']>>
  allowOfflineAccess?: InputMaybe<Scalars['Boolean']>
  clientId: Scalars['String']
  customClaims?: InputMaybe<Array<AuthAdminClientClaimInput>>
  displayName?: InputMaybe<Array<AuthAdminTranslatedValueInput>>
  environments: Array<AuthAdminEnvironment>
  postLogoutRedirectUris?: InputMaybe<Array<Scalars['String']>>
  promptDelegations?: InputMaybe<Scalars['Boolean']>
  redirectUris?: InputMaybe<Array<Scalars['String']>>
  refreshTokenExpiration?: InputMaybe<AuthAdminRefreshTokenExpiration>
  removedDelegationTypes?: InputMaybe<Array<Scalars['String']>>
  removedScopes?: InputMaybe<Array<Scalars['String']>>
  requireApiScopes?: InputMaybe<Scalars['Boolean']>
  requireConsent?: InputMaybe<Scalars['Boolean']>
  requirePkce?: InputMaybe<Scalars['Boolean']>
  singleSession?: InputMaybe<Scalars['Boolean']>
  slidingRefreshTokenLifetime?: InputMaybe<Scalars['Int']>
  sso?: InputMaybe<AuthAdminClientSso>
  supportTokenExchange?: InputMaybe<Scalars['Boolean']>
  supportsCustomDelegation?: InputMaybe<Scalars['Boolean']>
  supportsLegalGuardians?: InputMaybe<Scalars['Boolean']>
  supportsPersonalRepresentatives?: InputMaybe<Scalars['Boolean']>
  supportsProcuringHolders?: InputMaybe<Scalars['Boolean']>
  tenantId: Scalars['String']
}

export type AuthAdminPatchScopeInput = {
  addedDelegationTypes?: InputMaybe<Array<Scalars['String']>>
  allowExplicitDelegationGrant?: InputMaybe<Scalars['Boolean']>
  automaticDelegationGrant?: InputMaybe<Scalars['Boolean']>
  description?: InputMaybe<Array<AuthAdminTranslatedValueInput>>
  displayName?: InputMaybe<Array<AuthAdminTranslatedValueInput>>
  environments: Array<AuthAdminEnvironment>
  grantToAuthenticatedUser?: InputMaybe<Scalars['Boolean']>
  grantToLegalGuardians?: InputMaybe<Scalars['Boolean']>
  grantToPersonalRepresentatives?: InputMaybe<Scalars['Boolean']>
  grantToProcuringHolders?: InputMaybe<Scalars['Boolean']>
  isAccessControlled?: InputMaybe<Scalars['Boolean']>
  removedDelegationTypes?: InputMaybe<Array<Scalars['String']>>
  scopeName: Scalars['String']
  tenantId: Scalars['String']
}

export type AuthAdminPublishClientInput = {
  clientId: Scalars['String']
  sourceEnvironment: AuthAdminEnvironment
  targetEnvironment: AuthAdminEnvironment
  tenantId: Scalars['String']
}

export type AuthAdminPublishScopeInput = {
  scopeName: Scalars['String']
  sourceEnvironment: AuthAdminEnvironment
  targetEnvironment: AuthAdminEnvironment
  tenantId: Scalars['String']
}

export type AuthAdminRefreshTokenExpiration = 'Absolute' | 'Sliding'

export type AuthAdminRevokeSecretsInput = {
  clientId: Scalars['String']
  environment: AuthAdminEnvironment
  tenantId: Scalars['String']
}

export type AuthAdminRotateSecretInput = {
  clientId: Scalars['String']
  environment: AuthAdminEnvironment
  revokeOldSecrets?: InputMaybe<Scalars['Boolean']>
  tenantId: Scalars['String']
}

export type AuthAdminTranslatedValueInput = {
  locale: Scalars['String']
  value: Scalars['String']
}

export type AuthApiScopesInput = {
  direction?: InputMaybe<AuthDomainDirection>
  domain?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
}

export type AuthDelegationDirection = 'incoming' | 'outgoing'

export type AuthDelegationInput = {
  delegationId: Scalars['String']
}

export type AuthDelegationProvider =
  | 'delegationdb'
  | 'fyrirtaekjaskra'
  | 'syslumenn'
  | 'talsmannagrunnur'
  | 'thjodskra'

export type AuthDelegationScopeInput = {
  name: Scalars['String']
  validTo: Scalars['DateTime']
}

export type AuthDelegationType =
  | 'Custom'
  | 'GeneralMandate'
  | 'LegalGuardian'
  | 'LegalGuardianMinor'
  | 'LegalRepresentative'
  | 'PersonalRepresentative'
  | 'ProcurationHolder'

export type AuthDelegationsInput = {
  direction?: InputMaybe<AuthDelegationDirection>
  domain?: InputMaybe<Scalars['String']>
}

export type AuthDomainDirection = 'outgoing'

export type AuthDomainsInput = {
  direction?: InputMaybe<AuthDomainDirection>
  lang?: InputMaybe<Scalars['String']>
}

export type AuthExtensionCredProps = {
  rk?: InputMaybe<Scalars['Boolean']>
}

export type AuthPasskeyRegistrationObject = {
  authenticatorAttachment?: InputMaybe<Scalars['String']>
  clientExtensionResults: AuthPasskeyRegistrationObjectClientExtensionResults
  id: Scalars['String']
  rawId: Scalars['String']
  response: AuthPasskeyRegistrationObjectResponse
  type: Scalars['String']
}

export type AuthPasskeyRegistrationObjectClientExtensionResults = {
  appid?: InputMaybe<Scalars['Boolean']>
  credProps?: InputMaybe<AuthExtensionCredProps>
  hmacCreateSecret?: InputMaybe<Scalars['Boolean']>
}

export type AuthPasskeyRegistrationObjectResponse = {
  attestationObject: Scalars['String']
  authenticatorData?: InputMaybe<Scalars['String']>
  clientDataJSON: Scalars['String']
  publicKey?: InputMaybe<Scalars['String']>
  publicKeyAlgorithm?: InputMaybe<Scalars['Float']>
  transports?: InputMaybe<Array<Scalars['String']>>
}

export type BulkUploadUser = {
  nationalId: Scalars['String']
  pageNumber: Scalars['Float']
}

export type BulkVehicleMileageRequestOverviewInput = {
  guid: Scalars['ID']
  locale: Scalars['String']
}

export type BulkVehicleMileageRequestStatusInput = {
  requestId: Scalars['ID']
}

export type CalculationType = 'E' | 'KG' | 'L' | 'U'

export type CaseSubscriptionType = 'AllChanges' | 'StatusChanges'

export type CheckTachoNetInput = {
  birthDate: Scalars['DateTime']
  birthPlace: Scalars['String']
  drivingLicenceIssuingCountry: Scalars['String']
  drivingLicenceNumber: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
}

export type CoOwnerChangeAnswers = {
  coOwners?: InputMaybe<Array<CoOwnerChangeAnswersCoOwners>>
  owner: CoOwnerChangeAnswersUser
  ownerCoOwners?: InputMaybe<Array<CoOwnerChangeAnswersOwnerCoOwners>>
  pickVehicle: CoOwnerChangeAnswersPickVehicle
  vehicleMileage: CoOwnerChangeAnswersVehicleMileage
}

export type CoOwnerChangeAnswersCoOwners = {
  email: Scalars['String']
  nationalId: Scalars['String']
  wasRemoved?: InputMaybe<Scalars['String']>
}

export type CoOwnerChangeAnswersOwnerCoOwners = {
  email: Scalars['String']
  nationalId: Scalars['String']
  wasRemoved?: InputMaybe<Scalars['String']>
}

export type CoOwnerChangeAnswersPickVehicle = {
  plate: Scalars['String']
}

export type CoOwnerChangeAnswersUser = {
  email: Scalars['String']
  nationalId: Scalars['String']
}

export type CoOwnerChangeAnswersVehicleMileage = {
  value?: InputMaybe<Scalars['String']>
}

/** Collection has different statuses to represent the state of collection */
export type CollectionStatus =
  /** Collection contains active extended list. */
  | 'Active'
  | 'InInitialReview'
  /** Collection has no open lists. Lists are being reviewed by processing admin. */
  | 'InReview'
  /** Collection is not active, has been closed or has not yet started. */
  | 'Inactive'
  /** Collection contains active list. In intial open time. */
  | 'InitialActive'
  /** Collection has been marked as processed. */
  | 'Processed'
  /** All lists for collection have been reviewed, the collection has not been marked as processed. */
  | 'Processing'

export type ConsultationPortalCaseInput = {
  caseId?: InputMaybe<Scalars['Int']>
}

export type ConsultationPortalCasePostAdviceCommandInput = {
  content?: InputMaybe<Scalars['String']>
  fileUrls?: InputMaybe<Array<Scalars['String']>>
  privateAdvice?: InputMaybe<Scalars['Boolean']>
}

export type ConsultationPortalCaseSubscriptionCommandInput = {
  id?: InputMaybe<Scalars['Float']>
  subscriptionType?: InputMaybe<CaseSubscriptionType>
}

export type ConsultationPortalCasesInput = {
  caseStatuses?: InputMaybe<Array<Scalars['Float']>>
  caseTypes?: InputMaybe<Array<Scalars['Float']>>
  dateFrom?: InputMaybe<Scalars['DateTime']>
  dateTo?: InputMaybe<Scalars['DateTime']>
  institutions?: InputMaybe<Array<Scalars['Float']>>
  orderBy?: InputMaybe<Scalars['String']>
  pageNumber?: InputMaybe<Scalars['Float']>
  pageSize?: InputMaybe<Scalars['Float']>
  policyAreas?: InputMaybe<Array<Scalars['Float']>>
  searchQuery?: InputMaybe<Scalars['String']>
}

export type ConsultationPortalPostAdviceInput = {
  caseId?: InputMaybe<Scalars['Int']>
  postCaseAdviceCommand?: InputMaybe<ConsultationPortalCasePostAdviceCommandInput>
}

export type ConsultationPortalPostCaseSubscriptionCommandInput = {
  subscriptionType?: InputMaybe<CaseSubscriptionType>
}

export type ConsultationPortalPostCaseSubscriptionTypeInput = {
  caseId?: InputMaybe<Scalars['Int']>
  postCaseSubscriptionCommand?: InputMaybe<ConsultationPortalPostCaseSubscriptionCommandInput>
}

export type ConsultationPortalPostEmailCommandInput = {
  email?: InputMaybe<Scalars['String']>
}

export type ConsultationPortalSubscriptionCommandInput = {
  id?: InputMaybe<Scalars['Float']>
  subscriptionType?: InputMaybe<SubscriptionType>
}

export type ConsultationPortalUserAdvicesInput = {
  oldestFirst?: InputMaybe<Scalars['Boolean']>
  pageNumber?: InputMaybe<Scalars['Float']>
  pageSize?: InputMaybe<Scalars['Float']>
  searchQuery?: InputMaybe<Scalars['String']>
}

export type ConsultationPortalUserSubscriptionsCommandInput = {
  caseIds?: InputMaybe<Array<ConsultationPortalCaseSubscriptionCommandInput>>
  institutionIds?: InputMaybe<Array<ConsultationPortalSubscriptionCommandInput>>
  policyAreaIds?: InputMaybe<Array<ConsultationPortalSubscriptionCommandInput>>
  subscribeToAll?: InputMaybe<Scalars['Boolean']>
  subscribeToAllType?: InputMaybe<SubscriptionType>
}

export type ContactUsInput = {
  email: Scalars['String']
  message: Scalars['String']
  name: Scalars['String']
  phone?: InputMaybe<Scalars['String']>
  subject?: InputMaybe<Scalars['String']>
}

export type ContentLanguage = 'en' | 'is'

export type CreateApplicationDtoTypeIdEnum =
  | 'AccidentNotification'
  | 'AdditionalSupportForTheElderly'
  | 'AlcoholTaxRedemption'
  | 'AnnouncementOfDeath'
  | 'AnonymityInVehicleRegistry'
  | 'CarRecycling'
  | 'ChangeCoOwnerOfVehicle'
  | 'ChangeMachineSupervisor'
  | 'ChangeOperatorOfVehicle'
  | 'ChildrenResidenceChangeV2'
  | 'Citizenship'
  | 'ComplaintsToAlthingiOmbudsman'
  | 'CriminalRecord'
  | 'DataProtectionAuthorityComplaint'
  | 'DeathBenefits'
  | 'DeregisterMachine'
  | 'DigitalTachographDriversCard'
  | 'DocumentProviderOnboarding'
  | 'DrivingAssessmentApproval'
  | 'DrivingInstructorRegistrations'
  | 'DrivingLearnersPermit'
  | 'DrivingLicense'
  | 'DrivingLicenseBookUpdateInstructor'
  | 'DrivingLicenseDuplicate'
  | 'DrivingSchoolConfirmation'
  | 'EnergyFunds'
  | 'Estate'
  | 'EuropeanHealthInsuranceCard'
  | 'ExampleCommonActions'
  | 'ExampleForm'
  | 'ExampleInputs'
  | 'ExampleNoInputs'
  | 'ExamplePayment'
  | 'ExampleStateTransfers'
  | 'FinancialAid'
  | 'FinancialStatementCemetery'
  | 'FinancialStatementIndividualElection'
  | 'FinancialStatementPoliticalParty'
  | 'FinancialStatementsInao'
  | 'FundingGovernmentProjects'
  | 'GeneralFishingLicense'
  | 'GeneralPetitionService'
  | 'GrindavikHousingBuyout'
  | 'HealthInsurance'
  | 'HealthInsuranceDeclaration'
  | 'HealthcareLicenseCertificate'
  | 'HealthcareWorkPermit'
  | 'HomeSupport'
  | 'HouseholdSupplement'
  | 'IdCard'
  | 'IncomePlan'
  | 'InheritanceReport'
  | 'InstitutionCollaboration'
  | 'LicensePlateRenewal'
  | 'LoginService'
  | 'MachineRegistration'
  | 'MarriageConditions'
  | 'MortgageCertificate'
  | 'MunicipalListCreation'
  | 'MunicipalListSigning'
  | 'NewPrimarySchool'
  | 'NoDebtCertificate'
  | 'OfficialJournalOfIceland'
  | 'OldAgePension'
  | 'OperatingLicense'
  | 'OrderVehicleLicensePlate'
  | 'OrderVehicleRegistrationCertificate'
  | 'PSign'
  | 'ParentalLeave'
  | 'ParliamentaryListCreation'
  | 'ParliamentaryListSigning'
  | 'Passport'
  | 'PassportAnnulment'
  | 'PensionSupplement'
  | 'PresidentialListCreation'
  | 'PresidentialListSigning'
  | 'PublicDebtPaymentPlan'
  | 'RequestInspectionForMachine'
  | 'SecondarySchool'
  | 'SeminarRegistration'
  | 'StreetRegistration'
  | 'TrainingLicenseOnAWorkMachine'
  | 'TransferOfMachineOwnership'
  | 'TransferOfVehicleOwnership'
  | 'University'
  | 'WorkAccidentNotification'

export type CreateApplicationInput = {
  initialQuery?: InputMaybe<Scalars['String']>
  typeId: CreateApplicationDtoTypeIdEnum
}

export type CreateAuthAdminClientInput = {
  clientId: Scalars['ID']
  clientType: AuthAdminCreateClientType
  displayName: Scalars['String']
  environments: Array<AuthAdminEnvironment>
  sso?: InputMaybe<AuthAdminClientSso>
  supportedDelegationTypes?: InputMaybe<Array<Scalars['String']>>
  tenantId: Scalars['ID']
}

export type CreateAuthDelegationInput = {
  domainName?: InputMaybe<Scalars['String']>
  scopes?: InputMaybe<Array<AuthDelegationScopeInput>>
  toNationalId: Scalars['String']
}

export type CreateAuthLoginRestrictionInput = {
  until: Scalars['DateTime']
}

export type CreateChangeAppendixInput = {
  diff?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type CreateContactInput = {
  email: Scalars['String']
  name: Scalars['String']
  phoneNumber: Scalars['String']
}

export type CreateDelegationInput = {
  fromNationalId: Scalars['String']
  referenceId: Scalars['String']
  toNationalId: Scalars['String']
  type: Scalars['String']
  validTo?: InputMaybe<Scalars['DateTime']>
}

export type CreateDraftRegulationCancelInput = {
  changingId: Scalars['String']
  date: Scalars['String']
  regulation: Scalars['String']
}

export type CreateDraftRegulationChangeInput = {
  appendixes?: InputMaybe<Array<CreateChangeAppendixInput>>
  changingId: Scalars['String']
  comments?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  diff?: InputMaybe<Scalars['String']>
  regulation: Scalars['String']
  text?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type CreateDraftRegulationInput = {
  type?: InputMaybe<Scalars['String']>
}

export type CreateDrivingSchoolTestResultInput = {
  bookId: Scalars['String']
  comments: Scalars['String']
  createdOn: Scalars['String']
  schoolEmployeeNationalId: Scalars['String']
  schoolNationalId: Scalars['String']
  schoolTypeId: Scalars['Float']
}

export type CreateEmailVerificationInput = {
  email: Scalars['String']
}

export type CreateEndorsementInput = {
  endorsementDto: EndorsementInput
  listId: Scalars['String']
}

export type CreateEndorsementListDto = {
  adminLock: Scalars['Boolean']
  closedDate: Scalars['DateTime']
  description?: InputMaybe<Scalars['String']>
  endorsementMetadata: Array<MetadataInput>
  meta?: InputMaybe<Scalars['JSON']>
  openedDate: Scalars['DateTime']
  tags: Array<EndorsementListDtoTagsEnum>
  title: Scalars['String']
}

export type CreateFormSystemApplicantDtoInput = {
  applicantTypeId: Scalars['String']
  formId: Scalars['String']
}

export type CreateFormSystemApplicantInput = {
  createFormApplicantTypeDto?: InputMaybe<CreateFormSystemApplicantDtoInput>
}

export type CreateFormSystemApplicationInput = {
  slug?: InputMaybe<Scalars['String']>
}

export type CreateFormSystemCertificationDtoInput = {
  certificationTypeId?: InputMaybe<Scalars['String']>
  formId?: InputMaybe<Scalars['String']>
}

export type CreateFormSystemCertificationInput = {
  createFormCertificationTypeDto?: InputMaybe<CreateFormSystemCertificationDtoInput>
}

export type CreateFormSystemFieldDtoInput = {
  displayOrder?: InputMaybe<Scalars['Int']>
  fieldType?: InputMaybe<Scalars['String']>
  screenId?: InputMaybe<Scalars['String']>
}

export type CreateHelpdeskInput = {
  email: Scalars['String']
  phoneNumber: Scalars['String']
}

export type CreateIcelandicNameInput = {
  description?: InputMaybe<Scalars['String']>
  icelandicName: Scalars['String']
  status: Scalars['String']
  type: Scalars['String']
  url?: InputMaybe<Scalars['String']>
  verdict?: InputMaybe<Scalars['String']>
  visible: Scalars['Boolean']
}

export type CreatePracticalDrivingLessonInput = {
  bookId: Scalars['String']
  comments: Scalars['String']
  createdOn: Scalars['String']
  minutes: Scalars['Float']
}

export type CreateProviderInput = {
  clientName: Scalars['String']
  nationalId: Scalars['String']
}

export type CreateRegulationPresignedPostInput = {
  fileName: Scalars['String']
  hash: Scalars['String']
  regId: Scalars['String']
}

export type CreateScopeInput = {
  description: Scalars['String']
  displayName: Scalars['String']
  environments: Array<AuthAdminEnvironment>
  name: Scalars['String']
  tenantId: Scalars['String']
}

export type CreateSmsVerificationInput = {
  mobilePhoneNumber: Scalars['String']
}

export type CreateUserProfileInput = {
  canNudge?: InputMaybe<Scalars['Boolean']>
  documentNotifications?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  emailCode?: InputMaybe<Scalars['String']>
  emailStatus?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
  mobilePhoneNumber?: InputMaybe<Scalars['String']>
  mobileStatus?: InputMaybe<Scalars['String']>
  smsCode?: InputMaybe<Scalars['String']>
}

export type CustomPageUniqueIdentifier =
  | 'BloodDonationRestrictions'
  | 'DirectorateOfLabourMyPages'
  | 'Grants'
  | 'OfficialJournalOfIceland'
  | 'OfficialJournalOfIcelandHelp'
  | 'PensionCalculator'
  | 'Vacancies'
  | 'Verdicts'

export type DataCategory =
  | 'FINANCIAL'
  | 'HEALTH'
  | 'OFFICIAL'
  | 'OPEN'
  | 'PERSONAL'
  | 'PUBLIC'

export type DataProvider = {
  actionId: Scalars['String']
  order: Scalars['Float']
}

export type DeleteApplicationInput = {
  id: Scalars['String']
}

export type DeleteAttachmentInput = {
  id: Scalars['String']
  key: Scalars['String']
}

export type DeleteAuthDelegationInput = {
  delegationId: Scalars['String']
}

export type DeleteDraftRegulationCancelInput = {
  id: Scalars['String']
}

export type DeleteDraftRegulationChangeInput = {
  id: Scalars['String']
}

export type DeleteDraftRegulationInput = {
  draftId: Scalars['String']
}

export type DeleteFormSystemApplicantInput = {
  id?: InputMaybe<Scalars['String']>
}

export type DeleteFormSystemCertificationInput = {
  id: Scalars['String']
}

export type DeleteIcelandicNameByIdInput = {
  id: Scalars['Float']
}

export type DeleteIslykillValueInput = {
  email?: InputMaybe<Scalars['Boolean']>
  mobilePhoneNumber?: InputMaybe<Scalars['Boolean']>
}

export type DeletePracticalDrivingLessonInput = {
  bookId: Scalars['String']
  id: Scalars['String']
  reason: Scalars['String']
}

export type DocumentConfirmActionsInput = {
  confirmed?: InputMaybe<Scalars['Boolean']>
  id: Scalars['String']
}

export type DocumentInput = {
  /** Optional. For logging only. */
  category?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  includeDocument?: InputMaybe<Scalars['Boolean']>
  pageSize?: InputMaybe<Scalars['Float']>
  /** Optional. For logging only. */
  provider?: InputMaybe<Scalars['String']>
}

export type DocumentPdfRendererInput = {
  actions?: InputMaybe<Array<Scalars['String']>>
  error?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  isCourtCase?: InputMaybe<Scalars['Boolean']>
  success: Scalars['Boolean']
}

export type DocumentProviderCategoriesAndTypesPostInput = {
  active?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
}

export type DocumentProviderCategoriesAndTypesPutInput = {
  active?: InputMaybe<Scalars['Boolean']>
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
}

export type DocumentProviderPaperMailInput = {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type DocumentsV2DocumentsInput = {
  archived?: InputMaybe<Scalars['Boolean']>
  bookmarked?: InputMaybe<Scalars['Boolean']>
  categoryIds?: InputMaybe<Array<Scalars['String']>>
  dateFrom?: InputMaybe<Scalars['DateTime']>
  dateTo?: InputMaybe<Scalars['DateTime']>
  opened?: InputMaybe<Scalars['Boolean']>
  order?: InputMaybe<DocumentsV2PageOrder>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  senderNationalId?: InputMaybe<Array<Scalars['String']>>
  sortBy?: InputMaybe<DocumentsV2PageSort>
  subjectContains?: InputMaybe<Scalars['String']>
  typeId?: InputMaybe<Scalars['String']>
}

export type DocumentsV2FileType = 'HTML' | 'PDF' | 'UNKNOWN' | 'URL'

export type DocumentsV2MailActionInput = {
  action: Scalars['String']
  documentIds: Array<Scalars['String']>
}

export type DocumentsV2PageOrder = 'Ascending' | 'Descending'

export type DocumentsV2PageSort =
  | 'Category'
  | 'Date'
  | 'Publication'
  | 'Sender'
  | 'Subject'
  | 'Type'

export type DraftProgressInput = {
  stepsFinished: Scalars['Float']
  totalSteps: Scalars['Float']
}

export type DrivingLicenseBookStudentInput = {
  licenseCategory?: InputMaybe<Scalars['String']>
  nationalId: Scalars['String']
}

export type DrivingLicenseBookStudentsInput = {
  cursor: Scalars['String']
  key: Scalars['String']
  licenseCategory: Scalars['String']
  limit: Scalars['Float']
}

export type EditDraftBody = {
  appendixes?: InputMaybe<Array<AppendixInput>>
  comments?: InputMaybe<Scalars['String']>
  draftingNotes?: InputMaybe<Scalars['String']>
  draftingStatus?: InputMaybe<Scalars['String']>
  effectiveDate?: InputMaybe<Scalars['String']>
  fastTrack: Scalars['Boolean']
  idealPublishDate?: InputMaybe<Scalars['String']>
  lawChapters?: InputMaybe<Array<Scalars['String']>>
  ministry?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  signatureDate?: InputMaybe<Scalars['String']>
  signatureText?: InputMaybe<Scalars['String']>
  signedDocumentUrl?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

export type EditDraftRegulationInput = {
  body: EditDraftBody
  id: Scalars['String']
}

export type EducationFriggOptionsListInput = {
  type: Scalars['String']
}

export type EmailSignupInput = {
  inputFields: Array<EmailSignupInputField>
  signupID: Scalars['String']
}

export type EmailSignupInputField = {
  id: Scalars['String']
  name: Scalars['String']
  type: Scalars['String']
  value: Scalars['String']
}

export type EndorsementInput = {
  showName: Scalars['Boolean']
}

export type EndorsementListControllerFindByTagsTagsEnum = 'generalPetition'

export type EndorsementListDtoTagsEnum = 'generalPetition'

export type EndorsementListOpenTagsEnum = 'generalPetition'

export type EndorsementListTagsEnum = 'generalPetition'

export type EndorsementMetadataDtoFieldEnum = 'fullName' | 'showName'

export type EndorsementPaginationInput = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Float']>
  tags: Array<EndorsementListControllerFindByTagsTagsEnum>
}

export type Environment = 'DEVELOPMENT' | 'PRODUCTION' | 'STAGING'

export type ExportEndorsementListInput = {
  fileType: Scalars['String']
  listId: Scalars['String']
}

export type FetchEducationSignedLicenseUrlInput = {
  licenseId: Scalars['String']
}

export type FindEndorsementListInput = {
  listId: Scalars['String']
}

/** Possible types of fishing license codes */
export type FishingLicenseCodeType =
  | 'catchMark'
  | 'commonWhelk'
  | 'costalFisheries'
  | 'crustaceans'
  | 'fishWithDanishSeine'
  | 'freetime'
  | 'freetimeHook'
  | 'freetimeHookMed'
  | 'greyslepp'
  | 'hookCatchLimit'
  | 'lumpfish'
  | 'northIceOceanCod'
  | 'oceanQuahogin'
  | 'unknown'

export type FiskistofaCategoryChange = {
  catchChange: Scalars['Float']
  catchQuotaChange: Scalars['Float']
  id: Scalars['Float']
}

export type FiskistofaGetQuotaTypesForCalendarYearInput = {
  year: Scalars['String']
}

export type FiskistofaGetQuotaTypesForTimePeriodInput = {
  timePeriod: Scalars['String']
}

export type FiskistofaGetShipStatusForCalendarYearInput = {
  shipNumber: Scalars['Float']
  year: Scalars['String']
}

export type FiskistofaGetShipStatusForTimePeriodInput = {
  shipNumber: Scalars['Float']
  timePeriod: Scalars['String']
}

export type FiskistofaGetShipsInput = {
  shipName: Scalars['String']
}

export type FiskistofaGetSingleShipInput = {
  shipNumber: Scalars['Float']
}

export type FiskistofaQuotaCategoryChange = {
  allocatedCatchQuota?: InputMaybe<Scalars['Float']>
  id: Scalars['Float']
  nextYearFromQuota?: InputMaybe<Scalars['Float']>
  nextYearQuota?: InputMaybe<Scalars['Float']>
  quotaShare?: InputMaybe<Scalars['Float']>
}

export type FiskistofaUpdateShipQuotaStatusForTimePeriodInput = {
  change: FiskistofaQuotaCategoryChange
  shipNumber: Scalars['Float']
  timePeriod: Scalars['String']
}

export type FiskistofaUpdateShipStatusForCalendarYearInput = {
  changes: Array<FiskistofaCategoryChange>
  shipNumber: Scalars['Float']
  year: Scalars['String']
}

export type FiskistofaUpdateShipStatusForTimePeriodInput = {
  changes: Array<FiskistofaCategoryChange>
  shipNumber: Scalars['Float']
  timePeriod: Scalars['String']
}

export type FormSystemApplicationInput = {
  id?: InputMaybe<Scalars['String']>
}

export type FormSystemCreateFieldInput = {
  createFieldDto?: InputMaybe<CreateFormSystemFieldDtoInput>
}

export type FormSystemCreateFormInput = {
  organizationNationalId?: InputMaybe<Scalars['String']>
}

export type FormSystemCreateListItemDtoInput = {
  displayOrder?: InputMaybe<Scalars['Int']>
  fieldId?: InputMaybe<Scalars['String']>
}

export type FormSystemCreateListItemInput = {
  createListItemDto?: InputMaybe<FormSystemCreateListItemDtoInput>
}

export type FormSystemCreateScreenDtoInput = {
  displayOrder?: InputMaybe<Scalars['Int']>
  sectionId?: InputMaybe<Scalars['String']>
}

export type FormSystemCreateScreenInput = {
  createScreenDto?: InputMaybe<FormSystemCreateScreenDtoInput>
}

export type FormSystemCreateSectionDtoInput = {
  displayOrder?: InputMaybe<Scalars['Int']>
  formId?: InputMaybe<Scalars['String']>
}

export type FormSystemCreateSectionInput = {
  createSectionDto?: InputMaybe<FormSystemCreateSectionDtoInput>
}

export type FormSystemDeleteFieldInput = {
  id?: InputMaybe<Scalars['String']>
}

export type FormSystemDeleteFormInput = {
  id?: InputMaybe<Scalars['String']>
}

export type FormSystemDeleteListItemInput = {
  id?: InputMaybe<Scalars['String']>
}

export type FormSystemDeleteScreenInput = {
  id: Scalars['String']
}

export type FormSystemDeleteSectionInput = {
  id?: InputMaybe<Scalars['String']>
}

export type FormSystemDependencyInput = {
  childProps?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  isSelected?: InputMaybe<Scalars['Boolean']>
  parentProp?: InputMaybe<Scalars['String']>
}

export type FormSystemFieldDisplayOrderInput = {
  id?: InputMaybe<Scalars['String']>
  screenId?: InputMaybe<Scalars['String']>
}

export type FormSystemFieldSettingsInput = {
  buttonText?: InputMaybe<FormSystemLanguageTypeInput>
  fileMaxSize?: InputMaybe<Scalars['Int']>
  fileTypes?: InputMaybe<Scalars['String']>
  hasLink?: InputMaybe<Scalars['Boolean']>
  hasPropertyInput?: InputMaybe<Scalars['Boolean']>
  hasPropertyList?: InputMaybe<Scalars['Boolean']>
  isLarge?: InputMaybe<Scalars['Boolean']>
  list?: InputMaybe<Array<InputMaybe<FormSystemListItemInput>>>
  listType?: InputMaybe<Scalars['String']>
  maxAmount?: InputMaybe<Scalars['Int']>
  maxDate?: InputMaybe<Scalars['DateTime']>
  maxFiles?: InputMaybe<Scalars['Int']>
  maxLength?: InputMaybe<Scalars['Int']>
  maxValue?: InputMaybe<Scalars['Int']>
  minAmount?: InputMaybe<Scalars['Int']>
  minDate?: InputMaybe<Scalars['DateTime']>
  minLength?: InputMaybe<Scalars['Int']>
  minValue?: InputMaybe<Scalars['Int']>
  timeInterval?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  year?: InputMaybe<Scalars['Int']>
}

export type FormSystemFormUrlInput = {
  id?: InputMaybe<Scalars['String']>
  isTest?: InputMaybe<Scalars['Boolean']>
  isXroad?: InputMaybe<Scalars['Boolean']>
  method?: InputMaybe<Scalars['String']>
  organizationUrlId?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type FormSystemGetFormInput = {
  id?: InputMaybe<Scalars['String']>
}

export type FormSystemGetFormsInput = {
  nationalId?: InputMaybe<Scalars['String']>
}

export type FormSystemGetOrganizationAdminInput = {
  nationalId: Scalars['String']
}

export type FormSystemGetOrganizationInput = {
  id?: InputMaybe<Scalars['String']>
}

export type FormSystemLanguageTypeInput = {
  en?: InputMaybe<Scalars['String']>
  is?: InputMaybe<Scalars['String']>
}

export type FormSystemListItemDisplayOrderInput = {
  id?: InputMaybe<Scalars['String']>
}

export type FormSystemListItemInput = {
  description?: InputMaybe<FormSystemLanguageTypeInput>
  displayOrder?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['String']>
  isSelected?: InputMaybe<Scalars['Boolean']>
  label?: InputMaybe<FormSystemLanguageTypeInput>
  value?: InputMaybe<Scalars['String']>
}

export type FormSystemOrganizationPermissionDtoInput = {
  organizationId?: InputMaybe<Scalars['String']>
  permission?: InputMaybe<Scalars['String']>
}

export type FormSystemScreenDisplayOrderInput = {
  id?: InputMaybe<Scalars['String']>
  sectionId?: InputMaybe<Scalars['String']>
}

export type FormSystemSectionDisplayOrderInput = {
  id?: InputMaybe<Scalars['String']>
}

export type FormSystemTranslationInput = {
  textToTranslate?: InputMaybe<Scalars['String']>
}

export type FormSystemUpdateFieldDtoInput = {
  description?: InputMaybe<FormSystemLanguageTypeInput>
  fieldSettings?: InputMaybe<FormSystemFieldSettingsInput>
  fieldType?: InputMaybe<Scalars['String']>
  isHidden?: InputMaybe<Scalars['Boolean']>
  isPartOfMultiset?: InputMaybe<Scalars['Boolean']>
  isRequired?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<FormSystemLanguageTypeInput>
}

export type FormSystemUpdateFieldInput = {
  id?: InputMaybe<Scalars['String']>
  updateFieldDto?: InputMaybe<FormSystemUpdateFieldDtoInput>
}

export type FormSystemUpdateFieldsDisplayOrderInput = {
  updateFieldsDisplayOrderDto?: InputMaybe<
    Array<InputMaybe<FormSystemFieldDisplayOrderInput>>
  >
}

export type FormSystemUpdateFormDtoInput = {
  applicationDaysToRemove?: InputMaybe<Scalars['Int']>
  completedMessage?: InputMaybe<FormSystemLanguageTypeInput>
  dependencies?: InputMaybe<Array<InputMaybe<FormSystemDependencyInput>>>
  hasPayment?: InputMaybe<Scalars['Boolean']>
  invalidationDate?: InputMaybe<Scalars['DateTime']>
  isTranslated?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<FormSystemLanguageTypeInput>
  organizationDisplayName?: InputMaybe<FormSystemLanguageTypeInput>
  organizationId?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  stopProgressOnValidatingScreen?: InputMaybe<Scalars['Boolean']>
  urls?: InputMaybe<Array<FormSystemFormUrlInput>>
}

export type FormSystemUpdateFormInput = {
  id?: InputMaybe<Scalars['String']>
  updateFormDto?: InputMaybe<FormSystemUpdateFormDtoInput>
}

export type FormSystemUpdateListItemDtoInput = {
  description?: InputMaybe<FormSystemLanguageTypeInput>
  isSelected?: InputMaybe<Scalars['Boolean']>
  label?: InputMaybe<FormSystemLanguageTypeInput>
  value?: InputMaybe<Scalars['String']>
}

export type FormSystemUpdateListItemInput = {
  id?: InputMaybe<Scalars['String']>
  updateListItemDto?: InputMaybe<FormSystemUpdateListItemDtoInput>
}

export type FormSystemUpdateListItemsDisplayOrderDtoInput = {
  listItemsDisplayOrderDto?: InputMaybe<
    Array<InputMaybe<FormSystemListItemDisplayOrderInput>>
  >
}

export type FormSystemUpdateListItemsDisplayOrderInput = {
  updateListItemsDisplayOrderDto?: InputMaybe<FormSystemUpdateListItemsDisplayOrderDtoInput>
}

export type FormSystemUpdateOrganizationPermissionInput = {
  updateOrganizationPermissionDto?: InputMaybe<FormSystemOrganizationPermissionDtoInput>
}

export type FormSystemUpdateScreenDisplayOrderDtoInput = {
  screensDisplayOrderDto?: InputMaybe<
    Array<InputMaybe<FormSystemScreenDisplayOrderInput>>
  >
}

export type FormSystemUpdateScreenDtoInput = {
  callRuleset?: InputMaybe<Scalars['Boolean']>
  multiset?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<FormSystemLanguageTypeInput>
}

export type FormSystemUpdateScreenInput = {
  id?: InputMaybe<Scalars['String']>
  updateScreenDto?: InputMaybe<FormSystemUpdateScreenDtoInput>
}

export type FormSystemUpdateScreensDisplayOrderInput = {
  updateScreensDisplayOrderDto?: InputMaybe<FormSystemUpdateScreenDisplayOrderDtoInput>
}

export type FormSystemUpdateSectionDtoInput = {
  name?: InputMaybe<FormSystemLanguageTypeInput>
  waitingText?: InputMaybe<FormSystemLanguageTypeInput>
}

export type FormSystemUpdateSectionInput = {
  id?: InputMaybe<Scalars['String']>
  updateSectionDto?: InputMaybe<FormSystemUpdateSectionDtoInput>
}

export type FormSystemUpdateSectionsDisplayOrderDtoInput = {
  sectionsDisplayOrderDto?: InputMaybe<
    Array<InputMaybe<FormSystemSectionDisplayOrderInput>>
  >
}

export type FormSystemUpdateSectionsDisplayOrderInput = {
  updateSectionsDisplayOrderDto?: InputMaybe<FormSystemUpdateSectionsDisplayOrderDtoInput>
}

export type GeneratePkPassInput = {
  licenseType: Scalars['String']
}

export type GenericFormInput = {
  email: Scalars['String']
  files?: InputMaybe<Array<Scalars['String']>>
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  message: Scalars['String']
  name: Scalars['String']
  recipientFormFieldDeciderValue?: InputMaybe<Scalars['String']>
}

/** Possible types of data fields */
export type GenericLicenseDataFieldType =
  | 'Category'
  | 'Group'
  | 'Table'
  | 'Value'

/** Exhaustive list of license provider IDs */
export type GenericLicenseProviderId =
  | 'AdministrationOfOccupationalSafetyAndHealth'
  | 'DistrictCommissioners'
  | 'EnvironmentAgency'
  | 'IcelandicHealthInsurance'
  | 'NationalPoliceCommissioner'
  | 'NatureConservationAgency'
  | 'RegistersIceland'
  | 'SocialInsuranceAdministration'

/** Exhaustive list of license types */
export type GenericLicenseType =
  | 'AdrLicense'
  | 'DisabilityLicense'
  | 'DriversLicense'
  | 'Ehic'
  | 'FirearmLicense'
  | 'HuntingLicense'
  | 'IdentityDocument'
  | 'MachineLicense'
  | 'PCard'
  | 'Passport'

export type GenericListItemType = 'Clickable' | 'NonClickable'

export type GenericUserLicenseAlertType = 'ERROR' | 'INFO' | 'WARNING'

/** Exhaustive list of possible tag icon color */
export type GenericUserLicenseDataFieldTagColor = 'green' | 'red' | 'yellow'

/** Exhaustive list of possible tag icons */
export type GenericUserLicenseDataFieldTagType =
  | 'checkmarkCircle'
  | 'closeCircle'

export type GenericUserLicenseExpiryStatus =
  | 'ACTIVE'
  | 'EXPIRED'
  | 'EXPIRING'
  | 'UNKNOWN'

/** Possible license fetch statuses */
export type GenericUserLicenseFetchStatus =
  | 'Error'
  | 'Fetched'
  | 'Fetching'
  | 'NotFetched'
  | 'Stale'

/** Exhaustive list meta link type */
export type GenericUserLicenseMetaLinksType = 'Copy' | 'Download' | 'External'

/** Possible license pkpass statuses */
export type GenericUserLicensePkPassStatus =
  | 'Available'
  | 'NotAvailable'
  | 'Unknown'

/** Possible license statuses for user */
export type GenericUserLicenseStatus = 'HasLicense' | 'NotAvailable' | 'Unknown'

export type GetAlertBannerInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetAnchorPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetAnchorPagesInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetAnnualStatusDocumentInput = {
  year: Scalars['String']
}

export type GetApiCatalogueInput = {
  access?: InputMaybe<Array<Scalars['String']>>
  cursor?: InputMaybe<Scalars['String']>
  data?: InputMaybe<Array<Scalars['String']>>
  limit?: InputMaybe<Scalars['Int']>
  pricing?: InputMaybe<Array<Scalars['String']>>
  query?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Array<Scalars['String']>>
}

export type GetApiServiceInput = {
  id: Scalars['ID']
}

export type GetArticleCategoriesInput = {
  lang?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
}

export type GetArticlesInput = {
  category?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortField>
  subgroup?: InputMaybe<Scalars['String']>
}

export type GetAuctionInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetAuctionsInput = {
  lang?: InputMaybe<Scalars['String']>
  month?: InputMaybe<Scalars['Float']>
  organization?: InputMaybe<Scalars['String']>
  year?: InputMaybe<Scalars['Float']>
}

export type GetBloodDonationRestrictionDetailsInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetBloodDonationRestrictionGenericTagsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetBloodDonationRestrictionsInput = {
  lang?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  tagKeys?: InputMaybe<Array<Scalars['String']>>
}

export type GetCategoryPagesInput = {
  category?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortField>
  subgroup?: InputMaybe<Scalars['String']>
}

export type GetChargeItemSubjectsByYearInput = {
  nextKey: Scalars['String']
  typeId: Scalars['String']
  year: Scalars['String']
}

export type GetChargeTypePeriodSubjectInput = {
  period: Scalars['String']
  subject: Scalars['String']
  typeId: Scalars['String']
  year: Scalars['String']
}

export type GetChargeTypesByYearInput = {
  year: Scalars['String']
}

export type GetChargeTypesDetailsByYearInput = {
  typeId: Scalars['String']
  year: Scalars['String']
}

export type GetContentSlugInput = {
  id: Scalars['String']
}

export type GetCustomPageInput = {
  lang?: InputMaybe<Scalars['String']>
  uniqueIdentifier: CustomPageUniqueIdentifier
}

export type GetCustomSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
  parentPageId: Scalars['String']
  slug: Scalars['String']
}

export type GetCustomerRecordsInput = {
  chargeTypeID?: InputMaybe<Array<Scalars['String']>>
  dayFrom: Scalars['String']
  dayTo: Scalars['String']
}

export type GetDocumentInput = {
  id: Scalars['String']
}

export type GetDocumentListInput = {
  archived?: InputMaybe<Scalars['Boolean']>
  bookmarked?: InputMaybe<Scalars['Boolean']>
  categoryId?: InputMaybe<Scalars['String']>
  dateFrom?: InputMaybe<Scalars['String']>
  dateTo?: InputMaybe<Scalars['String']>
  isLegalGuardian?: InputMaybe<Scalars['Boolean']>
  opened?: InputMaybe<Scalars['Boolean']>
  order?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Float']>
  pageSize?: InputMaybe<Scalars['Float']>
  senderKennitala?: InputMaybe<Scalars['String']>
  sortBy?: InputMaybe<Scalars['String']>
  subjectContains?: InputMaybe<Scalars['String']>
  typeId?: InputMaybe<Scalars['String']>
}

export type GetDocumentPageInput = {
  messageId: Scalars['String']
  pageSize: Scalars['Float']
}

export type GetDraftRegulationInput = {
  draftId: Scalars['String']
}

/** Get a download URL for a draft regulation */
export type GetDraftRegulationPdfDownloadInput = {
  /** Id of the draft regulation */
  draftId: Scalars['String']
}

export type GetDraftRegulationsInput = {
  page: Scalars['Float']
}

export type GetElectronicIdInput = {
  nationalId: Scalars['String']
  phoneNumber: Scalars['String']
}

export type GetErrorPageInput = {
  errorCode: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetEventsInput = {
  lang?: InputMaybe<Scalars['String']>
  onlyIncludePastEvents?: InputMaybe<Scalars['Boolean']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  size?: InputMaybe<Scalars['Int']>
}

export type GetFeaturedSupportQnAsInput = {
  category?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  subCategory?: InputMaybe<Scalars['String']>
}

export type GetFinanceDocumentInput = {
  documentID: Scalars['String']
}

export type GetFinanceDocumentsListInput = {
  dayFrom: Scalars['String']
  dayTo: Scalars['String']
  listPath: Scalars['String']
}

export type GetFinancePaymentScheduleInput = {
  scheduleNumber: Scalars['String']
}

export type GetFinancialOverviewInput = {
  chargeTypeID: Scalars['String']
  orgID: Scalars['String']
}

export type GetFrontpageInput = {
  lang?: InputMaybe<Scalars['String']>
  pageIdentifier: Scalars['String']
}

export type GetGenericLicenseInput = {
  licenseId?: InputMaybe<Scalars['String']>
  licenseType: Scalars['String']
}

export type GetGenericLicensesInput = {
  excludedTypes?: InputMaybe<Array<Scalars['String']>>
  force?: InputMaybe<Scalars['Boolean']>
  includedTypes?: InputMaybe<Array<Scalars['String']>>
  onlyList?: InputMaybe<Scalars['Boolean']>
}

export type GetGenericListItemBySlugInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetGenericListItemsInput = {
  genericListId: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<GetGenericListItemsInputOrderBy>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  tagGroups?: InputMaybe<Scalars['JSON']>
  tags?: InputMaybe<Array<Scalars['String']>>
}

export type GetGenericListItemsInputOrderBy = 'DATE' | 'PUBLISH_DATE' | 'TITLE'

export type GetGenericOverviewPageInput = {
  lang?: InputMaybe<Scalars['String']>
  pageIdentifier: Scalars['String']
}

export type GetGenericPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetGenericTagBySlugInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetGenericTagsInTagGroupsInput = {
  lang?: InputMaybe<Scalars['String']>
  tagGroupSlugs?: InputMaybe<Array<Scalars['String']>>
}

export type GetGrantsInput = {
  categories?: InputMaybe<Array<Scalars['String']>>
  funds?: InputMaybe<Array<Scalars['String']>>
  lang?: InputMaybe<Scalars['String']>
  organizations?: InputMaybe<Array<Scalars['String']>>
  page?: InputMaybe<Scalars['Int']>
  search?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<GetGrantsInputSortByEnum>
  status?: InputMaybe<GetGrantsInputAvailabilityStatusEnum>
  types?: InputMaybe<Array<Scalars['String']>>
}

export type GetGrantsInputAvailabilityStatusEnum = 'CLOSED' | 'OPEN'

export type GetGrantsInputSortByEnum = 'ALPHABETICAL' | 'RECENTLY_UPDATED'

export type GetHmsLoansPaymentHistoryInput = {
  loanId: Scalars['Float']
}

export type GetHomestaysInput = {
  year?: InputMaybe<Scalars['Float']>
}

export type GetIcelandicNameByIdInput = {
  id: Scalars['Float']
}

export type GetIcelandicNameByInitialLetterInput = {
  initialLetter: Scalars['String']
}

export type GetIcelandicNameBySearchInput = {
  q: Scalars['String']
}

export type GetInitialScheduleInput = {
  disposableIncome: Scalars['Float']
  totalAmount: Scalars['Float']
  type: PaymentScheduleType
}

export type GetIsEmployerValidInput = {
  companyId: Scalars['String']
}

export type GetLifeEventPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetLifeEventsInCategoryInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetLifeEventsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetMenuInput = {
  lang?: InputMaybe<Scalars['String']>
  name: Scalars['String']
}

export type GetMultiPropertyInput = {
  cursor?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Float']>
}

export type GetNamespaceInput = {
  lang?: InputMaybe<Scalars['String']>
  namespace?: InputMaybe<Scalars['String']>
}

export type GetNewsDatesInput = {
  lang?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Array<Scalars['String']>>
}

export type GetNewsInput = {
  lang?: InputMaybe<Scalars['String']>
  month?: InputMaybe<Scalars['Int']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  size?: InputMaybe<Scalars['Int']>
  tags?: InputMaybe<Array<Scalars['String']>>
  year?: InputMaybe<Scalars['Int']>
}

export type GetOpenApiInput = {
  instance: Scalars['String']
  memberClass: Scalars['String']
  memberCode: Scalars['String']
  serviceCode: Scalars['String']
  subsystemCode: Scalars['String']
}

export type GetOpenDataPageInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetOpenDataSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetOperatingLicensesInput = {
  pageNumber?: InputMaybe<Scalars['Float']>
  pageSize?: InputMaybe<Scalars['Float']>
  searchBy?: InputMaybe<Scalars['String']>
}

export type GetOrganizationByNationalIdInput = {
  lang?: InputMaybe<Scalars['String']>
  nationalId: Scalars['String']
}

export type GetOrganizationByTitleInput = {
  lang?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export type GetOrganizationInput = {
  lang?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
}

export type GetOrganizationPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetOrganizationPageStandaloneSitemapLevel1Input = {
  categorySlug: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  organizationPageSlug: Scalars['String']
}

export type GetOrganizationPageStandaloneSitemapLevel2Input = {
  categorySlug: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  organizationPageSlug: Scalars['String']
  subcategorySlug: Scalars['String']
}

export type GetOrganizationParentSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationPageSlug: Scalars['String']
  slug: Scalars['String']
}

export type GetOrganizationSubpageByIdInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetOrganizationSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationSlug: Scalars['String']
  slug: Scalars['String']
}

export type GetOrganizationTagsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetOrganizationsInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationTitles?: InputMaybe<Array<Scalars['String']>>
  perPage?: InputMaybe<Scalars['Int']>
  referenceIdentifiers?: InputMaybe<Array<Scalars['String']>>
}

export type GetPagingTypes = {
  assetId: Scalars['String']
  cursor?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Float']>
}

export type GetParentalLeavesApplicationPaymentPlanInput = {
  applicationId: Scalars['String']
  dateOfBirth: Scalars['String']
}

export type GetParentalLeavesEntitlementsInput = {
  dateOfBirth: Scalars['String']
}

export type GetParentalLeavesEstimatedPaymentPlanInput = {
  dateOfBirth: Scalars['String']
  period: Array<Period>
}

export type GetParentalLeavesPeriodEndDateInput = {
  length: Scalars['String']
  percentage: Scalars['String']
  startDate: Scalars['String']
}

export type GetParentalLeavesPeriodLengthInput = {
  endDate: Scalars['String']
  percentage: Scalars['String']
  startDate: Scalars['String']
}

export type GetPaymentFlowInput = {
  id: Scalars['String']
}

export type GetProjectPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetPublicVehicleSearchInput = {
  search: Scalars['String']
}

export type GetPublishedMaterialInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationSlug?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  searchString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort: Scalars['JSON']
  tagGroups: Scalars['JSON']
  tags: Array<Scalars['String']>
}

export type GetRealEstateInput = {
  assetId: Scalars['String']
}

export type GetRegistryPersonInput = {
  nationalId?: InputMaybe<Scalars['String']>
}

export type GetRegulationFromApiInput = {
  date?: InputMaybe<Scalars['String']>
  regulation: Scalars['String']
}

export type GetRegulationImpactsInput = {
  regulation: Scalars['String']
}

export type GetRegulationInput = {
  date?: InputMaybe<Scalars['String']>
  earlierDate?: InputMaybe<Scalars['String']>
  isCustomDiff?: InputMaybe<Scalars['Boolean']>
  name: Scalars['String']
  viewType: RegulationViewTypes
}

export type GetRegulationOptionListInput = {
  names?: InputMaybe<Array<Scalars['String']>>
}

export type GetRegulationsInput = {
  page?: InputMaybe<Scalars['Float']>
  type: Scalars['String']
}

export type GetRegulationsLawChaptersInput = {
  slugs?: InputMaybe<Array<Scalars['String']>>
  tree?: InputMaybe<Scalars['Boolean']>
}

export type GetRegulationsMinistriesInput = {
  slugs?: InputMaybe<Array<Scalars['String']>>
}

export type GetRegulationsSearchInput = {
  ch?: InputMaybe<Scalars['String']>
  iA?: InputMaybe<Scalars['Boolean']>
  iR?: InputMaybe<Scalars['Boolean']>
  page?: InputMaybe<Scalars['Int']>
  q?: InputMaybe<Scalars['String']>
  rn?: InputMaybe<Scalars['String']>
  year?: InputMaybe<Scalars['Int']>
  yearTo?: InputMaybe<Scalars['Int']>
}

export type GetScheduleDistributionInput = {
  monthAmount?: InputMaybe<Scalars['Float']>
  monthCount?: InputMaybe<Scalars['Float']>
  scheduleType: PaymentScheduleType
  totalAmount: Scalars['Float']
}

export type GetServicePortalAlertBannersInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetServiceWebPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleArticleInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleEntryTitleByIdInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSingleEventInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleGrantInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSingleManualInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleMenuInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSingleNewsInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleSupportQnaInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSubpageHeaderInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSupportCategoriesInOrganizationInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSupportCategoriesInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetSupportCategoryInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSupportQnAsInCategoryInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSupportQnAsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetTabSectionInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetTeamMembersInput = {
  lang?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<GetTeamMembersInputOrderBy>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  tagGroups?: InputMaybe<Scalars['JSON']>
  tags?: InputMaybe<Array<Scalars['String']>>
  teamListId: Scalars['String']
}

export type GetTeamMembersInputOrderBy = 'Manual' | 'Name'

export type GetTranslationsInput = {
  lang: Scalars['String']
  namespaces: Array<Scalars['String']>
}

export type GetUrlInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetUserInvolvedPartiesInput = {
  applicationId: Scalars['ID']
}

export type GetVehicleDetailInput = {
  permno: Scalars['String']
  regno?: InputMaybe<Scalars['String']>
  vin?: InputMaybe<Scalars['String']>
}

export type GetVehicleInput = {
  vehicleId: Scalars['String']
}

export type GetVehicleMileageInput = {
  permno: Scalars['String']
}

export type GetVehicleSearchInput = {
  search: Scalars['String']
}

export type GetVehiclesForUserInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>
  dateTo?: InputMaybe<Scalars['DateTime']>
  page: Scalars['Float']
  pageSize: Scalars['Float']
  permno?: InputMaybe<Scalars['String']>
  showDeregeristered: Scalars['Boolean']
  showHistory: Scalars['Boolean']
  type?: InputMaybe<VehicleUserTypeEnum>
}

export type GetVehiclesListV2Input = {
  /** Filter to only show vehicles requiring mileage registration */
  onlyMileage?: InputMaybe<Scalars['Boolean']>
  page: Scalars['Float']
  pageSize: Scalars['Float']
  permno?: InputMaybe<Scalars['String']>
  showCoowned?: InputMaybe<Scalars['Boolean']>
  showOperated?: InputMaybe<Scalars['Boolean']>
  showOwned?: InputMaybe<Scalars['Boolean']>
}

export type GrantCardsListSorting =
  | 'ALPHABETICAL'
  | 'MOST_RECENTLY_UPDATED_FIRST'

export type GrantStatus =
  | 'ALWAYS_OPEN'
  | 'CLOSED'
  | 'CLOSED_OPENING_SOON'
  | 'CLOSED_OPENING_SOON_WITH_ESTIMATION'
  | 'CLOSED_WITH_NOTE'
  | 'INVALID'
  | 'OPEN'
  | 'OPEN_WITH_NOTE'
  | 'UNKNOWN'

export type HealthDirectorateOrganDonorInput = {
  comment?: InputMaybe<Scalars['String']>
  isDonor: Scalars['Boolean']
  organLimitations?: InputMaybe<Array<Scalars['String']>>
}

export type HealthDirectoratePrescribedItemCategory =
  | 'Owner'
  | 'Pn'
  | 'Regimen'
  | 'Regular'

export type HealthDirectoratePrescriptionRenewalBlockedReason =
  | 'IsRegiment'
  | 'NotFullyDispensed'
  | 'PendingRequest'
  | 'RejectedRequest'

export type HealthDirectoratePrescriptionRenewalStatus =
  | 'NUMBER_0'
  | 'NUMBER_1'
  | 'NUMBER_2'

export type HealthDirectorateVaccinationStatusEnum =
  | 'complete'
  | 'expired'
  | 'incomplete'
  | 'rejected'
  | 'undetermined'
  | 'undocumented'
  | 'unvaccinated'
  | 'valid'

export type HealthInsuranceAccidentNotificationStatusTypes =
  | 'ACCEPTED'
  | 'INPROGRESS'
  | 'INPROGRESSWAITINGFORDOCUMENT'
  | 'REFUSED'

export type HealthInsuranceAccidentStatusInput = {
  ihiDocumentID: Scalars['Float']
}

export type HousingBenefitCalculatorCalculationInput = {
  housingCostsPerMonth: Scalars['Float']
  numberOfHouseholdMembers: Scalars['Float']
  totalAssets: Scalars['Float']
  totalMonthlyIncome: Scalars['Float']
}

export type HousingBenefitCalculatorSpecificSupportCalculationInput = {
  housingCostsPerMonth: Scalars['Float']
  numberOfHouseholdMembers: Scalars['Float']
}

export type HousingBenefitsPaymentsInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>
  dateTo?: InputMaybe<Scalars['DateTime']>
  month?: InputMaybe<Scalars['String']>
  pageNumber?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  paymentOrigin?: InputMaybe<Scalars['Int']>
  /** False display's all. True display payments only */
  payments?: InputMaybe<Scalars['Boolean']>
}

export type IcelandicGovernmentInstitutionVacanciesInput = {
  institution?: InputMaybe<Scalars['String']>
  language?: InputMaybe<VacanciesGetLanguageEnum>
}

export type IcelandicGovernmentInstitutionVacancyByIdInput = {
  id: Scalars['String']
  language?: InputMaybe<VacanciesVacancyIdGetLanguageEnum>
}

export type IdentityData = {
  address: Address
  name: Scalars['String']
  nationalId: Scalars['String']
}

export type IdentityInput = {
  nationalId: Scalars['String']
}

export type IdentityType = 'Company' | 'Person'

export type InaoClientFinancialLimitInput = {
  clientType: Scalars['String']
  year: Scalars['String']
}

export type IntellectualPropertiesDesignImagesInput = {
  designId: Scalars['String']
  designNumber: Scalars['String']
  imageNumber: Scalars['String']
  size?: InputMaybe<Scalars['String']>
}

export type IntellectualPropertiesInput = {
  key: Scalars['String']
}

export type IsHealthInsuredInput = {
  date?: InputMaybe<Scalars['DateTime']>
}

export type LawAndOrderActionTypeEnum = 'file' | 'inbox' | 'url'

export type LawAndOrderCourtCaseInput = {
  id: Scalars['String']
}

export type LawAndOrderCourtCaseStateTagColorEnum =
  | 'blue'
  | 'blueberry'
  | 'dark'
  | 'darkerBlue'
  | 'disabled'
  | 'mint'
  | 'purple'
  | 'red'
  | 'rose'
  | 'warn'
  | 'white'
  | 'yellow'

export type LawAndOrderDefenseChoiceEnum =
  | 'CHOOSE'
  | 'DELAY'
  | 'DELEGATE'
  | 'WAIVE'

export type LawAndOrderDefenseChoiceInput = {
  caseId: Scalars['ID']
  choice: LawAndOrderDefenseChoiceEnum
  lawyersNationalId?: InputMaybe<Scalars['String']>
}

export type LawAndOrderSubpoenaInput = {
  id: Scalars['String']
}

/** Lists have different statuses to indicate actions that can be preformed on them. */
export type ListStatus =
  /** List is active and open for digital signatures */
  | 'Active'
  /** Collection has been marked as processed and endtime on lists can be extended. */
  | 'Extendable'
  /** List is being reviewed by processing admin. Signatures can be uploaded on list. Comparison between lists and removal of signatures possible. */
  | 'InReview'
  /** List is not active. */
  | 'Inactive'
  /** List has been reviewed by admin. This is a state that can be toggled to InReview. Comparison between lists and removal of signatures possible. */
  | 'Reviewed'

/** The status of a malware scan */
export type MalwareScanStatus = 'SAFE' | 'UNKNOWN' | 'UNSAFE'

export type MetadataInput = {
  field: EndorsementMetadataDtoFieldEnum
}

export type MunicipalitiesFinancialAidApplicationFilesInput = {
  files: Array<ApplicationFileInput>
}

export type MunicipalitiesFinancialAidApplicationInput = {
  id: Scalars['String']
}

export type MunicipalitiesFinancialAidCreateSignedUrlInput = {
  fileName: Scalars['String']
  folder: Scalars['String']
}

export type MunicipalitiesFinancialAidGetSignedUrlInput = {
  id: Scalars['String']
}

export type MunicipalitiesFinancialAidUpdateApplicationInput = {
  comment?: InputMaybe<Scalars['String']>
  event: Scalars['String']
  id: Scalars['String']
  state: Scalars['String']
}

export type NationalRegistryGender =
  | 'FEMALE'
  | 'FEMALE_MINOR'
  | 'MALE'
  | 'MALE_MINOR'
  | 'TRANSGENDER'
  | 'TRANSGENDER_MINOR'
  | 'UNKNOWN'

export type NationalRegistryMaritalStatus =
  | 'DIVORCED'
  | 'FOREIGN_RESIDENCE_MARRIED_TO_UNREGISTERED_PERSON'
  | 'ICELANDIC_RESIDENCE_MARRIED_TO_UNREGISTERED_PERSON'
  | 'MARRIED'
  | 'MARRIED_LIVING_SEPARATELY'
  | 'MARRIED_TO_FOREIGN_LAW_PERSON'
  | 'SEPARATED'
  | 'UNKNOWN'
  | 'UNMARRIED'
  | 'WIDOWED'

export type NationalRegistryNationalIdType =
  | 'DECEASED'
  | 'NATIONAL_REGISTRY_NATIONAL_ID'
  | 'SYSTEM_NATIONAL_ID'
  | 'UNKNOWN'

export type NationalRegistryXRoadChildGuardianshipInput = {
  childNationalId: Scalars['String']
}

export type NotificationsInput = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Int']>
}

export type OjoiaGetCommentsInput = {
  id: Scalars['ID']
}

/** Input dto that represents the id of the application */
export type OjoiaIdInput = {
  id: Scalars['ID']
  showDate?: InputMaybe<Scalars['Boolean']>
}

export type OjoiaPostCommentInput = {
  comment: Scalars['String']
  id: Scalars['ID']
}

export type OjoiCommentActionEnum = 'APPLICATION' | 'EXTERNAL'

export type OjoiCommentDirection = 'RECEIVED' | 'SENT'

export type OccupationalLicenseStatus =
  | 'INVALID'
  | 'IN_PROGRESS'
  | 'LIMITED'
  | 'REVOKED'
  | 'UNKNOWN'
  | 'VALID'
  | 'WAIVED'

export type OccupationalLicensesLicenseInput = {
  id: Scalars['String']
  locale: Scalars['String']
}

export type OccupationalLicensesLinkType = 'DOCUMENT' | 'FILE' | 'LINK'

export type OfficialJournalOfIcelandAdvertSimilarParams = {
  id: Scalars['String']
}

export type OfficialJournalOfIcelandAdvertSingleParams = {
  id: Scalars['String']
}

export type OfficialJournalOfIcelandAdvertStatus =
  | 'Afturkllu'
  | 'Bi'
  | 'Drg'
  | 'EldriAuglsing'
  | 'Hafna'
  | 'Innsend'
  | 'Tgefin'
  | 'TilbinTilTgfu'
  | 'Vinnslu'
  | 'Virk'

export type OfficialJournalOfIcelandAdvertTemplateInput = {
  type: OfficialJournalOfIcelandApplicationAdvertTemplateTypeEnum
}

export type OfficialJournalOfIcelandAdvertsInput = {
  category?: InputMaybe<Array<Scalars['String']>>
  dateFrom?: InputMaybe<Scalars['String']>
  dateTo?: InputMaybe<Scalars['String']>
  department?: InputMaybe<Array<Scalars['String']>>
  involvedParty?: InputMaybe<Array<Scalars['String']>>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  search?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Array<Scalars['String']>>
}

export type OfficialJournalOfIcelandApplicationAddApplicationAttachmentInput = {
  applicationId: Scalars['String']
  attachmentType: Scalars['String']
  fileExtension: Scalars['String']
  fileFormat: Scalars['String']
  fileLocation: Scalars['String']
  fileName: Scalars['String']
  fileSize: Scalars['Int']
  originalFileName: Scalars['String']
}

export type OfficialJournalOfIcelandApplicationDeleteApplicationAttachmentInput = {
  applicationId: Scalars['String']
  key: Scalars['String']
}

export type OfficialJournalOfIcelandApplicationGetApplicationAttachmentInput = {
  applicationId: Scalars['String']
  attachmentType: Scalars['String']
}

export type OfficialJournalOfIcelandApplicationGetPresignedUrlInput = {
  applicationId: Scalars['String']
  attachmentType: Scalars['String']
  fileName: Scalars['String']
  fileType: Scalars['String']
}

export type OfficialJournalOfIcelandApplicationInvolvedPartySignaturesInput = {
  involvedPartyId: Scalars['String']
}

export type OfficialJournalOfIcelandApplicationSignatureType =
  | 'Committee'
  | 'Regular'

export type OfficialJournalOfIcelandMainTypesInput = {
  department?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type OfficialJournalOfIcelandQueryInput = {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  search?: InputMaybe<Scalars['String']>
}

export type OfficialJournalOfIcelandTypesInput = {
  department?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  search?: InputMaybe<Scalars['String']>
}

export type OpenListInput = {
  changeEndorsmentListClosedDateDto: ChangeEndorsmentListClosedDateDto
  listId: Scalars['String']
}

export type OperatorAnonymityStatus = 'ALL' | 'SOME' | 'UNKNOWN'

export type OperatorChangeAnswers = {
  mainOperator?: InputMaybe<OperatorChangeAnswersMainOperator>
  oldOperators?: InputMaybe<Array<OperatorChangeAnswersOperators>>
  operators?: InputMaybe<Array<OperatorChangeAnswersOperators>>
  owner: OperatorChangeAnswersUser
  pickVehicle: OperatorChangeAnswersPickVehicle
  vehicleMileage: OperatorChangeAnswersVehicleMileage
}

export type OperatorChangeAnswersMainOperator = {
  nationalId: Scalars['String']
}

export type OperatorChangeAnswersOperators = {
  nationalId: Scalars['String']
  wasRemoved?: InputMaybe<Scalars['String']>
}

export type OperatorChangeAnswersPickVehicle = {
  plate: Scalars['String']
}

export type OperatorChangeAnswersPlateDelivery = {
  deliveryMethodIsDeliveryStation?: InputMaybe<Scalars['String']>
  deliveryStationTypeCode?: InputMaybe<Scalars['String']>
  includeRushFee?: InputMaybe<Array<Scalars['String']>>
}

export type OperatorChangeAnswersUser = {
  nationalId: Scalars['String']
}

export type OperatorChangeAnswersVehicleMileage = {
  value?: InputMaybe<Scalars['String']>
}

export type Order = 'ASC' | 'DESC'

export type OrganizationModelTypeEnum =
  | 'ChildCare'
  | 'Municipality'
  | 'National'
  | 'PrivateOwner'
  | 'School'

export type OrganizationParentSubpageListVariant =
  | 'ProfileCardWithTitleAbove'
  | 'ServiceCard'

export type OverviewLinksLinkDataVariant = 'CategoryCard' | 'IntroLinkImage'

export type OwnerChangeAnswers = {
  buyer: OwnerChangeAnswersUser
  buyerCoOwnerAndOperator?: InputMaybe<Array<OwnerChangeAnswersBuyerOrCoOwner>>
  buyerMainOperator?: InputMaybe<OwnerChangeAnswersMainOperator>
  insurance?: InputMaybe<OwnerChangeAnswersInsurance>
  pickVehicle: OwnerChangeAnswersPickVehicle
  seller: OwnerChangeAnswersUser
  vehicle: OwnerChangeAnswersVehicle
  vehicleMileage: OwnerChangeAnswersVehicleMileage
}

export type OwnerChangeAnswersBuyerOrCoOwner = {
  email: Scalars['String']
  nationalId: Scalars['String']
  type: Scalars['String']
  wasRemoved?: InputMaybe<Scalars['String']>
}

export type OwnerChangeAnswersInsurance = {
  value: Scalars['String']
}

export type OwnerChangeAnswersMainOperator = {
  nationalId: Scalars['String']
}

export type OwnerChangeAnswersPickVehicle = {
  plate: Scalars['String']
}

export type OwnerChangeAnswersUser = {
  email: Scalars['String']
  nationalId: Scalars['String']
}

export type OwnerChangeAnswersVehicle = {
  date: Scalars['String']
  salePrice?: InputMaybe<Scalars['String']>
}

export type OwnerChangeAnswersVehicleMileage = {
  value?: InputMaybe<Scalars['String']>
}

export type PaginatedEndorsementInput = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Float']>
  listId: Scalars['String']
}

export type PaginatedEndorsementListInput = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Float']>
  tags: Array<EndorsementListControllerFindByTagsTagsEnum>
}

export type PatchAuthConsentInput = {
  clientId: Scalars['String']
  consentedScope?: InputMaybe<Scalars['String']>
  rejectedScope?: InputMaybe<Scalars['String']>
}

export type PatchAuthDelegationInput = {
  delegationId: Scalars['String']
  deleteScopes?: InputMaybe<Array<Scalars['String']>>
  updateScopes?: InputMaybe<Array<AuthDelegationScopeInput>>
}

export type PaymentCatalogInput = {
  performingOrganizationID?: InputMaybe<Scalars['String']>
}

/** Possible types of schedules */
export type PaymentScheduleType =
  | 'FinesAndLegalCost'
  | 'OtherFees'
  | 'OverpaidBenefits'
  | 'Wagedection'

export type PaymentsCardVerificationCallbackInput = {
  /** Signed JWT token containing the verification result */
  verificationToken: Scalars['String']
}

export type PaymentsChargeCardInput = {
  amount: Scalars['Float']
  cardNumber: Scalars['String']
  cvc: Scalars['String']
  expiryMonth: Scalars['Float']
  expiryYear: Scalars['Float']
  paymentFlowId: Scalars['String']
}

export type PaymentsCreateInvoiceInput = {
  paymentFlowId: Scalars['String']
}

export type PaymentsGetFlowPaymentStatus = 'invoice_pending' | 'paid' | 'unpaid'

export type PaymentsVerifyCardInput = {
  amount: Scalars['Float']
  cardNumber: Scalars['String']
  expiryMonth: Scalars['Float']
  expiryYear: Scalars['Float']
  paymentFlowId: Scalars['String']
}

export type Period = {
  approved: Scalars['Boolean']
  from: Scalars['String']
  paid: Scalars['Boolean']
  ratio: Scalars['String']
  to: Scalars['String']
}

export type PlateAvailabilityInput = {
  regno: Scalars['String']
}

export type PlateOrderAnswers = {
  pickVehicle: PlateOrderAnswersPickVehicle
  plateDelivery: OperatorChangeAnswersPlateDelivery
  plateSize: PlateOrderAnswersPlateSize
}

export type PlateOrderAnswersPickVehicle = {
  plate: Scalars['String']
}

export type PlateOrderAnswersPlateSize = {
  frontPlateSize?: InputMaybe<Array<Scalars['String']>>
  rearPlateSize?: InputMaybe<Array<Scalars['String']>>
}

export type PostBulkMailActionResolverInput = {
  action: Scalars['String']
  messageIds: Array<Scalars['String']>
  /** This status represents the nature of the request. True = adding item status. False = removing item status. */
  status: Scalars['Boolean']
}

export type PostMailActionResolverInput = {
  action: Scalars['String']
  messageId: Scalars['String']
}

export type PostRequestPaperInput = {
  wantsPaper: Scalars['Boolean']
}

export type PostVehicleBulkMileageInput = {
  mileageData: Array<PostVehicleBulkMileageSingleInput>
  /** Example: "ISLAND.IS" */
  originCode: Scalars['String']
}

export type PostVehicleBulkMileageSingleInput = {
  mileageNumber: Scalars['Float']
  vehicleId: Scalars['String']
}

export type PostVehicleMileageInput = {
  /** Deprecated. Use {mileageNumber} instead. Keeping in for backwards compatibility */
  mileage?: InputMaybe<Scalars['String']>
  mileageNumber?: InputMaybe<Scalars['Float']>
  /** Example: "ISLAND.IS" */
  originCode: Scalars['String']
  permno: Scalars['String']
}

export type PracticalDrivingLessonsInput = {
  bookId: Scalars['String']
  id: Scalars['String']
}

export type PricingCategory = 'FREE' | 'PAID'

export type Properties = {
  propertyNumber: Scalars['String']
  propertyType: Scalars['String']
}

export type PutVehicleMileageInput = {
  internalId: Scalars['Float']
  /** Deprecated. Use {mileageNumber} instead. Keeping in for backwards compatibility */
  mileage?: InputMaybe<Scalars['String']>
  mileageNumber?: InputMaybe<Scalars['Float']>
  permno: Scalars['String']
}

export type RegulationViewTypes = 'current' | 'd' | 'diff' | 'original'

export type RequestCorrectionOnMortgageCertificateInput = {
  identityData: IdentityData
  propertyNumber: Scalars['String']
  userProfileData: UserProfileData
}

export type RequirementKey =
  | 'beRequiresHealthCertificate'
  | 'currentLocalResidency'
  | 'deniedByService'
  | 'drivingAssessmentMissing'
  | 'drivingSchoolMissing'
  | 'hasDeprivation'
  | 'hasHadValidCategoryForFiveYearsOrMore'
  | 'hasNoPhoto'
  | 'hasNoSignature'
  | 'hasPoints'
  | 'localResidency'
  | 'noExtendedDrivingLicense'
  | 'noLicenseFound'
  | 'noTempLicense'
  | 'personNot17YearsOld'
  | 'personNotAtLeast24YearsOld'
  | 'personNotFoundInNationalRegistry'

export type RightsPortalAidOrNutritionRenewalStatus =
  | 'NOT_VALID_FOR_RENEWAL'
  | 'RENEWAL_IN_PROGRESS'
  | 'VALID'
  | 'VALID_FOR_RENEWAL'

export type RightsPortalAidOrNutritionType = 'AID' | 'NUTRITION'

export type RightsPortalCalculatorRequest = {
  drugs?: InputMaybe<Array<RightsPortalCalculatorRequestInput>>
}

export type RightsPortalCalculatorRequestInput = {
  lineNumber?: InputMaybe<Scalars['Float']>
  nordicCode?: InputMaybe<Scalars['String']>
  price?: InputMaybe<Scalars['Float']>
  units?: InputMaybe<Scalars['Float']>
}

export type RightsPortalCopaymentBillsInput = {
  periodId: Scalars['Int']
}

export type RightsPortalCopaymentPeriodInput = {
  dateFrom: Scalars['DateTime']
  dateTo: Scalars['DateTime']
}

export type RightsPortalDentistBillsInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>
  dateTo?: InputMaybe<Scalars['DateTime']>
}

export type RightsPortalDentistRegisterInput = {
  id: Scalars['ID']
}

export type RightsPortalDentistsInput = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  contractType: Scalars['String']
  limit?: InputMaybe<Scalars['Float']>
  nameStartsWith?: InputMaybe<Scalars['String']>
  pageNumber?: InputMaybe<Scalars['Float']>
}

export type RightsPortalDrugBillInput = {
  paymentPeriodId: Scalars['ID']
}

export type RightsPortalDrugCalculatorInput = {
  drugCalculatorRequestDTO: RightsPortalCalculatorRequest
}

export type RightsPortalDrugCertificateInput = {
  id: Scalars['Float']
}

export type RightsPortalDrugInput = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Float']>
  nameStartsWith?: InputMaybe<Scalars['String']>
  pageNumber?: InputMaybe<Scalars['Float']>
}

export type RightsPortalDrugsBillLineInput = {
  billId: Scalars['ID']
  paymentPeriodId: Scalars['ID']
}

export type RightsPortalHealthCenterDoctorsInput = {
  id: Scalars['String']
}

export type RightsPortalHealthCenterHistoryInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>
  dateTo?: InputMaybe<Scalars['DateTime']>
}

export type RightsPortalHealthCenterRegisterInput = {
  doctorId?: InputMaybe<Scalars['Float']>
  id: Scalars['String']
}

export type RightsPortalInsuranceStatusType =
  | 'ALM'
  | 'ATVL'
  | 'BARN'
  | 'BAUM'
  | 'EL67'
  | 'ELLI'
  | 'GRAT'
  | 'OR'
  | 'OROR'
  | 'UNGM'

export type RightsPortalPaymentErrorStatus =
  | 'INTERNAL_SERVICE_ERROR'
  | 'NOT_FOUND'

export type RightsPortalPaymentOverviewDocumentInput = {
  documentId: Scalars['Int']
}

export type RightsPortalPaymentOverviewInput = {
  dateFrom: Scalars['DateTime']
  dateTo: Scalars['DateTime']
  serviceTypeCode: Scalars['String']
}

export type RskCompanyInfoInput = {
  nationalId: Scalars['String']
}

export type RskCompanyInfoSearchInput = {
  /** Cursor for pagination as base64 encoded number */
  after?: InputMaybe<Scalars['String']>
  first: Scalars['Float']
  searchTerm: Scalars['String']
}

export type RunEndpointTestsInput = {
  documentId: Scalars['String']
  nationalId: Scalars['String']
  providerId: Scalars['String']
  recipient: Scalars['String']
}

export type ScopeInput = {
  scopeName: Scalars['String']
  tenantId: Scalars['String']
}

export type ScopesInput = {
  tenantId: Scalars['String']
}

export type SearchForPropertyInput = {
  propertyNumber: Scalars['String']
  propertyType?: InputMaybe<Scalars['String']>
}

export type SearchableContentTypes =
  | 'webArticle'
  | 'webDigitalIcelandCommunityPage'
  | 'webDigitalIcelandService'
  | 'webLifeEventPage'
  | 'webLink'
  | 'webManual'
  | 'webManualChapterItem'
  | 'webNews'
  | 'webOrganizationPage'
  | 'webOrganizationSubpage'
  | 'webProjectPage'
  | 'webQNA'
  | 'webSubArticle'

export type SearchableTags =
  | 'category'
  | 'organization'
  | 'processentry'
  | 'referencedBy'

export type SearcherInput = {
  contentfulTags?: InputMaybe<Array<Scalars['String']>>
  countProcessEntry?: InputMaybe<Scalars['Boolean']>
  countTag?: InputMaybe<Array<SearchableTags>>
  countTypes?: InputMaybe<Scalars['Boolean']>
  excludedTags?: InputMaybe<Array<Tag>>
  highlightResults?: InputMaybe<Scalars['Boolean']>
  language?: InputMaybe<ContentLanguage>
  order?: InputMaybe<SortDirection>
  page?: InputMaybe<Scalars['Int']>
  queryString: Scalars['String']
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortField>
  tags?: InputMaybe<Array<Tag>>
  types?: InputMaybe<Array<SearchableContentTypes>>
  useQuery?: InputMaybe<Scalars['String']>
}

export type SeminarIndividual = {
  email?: InputMaybe<Scalars['String']>
  nationalId?: InputMaybe<Scalars['String']>
}

export type ServiceWebFormsInput = {
  category: Scalars['String']
  email: Scalars['String']
  institutionSlug: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  message: Scalars['String']
  name: Scalars['String']
  subject?: InputMaybe<Scalars['String']>
  syslumadur: Scalars['String']
}

export type SessionsInput = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  fromDate?: InputMaybe<Scalars['DateTime']>
  limit?: InputMaybe<Scalars['Int']>
  nationalId?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Order>
  toDate?: InputMaybe<Scalars['DateTime']>
}

export type ShipRegistryShipSearchInput = {
  qs: Scalars['String']
}

export type SignatureCollectionAddListsInput = {
  areaIds?: InputMaybe<Array<Scalars['String']>>
  candidateId: Scalars['String']
  collectionId: Scalars['String']
}

export type SignatureCollectionAreaInput = {
  areaId: Scalars['String']
}

export type SignatureCollectionAreaSummaryReportInput = {
  areaId: Scalars['String']
  collectionId: Scalars['String']
}

export type SignatureCollectionCanSignFromPaperInput = {
  listId: Scalars['String']
  signeeNationalId: Scalars['String']
}

export type SignatureCollectionCancelListsInput = {
  collectionId: Scalars['String']
  listIds?: InputMaybe<Array<Scalars['String']>>
}

export type SignatureCollectionCandidateIdInput = {
  candidateId: Scalars['String']
}

export type SignatureCollectionCollectionType =
  | 'LocalGovernmental'
  | 'OtherSameRulesAsParliamentary'
  | 'OtherUnknown'
  | 'Parliamentary'
  | 'Presidential'
  | 'Referendum'
  | 'ResidentPoll'
  | 'SpecialLocalGovernmental'

export type SignatureCollectionExtendDeadlineInput = {
  listId: Scalars['String']
  newEndDate: Scalars['DateTime']
}

export type SignatureCollectionIdInput = {
  collectionId: Scalars['String']
}

export type SignatureCollectionListBulkUploadInput = {
  listId: Scalars['String']
  upload: Array<BulkUploadUser>
}

export type SignatureCollectionListIdInput = {
  listId: Scalars['String']
}

export type SignatureCollectionListInput = {
  /** If not provided, the list will be available in all areas */
  areas?: InputMaybe<Array<SignatureCollectionAreaInput>>
  collectionId: Scalars['String']
  owner: SignatureCollectionOwnerInput
}

export type SignatureCollectionListNationalIdsInput = {
  listId: Scalars['String']
  nationalIds: Array<Scalars['String']>
}

export type SignatureCollectionNationalIdInput = {
  nationalId: Scalars['String']
}

export type SignatureCollectionNationalIdsInput = {
  collectionId: Scalars['String']
  nationalIds: Array<Scalars['String']>
}

export type SignatureCollectionOwnerInput = {
  email: Scalars['String']
  name: Scalars['String']
  nationalId: Scalars['String']
  phone: Scalars['String']
}

export type SignatureCollectionSignatureIdInput = {
  signatureId: Scalars['String']
}

export type SignatureCollectionSignatureLookupInput = {
  collectionId: Scalars['String']
  nationalId: Scalars['String']
}

export type SignatureCollectionSignatureUpdateInput = {
  pageNumber: Scalars['Float']
  signatureId: Scalars['String']
}

export type SignatureCollectionUploadPaperSignatureInput = {
  listId: Scalars['String']
  nationalId: Scalars['String']
  pageNumber: Scalars['Float']
}

export type SocialInsuranceIncomePlanStatus =
  | 'ACCEPTED'
  | 'CANCELLED'
  | 'IN_PROGRESS'
  | 'UNKNOWN'

export type SocialInsuranceIncomeType = {
  amountApr?: InputMaybe<Scalars['Int']>
  amountAug?: InputMaybe<Scalars['Int']>
  amountDec?: InputMaybe<Scalars['Int']>
  amountFeb?: InputMaybe<Scalars['Int']>
  amountJan?: InputMaybe<Scalars['Int']>
  amountJul?: InputMaybe<Scalars['Int']>
  amountJun?: InputMaybe<Scalars['Int']>
  amountMar?: InputMaybe<Scalars['Int']>
  amountMay?: InputMaybe<Scalars['Int']>
  amountNov?: InputMaybe<Scalars['Int']>
  amountOct?: InputMaybe<Scalars['Int']>
  amountSep?: InputMaybe<Scalars['Int']>
  currencyCode?: InputMaybe<Scalars['String']>
  incomeCategoryCode?: InputMaybe<Scalars['String']>
  incomeCategoryName?: InputMaybe<Scalars['String']>
  incomeCategoryNumber?: InputMaybe<Scalars['Int']>
  incomeTypeCode?: InputMaybe<Scalars['String']>
  incomeTypeName?: InputMaybe<Scalars['String']>
  incomeTypeNumber?: InputMaybe<Scalars['Int']>
}

export type SocialInsurancePaymentGroupType =
  | 'DEBT'
  | 'PAID'
  | 'PAYMENTS'
  | 'SUBTRACTION'
  | 'UNKNOWN'

export type SocialInsurancePensionCalculationBasePensionType =
  | 'Disability'
  | 'FishermanRetirement'
  | 'HalfRetirement'
  | 'NewSystem'
  | 'NewSystemDisability'
  | 'NewSystemMedicalAndRehabilitation'
  | 'NewSystemPartialDisability'
  | 'Rehabilitation'
  | 'Retirement'

export type SocialInsurancePensionCalculationInput = {
  ageOfFirst75DisabilityAssessment?: InputMaybe<Scalars['Int']>
  benefitsFromMunicipality?: InputMaybe<Scalars['Int']>
  birthMonth?: InputMaybe<Scalars['Int']>
  birthYear?: InputMaybe<Scalars['Int']>
  capitalIncome?: InputMaybe<Scalars['Int']>
  childCount?: InputMaybe<Scalars['Int']>
  childSupportCount?: InputMaybe<Scalars['Int']>
  dateOfCalculations?: InputMaybe<Scalars['String']>
  foreignBasicPension?: InputMaybe<Scalars['Int']>
  hasSpouse?: InputMaybe<Scalars['Boolean']>
  income?: InputMaybe<Scalars['Int']>
  installmentClaims?: InputMaybe<Scalars['Int']>
  livingCondition?: InputMaybe<SocialInsurancePensionCalculationLivingCondition>
  livingConditionAbroadInYears?: InputMaybe<Scalars['Int']>
  livingConditionRatio?: InputMaybe<Scalars['Int']>
  otherIncome?: InputMaybe<Scalars['Int']>
  pensionPayments?: InputMaybe<Scalars['Int']>
  premium?: InputMaybe<Scalars['Int']>
  privatePensionPayments?: InputMaybe<Scalars['Int']>
  startMonth?: InputMaybe<Scalars['Int']>
  startYear?: InputMaybe<Scalars['Int']>
  taxCard?: InputMaybe<Scalars['Int']>
  typeOfBasePension?: InputMaybe<SocialInsurancePensionCalculationBasePensionType>
  typeOfPeriodIncome?: InputMaybe<SocialInsurancePensionCalculationPeriodIncomeType>
}

export type SocialInsurancePensionCalculationLivingCondition =
  | 'DoesNotLiveAlone'
  | 'LivesAlone'

export type SocialInsurancePensionCalculationPeriodIncomeType = 'Month' | 'Year'

export type SocialInsuranceTemporaryCalculationInput = {
  incomeTypes?: InputMaybe<Array<SocialInsuranceIncomeType>>
  incomeYear: Scalars['Int']
}

export type SortDirection = 'ASC' | 'DESC'

export type SortField = 'POPULAR' | 'RELEASE_DATE' | 'TITLE'

export type StatisticsInput = {
  /** Date format: YYYY-MM-DD */
  fromDate?: InputMaybe<Scalars['String']>
  organisationId?: InputMaybe<Scalars['String']>
  /** Date format: YYYY-MM-DD */
  toDate?: InputMaybe<Scalars['String']>
}

export type StatisticsQueryInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>
  dateTo?: InputMaybe<Scalars['DateTime']>
  interval?: InputMaybe<Scalars['Float']>
  numberOfDataPoints?: InputMaybe<Scalars['Float']>
  sourceDataKeys: Array<Scalars['String']>
}

export type StudentCanGetPracticePermitInput = {
  studentSSN: Scalars['String']
}

export type SubmitApplicationInput = {
  answers?: InputMaybe<Scalars['JSON']>
  event: Scalars['String']
  id: Scalars['String']
}

export type SubmitFormSystemScreenInput = {
  screenId?: InputMaybe<Scalars['String']>
}

export type SubscriptionType = 'AllChanges' | 'OnlyNew' | 'StatusChanges'

export type Tag = {
  key: Scalars['String']
  type: SearchableTags
}

export type TellUsAStoryInput = {
  dateOfStory: Scalars['String']
  email: Scalars['String']
  message: Scalars['String']
  name: Scalars['String']
  organization: Scalars['String']
  publicationAllowed?: InputMaybe<Scalars['Boolean']>
  subject?: InputMaybe<Scalars['String']>
}

export type TrademarkSubType =
  | 'CERTIFICATION_MARK'
  | 'COLLECTIVE_MARK'
  | 'TRADEMARK'

export type TrademarkType =
  | 'ANIMATION'
  | 'AUDIO'
  | 'IMAGE'
  | 'MULTIMEDIA'
  | 'TEXT'
  | 'TEXT_AND_IMAGE'
  | 'UNKNOWN'

export type TransactionType =
  | 'A'
  | 'AF'
  | 'AS'
  | 'E'
  | 'G'
  | 'I'
  | 'KG'
  | 'KS'
  | 'L'
  | 'LM'
  | 'M'

export type TypeCategory = 'GRAPHQL' | 'REST' | 'SOAP'

export type UniversityCareersStudentInfoByUniversityInput = {
  locale: Scalars['String']
  trackNumber: Scalars['Float']
  universityId: UniversityCareersUniversityId
}

export type UniversityCareersStudentInfoInput = {
  locale: Scalars['String']
}

export type UniversityCareersUniversityId =
  | 'AGRICULTURAL_UNIVERSITY_OF_ICELAND'
  | 'BIFROST_UNIVERSITY'
  | 'HOLAR_UNIVERSITY'
  | 'ICELAND_UNIVERSITY_OF_THE_ARTS'
  | 'UNIVERSITY_OF_AKUREYRI'
  | 'UNIVERSITY_OF_ICELAND'

export type UniversityGatewayGetPogramInput = {
  id: Scalars['String']
}

export type UpdateApplicationExternalDataInput = {
  dataProviders: Array<DataProvider>
  id: Scalars['String']
}

export type UpdateApplicationInput = {
  answers?: InputMaybe<Scalars['JSON']>
  draftProgress?: InputMaybe<DraftProgressInput>
  id: Scalars['String']
  skipValidation?: InputMaybe<Scalars['Boolean']>
}

export type UpdateAuthDelegationInput = {
  delegationId: Scalars['String']
  scopes: Array<AuthDelegationScopeInput>
}

export type UpdateChangeAppendixInput = {
  diff?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type UpdateContactInput = {
  address?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
}

export type UpdateCurrentEmployerInput = {
  employerNationalId: Scalars['String']
}

export type UpdateDraftRegulationCancelInput = {
  date?: InputMaybe<Scalars['String']>
  id: Scalars['String']
}

export type UpdateDraftRegulationChangeInput = {
  appendixes?: InputMaybe<Array<UpdateChangeAppendixInput>>
  comments?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  diff?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  text?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type UpdateEndorsementListDto = {
  closedDate: Scalars['DateTime']
  description?: InputMaybe<Scalars['String']>
  openedDate: Scalars['DateTime']
  title: Scalars['String']
}

export type UpdateEndorsementListInput = {
  endorsementList: UpdateEndorsementListDto
  listId: Scalars['String']
}

export type UpdateEndpointInput = {
  endpoint: Scalars['String']
  nationalId: Scalars['String']
  providerId: Scalars['String']
  xroad?: InputMaybe<Scalars['Boolean']>
}

export type UpdateFormSystemApplicantDtoInput = {
  name?: InputMaybe<FormSystemLanguageTypeInput>
}

export type UpdateFormSystemApplicantInput = {
  id?: InputMaybe<Scalars['String']>
  updateFormApplicantTypeDto?: InputMaybe<UpdateFormSystemApplicantDtoInput>
}

export type UpdateFormSystemApplicationDependenciesInput = {
  completed?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  dependencies?: InputMaybe<Array<InputMaybe<FormSystemDependencyInput>>>
}

export type UpdateHelpdeskInput = {
  email?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
}

export type UpdateIcelandicNameInput = {
  body: CreateIcelandicNameInput
  id: Scalars['Float']
}

export type UpdateOrganisationInput = {
  address?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  nationalId?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
}

export type UpdatePracticalDrivingLessonInput = {
  bookId: Scalars['String']
  comments: Scalars['String']
  createdOn: Scalars['String']
  id: Scalars['String']
  minutes: Scalars['Float']
}

export type UpdateUserProfileInput = {
  bankInfo?: InputMaybe<Scalars['String']>
  canNudge?: InputMaybe<Scalars['Boolean']>
  documentNotifications?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  emailCode?: InputMaybe<Scalars['String']>
  emailStatus?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
  mobilePhoneNumber?: InputMaybe<Scalars['String']>
  mobileStatus?: InputMaybe<Scalars['String']>
  smsCode?: InputMaybe<Scalars['String']>
}

export type UserDeviceTokenInput = {
  deviceToken: Scalars['String']
}

export type UserProfileData = {
  email: Scalars['String']
  mobilePhoneNumber: Scalars['String']
}

export type UserProfileUpdateActorProfileInput = {
  emailNotifications: Scalars['Boolean']
  fromNationalId: Scalars['String']
}

export type VacanciesGetLanguageEnum = 'EN' | 'IS' | 'ONLYEN' | 'ONLYIS'

export type VacanciesVacancyIdGetLanguageEnum =
  | 'EN'
  | 'IS'
  | 'ONLYEN'
  | 'ONLYIS'

export type ValidateMortgageCertificateInput = {
  properties: Array<Properties>
}

export type ValidateSeminarIndividualsInput = {
  individuals: Array<SeminarIndividual>
}

export type VehicleUserTypeEnum = 'eigandi' | 'medeigandi' | 'umradamadur'

export type VehiclesListInputV3 = {
  filterOnlyRequiredMileageRegistration?: InputMaybe<Scalars['Boolean']>
  page: Scalars['Float']
  pageSize: Scalars['Float']
  query?: InputMaybe<Scalars['String']>
}

/** Exhaustive list of verify license barcode errors */
export type VerifyLicenseBarcodeError = 'ERROR' | 'EXPIRED'

export type VerifyLicenseBarcodeInput = {
  data: Scalars['String']
}

/** Exhaustive list of verify license barcode types */
export type VerifyLicenseBarcodeType = 'PK_PASS' | 'UNKNOWN' | 'V2'

export type VerifyPkPassInput = {
  data: Scalars['String']
}

export type WatsonAssistantChatIdentityTokenInput = {
  email: Scalars['String']
  name: Scalars['String']
  userID: Scalars['String']
}

export type WatsonAssistantChatSubmitFeedbackInput = {
  assistantChatLog: Array<Scalars['JSONObject']>
  feedback?: InputMaybe<Scalars['String']>
  thumbStatus: WatsonAssistantChatSubmitFeedbackThumbStatus
  url?: InputMaybe<Scalars['String']>
}

export type WatsonAssistantChatSubmitFeedbackThumbStatus =
  | 'Down'
  | 'NoChoice'
  | 'Up'

export type WebSearchAutocompleteInput = {
  language?: InputMaybe<ContentLanguage>
  singleTerm: Scalars['String']
  size?: InputMaybe<Scalars['Int']>
}

export type WebVerdictByIdInput = {
  id: Scalars['String']
}

export type WebVerdictsInput = {
  caseCategories?: InputMaybe<Array<Scalars['String']>>
  caseNumber?: InputMaybe<Scalars['String']>
  caseTypes?: InputMaybe<Array<Scalars['String']>>
  courtLevel?: InputMaybe<Scalars['String']>
  dateFrom?: InputMaybe<Scalars['String']>
  dateTo?: InputMaybe<Scalars['String']>
  keywords?: InputMaybe<Array<Scalars['String']>>
  laws?: InputMaybe<Array<Scalars['String']>>
  page?: InputMaybe<Scalars['Int']>
  searchTerm?: InputMaybe<Scalars['String']>
}

export type WorkMachinesAction =
  | 'CHANGE_STATUS'
  | 'OWNER_CHANGE'
  | 'REGISTER_FOR_TRAFFIC'
  | 'REQUEST_INSPECTION'
  | 'SUPERVISOR_CHANGE'

export type WorkMachinesCollectionDocumentInput = {
  fileType?: InputMaybe<WorkMachinesFileType>
}

export type WorkMachinesCollectionInput = {
  locale?: InputMaybe<Scalars['String']>
  onlyInOwnerChangeProcess?: InputMaybe<Scalars['Boolean']>
  orderBy?: InputMaybe<Scalars['String']>
  pageNumber?: InputMaybe<Scalars['Float']>
  pageSize?: InputMaybe<Scalars['Float']>
  searchQuery?: InputMaybe<Scalars['String']>
  showDeregisteredMachines?: InputMaybe<Scalars['Boolean']>
  supervisorRegistered?: InputMaybe<Scalars['Boolean']>
}

export type WorkMachinesExternalLink = 'CSV' | 'EXCEL' | 'NEXT_PAGE' | 'SELF'

export type WorkMachinesFileType = 'CSV' | 'EXCEL'

export type WorkMachinesInput = {
  id: Scalars['String']
  locale: Scalars['String']
}

export type WorkMachinesParentCategoryByTypeAndModelInput = {
  model: Scalars['String']
  type: Scalars['String']
}

export type ChangeEndorsmentListClosedDateDto = {
  closedDate: Scalars['DateTime']
}

export type OccupationalLicenseLicenseType =
  | 'DISTRICT_COMMISSIONERS'
  | 'EDUCATION'
  | 'HEALTH_DIRECTORATE'

export type OfficialJournalOfIcelandApplicationAdvertTemplateTypeEnum =
  | 'AUGLYSING'
  | 'GJALDSKRA'
  | 'REGLUGERD'
  | 'UNKNOWN'

export type SendPdfEmailInput = {
  emailAddress: Scalars['String']
  listId: Scalars['String']
}

export type ActorDelegationsQueryVariables = Exact<{ [key: string]: never }>

export type ActorDelegationsQuery = {
  __typename?: 'Query'
  authActorDelegations: Array<{
    __typename?: 'AuthMergedDelegation'
    from:
      | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
      | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
  }>
}

export type GetUserProfileQueryVariables = Exact<{ [key: string]: never }>

export type GetUserProfileQuery = {
  __typename?: 'Query'
  getUserProfile?: {
    __typename?: 'UserProfile'
    email?: string | null
    mobilePhoneNumber?: string | null
  } | null
}

export type UpdateUserProfileMutationVariables = Exact<{
  input: UpdateUserProfileInput
}>

export type UpdateUserProfileMutation = {
  __typename?: 'Mutation'
  updateProfile?: {
    __typename?: 'UserProfile'
    locale?: string | null
    nationalId: string
  } | null
}

export type GetUserProfileLocaleQueryVariables = Exact<{ [key: string]: never }>

export type GetUserProfileLocaleQuery = {
  __typename?: 'Query'
  getUserProfileLocale?: {
    __typename?: 'UserProfileLocale'
    nationalId: string
    locale?: string | null
  } | null
}

export const ActorDelegationsDocument = gql`
  query ActorDelegations {
    authActorDelegations {
      from {
        nationalId
        name
      }
    }
  }
`

/**
 * __useActorDelegationsQuery__
 *
 * To run a query within a React component, call `useActorDelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActorDelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActorDelegationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useActorDelegationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ActorDelegationsQuery,
    ActorDelegationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ActorDelegationsQuery, ActorDelegationsQueryVariables>(
    ActorDelegationsDocument,
    options,
  )
}
export function useActorDelegationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActorDelegationsQuery,
    ActorDelegationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ActorDelegationsQuery,
    ActorDelegationsQueryVariables
  >(ActorDelegationsDocument, options)
}
export type ActorDelegationsQueryHookResult = ReturnType<
  typeof useActorDelegationsQuery
>
export type ActorDelegationsLazyQueryHookResult = ReturnType<
  typeof useActorDelegationsLazyQuery
>
export type ActorDelegationsQueryResult = Apollo.QueryResult<
  ActorDelegationsQuery,
  ActorDelegationsQueryVariables
>
export const GetUserProfileDocument = gql`
  query GetUserProfile {
    getUserProfile {
      email
      mobilePhoneNumber
    }
  }
`

/**
 * __useGetUserProfileQuery__
 *
 * To run a query within a React component, call `useGetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserProfileQuery,
    GetUserProfileQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(
    GetUserProfileDocument,
    options,
  )
}
export function useGetUserProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserProfileQuery,
    GetUserProfileQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(
    GetUserProfileDocument,
    options,
  )
}
export type GetUserProfileQueryHookResult = ReturnType<
  typeof useGetUserProfileQuery
>
export type GetUserProfileLazyQueryHookResult = ReturnType<
  typeof useGetUserProfileLazyQuery
>
export type GetUserProfileQueryResult = Apollo.QueryResult<
  GetUserProfileQuery,
  GetUserProfileQueryVariables
>
export const UpdateUserProfileDocument = gql`
  mutation updateUserProfile($input: UpdateUserProfileInput!) {
    updateProfile(input: $input) {
      locale
      nationalId
    }
  }
`
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserProfileMutation,
    UpdateUserProfileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateUserProfileMutation,
    UpdateUserProfileMutationVariables
  >(UpdateUserProfileDocument, options)
}
export type UpdateUserProfileMutationHookResult = ReturnType<
  typeof useUpdateUserProfileMutation
>
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>
export const GetUserProfileLocaleDocument = gql`
  query GetUserProfileLocale {
    getUserProfileLocale {
      nationalId
      locale
    }
  }
`

/**
 * __useGetUserProfileLocaleQuery__
 *
 * To run a query within a React component, call `useGetUserProfileLocaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileLocaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileLocaleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserProfileLocaleQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserProfileLocaleQuery,
    GetUserProfileLocaleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetUserProfileLocaleQuery,
    GetUserProfileLocaleQueryVariables
  >(GetUserProfileLocaleDocument, options)
}
export function useGetUserProfileLocaleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserProfileLocaleQuery,
    GetUserProfileLocaleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetUserProfileLocaleQuery,
    GetUserProfileLocaleQueryVariables
  >(GetUserProfileLocaleDocument, options)
}
export type GetUserProfileLocaleQueryHookResult = ReturnType<
  typeof useGetUserProfileLocaleQuery
>
export type GetUserProfileLocaleLazyQueryHookResult = ReturnType<
  typeof useGetUserProfileLocaleLazyQuery
>
export type GetUserProfileLocaleQueryResult = Apollo.QueryResult<
  GetUserProfileLocaleQuery,
  GetUserProfileLocaleQueryVariables
>
