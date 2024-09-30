import {AuthDetails, ForControlAuthenticating, Permissions} from "../../ports/drivens/for-control-authenticating.ts";

const authDetailsMock: AuthDetails = {
    token: '1hk523nsdcsnkjg89532ijkn',
    refreshToken: '435bte8t4bfge78944fg'
}

const permissionsMock: Permissions = {
    admin: true,
    user: true
}

export class ControlAuthenticationStubAdapter implements ForControlAuthenticating {
    getAuthDetails(_email: string, _password: string): Promise<AuthDetails>{
        return Promise.resolve(authDetailsMock);
    };
    getPermissions(_email: string, _password: string): Promise<Permissions>{
        return Promise.resolve(permissionsMock);
    }
}
