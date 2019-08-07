import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('item')
export class ItemEntity {
	@PrimaryGeneratedColumn() id: number

	@Column({ length: 500 })
	name: string

	@Column('numeric') price: number

	@Column({ length: 2 })
	size: string

	@Column('text') description: string

	@Column({ length: 500 })
	category: string

	@Column('boolean') active: boolean
}
