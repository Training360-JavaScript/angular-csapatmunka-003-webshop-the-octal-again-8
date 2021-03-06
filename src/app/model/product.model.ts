import { Category } from "./category.model";

export class Product {
  [key: string]: any;
  id: number = 0;
  categoryId: number = 0;
  name: string = '';
  description: string = '';
  image: string = '';
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean = false;
  promotedPrice?: number;
  category?: Category;

  constructor(properties?: Product) {
    if (properties) {
      this.id = properties.id || 0;
      this.name = properties.name || '';
      this.categoryId = properties.categoryId || 0;
      this.description = properties.description || '';
      this.image = properties.image || '';
      this.price = properties.price || 0;
      this.stock = properties.stock || 0;
      this.featured = properties.featured || false;
      this.active = properties.active || false;
      this.promotedPrice = properties.promotedPrice || undefined;
      this.category = properties.category || undefined;
    }
  }
}
