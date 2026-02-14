import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { SigninDto } from './dtos/signin.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('signup')
	async signup(@Body() dto: CreateUserDto) {
		return this.authService.signup(dto);
	}

	@Post('signin')
	async signin(@Body() dto: SigninDto) {
		return this.authService.signin(dto);
	}
}
