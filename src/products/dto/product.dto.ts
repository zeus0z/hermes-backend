export class ProductDto {
    readonly sku: string;
    readonly product_name: string;
    readonly product_image_url: string;
    readonly retail_price: number;
    readonly product_category: number;
    readonly product_variation: number;
    readonly product_description: string;
    readonly product_quantity: number;
    readonly is_out_of_stock?: boolean
}