import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userServices: UsersService){    }

    @Get()
    GetAllUsers(){
        return this.userServices.getAllUsers();
    }

    @Get('/:id')
    getUserById(@Param('id', ParseIntPipe) id : number){
        return this.userServices.getUserById(id);
    }
}
