import { SanityTeam } from "../typings";

export const fetchTeam = async () => {
    const res = await fetch(`${process.env.STRAPI_PUBLIC_URL}/production?query=*%5B_type%3D%3D%22teamInfo%22%5D`);
    const data = await res.json();
    const team: SanityTeam[] = data.result;
    return team;
};