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
  | 'ChildrenResidenceChange'
  | 'ChildrenResidenceChangeV2'
  | 'Citizenship'
  | 'ComplaintsToAlthingiOmbudsman'
  | 'CriminalRecord'
  | 'DataProtectionAuthorityComplaint'
  | 'DeregisterMachine'
  | 'DigitalTachographCompanyCard'
  | 'DigitalTachographDriversCard'
  | 'DigitalTachographWorkshopCard'
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
  | 'ExampleForm'
  | 'ExamplePayment'
  | 'FinancialAid'
  | 'FinancialStatementsInao'
  | 'FundingGovernmentProjects'
  | 'GeneralFishingLicense'
  | 'GeneralPetitionService'
  | 'GrindavikHousingBuyout'
  | 'HealthInsurance'
  | 'HealthcareLicenseCertificate'
  | 'HomeSupport'
  | 'HouseholdSupplement'
  | 'InheritanceReport'
  | 'InstitutionCollaboration'
  | 'LicensePlateRenewal'
  | 'LoginService'
  | 'MarriageConditions'
  | 'MortgageCertificate'
  | 'NoDebtCertificate'
  | 'OfficialJournalOfIceland'
  | 'OldAgePension'
  | 'OperatingLicense'
  | 'OrderVehicleLicensePlate'
  | 'OrderVehicleRegistrationCertificate'
  | 'PSign'
  | 'ParentalLeave'
  | 'Passport'
  | 'PassportAnnulment'
  | 'PensionSupplement'
  | 'PublicDebtPaymentPlan'
  | 'RequestInspectionForMachine'
  | 'SignatureListCreation'
  | 'SignatureListSigning'
  | 'TransferOfMachineOwnership'
  | 'TransferOfVehicleOwnership'
  | 'University'

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
  | 'ChildrenResidenceChange'
  | 'ChildrenResidenceChangeV2'
  | 'Citizenship'
  | 'ComplaintsToAlthingiOmbudsman'
  | 'CriminalRecord'
  | 'DataProtectionAuthorityComplaint'
  | 'DeregisterMachine'
  | 'DigitalTachographCompanyCard'
  | 'DigitalTachographDriversCard'
  | 'DigitalTachographWorkshopCard'
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
  | 'ExampleForm'
  | 'ExamplePayment'
  | 'FinancialAid'
  | 'FinancialStatementsInao'
  | 'FundingGovernmentProjects'
  | 'GeneralFishingLicense'
  | 'GeneralPetitionService'
  | 'GrindavikHousingBuyout'
  | 'HealthInsurance'
  | 'HealthcareLicenseCertificate'
  | 'HomeSupport'
  | 'HouseholdSupplement'
  | 'InheritanceReport'
  | 'InstitutionCollaboration'
  | 'LicensePlateRenewal'
  | 'LoginService'
  | 'MarriageConditions'
  | 'MortgageCertificate'
  | 'NoDebtCertificate'
  | 'OfficialJournalOfIceland'
  | 'OldAgePension'
  | 'OperatingLicense'
  | 'OrderVehicleLicensePlate'
  | 'OrderVehicleRegistrationCertificate'
  | 'PSign'
  | 'ParentalLeave'
  | 'Passport'
  | 'PassportAnnulment'
  | 'PensionSupplement'
  | 'PublicDebtPaymentPlan'
  | 'RequestInspectionForMachine'
  | 'SignatureListCreation'
  | 'SignatureListSigning'
  | 'TransferOfMachineOwnership'
  | 'TransferOfVehicleOwnership'
  | 'University'

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
  removedScopes?: InputMaybe<Array<Scalars['String']>>
  requireApiScopes?: InputMaybe<Scalars['Boolean']>
  requireConsent?: InputMaybe<Scalars['Boolean']>
  requirePkce?: InputMaybe<Scalars['Boolean']>
  singleSession?: InputMaybe<Scalars['Boolean']>
  slidingRefreshTokenLifetime?: InputMaybe<Scalars['Int']>
  supportTokenExchange?: InputMaybe<Scalars['Boolean']>
  supportsCustomDelegation?: InputMaybe<Scalars['Boolean']>
  supportsLegalGuardians?: InputMaybe<Scalars['Boolean']>
  supportsPersonalRepresentatives?: InputMaybe<Scalars['Boolean']>
  supportsProcuringHolders?: InputMaybe<Scalars['Boolean']>
  tenantId: Scalars['String']
}

