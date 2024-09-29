import {DashboardApi} from "./dashboard-api";
import {ControlAuthenticationStubAdapter} from "../adapters/drivens";
import {RepoQuerierStubAdapter} from "../adapters/drivens/repo-querier-stub-adapter";
import {AuthenticatorProxyAdapter} from "../adapters/drivers";

//TODO: Una composición es una instancia de nuestro hexágono con todo lo que necesita para funcionar
const  compositionMock = () => {
    const controlAuthenticatorStub = new ControlAuthenticationStubAdapter();
    const repoQuerier = new RepoQuerierStubAdapter();
    const dashboardApiMock = new DashboardApi(controlAuthenticatorStub, repoQuerier);

    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(dashboardApiMock);

    return {
        authenticatorProxyAdapter
    };
};

//TODO: Con esto ya podemos utilizar nuestro Mock de Composition en el resto de la aplicación.
export const { authenticatorProxyAdapter } = compositionMock();

const userMock = {
    name: 'Yasmina',
    email: 'yasmi@gmail.com'
}

authenticatorProxyAdapter.login('yasmi@gmail.com', 'password123');
authenticatorProxyAdapter.register(userMock, 'password123');