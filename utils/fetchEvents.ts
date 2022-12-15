import { SanityEvent } from "../typings";


export const fetchEvents = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEvents`);
    const data = await res.json();
    const events: SanityEvent[] = data.events;
    return events;
};