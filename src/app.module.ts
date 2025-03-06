import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo'
import { IntrospectAndCompose } from '@apollo/gateway'
import { GraphQLModule } from '@nestjs/graphql'
import { Module } from '@nestjs/common'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
			driver: ApolloGatewayDriver,
			gateway: {
				supergraphSdl: new IntrospectAndCompose({
					subgraphs: []
				})
			}
		})
	],
	controllers: [],
	providers: []
})
export class AppModule {}
