export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    token: string;
    refreshToken: string;
}
//TODO: Con Omit dejas de utilizar en el nuevo type las propiedades que le pasas
// export type User = Omit<AuthenticatedUser, 'id'| 'token' | 'refreshToken'>;

//TODO: Con Pick utilizas sólo las que le pasas
export type User = Pick<AuthenticatedUser, 'email' | 'name'>;

export interface ForAuthenticating {
    login: (mail: string, password: string) => Promise<AuthenticatedUser>;
    register: (user: User, password: string) => Promise<AuthenticatedUser>;
}