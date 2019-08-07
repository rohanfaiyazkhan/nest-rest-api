import { Controller, Get, Post, Put, Delete } from '@nestjs/common'
import { ItemService } from './item.service'

@Controller('item')
export class ItemController {
	constructor (private itemService: ItemService) {}
	@Get()
	showAllItem () {
		return 'This route returns all the items'
	}

	@Post()
	createItem () {}

	@Get(':id')
	findItem () {}

	@Put()
	updateItem () {}

	@Delete()
	deleteItem () {}
}
