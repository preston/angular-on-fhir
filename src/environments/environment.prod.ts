let w = (window as {[key: string]: any})
if (!w['configuration']) {
  console.error('Missing generated runtime configuration from environment variables. Application will not function correctly. Please verify you are starting the application correctly.');
}
export const environment = {
  production: true,
  clientId: w["configuration"]["clientId"],
  debug: w["configuration"]["debug"] || false
};
