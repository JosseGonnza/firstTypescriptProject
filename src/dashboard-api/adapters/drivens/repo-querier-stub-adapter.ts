import {ForRepoQuerying} from "../../ports/drivens";
import { User as RepoUser } from "../../../repository/app/schemas";
import {User} from "../../ports/drivers";

const userMock: RepoUser = {
    id: '1',
    name: 'Yasmi',
    email: 'yasmi@test.com'
}

export class RepoQuerierStubAdapter implements ForRepoQuerying {
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
    createUser(_user: User, _password: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
}