export const environment = {
  production: false,
  sendgridApiKey: process.env?.['SENDGRID_API_KEY'] || '',
};
