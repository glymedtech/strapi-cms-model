'use strict';

/**
 * The days-of-glymed role enum value "retial" was renamed to "retail".
 * Move existing entries (draft and published rows) to the new value.
 */
module.exports = {
  async up(knex) {
    await knex('days_of_glymeds').where({ role: 'retial' }).update({ role: 'retail' });
  },
};
