import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'

async function boostrap() {
	const app = await NestFactory.create(AppModule)
	const port = Number(process.env.PORT ?? 8080)
	const logger = new Logger('Bootstrap')

	try {
		await app.listen(port)
		logger.log('✅ Database connected successfully!')
		logger.log(`Server has started on http://localhost:${port}/graphql`)
	} catch (error) {
		logger.error('❌ Database connection failed!', error)
	}
}
boostrap()
