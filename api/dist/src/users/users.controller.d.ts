import { UsersService } from './users.service';
export declare class UsersController {
    private userServices;
    constructor(userServices: UsersService);
    GetAllUsers(): {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            };
        };
        phone: string;
        website: string;
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        };
    }[];
    getUserById(id: number): unknown;
}
