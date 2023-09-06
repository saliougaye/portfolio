import {DocumentDefinition} from 'sanity';

const cvs: DocumentDefinition = {
    name: 'cvs',
    type: 'document',
    title: 'Curriculae',
    preview: {
        select: {
            title: 'person_ref.name',
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
            name: 'profile',
            type: 'text',
            title: 'Profile',
            description:
                'A small presentation fo you to put in the profile section',
            validation: (rule) => rule.required(),
        },
        {
            name: 'educations',
            type: 'array',
            title: 'Education section',
            of: [
                {
                    type: 'education',
                },
            ],
        },
        {
            name: 'experiences',
            type: 'array',
            title: 'Experience section',
            of: [
                {
                    type: 'workExperience',
                },
            ],
        },
        {
            name: 'certifications',
            type: 'array',
            title: 'Certifications',
            of: [
                {
                    type: 'certification',
                },
            ],
        },
        {
            name: 'skills',
            type: 'array',
            title: 'Skills',
            of: [
                {
                    type: 'string',
                },
            ],
        },
    ],
};

export default cvs;
