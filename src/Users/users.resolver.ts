import { Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'

@Resolver()
export default class UsersResolver {
	constructor() // private readonly usersService: UsersService
	{}

	@Query(() => String)
	async getUser() {
		return 'ngon!'
	}
}
