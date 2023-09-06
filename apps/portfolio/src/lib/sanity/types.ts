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
