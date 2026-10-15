'use strict';

/**
 * Admin helper text (description / placeholder shown under a field in the
 * Content Manager edit view).
 *
 * Strapi stores this in the DB-backed content-manager configuration, not in
 * schema.json, so it is kept here and applied on every boot. Edit hints in
 * this file — changes made in the admin "Configure the view" screen to these
 * fields' description/placeholder are overwritten on the next boot.
 */

const OPTIONAL_BUTTON_COLOR = 'Optional override. Leave empty to use the default dark-blue button.';

const HINTS = {
  'api::carousel.carousel': {
    name: {
      description:
        'Internal name to find this slide in lists and the Home Page picker. Not shown on the website.',
    },
    desktopLayout: {
      description:
        'Text position on desktop. left = text on the left half · right = text on the right half · none = image only (text is part of the image).',
    },
    mobileLayout: {
      description:
        'Text position on mobile. topAndBottom = title on top, the rest at the bottom · topOnly = all text on top · bottomOnly = all text at the bottom · none = image only. The button always sits at the bottom.',
    },
    imageDesktop: {
      description:
        'Desktop image, 1440 × 528 px. Keep the text side clear for left/right layouts.',
    },
    imageMobile: {
      description:
        'Mobile image, 390 × 810 px (or larger, same ratio). Keep the top/bottom clear where text appears.',
    },
    imageAlt: {
      description:
        'Describes the image for screen readers. For "none" layouts, type the text shown in the image.',
    },
    title: {
      description:
        'Large display heading, e.g. "Glow Correct". Press Enter for a line break. Its color is the text color (solid) or the gradient accent (metallic).',
    },
    titleStyle: {
      description:
        'solid = plain color from Title › color · metallic = shiny white gradient using Title › color as the accent.',
    },
    titleShadowColor: {
      description: 'Optional drop shadow behind the title for contrast. Leave empty for no shadow.',
    },
    subtitle: {
      description: 'Secondary heading, e.g. "July Regimen of the Month".',
    },
    description: {
      description: 'Optional short body text, e.g. "20% off select items".',
    },
    overlayTopColor: {
      description:
        'Fade at the top on mobile and behind the text side on desktop, to keep text readable. Leave empty for none.',
    },
    overlayBottomColor: {
      description:
        'Fade at the bottom on mobile, behind the subtitle and button. Leave empty for none.',
    },
    overlayOpacity: {
      description: 'Strength of both fades, 0–100 %. 100 = solid color at the edge.',
    },
    buttonText: {
      description: 'Button label, e.g. "Shop Now". Leave empty to hide the button.',
      placeholder: 'Shop Now',
    },
    buttonLink: {
      description:
        'Where the button, and the whole slide, links to. Use a site path or a full URL.',
      placeholder: '/shop/regimen-of-the-month',
    },
    isExternalLink: {
      description: 'Turn on when the link goes to another website.',
    },
    buttonColor: { description: OPTIONAL_BUTTON_COLOR },
    buttonColorOnHover: { description: OPTIONAL_BUTTON_COLOR },
    buttonTextColor: { description: OPTIONAL_BUTTON_COLOR },
    buttonTextColorOnHover: { description: OPTIONAL_BUTTON_COLOR },
    onlyForBronzeTierAndUp: {
      description: 'Show this slide only to Bronze tier customers and above.',
    },
    startDate: {
      description: 'Optional. The slide is hidden before this date and time.',
    },
    endDate: {
      description: 'Optional. The slide is hidden after this date and time.',
    },
  },
  'api::home-page.home-page': {
    promoCarousels: {
      description:
        'Slides shown in the promo carousel, in this order. Drag to reorder. Create slides under Content Manager › Carousel.',
    },
  },
};

async function applyContentManagerHints(strapi) {
  const contentTypes = strapi.plugin('content-manager').service('content-types');

  for (const [uid, fields] of Object.entries(HINTS)) {
    if (!strapi.contentTypes[uid]) continue;

    const { settings, metadatas, layouts } = await contentTypes.findConfiguration({ uid });
    let changed = false;

    for (const [field, hint] of Object.entries(fields)) {
      const edit = metadatas?.[field]?.edit;
      if (!edit) continue;

      for (const [key, value] of Object.entries(hint)) {
        if (edit[key] !== value) {
          edit[key] = value;
          changed = true;
        }
      }
    }

    if (changed) {
      await contentTypes.updateConfiguration({ uid }, { settings, metadatas, layouts });
    }
  }
}

module.exports = { applyContentManagerHints };
