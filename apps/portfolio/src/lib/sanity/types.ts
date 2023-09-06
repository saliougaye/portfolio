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

export interface Information {
    name: string;
    presentation: string;
    role: string;
    proPicUrl: string;
    contact: string;
    github: string;
    linkedin: string;
}
