import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common'
import { Crud } from '@nestjsx/crud'
import { ItemService } from './item.service'
import { ItemDTO } from './item.dto'
import { ItemEntity } from './item.entity'
@Crud({
	model: {
		type: ItemEntity
	}
})
@Controller('item')
export class ItemController {
	constructor (public service: ItemService) {}
}
