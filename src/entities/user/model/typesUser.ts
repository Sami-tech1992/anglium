export type UserRole = 'parent' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  childName: string;
  childAge: number;
}
