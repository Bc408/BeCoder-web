import { product } from './product';

export const navigation = [
  { label: '产品', href: '#product', external: false },
  { label: 'GitHub', href: product.repositoryUrl, external: true },
] as const;
