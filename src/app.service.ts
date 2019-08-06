import { Injectable } from '@nestjs/common'
import { ConfigService } from './config/config.service'

@Injectable()
export class AppService {
	private port: String
	constructor (config: ConfigService) {
		// Please take note that this check is case sensitive!
		this.port = config.get('PORT')
	}
}
