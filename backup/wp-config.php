<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dplmotor_wp1');

/** MySQL database username */
define('DB_USER', 'dplmotor_wp1');

/** MySQL database password */
define('DB_PASSWORD', 'J[kezyHlGf28@#2');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'fimt5RyNv2JjHE1aJH6fhau12KiwuWZbriGxyNrVRsGxz5aZ8n2rHp3rpBU8Xi31');
define('SECURE_AUTH_KEY',  'GMEbUHrISTPRjUikcZjtPVuXWHhI3E891Thcl2YPHpnQsdgs9bipRioa5qTCGghe');
define('LOGGED_IN_KEY',    'Q3Clzs9vxwOIWSAV67LPMgPSHevgiZVFiaQ1mbSoRuYjGLMotwnw1GmfDHlee38K');
define('NONCE_KEY',        'hlSJ3q9FnPw2fH4nmvQwbrWX9Ar7CUwhTnhjp3l3q1keixY6OBAK3gHCLTgYqCAw');
define('AUTH_SALT',        '9Hl2aH44jHQsCHkRLmrDZbYQ4eHcEcsCbsHaPpMmOeZXbFPJlUPe2h7gmYSanOPv');
define('SECURE_AUTH_SALT', 'AlkVUvvEW6kZthDuJByTWHGVi5LNAbQNOwoCxYyx0oFJSqBcyxezSjj8iVtwNPop');
define('LOGGED_IN_SALT',   'tsLB1WD89OjZZE9KMAklNCREx8m5AjHMRDkc8N0HhbCTVJpRNSXaWUSZRPy6t1Bt');
define('NONCE_SALT',       'kE54WDcH8fx0p8kFhJ9J3W6bgZjpCQCvBIKgjLOrOZUBBq8wudOh3x7O8e2Yspqu');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
