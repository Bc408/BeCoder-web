import { product } from './product';

export const navigation = [
  { label: '产品', href: '#product', external: false },
  { label: '为何 BeCoder', href: '#why-becoder', external: false },
  { label: '核心体验', href: '#experience', external: false },
  { label: '开源', href: '#open-source', external: false },
  { label: 'GitHub', href: product.repositoryUrl, external: true },
] as const;
