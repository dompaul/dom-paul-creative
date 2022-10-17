export interface PricingOption {
  title: string;
  src: string;
  ranges: PricingRange[];
}

export interface PricingRange {
  name: string;
  price: string;
}
