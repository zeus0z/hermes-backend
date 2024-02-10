export interface IProdutos {
    sku: string,
    product_name: string,
    product_image_url: string,
    retail_price: number,
    product_category: number,
    product_variation: number,
    product_description: string,
    product_quantity:number,
    is_out_of_stock?:boolean
}