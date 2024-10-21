import { PRODUCTS_PRICES } from '@/config/products';

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  { label: 'Blue', value: 'blue', tw: 'blue-950' },
  { label: 'Rose', value: 'rose', tw: 'rose-950' },
] as const;

export const MODELS = {
  name: 'models',
  options: [
    {
      label: 'iphone X',
      value: 'iphonex',
    },
    {
      label: 'iphone 11',
      value: 'iphone11',
    },
    {
      label: 'iphone 12',
      value: 'iphone12',
    },
    {
      label: 'iphone 13',
      value: 'iphone13',
    },
    {
      label: 'iphone 14',
      value: 'iphone14',
    },
    {
      label: 'iphone 15',
      value: 'iphone15',
    },
    {
      label: 'iphone 16',
      value: 'iphone16',
    },
  ],
} as const;

export const MATERIALS = {
  name: 'material',
  options: [
    {
      Label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCTS_PRICES.material.silicone,
    },
    {
      Label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCTS_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: 'finish',
  options: [
    {
      Label: 'Smooth Finish',
      value: 'smooth',
      description: undefined,
      price: PRODUCTS_PRICES.finish.smooth,
    },
    {
      Label: 'Textured Finish',
      value: 'textured',
      description: 'Soft grippy texture',
      price: PRODUCTS_PRICES.finish.textured,
    },
  ],
} as const;
