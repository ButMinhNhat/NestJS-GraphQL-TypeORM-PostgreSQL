import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function boostrap() {
	const app = await NestFactory.create(AppModule)
	const port = Number(process.env.PORT ?? 8080)
	app.setGlobalPrefix('v1')

	await app.listen(port)
	console.log(`Server has started on http://localhost:${port}/v1`)
}
boostrap()
