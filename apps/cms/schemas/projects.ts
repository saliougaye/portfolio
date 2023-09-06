import {DocumentDefinition} from 'sanity';

const projects: DocumentDefinition = {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
    fields: [
        {
            name: 'person_ref',
            type: 'reference',
            to: {
                type: 'people',
            },
            title: 'Person',
            description: 'Persone to associate the project',
            validation: (rule) => rule.required(),
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            description: 'Name of the project',
            validation: (rule) => rule.required(),
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'A small description of the project',
            validation: (rule) => rule.required(),
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category',
            description: 'This field is used to group the projects',
            validation: (rule) => rule.required(),
        },
        {
            name: 'url',
            type: 'url',
            title: 'Url',
            description: 'Project url',
            validation: (rule) => rule.required(),
        },
        {
            name: 'tag',
            type: 'string',
            title: 'Tag',
            description: 'A tag to identify the project',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Project image',
            description: 'An image to identify the project',
        },
        {
            name: 'new',
            title: 'New',
            description: 'Set to new if is a newly project',
            type: 'boolean',
        },
    ],
};

export default projects;
