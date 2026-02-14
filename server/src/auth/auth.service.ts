import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { SigninDto } from './dtos/signin.dto';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
	constructor(private readonly userRepository: UserService) {}

	async signup(dto: CreateUserDto) {
		return this.userRepository.createUser(dto);
	}

	async signin(dto: SigninDto) {
		const isExists = await this.userRepository.findUserByEmail(dto.email);
		if (!isExists) {
			throw new UnauthorizedException('Пользователь с такой почтой не зарегистрирован!');
		}
		const isPasswordMatch = await bcrypt.compare(dto.password, isExists.password);
		if (!isPasswordMatch) {
			throw new UnauthorizedException('Неправильный пароль!');
		}
		const { password, ...rest } = isExists;
		return rest;
	}
}
