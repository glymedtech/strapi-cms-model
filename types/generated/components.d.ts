import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    alignmentOnDesktop: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    alignmentOnMobile: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'top'>;
    buttonColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttonColorOnHover: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonTextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttonTextColorOnHover: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    ctaText: Schema.Attribute.Component<'shared.text-with-color', false>;
    desktop_1440: Schema.Attribute.Media<'images'>;
    endDate: Schema.Attribute.DateTime;
    isExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    isRegularTitle: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    laptop_1024: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mobile_375: Schema.Attribute.Media<'images' | 'files'>;
    mobile_480: Schema.Attribute.Media<'images'>;
    pageType: Schema.Attribute.String & Schema.Attribute.Required;
    startDate: Schema.Attribute.DateTime;
    subTitle: Schema.Attribute.Component<'shared.text-with-color', false>;
    subTitleFontSizeDesktop: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<18>;
    tablet_768: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Component<'shared.text-with-color', false>;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'ListItem';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProductCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_cards';
  info: {
    displayName: 'ProductCard';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    productImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProvenResult extends Struct.ComponentSchema {
  collectionName: 'components_shared_proven_results';
  info: {
    displayName: 'ProvenResult';
  };
  attributes: {
    after: Schema.Attribute.Component<'shared.text-with-color', false>;
    before: Schema.Attribute.Component<'shared.text-with-color', false>;
    resultImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'MetaTag';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedTextWithColor extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_with_colors';
  info: {
    displayName: 'TextWithColor';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedWhyChooseGlyMedPlus extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_choose_gly_med_pluses';
  info: {
    displayName: 'WhyChooseGlyMedPlus';
  };
  attributes: {
    buttonAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Component<'shared.text-with-color', false>;
    desktop: Schema.Attribute.Media<'images'>;
    desktop2x: Schema.Attribute.Media<'images'>;
    isExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    linkURL: Schema.Attribute.String;
    portrait: Schema.Attribute.Media<'images'>;
    portrait2x: Schema.Attribute.Media<'images'>;
    sliderName: Schema.Attribute.String & Schema.Attribute.Required;
    textAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.Component<'shared.text-with-color', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner': SharedBanner;
      'shared.list-item': SharedListItem;
      'shared.product-card': SharedProductCard;
      'shared.proven-result': SharedProvenResult;
      'shared.seo': SharedSeo;
      'shared.testimonials': SharedTestimonials;
      'shared.text-with-color': SharedTextWithColor;
      'shared.why-choose-gly-med-plus': SharedWhyChooseGlyMedPlus;
    }
  }
}
