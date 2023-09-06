import {ObjectDefinition} from 'sanity';

const workExperience: ObjectDefinition = {
    name: 'workExperience',
    type: 'object',
    title: 'Work Experience',
    description: 'Describe a work experience',
    preview: {
        select: {
            title: 'title',
            company: 'company',
        },
        prepare: (value) => ({
            title: value.title,
            subtitle: value.company,
        }),
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of the work experience',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'startedAt',
            title: 'Start of the work experience',
            type: 'date',
            options: {
                dateFormat: 'DD/MM/YYYY',
            },
            validation: (rule) => rule.required(),
        },
        {
            name: 'endedAt',
            title: 'End of the work experience',
            type: 'date',
            options: {
                dateFormat: 'DD/MM/YYYY',
            },
        },
        {
            name: 'company',
            title: 'Company',
            description: 'The company name',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'city',
            title: 'City and Country',
            description: 'Country of the company (e.g [City], [Country])',
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
        {
            name: 'website',
            title: 'Website',
            description: 'Company website',
            type: 'url',
        },
    ],
};

export default workExperience;
