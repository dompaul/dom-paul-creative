import {
  SubscriptionOption,
  SubscriptionCasingOption,
} from 'models/Subscription';

export const subscriptionMock: SubscriptionOption[] = [
  {
    title: '50-99',
    price: '£5.97',
    secondaryPrice: '£6.97',
    priceText: 'All others at',
    secondaryText: 'Rose at',
    discount: 'Get 5% off',
  },
  {
    title: '100-199',
    price: '£5.47',
    secondaryPrice: '£6.47',
    priceText: 'All others at',
    secondaryText: 'Rose at',
    discount: 'Get 10% off',
  },
  {
    title: '200-499',
    price: '£4.97',
    secondaryPrice: '£5.97',
    priceText: 'All others at',
    secondaryText: 'Rose at',
    discount: 'Get 15% off',
  },
  {
    title: '500+',
    price: '£4.47',
    secondaryPrice: '£5.47',
    priceText: 'All others at',
    secondaryText: 'Rose at',
    discount: 'Get 20% off',
  },
];

export const casingMock: SubscriptionCasingOption[] = [
  {
    title: '10-29',
    price: '£120',
  },
  {
    title: '30-49',
    price: '£115',
  },
  {
    title: '50-99',
    price: '£110',
  },
  {
    title: '100-199',
    price: '£105',
  },
  {
    title: '200-299',
    price: '£100',
  },
  {
    title: '300-499',
    price: '£95',
  },
  {
    title: '500+',
    price: '£90',
  },
];