export type AuthAdminPatchScopeInput = {
  allowExplicitDelegationGrant?: InputMaybe<Scalars['Boolean']>
  description?: InputMaybe<Array<AuthAdminTranslatedValueInput>>
  displayName?: InputMaybe<Array<AuthAdminTranslatedValueInput>>
  environments: Array<AuthAdminEnvironment>
  grantToAuthenticatedUser?: InputMaybe<Scalars['Boolean']>
  grantToLegalGuardians?: InputMaybe<Scalars['Boolean']>
  grantToPersonalRepresentatives?: InputMaybe<Scalars['Boolean']>
  grantToProcuringHolders?: InputMaybe<Scalars['Boolean']>
  isAccessControlled?: InputMaybe<Scalars['Boolean']>
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
  | 'talsmannagrunnur'
  | 'thjodskra'

export type AuthDelegationScopeInput = {
  name: Scalars['String']
  validTo: Scalars['DateTime']
}

export type AuthDelegationType =
  | 'Custom'
  | 'LegalGuardian'
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

export type BulkUploadUser = {
  nationalId: Scalars['String']
  pageNumber: Scalars['Float']
}

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

export type ConfirmEmailVerificationInput = {
  email: Scalars['String']
  hash: Scalars['String']
}

export type ConfirmSmsVerificationInput = {
  code: Scalars['String']
  mobilePhoneNumber: Scalars['String']
}

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
  | 'ChildrenResidenceChange'
  | 'ChildrenResidenceChangeV2'
  | 'Citizenship'
  | 'ComplaintsToAlthingiOmbudsman'
  | 'CriminalRecord'
  | 'DataProtectionAuthorityComplaint'
  | 'DeregisterMachine'
  | 'DigitalTachographCompanyCard'
  | 'DigitalTachographDriversCard'
  | 'DigitalTachographWorkshopCard'
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
  | 'ExampleForm'
  | 'ExamplePayment'
  | 'FinancialAid'
  | 'FinancialStatementsInao'
  | 'FundingGovernmentProjects'
  | 'GeneralFishingLicense'
  | 'GeneralPetitionService'
  | 'GrindavikHousingBuyout'
  | 'HealthInsurance'
  | 'HealthcareLicenseCertificate'
  | 'HomeSupport'
  | 'HouseholdSupplement'
  | 'InheritanceReport'
  | 'InstitutionCollaboration'
  | 'LicensePlateRenewal'
  | 'LoginService'
  | 'MarriageConditions'
  | 'MortgageCertificate'
  | 'NoDebtCertificate'
  | 'OfficialJournalOfIceland'
  | 'OldAgePension'
  | 'OperatingLicense'
  | 'OrderVehicleLicensePlate'
  | 'OrderVehicleRegistrationCertificate'
  | 'PSign'
  | 'ParentalLeave'
  | 'Passport'
  | 'PassportAnnulment'
  | 'PensionSupplement'
  | 'PublicDebtPaymentPlan'
  | 'RequestInspectionForMachine'
  | 'SignatureListCreation'
  | 'SignatureListSigning'
  | 'TransferOfMachineOwnership'
  | 'TransferOfVehicleOwnership'
  | 'University'

export type CreateApplicationInput = {
  initialQuery?: InputMaybe<Scalars['String']>
  typeId: CreateApplicationDtoTypeIdEnum
}

export type CreateAuthAdminClientInput = {
  clientId: Scalars['ID']
  clientType: AuthAdminCreateClientType
  displayName: Scalars['String']
  environments: Array<AuthAdminEnvironment>
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
  text?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type CreateContactInput = {
  email: Scalars['String']
  name: Scalars['String']
  phoneNumber: Scalars['String']
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

export type CreatePresignedPostInput = {
  fileName: Scalars['String']
  hash: Scalars['String']
  regId: Scalars['String']
}

export type CreateProviderInput = {
  clientName: Scalars['String']
  nationalId: Scalars['String']
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

export type CustomPageUniqueIdentifier = 'PensionCalculator'

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

export type DocumentInput = {
  id: Scalars['String']
  pageSize?: InputMaybe<Scalars['Float']>
  /** Optional. For logging only. */
  provider?: InputMaybe<Scalars['String']>
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
  isLegalGuardian?: InputMaybe<Scalars['Boolean']>
  nationalId: Scalars['String']
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
  | 'Sender'
  | 'Subject'
  | 'Type'

export type DraftProgressInput = {
  stepsFinished: Scalars['Float']
  totalSteps: Scalars['Float']
}

export type DrivingLicenseBookStudentInput = {
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

export type FamilyCorrectionInput = {
  comment: Scalars['String']
  email: Scalars['String']
  nationalIdChild: Scalars['String']
  phonenumber: Scalars['String']
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

export type GeneratePdfDtoTypeEnum =
  | 'ChildrenResidenceChange'
  | 'ChildrenResidenceChangeV2'

export type GeneratePdfInput = {
  id: Scalars['String']
  type: GeneratePdfDtoTypeEnum
}

export type GeneratePkPassInput = {
  licenseType: Scalars['String']
}

export type GenericFormInput = {
  email: Scalars['String']
  files?: InputMaybe<Array<Scalars['String']>>
  id: Scalars['String']
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
  | 'MachineLicense'
  | 'PCard'
  | 'Passport'

/** Possible license fetch statuses */
export type GenericUserLicenseFetchStatus =
  | 'Error'
  | 'Fetched'
  | 'Fetching'
  | 'NotFetched'
  | 'Stale'

/** Exhaustive list meta link type */
export type GenericUserLicenseMetaLinksType = 'Download' | 'External'

/** Possible license pkpass statuses */
export type GenericUserLicensePkPassStatus =
  | 'Available'
  | 'NotAvailable'
  | 'Unknown'

/** Possible license statuses for user */
export type GenericUserLicenseStatus = 'HasLicense' | 'NotAvailable' | 'Unknown'

export type GetAdgerdirFrontpageInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetAdgerdirPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
}

export type GetAdgerdirPagesInput = {
  lang?: InputMaybe<Scalars['String']>
  perPage?: InputMaybe<Scalars['Int']>
}

export type GetAdgerdirTagsInput = {
  lang?: InputMaybe<Scalars['String']>
}

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

export type GetBrokenDownElectronicRegistrationStatisticsInput = {
  year: Scalars['Float']
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

export type GetErrorPageInput = {
  errorCode: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetEventsInput = {
  lang?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  size?: InputMaybe<Scalars['Int']>
}

export type GetFamilyInfoInput = {
  familyMemberNationalId: Scalars['String']
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

export type GetGenericListItemsInput = {
  genericListId: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<GetGenericListItemsInputSortField>
}

export type GetGenericListItemsInputSortField = {
  field: SortField
  order: SortDirection
}

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

export type GetPresignedUrlInput = {
  id: Scalars['String']
  type: Scalars['String']
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

export type GetTranslationsInput = {
  lang: Scalars['String']
  namespaces: Array<Scalars['String']>
}

export type GetUrlInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
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
}

export type IcelandicGovernmentInstitutionVacanciesInput = {
  institution?: InputMaybe<Scalars['String']>
  language?: InputMaybe<VacanciesGetLanguageEnum>
}

export type IcelandicGovernmentInstitutionVacancyByIdInput = {
  id: Scalars['String']
  language?: InputMaybe<VacanciesVacancyIdGetLanguageEnum>
}

export type IdentityInput = {
  nationalId: Scalars['String']
}

export type IdentityType = 'Company' | 'Person'

export type InaoClientFinancialLimitInput = {
  clientType: Scalars['String']
  year: Scalars['String']
}

export type InsuranceErrorStatus = 'INTERNAL_SERVICE_ERROR' | 'NOT_FOUND'

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

export type MetadataInput = {
  field: EndorsementMetadataDtoFieldEnum
}

export type MinistryOfJusticeAdvertQuery = {
  id: Scalars['String']
}

export type MinistryOfJusticeAdvertStatus =
  | 'Active'
  | 'Draft'
  | 'InProgress'
  | 'Old'
  | 'Published'
  | 'ReadyForPublication'
  | 'Rejected'
  | 'Revoked'
  | 'Submitted'
  | 'Unknown'
  | 'Waiting'

export type MinistryOfJusticeAdvertsInput = {
  category?: InputMaybe<Array<Scalars['String']>>
  dateFrom?: InputMaybe<Scalars['DateTime']>
  dateTo?: InputMaybe<Scalars['DateTime']>
  department?: InputMaybe<Array<Scalars['String']>>
  involvedParty?: InputMaybe<Array<Scalars['String']>>
  page?: InputMaybe<Scalars['Float']>
  search?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Array<Scalars['String']>>
}

export type MinistryOfJusticeQueryInput = {
  page?: InputMaybe<Scalars['Float']>
  search?: InputMaybe<Scalars['String']>
}

export type MinistryOfJusticeTypesInput = {
  department?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Float']>
  search?: InputMaybe<Scalars['String']>
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

export type OccupationalLicenseStatus =
  | 'error'
  | 'limited'
  | 'revoked'
  | 'valid'
  | 'waived'

export type OccupationalLicenseType = 'EDUCATION' | 'HEALTH'

export type OccupationalLicensesErrorStatus =
  | 'INTERNAL_SERVER_ERROR'
  | 'NOT_FOUND'

export type OpenListInput = {
  changeEndorsmentListClosedDateDto: ChangeEndorsmentListClosedDateDto
  listId: Scalars['String']
}

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

export type OperatorChangeAnswersUser = {
  nationalId: Scalars['String']
}

export type OperatorChangeAnswersVehicleMileage = {
  value?: InputMaybe<Scalars['String']>
}

export type Order = 'ASC' | 'DESC'

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

export type PutVehicleMileageInput = {
  internalId: Scalars['Float']
  /** Deprecated. Use {mileageNumber} instead. Keeping in for backwards compatibility */
  mileage?: InputMaybe<Scalars['String']>
  mileageNumber?: InputMaybe<Scalars['Float']>
  permno: Scalars['String']
}

export type RegulationViewTypes = 'current' | 'd' | 'diff' | 'original'

export type RequestFileSignatureDtoTypeEnum =
  | 'ChildrenResidenceChange'
  | 'ChildrenResidenceChangeV2'

export type RequestFileSignatureInput = {
  id: Scalars['String']
  type: RequestFileSignatureDtoTypeEnum
}

export type RequirementKey =
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
  | 'noLicenseFound'
  | 'noTempLicense'
  | 'personNot17YearsOld'
  | 'personNotAtLeast24YearsOld'
  | 'personNotFoundInNationalRegistry'

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
  dateFrom: Scalars['String']
  dateTo: Scalars['String']
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

export type RightsPortalPaymentErrorStatus =
  | 'INTERNAL_SERVICE_ERROR'
  | 'NOT_FOUND'

export type RightsPortalPaymentOverviewDocumentInput = {
  documentId: Scalars['Int']
}

export type RightsPortalPaymentOverviewInput = {
  dateFrom: Scalars['String']
  dateTo: Scalars['String']
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
}

export type SearchableContentTypes =
  | 'webAdgerdirPage'
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

export type SignatureCollectionAreaInput = {
  areaId: Scalars['String']
}

export type SignatureCollectionCancelListsInput = {
  collectionId: Scalars['String']
  listIds?: InputMaybe<Array<Scalars['String']>>
}

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

export type SocialInsurancePaymentGroupType =
  | 'DEBT'
  | 'PAYED'
  | 'PAYMENTS'
  | 'SUBTRACTION'
  | 'UNKNOWN'

export type SocialInsurancePaymentPlanInput = {
  year: Scalars['Int']
}

export type SocialInsurancePensionCalculationBasePensionType =
  | 'Disability'
  | 'FishermanRetirement'
  | 'HalfRetirement'
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

export type TypeCategory = 'GRAPHQL' | 'REST' | 'SOAP'

export type UniversityGatewayGetPogramInput = {
  id: Scalars['String']
}

export type UniversityOfIcelandStudentInfoInput = {
  locale: Scalars['String']
  trackNumber?: InputMaybe<Scalars['Float']>
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

export type UploadSignedFileDtoTypeEnum =
  | 'ChildrenResidenceChange'
  | 'ChildrenResidenceChangeV2'

export type UploadSignedFileInput = {
  documentToken: Scalars['String']
  id: Scalars['String']
  type: UploadSignedFileDtoTypeEnum
}

export type UserDeviceTokenInput = {
  deviceToken: Scalars['String']
}

export type VacanciesGetLanguageEnum = 'EN' | 'IS' | 'ONLYEN' | 'ONLYIS'

export type VacanciesVacancyIdGetLanguageEnum =
  | 'EN'
  | 'IS'
  | 'ONLYEN'
  | 'ONLYIS'

export type ValidateMortgageCertificateInput = {
  isFromSearch?: InputMaybe<Scalars['Boolean']>
  propertyNumber: Scalars['String']
}

export type VehicleUserTypeEnum = 'eigandi' | 'medeigandi' | 'umradamadur'

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

export type ChangeEndorsmentListClosedDateDto = {
  closedDate: Scalars['DateTime']
}

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
