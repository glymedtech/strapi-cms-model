'use strict';

/**
 * resource-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resource-card.resource-card');
