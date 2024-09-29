import { User as RepoUser } from "../../../repository/app/schemas";
import {User} from "../../app/schemas";
import {ForRepoQuerying} from "../../ports/drivens";

const userMock: RepoUser = {
    id: '1',
    name: 'Yasmi',
    email: 'yasmi@gmail.com'
}

export class RepoQuerierStubAdapter implements ForRepoQuerying {
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
    createUser(_user: User, _password: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
}