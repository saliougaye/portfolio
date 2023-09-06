import {EMPTY_PROFILE_IMAGE, EMPTY_PROJECT_IMAGE} from '../../config';
import imageUrlBuilder from '@sanity/image-url';
import type {useSanityClient} from '@sanity/astro';
import type {
    BaseRawAsset,
    Information,
    Project,
    RawInformation,
    RawProject,
} from './types';

export const mapInformation = (
    input: RawInformation,
    client: ReturnType<typeof useSanityClient>
): Information => ({
    id: input._id,
    name: input.name,
    presentation: input.presentation,
    role: input.currentRole,
    proPicUrl:
        urlForImage(client, input.profileImage.asset) ?? EMPTY_PROFILE_IMAGE,
    contact: input.contact,
    github: input.github,
    linkedin: input.linkedin,
});

export function urlForImage(
    client: ReturnType<typeof useSanityClient>,
    source: BaseRawAsset
) {
    const imageBuilder = imageUrlBuilder(client);
    return imageBuilder.image(source).url();
}

export const mapProject = (
    input: RawProject,
    client: ReturnType<typeof useSanityClient>
): Project => ({
    id: input._id,
    name: input.name,
    description: input.description,
    tag: input.tag,
    url: input.url ?? '#',
    new: input.new,
    imageUrl: urlForImage(client, input.image.asset) ?? EMPTY_PROJECT_IMAGE,
    category: input.category,
});
