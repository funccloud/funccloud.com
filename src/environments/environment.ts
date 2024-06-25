export const environment = {
  production: true,
  sendgridApiKey: process.env?.['SENDGRID_API_KEY'] || '',
};
