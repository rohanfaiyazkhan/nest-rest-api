import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClothingModule } from './clothing/clothing.module';

@Module({
	imports: [ TypeOrmModule.forRoot(), ClothingModule ],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
