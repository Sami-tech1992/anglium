export type TeacherRole = 'main' | 'regular';

export interface Teacher {
  id: string;
  name: string;
  role: TeacherRole;
  bio: string;
  avatarUrl?: string;
}
