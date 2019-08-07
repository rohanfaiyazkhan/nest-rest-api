import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ItemEntity } from './item.entity'

@Injectable()
export class ItemService {
	constructor (@InjectRepository(ItemEntity) private readonly itemRepository: Repository<ItemEntity>) {}

	findAll (): Promise<ItemEntity[]> {
		return this.itemRepository.find()
	}
}
