import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity'
import {sanityClient} from '../../sanity'
import {SanityTeam} from '../../typings'

const query = groq`
  *[_type == "teamInfo"]
`

type Data = {
    events: SanityTeam[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const teamInfo: SanityTeam[] = await sanityClient.fetch(query);
    res.status(200).json({teamInfo})
    }