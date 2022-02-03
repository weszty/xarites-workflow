<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://xarites.com
 * @since      1.0.0
 *
 * @package    Xarites_Workflow
 * @subpackage Xarites_Workflow/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Xarites_Workflow
 * @subpackage Xarites_Workflow/includes
 * @author     Vecsei Szilveszter <szilveszter@xarites.com>
 */
class Xarites_Workflow_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'xarites-workflow',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
