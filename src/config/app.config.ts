interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own freelance profile', 'Apply for jobs', 'View job details', 'Manage own applications'],
  ownerAbilities: [
    'Manage country data',
    'Manage freelance profiles',
    'Manage job postings',
    'Manage applications',
    'Manage hiring processes',
    'Manage user data',
    'Manage company data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/fe3f56bf-470c-4286-99ed-b9077ac9fe2c',
};
