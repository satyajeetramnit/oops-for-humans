export const ADSENSE_CLIENT_ID = 'pub-4779093508087980'; // Replace with actual ID in production

export const AD_CHECKOUT_URL = 'https://www.buymeacoffee.com/oops4humans'; // Example fallback URL

export const AD_SLOTS = {
    SIDEBAR: {
        id: 'sidebar-ad',
        slotId: '9129988708', // Replace with actual slot ID
        format: 'vertical',
        width: 300,
        height: 600,
        label: 'Sidebar Ad'
    },
    INLINE: {
        id: 'inline-ad',
        slotId: '5243532824', // Replace with actual slot ID
        format: 'fluid', // Responsive
        layoutKey: '-fb+5w+4e-db+86', // Example layout key for In-feed ads
        label: 'Sponsored'
    },
    BANNER: {
        id: 'banner-ad',
        slotId: '6233180869', // Replace with actual slot ID
        format: 'auto',
        label: 'Recommendation'
    }
};

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const ENABLE_ADSENSE = true; // Toggle to false to force custom/fallback mode
