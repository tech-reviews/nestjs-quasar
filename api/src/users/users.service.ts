import { Injectable, NotFoundException } from '@nestjs/common';
import * as USERS from '../../sample-data/users.json';

@Injectable()
export class UsersService {

    private users = USERS;

    getAllUsers(){
        return this.users;
    }

    getUserById(id : number) : unknown{
        const found = this.users.filter((user) => user.id === id);
        if(!Object.keys(found).length){
            return new NotFoundException(`User with id ${id} not found!`);
        }else{
            return found;
        }
    }
}
