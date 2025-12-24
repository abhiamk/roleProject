export interface User {
  username: string;
  roles: string[];
  permissions: Record<string, string[]>;
}
