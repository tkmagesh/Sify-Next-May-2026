export function sharedModels(): string {
  return 'shared-models';
}


export interface UserProfile {
  id: string;
  name: string;
  role: 'admin' | 'user';
}