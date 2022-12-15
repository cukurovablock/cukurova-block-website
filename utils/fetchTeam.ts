import { SanityTeam } from "../typings";

export const fetchTeam = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTeam`);
    const data = await res.json();
    const team: SanityTeam[] = data.teamInfo;
    return team;
};