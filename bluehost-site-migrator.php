<?php
/**
 * SITE_MIGRATOR_PLUGIN
 *
 * @package           SITE_MIGRATOR_AUTHORSiteMigrator
 * @author            SITE_MIGRATOR_AUTHOR
 * @copyright         Copyright 2020 by SITE_MIGRATOR_AUTHOR - All rights reserved.
 * @license           GPL2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       SITE_MIGRATOR_PLUGIN
 * Plugin URI:        SITE_MIGRATOR_URL
 * Description:       SITE_MIGRATOR_DESCRIPTION
 * Version:           1.0.0
 * Requires PHP:      5.6
 * Requires at least: 4.7
 * Author:            SITE_MIGRATOR_AUTHOR
 * Author URI:        SITE_MIGRATOR_AUTHOR_URL
 * Text Domain:       SITE_MIGRATOR_DOMAIN
 * Domain Path:       /languages
 * License:           GPL V2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

define( 'BH_SITE_MIGRATOR_VERSION', '1.0.12' );
define( 'BH_SITE_MIGRATOR_FILE', __FILE__ );
define( 'BH_SITE_MIGRATOR_DIR', plugin_dir_path( __FILE__ ) );
define( 'BH_SITE_MIGRATOR_URL', plugin_dir_url( __FILE__ ) );

require __DIR__ . '/vendor/autoload.php';

register_activation_hook( __FILE__, 'nfd_tasks_setup_tables' );
register_deactivation_hook( __FILE__, 'nfd_tasks_purge_tables' );

// Check plugin requirements
global $pagenow;
if ( 'plugins.php' === $pagenow ) {
	$plugin_check = new WP_Forge_Plugin_Check( __FILE__ );

	$plugin_check->min_php_version    = '5.6';
	$plugin_check->min_wp_version     = '4.7';
	$plugin_check->req_php_extensions = array( 'json', 'zlib' );

	$plugin_check->check_plugin_requirements();
}

// Setting env variables in php
$dotenv = file_get_contents( __DIR__ . '/.env' );
$env_variables = explode( "\n", $dotenv );

foreach ( $env_variables as $variable ) {
	putenv( $variable );
}

require __DIR__ . '/includes/bootstrap.php';
