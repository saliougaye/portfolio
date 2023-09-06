import {useSanityClient} from '@sanity/astro';
import {getInformationQuery, getLatestProjects, getProjects} from './queries';
import type {Project, RawInformation, RawProject} from './types';
import {mapInformation, mapProject} from './utils';

export const sanity = {
    getInformation: async (id: string) => {
        const client = useSanityClient();

        const rawInformation = await client.fetch<RawInformation>(
            getInformationQuery,
            {id}
        );

        const information = mapInformation(rawInformation, client);

        return information;
    },
    getLatestProjects: async (personRef: string) => {
        const client = useSanityClient();

        const rawProjects = await client.fetch<RawProject[]>(
            getLatestProjects,
            {personId: personRef}
        );

        const latestProjects = rawProjects.map((el) => mapProject(el, client));

        return latestProjects;
    },
    getProjects: async (personRef: string) => {
        const client = useSanityClient();
        const rawProjects = await client.fetch<RawProject[]>(getProjects, {
            personId: personRef,
        });

        const projects = rawProjects.map((el) => mapProject(el, client));

        const grouped = projects.reduce<Record<string, Project[]>>(
            (acc, curr) => {
                return {
                    ...acc,
                    [curr.category]: [...(acc[curr.category] ?? []), curr],
                };
            },
            {}
        );

        return grouped;
    },
};
