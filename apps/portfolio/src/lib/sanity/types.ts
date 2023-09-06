export interface BaseRawDocument {
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    _createdAt: string;
}

export interface BaseRawImage {
    _type: 'image';
    asset: BaseRawAsset;
}

export interface BaseRawAsset {
    _ref: string;
    _type: string;
}

export interface RawInformation extends BaseRawDocument {
    name: string;
    presentation: string;
    contact: string;
    currentRole: string;
    id: {
        current: string;
        _type: 'slug';
    };
    github: string;
    linkedin: string;
    profileImage: BaseRawImage;
}

export interface RawProject extends BaseRawDocument {
    category: string;
    new: boolean;
    url?: string;
    person_ref: {
        _ref: string;
        _type: 'reference';
    };
    name: string;
    image: BaseRawImage;
    description: string;
    tag: string;
}

export interface RawCv extends BaseRawDocument {
    _type: 'cvs';
    person_ref: {
        _ref: string;
        _type: 'reference';
    };
    profile: string;
    skills: string[];
    educations: {
        endedAt: string;
        _type: 'education';
        description: string;
        startedAt: string;
        place: string;
        _key: string;
        title: string;
        city: string;
    }[];
    experiences: {
        _type: 'workExperience';
        _key: string;
        startedAt: string;
        endedAt: string;
        description: string;
        company: string;
        title: string;
        city: string;
        website: string;
    }[];
    certificationts: {
        name: string;
        link: string;
    }[];
}

export interface Information {
    id: string;
    name: string;
    presentation: string;
    role: string;
    proPicUrl: string;
    contact: string;
    github: string;
    linkedin: string;
}

export interface Project {
    id: string;
    name: string;
    category: string;
    url: string;
    new: boolean;
    imageUrl: string;
    description: string;
    tag: string;
}

export interface CV {
    id: string;
    skills: string[];
    profile: string;
    educations: {
        key: string;
        title: string;
        startedAt: string;
        endedAt: string;
        description: string;
        place: string;
        city: string;
    }[];
    experiences: {
        key: string;
        title: string;
        startedAt: string;
        endedAt: string;
        description: string;
        company: string;
        city: string;
        website?: string;
    }[];
    certifications: {
        name: string;
        link?: string;
    }[];
}
