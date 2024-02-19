<?php

/**
 * Class BH_Site_Migrator_Admin_Page
 */
class BH_Site_Migrator_Admin_Page {

	/**
	 * Add menu page.
	 */
	public static function add_menu_page() {
		add_menu_page(
			getenv( 'VUE_APP_TITLE' ) . __( ' Site Migrator', 'bluehost-site-migrator' ),
			__( 'Site Migrator', 'bluehost-site-migrator' ),
			'manage_options',
			getenv( 'MIGRATOR_URL' ),
			array( __CLASS__, 'render_page' ),
			getenv( 'FAV_ICON_BASE_64' )
		);
	}

	/**
	 * Render page.
	 */
	public static function render_page() {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
		wp_enqueue_style( 'bluehost-site-migrator', plugins_url( "/assets/css/app{$suffix}.css", __DIR__ ), array(), BH_SITE_MIGRATOR_VERSION );
		wp_enqueue_script( 'bluehost-site-migrator', plugins_url( "/assets/js/app{$suffix}.js", __DIR__ ), array(), BH_SITE_MIGRATOR_VERSION, true );
		wp_localize_script(
			'bluehost-site-migrator',
			'BHSiteMigrator',
			array(
				'isCompatible' => BH_Site_Migrator_Options::get( 'isCompatible' ),
				'isComplete'   => BH_Site_Migrator_Options::get( 'isComplete' ),
				'restNonce'    => wp_create_nonce( 'wp_rest' ),
				'pluginUrl'    => plugins_url( '/', __DIR__ ),
				'restRootUrl'  => esc_url_raw( rest_url() ),
				'countryCode'  => get_option( 'bh_site_migration_country_code', '' ),
			)
		);
		echo '<div id=' . esc_attr( getenv( 'MIGRATOR_URL' ) ) . '></div>';
	}
}
