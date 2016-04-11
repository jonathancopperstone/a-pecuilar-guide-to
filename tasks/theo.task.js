import theo from 'theo';
import { stylusFormat } from 'theo-plugin-formats';
import map from 'lodash/map';

export default function(gulp) {

  /**
   * Register new formatter to override
   * the default one, which has inheret behaviour
   * we don't want.
   *
   * the kebabCase formatting for property
   * names removes any special characters in the name,
   * and given our standard of prefixing stylus variables
   * with '$', we need to override this.
   */

  theo.registerFormat('styl', stylusFormat('$'));

  gulp.task('theo', () => {
    gulp
      .src('./lib/guide/guide.json')
      .pipe(theo.plugins.transform('web'))
      .pipe(theo.plugins.format('styl'))
      .pipe(gulp.dest('./lib/guide/'));
  });
}
