export interface ItemDTO {
	id: string
	name: string
	price: number
	category: string
	active: boolean
	size: string
	count?: number
}

type shirtSize = 's' | 'xs' | 'm' | 'l' | 'xl'
