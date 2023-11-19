import {defineConfig} from 'cypress';
import {buildConfig} from './buildConfig';

export default defineConfig(buildConfig());
