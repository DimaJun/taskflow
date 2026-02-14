import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async createUser(dto: CreateUserDto) {
		const isExists = await this.findUserByEmail(dto.email);
		if(isExists) {
			throw new ConflictException('Пользователь с такой почтой уже зарегистрирован!')
		}
		const hashedPassword = await bcrypt.hash(dto.password, 10);
		return  this.prisma.user.create({
			data: {
				...dto,
				password: hashedPassword,
			},
			select: {
				id: true,
				firstName: true,
				lastName: true,
				email: true
			}
		})
	}

	async findUserByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email
			}
		})
	}
}
