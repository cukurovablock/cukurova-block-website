import { SanityEvent } from "../typings";


export const fetchEvents = async () => {
    const res = await fetch(`${process.env.STRAPI_PUBLIC_URL}/production?query=*%5B_type%3D%3D%22events%22%5D`);
    const data = await res.json();
    const events: SanityEvent[] = data.result;
    return events;
};