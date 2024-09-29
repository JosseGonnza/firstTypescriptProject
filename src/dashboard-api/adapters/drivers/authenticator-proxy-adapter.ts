import {DashboardApi} from "../../app/dashboard-api";
import {ForAuthenticating} from "../../ports/drivers";
import {AuthenticatedUser, User} from "../../app/schemas";

//TODO: Esta clase no hace nada, sólo se encarga de controlar un evento externo
// para poder utilizarlo en nuestro DashboardApi
export class AuthenticatorProxyAdapter implements ForAuthenticating {
    constructor(private readonly dashboardApi: DashboardApi ) {}

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.login(email, password);
    }
    async register(user: User, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.register(user, password);
    }
}