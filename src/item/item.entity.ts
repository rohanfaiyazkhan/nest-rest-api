import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('item')
export class ItemEntity {
	@PrimaryGeneratedColumn('uuid') id: string

	@Column({ length: 500 })
	name: string

	@Column('numeric') price: number

	@Column('text') description: string

	@Column({ length: 500 })
	category: string
}
