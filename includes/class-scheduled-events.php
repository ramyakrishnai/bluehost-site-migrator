<?php

/**
 * Class BH_Move_Scheduled_Events
 */
class BH_Move_Scheduled_Events {

	/**
	 * Add hooks.
	 */
	public static function initialize() {
		add_action( 'bluehost_move_purge_migration_packages', array( 'BH_Move_Migration_Package', 'purge' ) );
	}

	/**
	 * Schedule deletion of all migration packages.
	 */
	public static function schedule_migration_package_purge() {
		if ( ! wp_next_scheduled( 'bluehost_move_purge_migration_packages' ) ) {
			wp_schedule_single_event( time() + ( DAY_IN_SECONDS * 14 ), 'bluehost_move_purge_migration_packages' );
		}
	}

}
