'use strict';

/**
 * home-page route
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-page.home-page');
