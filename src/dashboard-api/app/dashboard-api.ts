import {AuthenticatedUser, ForAuthenticating, User} from "../ports/drivers";
import {ForControlAuthenticating, ForRepoQuerying} from "../ports/drivens";

export class DashboardApi implements ForAuthenticating {

    constructor(
        private readonly controlAuthenticator: ForControlAuthenticating,
        private readonly repoQuerier: ForRepoQuerying
    ) {}

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(email, password);
        const permissions = await this.controlAuthenticator.getPermissions(email, password);
        const user = await this.repoQuerier.getUser(email);

        //TODO: 3 puntos para devolver todo lo que engloba esa variable
        return {
            ...user,
            ...permissions,
            ...authDetails
        };
    }
    async register(user: User, password: string): Promise<AuthenticatedUser> {
        const newUser = await this.repoQuerier.createUser(user, password);
        const authDetails = await this.controlAuthenticator.getAuthDetails(user.email, password);
        const permissions = await this.controlAuthenticator.getPermissions(user.email, password);

        return {
            ...newUser,
            ...authDetails,
            ...permissions
        }
    }
}