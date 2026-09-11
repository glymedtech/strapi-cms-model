'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   *
   * Note: the starter-template seeder in ./bootstrap.js is intentionally not
   * wired up here — it targets content types (article, category, author,
   * global, about) that do not exist in this project. Run it on demand via
   * `yarn seed:example` if ever needed.
   */
  bootstrap(/*{ strapi }*/) {},
};
