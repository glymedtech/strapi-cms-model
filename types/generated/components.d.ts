import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    AlignmentOnDesktop: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    AlignmentOnMobile: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'top'>;
    BannerSubTitle: Schema.Attribute.Component<'shared.text-with-color', false>;
    BannerTitle: Schema.Attribute.Component<'shared.text-with-color', false>;
    ButtonColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    ButtonColorOnHover: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    ButtonTextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    ButtonTextColorOnHover: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    CTAText: Schema.Attribute.Component<'shared.text-with-color', false>;
    desktop_1440: Schema.Attribute.Media<'images'>;
    EndDate: Schema.Attribute.DateTime;
    IsExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    IsRegularTitle: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    laptop_1024: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mobile_375: Schema.Attribute.Media<'images' | 'files'>;
    mobile_480: Schema.Attribute.Media<'images'>;
    PageType: Schema.Attribute.String & Schema.Attribute.Required;
    StartDate: Schema.Attribute.DateTime;
    SubTitleFontSizeDesktop: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<18>;
    tablet_768: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'ListItem';
    icon: 'bulletList';
  };
  attributes: {
    Text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProductCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_cards';
  info: {
    displayName: 'ProductCard';
  };
  attributes: {
    ButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    ProductImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Slug: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProvenResult extends Struct.ComponentSchema {
  collectionName: 'components_shared_proven_results';
  info: {
    displayName: 'ProvenResult';
  };
  attributes: {
    After: Schema.Attribute.Component<'shared.text-with-color', false>;
    Before: Schema.Attribute.Component<'shared.text-with-color', false>;
    ResultImage: Schema.Attribute.Media<'images' | 'files'> &
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
    Author: Schema.Attribute.String & Schema.Attribute.Required;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedTextWithColor extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_with_colors';
  info: {
    displayName: 'TextWithColor';
  };
  attributes: {
    Color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedWhyChooseGlyMedPlus extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_choose_gly_med_pluses';
  info: {
    displayName: 'WhyChooseGlyMedPlus';
  };
  attributes: {
    ButtonAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    ButtonText: Schema.Attribute.String;
    Description: Schema.Attribute.Component<'shared.text-with-color', false>;
    Desktop: Schema.Attribute.Media<'images'>;
    Desktop2x: Schema.Attribute.Media<'images'>;
    IsExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    LinkURL: Schema.Attribute.String;
    Portrait: Schema.Attribute.Media<'images'>;
    Portrait2x: Schema.Attribute.Media<'images'>;
    SliderName: Schema.Attribute.String & Schema.Attribute.Required;
    TextAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    Title: Schema.Attribute.Component<'shared.text-with-color', false>;
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
