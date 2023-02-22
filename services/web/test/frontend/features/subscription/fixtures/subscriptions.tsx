import {
  CustomSubscription,
  GroupSubscription,
  RecurlySubscription,
} from '../../../../../types/subscription/dashboard/subscription'
const dateformat = require('dateformat')
const today = new Date()
const oneYearFromToday = new Date().setFullYear(today.getFullYear() + 1)
const nextPaymentDueAt = dateformat(oneYearFromToday, 'dS mmmm yyyy')
const sevenDaysFromToday = new Date().setDate(today.getDate() + 7)
const sevenDaysFromTodayFormatted = dateformat(
  sevenDaysFromToday,
  'dS mmmm yyyy'
)

export const annualActiveSubscription: RecurlySubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  recurly: {
    tax: 0,
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: null,
    trial_ends_at: null,
    activeCoupons: [],
    account: {
      has_canceled_subscription: { _: 'false', $: { type: 'boolean' } },
      has_past_due_invoice: { _: 'false', $: { type: 'boolean' } },
    },
    displayPrice: '$199.00',
  },
}

export const annualActiveSubscriptionEuro: RecurlySubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  recurly: {
    tax: 4296,
    taxRate: 0.24,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    currency: 'EUR',
    state: 'active',
    trialEndsAtFormatted: null,
    trial_ends_at: null,
    activeCoupons: [],
    account: {
      has_canceled_subscription: { _: 'false', $: { type: 'boolean' } },
      has_past_due_invoice: { _: 'false', $: { type: 'boolean' } },
    },
    displayPrice: '€221.96',
  },
}

export const annualActiveSubscriptionPro: RecurlySubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'professional',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'professional',
    name: 'Professional',
    price_in_cents: 4500,
    featureDescription: [],
  },
  recurly: {
    tax: 0,
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: null,
    trial_ends_at: null,
    activeCoupons: [],
    account: {
      has_canceled_subscription: { _: 'false', $: { type: 'boolean' } },
      has_past_due_invoice: { _: 'false', $: { type: 'boolean' } },
    },
    displayPrice: '$42.00',
  },
}

export const pastDueExpiredSubscription: RecurlySubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  recurly: {
    tax: 0,
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    currency: 'USD',
    state: 'expired',
    trialEndsAtFormatted: null,
    trial_ends_at: null,
    activeCoupons: [],
    account: {
      has_canceled_subscription: { _: 'false', $: { type: 'boolean' } },
      has_past_due_invoice: { _: 'true', $: { type: 'boolean' } },
    },
    displayPrice: '$199.00',
  },
}

export const canceledSubscription: RecurlySubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  recurly: {
    tax: 0,
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    currency: 'USD',
    state: 'canceled',
    trialEndsAtFormatted: null,
    trial_ends_at: null,
    activeCoupons: [],
    account: {
      has_canceled_subscription: { _: 'true', $: { type: 'boolean' } },
      has_past_due_invoice: { _: 'false', $: { type: 'boolean' } },
    },
    displayPrice: '$199.00',
  },
}

export const pendingSubscriptionChange: RecurlySubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  recurly: {
    tax: 0,
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: null,
    trial_ends_at: null,
    activeCoupons: [],
    account: {
      has_canceled_subscription: { _: 'false', $: { type: 'boolean' } },
      has_past_due_invoice: { _: 'false', $: { type: 'boolean' } },
    },
    displayPrice: '$199.00',
  },
  pendingPlan: {
    planCode: 'professional-annual',
    name: 'Professional Annual',
    price_in_cents: 42900,
    annual: true,
    featureDescription: [],
  },
}

export const groupActiveSubscription: GroupSubscription = {
  manager_ids: ['abc123'],
  member_ids: ['abc123'],
  invited_emails: [],
  groupPlan: true,
  teamName: 'GAS',
  membersLimit: 10,
  _id: 'bcd567',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'group_collaborator_10_enterprise',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'group_collaborator_10_enterprise',
    name: 'Overleaf Standard (Collaborator) - Group Account (10 licenses) - Enterprise',
    hideFromUsers: true,
    price_in_cents: 129000,
    annual: true,
    groupPlan: true,
    membersLimit: 10,
    membersLimitAddOn: 'additional-license',
  },
  recurly: {
    tax: 0,
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 10,
    nextPaymentDueAt,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: null,
    trial_ends_at: null,
    activeCoupons: [],
    account: {
      has_canceled_subscription: { _: 'false', $: { type: 'boolean' } },
      has_past_due_invoice: { _: 'false', $: { type: 'boolean' } },
    },
    displayPrice: '$1290.00',
  },
}

export const groupActiveSubscriptionWithPendingLicenseChange: GroupSubscription =
  {
    manager_ids: ['abc123'],
    member_ids: ['abc123'],
    invited_emails: [],
    groupPlan: true,
    teamName: 'GASWPLC',
    membersLimit: 10,
    _id: 'def456',
    admin_id: 'abc123',
    teamInvites: [],
    planCode: 'group_collaborator_10_enterprise',
    recurlySubscription_id: 'ghi789',
    plan: {
      planCode: 'group_collaborator_10_enterprise',
      name: 'Overleaf Standard (Collaborator) - Group Account (10 licenses) - Enterprise',
      hideFromUsers: true,
      price_in_cents: 129000,
      annual: true,
      groupPlan: true,
      membersLimit: 10,
      membersLimitAddOn: 'additional-license',
    },
    recurly: {
      tax: 0,
      taxRate: 0,
      billingDetailsLink: '/user/subscription/recurly/billing-details',
      accountManagementLink: '/user/subscription/recurly/account-management',
      additionalLicenses: 11,
      totalLicenses: 21,
      nextPaymentDueAt,
      currency: 'USD',
      state: 'active',
      trialEndsAtFormatted: null,
      trial_ends_at: null,
      activeCoupons: [],
      account: {
        has_canceled_subscription: {
          _: 'false',
          $: {
            type: 'boolean',
          },
        },
        has_past_due_invoice: {
          _: 'false',
          $: {
            type: 'boolean',
          },
        },
      },
      displayPrice: '$2967.00',
      currentPlanDisplayPrice: '$2709.00',
      pendingAdditionalLicenses: 13,
      pendingTotalLicenses: 23,
    },
    pendingPlan: {
      planCode: 'group_collaborator_10_enterprise',
      name: 'Overleaf Standard (Collaborator) - Group Account (10 licenses) - Enterprise',
      hideFromUsers: true,
      price_in_cents: 129000,
      annual: true,
      groupPlan: true,
      membersLimit: 10,
      membersLimitAddOn: 'additional-license',
    },
  }

export const trialSubscription: RecurlySubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'paid-personal_free_trial_7_days',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'paid-personal_free_trial_7_days',
    name: 'Personal',
    price_in_cents: 1500,
    featureDescription: [],
    hideFromUsers: true,
  },
  recurly: {
    tax: 0,
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt: sevenDaysFromTodayFormatted,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: sevenDaysFromTodayFormatted,
    trial_ends_at: new Date(sevenDaysFromToday).toString(),
    activeCoupons: [],
    account: {
      has_canceled_subscription: {
        _: 'false',
        $: {
          type: 'boolean',
        },
      },
      has_past_due_invoice: {
        _: 'false',
        $: {
          type: 'boolean',
        },
      },
    },
    displayPrice: '$14.00',
  },
}

export const customSubscription: CustomSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  customAccount: true,
}
