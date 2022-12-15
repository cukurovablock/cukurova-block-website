import type {NextApiRequest, NextApiResponse} from 'next'
import { groq } from 'next-sanity'
import {sanityClient} from '../../sanity'
import { SanityEvent } from '../../typings'

const query = groq`
*[_type == "events"]`;

type Data = {
    events: SanityEvent[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const events: SanityEvent[] = await sanityClient.fetch(query);
    res.status(200).json({events})
    }