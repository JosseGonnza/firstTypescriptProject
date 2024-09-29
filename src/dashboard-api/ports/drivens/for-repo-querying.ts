import {User as RepoUser} from "../../../repository/app/schemas";
import {User} from "../drivers";

//TODO: Utilizamos el User de schemas como RepoUser para devolver valores
// Utilizamos el User de for-authenticating para insertar
export interface ForRepoQuerying {
    getUser(email: string): Promise<RepoUser>;
    createUser(user: User, password: string): Promise<RepoUser>;
}