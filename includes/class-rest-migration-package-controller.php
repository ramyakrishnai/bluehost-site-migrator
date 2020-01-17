<?php

/**
 * Class BH_Move_REST_Migration_Package_Controller
 */
class BH_Move_REST_Migration_Package_Controller extends WP_REST_Controller {

	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	protected $namespace = 'bluehost-move/v1';

	/**
	 * The base of this controller's route.
	 *
	 * @var string
	 */
	protected $rest_base = 'migration-package';

	/**
	 * Register the routes for this objects of the controller.
	 */
	public function register_routes() {

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
				array(
					'methods'             => WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_items' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			"/{$this->rest_base}/(?P<type>[\w-]+)",
			array(
				'args' => array(
					'type' => array(
						'validate_callback' => function ( $param ) {
							return BH_Move_Migration_Package::is_valid_type( $param );
						},
					),
				),
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'create_item' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
				array(
					'methods'             => WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_item' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);

	}

	/**
	 * Generate migration package.
	 *
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public function create_item( $request ) {
		return rest_ensure_response( BH_Move_Migration_Package::create( $request->get_param( 'type' ) ) );
	}


	/**
	 * Fetch migration packages.
	 *
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public function get_item( $request ) {
		return rest_ensure_response( BH_Move_Migration_Package::fetch( $request->get_param( 'type' ) ) );
	}

	/**
	 * Delete migration package.
	 *
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public function delete_item( $request ) {
		return rest_ensure_response( BH_Move_Migration_Package::delete( $request->get_param( 'type' ) ) );
	}

	/**
	 * Fetch all migration packages.
	 *
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public function get_items( $request ) {
		$packages = BH_Move_Migration_Package::fetch_all();

		// Ensure that empty arrays are properly converted to empty objects!
		foreach ( $packages as $key => $value ) {
			if ( empty( $value ) ) {
				$packages[ $key ] = (object) $value;
			}
		}

		return rest_ensure_response( $packages );
	}

	/**
	 * Delete all migration packages.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public function delete_items() {
		return rest_ensure_response( BH_Move_Migration_Package::delete_all() );
	}

	/**
	 * Check permissions for routes.
	 *
	 * @return bool|WP_Error
	 */
	public function check_permission() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error( 'rest_forbidden_context', __( 'Sorry, you are not allowed to access this endpoint.', 'bluehost-move' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

}
