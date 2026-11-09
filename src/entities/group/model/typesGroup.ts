export type GroupStatus = 'recruiting' | 'full' | 'in-progress' | 'finished';

export interface Group {
  id: string;
  name: string;
  courseId: string;
  teacherId: string;
  maxStudents: number;
  currentStudents: number;
  schedule: string;
  status: GroupStatus;
}
