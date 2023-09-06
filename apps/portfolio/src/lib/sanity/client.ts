import {useSanityClient} from '@sanity/astro';
import {getInformationQuery} from './queries';
import type {RawInformation} from './types';
import {mapInformation} from './utils';

export const sanity = {
    getInformation: async (id: string) => {
        const client = useSanityClient();

        if (!client) {
            console.log('non work');
            return;
        }

        const rawInformation = await client.fetch<RawInformation>(
            getInformationQuery,
            {id}
        );

        const information = mapInformation(rawInformation, client);

        return information;
    },
};
