import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { UserResolver } from './Users'

@Module({
	imports: [
		// TypeORM
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DATABASE_HOST || 'localhost',
			port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
			username: process.env.DATABASE_USER || 'test_postgre',
			password: process.env.DATABASE_PASSWORD || 'test_password',
			database: process.env.DATABASE_NAME || 'test_database',
			autoLoadEntities: true,
			synchronize: true
		}),

		// Config
		ConfigModule.forRoot(),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true
		}),

		// Define services
		ClientsModule.register([
			{
				name: 'USER_SERVICE',
				transport: Transport.TCP,
				options: { host: '127.0.0.1', port: 5001 }
			}
		])
	],
	providers: [UserResolver]
})
export class AppModule {}
