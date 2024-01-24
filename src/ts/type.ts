export interface Tours {
    title: string;
    place: string;
    price: number;
    oldPrice: number;
    data: string;
    stars: number;
    discount: number;
    img: { data: Array<{ attributes: { url: string } }> };
    webP: { data: Array<{ attributes: { url: string } }> };
}