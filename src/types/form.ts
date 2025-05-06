export interface PersonalInfo {
  name: string;
  financialAdvisorName: string;
  financialAdvisorFirm: string;
}

export interface InvestmentDetails {
  selectedProduct: string;
  amount: string;
  paymentMethod: 'electronic' | 'bank' | '';
  expectedPaymentDate: string;
  isReinvestment: boolean;
}

export interface InvestmentAmount {
  amount: string;
  companyProfits: boolean;
  gift: boolean;
  pensions: boolean;
  salary: boolean;
  dividends: boolean;
  inheritance: boolean;
  propertySale: boolean;
  savings: boolean;
  divorceSettlement: boolean;
  loan: boolean;
  rent: boolean;
  shareAssetSale: boolean;
  encashment: boolean;
  other: boolean;
  facilitateAdviserFees: boolean;
  adviserCharge: string;
  adviserChargePercentage: string;
  bankName: string;
  accountName: string;
  reference: string;
  sortCode: string;
  accountNumber: string;
}

export interface EntityInfo {
  trustName: string;
  incorporationDate: string;
  registrationNumber: string;
  country: string;
  lei: string;
  address: string;
  postcode: string;
  contactName: string;
  telephone: string;
  email: string;
}

export interface TaxInfo {
  countries: Array<{
    country: string;
    tin: string;
  }>;
  giin: string;
}

export interface Individual {
  title: string;
  firstName: string;
  surname: string;
  function: string;
  shareCapital: string;
  address: string;
  postcode: string;
  country: string;
  dateOfBirth: string;
  placeOfBirth: string;
  officeTelephone: string;
  mobileTelephone: string;
  email: string;
  isUSPerson: boolean;
  nationalInsurance: string;
  nationality: string;
  passportNumber: string;
  passportIssueDate: string;
  passportValidTo: string;
  isPEP: boolean;
  pepInformation: string;
  isAuthorizedSignatory: boolean;
}

export interface ManagementInfo {
  individuals: Individual[];
}

export interface BeneficiaryInfo {
  beneficiaries: Individual[];
}

export interface SignatoryInfo {
  signatories: Array<{
    name: string;
    function: string;
    date: string;
  }>;
}

export interface Declarations {
  marketingConsent: boolean;
  declaration1: boolean;
  declaration2: boolean;
  declaration3: boolean;
  declaration4: boolean;
  declaration5: boolean;
  declaration6: boolean;
  declaration7: boolean;
  declaration8: boolean;
  declaration9: boolean;
  declaration10: boolean;
  declaration11: boolean;
  declaration12: boolean;
}

export interface Signatures {
  authorisedSignatures: Array<{
    name: string;
    date: string;
  }>;
}

export interface AdviserInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  isNetworkMember: string;
  authorisationType: string;
  networkName: string;
  fcaNumber: string;
  suitabilityConfirmed: boolean;
  identityVerified: boolean;
  wealthSourceVerified: boolean;
  appropriatenessConfirmed: boolean;
  signatureDate: string;
}

export interface FormState {
  personal: PersonalInfo;
  investment: InvestmentDetails;
  investmentAmount: InvestmentAmount;
  entity: EntityInfo;
  tax: TaxInfo;
  management: ManagementInfo;
  beneficiary: BeneficiaryInfo;
  signatory: SignatoryInfo;
  declarations: Declarations;
  signatures: Signatures;
  adviser: AdviserInfo;
  currentStep: number;
}

export const formInitialState: FormState = {
  personal: {
    name: '',
    financialAdvisorName: '',
    financialAdvisorFirm: '',
  },
  investment: {
    selectedProduct: '',
    amount: '',
    paymentMethod: '',
    expectedPaymentDate: '',
    isReinvestment: false,
  },
  investmentAmount: {
    amount: '',
    companyProfits: false,
    gift: false,
    pensions: false,
    salary: false,
    dividends: false,
    inheritance: false,
    propertySale: false,
    savings: false,
    divorceSettlement: false,
    loan: false,
    rent: false,
    shareAssetSale: false,
    encashment: false,
    other: false,
    facilitateAdviserFees: false,
    adviserCharge: '',
    adviserChargePercentage: '',
    bankName: '',
    accountName: '',
    reference: '',
    sortCode: '',
    accountNumber: '',
  },
  entity: {
    trustName: '',
    incorporationDate: '',
    registrationNumber: '',
    country: '',
    lei: '',
    address: '',
    postcode: '',
    contactName: '',
    telephone: '',
    email: '',
  },
  tax: {
    countries: [{ country: '', tin: '' }],
    giin: '',
  },
  management: {
    individuals: [
      {
        title: '',
        firstName: '',
        surname: '',
        function: '',
        shareCapital: '',
        address: '',
        postcode: '',
        country: '',
        dateOfBirth: '',
        placeOfBirth: '',
        officeTelephone: '',
        mobileTelephone: '',
        email: '',
        isUSPerson: false,
        nationalInsurance: '',
        nationality: '',
        passportNumber: '',
        passportIssueDate: '',
        passportValidTo: '',
        isPEP: false,
        pepInformation: '',
        isAuthorizedSignatory: false,
      },
    ],
  },
  beneficiary: {
    beneficiaries: [
      {
        title: '',
        firstName: '',
        surname: '',
        function: '',
        shareCapital: '',
        address: '',
        postcode: '',
        country: '',
        dateOfBirth: '',
        placeOfBirth: '',
        officeTelephone: '',
        mobileTelephone: '',
        email: '',
        isUSPerson: false,
        nationalInsurance: '',
        nationality: '',
        passportNumber: '',
        passportIssueDate: '',
        passportValidTo: '',
        isPEP: false,
        pepInformation: '',
        isAuthorizedSignatory: false,
      },
    ],
  },
  signatory: {
    signatories: [
      {
        name: '',
        function: '',
        date: '',
      },
    ],
  },
  declarations: {
    marketingConsent: false,
    declaration1: false,
    declaration2: false,
    declaration3: false,
    declaration4: false,
    declaration5: false,
    declaration6: false,
    declaration7: false,
    declaration8: false,
    declaration9: false,
    declaration10: false,
    declaration11: false,
    declaration12: false,
  },
  signatures: {
    authorisedSignatures: [
      {
        name: '',
        date: '',
      },
      {
        name: '',
        date: '',
      }
    ],
  },
  adviser: {
    name: '',
    address: '',
    phone: '',
    email: '',
    isNetworkMember: '',
    authorisationType: '',
    networkName: '',
    fcaNumber: '',
    suitabilityConfirmed: false,
    identityVerified: false,
    wealthSourceVerified: false,
    appropriatenessConfirmed: false,
    signatureDate: '',
  },
  currentStep: 0,
};