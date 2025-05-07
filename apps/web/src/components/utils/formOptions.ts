export interface formOptions {
  gagnasofnun: boolean;

  fullName: string;
  addressStreet: string;
  addressPostalCode: number;
  addressCity: string;
  nationalIdentificationNumber: string;
  email: string;
  phoneNumber: string;

  atvinnurekstur: boolean;
  stadaVinnumarkadi: 'ekki-i-vinnu' | 'hlutastarf' | 'tilfallandi-vinna';
  otekidOrlof: boolean;
  lokUppsagnarfrests: string;
  astaedaAtvinnuleysis:
    | 'samdrattur'
    | 'skipulagsbreytingar'
    | 'framkoma-yfirmanns';
}

export const formLabels = {
  boolean: {
    yes: 'Já',
    no: 'Nei',
  },
  stadaVinnumarkadi: {
    'ekki-i-vinnu': 'Ég er ekki í vinnu',
    hlutastarf: 'Ég er í hlutastarfi',
    'tilfallandi-vinna': 'Ég er í tilfallandi vinnu',
  },
  astaedaAtvinnuleysis: {
    samdrattur: 'Samdráttur',
    skipulagsbreytingar: 'Skipulagsbreytingar',
    'framkoma-yfirmanns': 'Sagði upp vegna framkomu yfirmanns',
  },
};
