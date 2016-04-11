import gulp from 'gulp';
import theo from 'theo';

/**
 * I'm using gulp here because I want to use theo (https://github.com/salesforce-ux/theo)
 * library. I need to check for other alternatives or fork that and expose a CLI for node,
 * but for now it'll do. This allows us to store the style guide definitions in a json,
 * which can then be consumed by any library / preprocessor.
 *
 * Who cares? Just don't use gulp for anything else other than this. Use npm scripts.
 */

import theoTask from './tasks/theo.task';
theoTask(gulp);
