import {DocumentDefinition, SlugValidationContext} from 'sanity';

const people: DocumentDefinition = {
    name: 'people',
    type: 'document',
    title: 'People',
    preview: {
        select: {
            title: 'name',
            media: 'profileImage',
        },
    },
    groups: [
        {
            name: 'general',
            title: 'General',
        },
        {
            name: 'contacts',
            title: 'Contact',
        },
        {
            name: 'media',
            title: 'Media',
        },
    ],
    fields: [
        {
            name: 'id',
            type: 'slug',
            title: 'Identifier',
            description:
                'An identifier to unique identify a person (e.g namesurname)',
            group: 'general',
            options: {
                isUnique: async (slug: string, ctx: SlugValidationContext) => {
                    const {document, getClient} = ctx;
                    const client = getClient({apiVersion: '2022-12-07'});
                    console.log(slug);

                    const params = {
                        draft: document?._id,
                        published: document?._id.replace(/^drafts\./, ''),
                        slug,
                    };

                    const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;
                    const result = await client.fetch(query, params);
                    return result;
                },
            },
            validation: (rule) => rule.required(),
        },
        {
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image',
            description: 'Person profile image to be visualized in the page',
            group: 'media',
            validation: (rule) => rule.required(),
        },
        {
            name: 'name',
            type: 'string',
            title: 'Fullname',
            description: 'Person fullname',
            group: 'general',
            validation: (rule) => rule.required(),
        },
        {
            name: 'currentRole',
            type: 'string',
            title: 'Current Role',
            description: 'Person current role',
            group: 'general',
            validation: (rule) => rule.required(),
        },
        {
            name: 'presentation',
            type: 'text',
            title: 'Presentation',
            description: 'A small presentation about you',
            group: 'general',
            validation: (rule) => rule.required(),
        },
        {
            name: 'contact',
            type: 'url',
            title: 'Contact',
            description: 'Person contact url',
            group: 'contacts',
        },
        {
            name: 'github',
            type: 'url',
            title: 'Github',
            description: 'Person Github link',
            group: 'contacts',
        },
        {
            name: 'linkedin',
            type: 'url',
            title: 'Linkedin',
            description: 'Person Linkedin link',
            group: 'contacts',
        },
    ],
};

export default people;
