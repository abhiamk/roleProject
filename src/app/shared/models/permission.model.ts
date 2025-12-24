export interface ScreenPermission {
  screen: 'location' | 'USER' | 'REPORT';
  read: boolean;
  write: boolean;
  delete: boolean;
}
