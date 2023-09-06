import {ObjectDefinition} from 'sanity';

const certfication: ObjectDefinition = {
    name: 'certification',
    type: 'object',
    title: 'Certification',
    description: 'Certfication that the person obtained',
    fields: [
        {
            name: 'name',
            title: 'Name',
            description: 'Certification name',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'link',
            title: 'Link',
            description: 'Certification link',
            type: 'url',
            validation: (rule) => rule.required(),
        },
    ],
};

export default certfication;
