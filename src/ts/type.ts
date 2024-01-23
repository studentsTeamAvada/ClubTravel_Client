export interface Tours {
    title: string;
    price: number;
    data: string;
    img: { data: Array<{ attributes: { url: string } }> };
}