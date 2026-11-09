export type EnrollmentStatus = 'pending' | 'active' | 'cancelled';

export interface Enrollment {
  id: string;
  userId: string;
  groupId: string;
  status: EnrollmentStatus;
  createdAt: string;
}
