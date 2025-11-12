'use strict';

/**
 * education-sample service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::education-sample.education-sample');
