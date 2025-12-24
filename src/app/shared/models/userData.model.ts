export interface LoginUserData {
  username: string,
  role: string,
  permissions: [
    {
      label: string,
      route: string,
      screen: string,
      roles: string[],
      actions: string[]
    }]
}
