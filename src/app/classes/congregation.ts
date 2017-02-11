export class Congregation {
    name: string;
    latitude: number;
    longitude: number;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    websiteUrl: string;
    logoFileName: string;
}
