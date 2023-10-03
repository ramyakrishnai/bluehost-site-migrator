/// <reference types="cypress" />

'use strict';

// ***********************************************************
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {

	if (config.env && config.env.baseUrl) {
		config.baseUrl = config.env.baseUrl;
	}

	return config;
};