// ============================================================
//  Configuración global del sitio
//  La contraseña se pide automáticamente cuando la página está
//  siendo servida desde un servidor (http/https).
//  Si se abre como archivo local (file://), se omite.
// ============================================================

var APP_CONFIG = {
    REQUIRE_PASSWORD: window.location.protocol !== 'file:'
};
