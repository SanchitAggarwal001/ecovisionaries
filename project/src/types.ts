export interface User {
  id: string;
  email: string;
  role: 'seller' | 'customer';
}