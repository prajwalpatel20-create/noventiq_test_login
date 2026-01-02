/**
 * Organized by page for better maintainability
 * Note: This is one way to organize locators, we can use other ways as well like using a separate file for each page.
 */

export const HomePageLocators = {
    postTitle: {
        id: '.post-title',
        type: 'css',
        text: 'Logged In Successfully',
    },
    postContent: {
        id: '.post-content strong',
        type: 'css',
        text: 'Congratulations student. You successfully logged in!',
    },
    logoutButton: {
        id: '.wp-block-button a',
        type: 'css',
        text: 'Log out',
    },
} as const;
