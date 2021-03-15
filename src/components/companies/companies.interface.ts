export interface Presence {
  physical: boolean;
  online: boolean;
}

export interface AcceptingCryptos {
  landingPage: string;
  cryptos: string[];
}

export interface PhysicalStore {
  country: string;
  state: string;
  address: string;
}
