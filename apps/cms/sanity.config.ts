import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash';

export default defineConfig({
    name: 'default',
    title: 'Portfolio CMS',

    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
    dataset: 'production',

    plugins: [deskTool(), visionTool(), unsplashImageAsset()],

    schema: {
        types: schemaTypes,
    },
});
