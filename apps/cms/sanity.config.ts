import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash';

export default defineConfig({
    name: 'default',
    title: 'Portfolio CMS',

    projectId: 'rr4o1kpu',
    dataset: 'production',

    plugins: [deskTool(), visionTool(), unsplashImageAsset()],

    schema: {
        types: schemaTypes,
    },
});
