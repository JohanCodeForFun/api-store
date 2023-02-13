interface Item {
	title: string,
	image: string,
	price: number,
	description: string,
	category: string,
	id: number,
	rating: {
		rate: number,
		count: number
	}
  count?: number;
  grouped?: string;
}

export default Item;
