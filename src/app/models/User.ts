export interface User {
    id:number
    name: string,
    username: string,
    email: string,
    password: string,
    phonenumber: number
}
export interface Address {
    housenumber: string,
    city: string,
    street: string,
    state: string,
    country: string,
    pincode: number,
}