export interface Book {
    id: number,
    ISBN: number,
    title: string,
    author: string,
    publication_year: number,
    genre: string,
    summary: string,
    image: string,
    price: Currency
}
export interface Currency {
    currency: string,
    value: number,
    displayValue: string
}