import {ObjectDefinition} from 'sanity';

const education: ObjectDefinition = {
    name: 'education',
    type: 'object',
    title: 'Education',
    description: 'Descrive an education journey',
    preview: {
        select: {
            title: 'title',
        },
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of education',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'startedAt',
            title: 'Start of the education',
            description: 'Date when education was started',
            type: 'date',
            options: {
                dateFormat: 'DD/MM/YYYY',
            },
            validation: (rule) => rule.required(),
        },
        {
            name: 'endedAt',
            title: 'End of the education',
            description: 'Date when the education was ended',
            type: 'date',
            options: {
                dateFormat: 'DD/MM/YYYY',
            },
            validation: (rule) => rule.required(),
        },
        {
            name: 'place',
            title: 'Place/School',
            description:
                'The school or institute where the education was happen',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'city',
            title: 'City and Country',
            description: 'Country of the institute (e.g [City], [Country])',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            description: 'A small description of the education',
            type: 'text',
            validation: (rule) => rule.required(),
        },
    ],
};

export default education;
