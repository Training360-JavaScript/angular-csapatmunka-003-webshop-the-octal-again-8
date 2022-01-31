export class Product {
  [key: string]: any;
  id: number = 0;
  catId: number = 0;
  catName?: string;
  name: string = '';
  description: string = '';
  image: string = '';
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean = false;
  promotedPrice?: number;

  constructor(properties?: Product) {
    if (properties) {
      this.id = properties.id || 0;
      this.name = properties.name || '';
      this.catId = properties.catId || 0;
      this.catName = properties.catName || undefined;
      this.description = properties.description || '';
      this.image = properties.image || '';
      this.price = properties.price || 0;
      this.stock = properties.stock || 0;
      this.featured = properties.featured || false;
      this.active = properties.active || false;
      this.promotedPrice = properties.promotedPrice || undefined;
    }
  }
}
