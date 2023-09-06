import {EMPTY_PROFILE_IMAGE} from '../../config';
import imageUrlBuilder from '@sanity/image-url';
import type {useSanityClient} from '@sanity/astro';
import type {BaseRawAsset, Information, RawInformation} from './types';

export const mapInformation = (
    input: RawInformation,
    client: ReturnType<typeof useSanityClient>
): Information => ({
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
