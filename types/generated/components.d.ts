import type { Schema, Struct } from '@strapi/strapi';

export interface SharedArticle extends Struct.ComponentSchema {
  collectionName: 'components_shared_articles';
  info: {
    displayName: 'Article';
    icon: 'book';
  };
  attributes: {
    articleId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    description: Schema.Attribute.Component<'shared.text-with-color', false>;
    images: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Component<'shared.text-with-color', false>;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    alignmentDesktop: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    alignmentMobile: Schema.Attribute.Enumeration<['top', 'center', 'bottom']> &
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
    subTitle: Schema.Attribute.String;
    subTitleFontSizeDesktop: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<18>;
    tablet_768: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMetaTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_tags';
  info: {
    displayName: 'MetaTag';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedProductCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_cards';
  info: {
    displayName: 'ProductCard';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    productImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProvenResult extends Struct.ComponentSchema {
  collectionName: 'components_shared_proven_results';
  info: {
    displayName: 'ProvenResult';
    icon: 'sun';
  };
  attributes: {
    after: Schema.Attribute.Component<'shared.text-with-color', false> &
      Schema.Attribute.Required;
    before: Schema.Attribute.Component<'shared.text-with-color', false> &
      Schema.Attribute.Required;
    resultImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedTextWithColor extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_with_colors';
  info: {
    displayName: 'TextWithColor';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedWhyChooseGlyMedPlus extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_choose_gly_med_pluses';
  info: {
    displayName: 'whyChooseGlyMedPlus';
  };
  attributes: {
    buttonAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Component<'shared.text-with-color', false>;
    desktop: Schema.Attribute.Media<'images'>;
    desktop2X: Schema.Attribute.Media<'images'>;
    isExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    linkURL: Schema.Attribute.String;
    portrait: Schema.Attribute.Media<'images'>;
    portrait2X: Schema.Attribute.Media<'images'>;
    sliderName: Schema.Attribute.String & Schema.Attribute.Required;
    textAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    title: Schema.Attribute.Component<'shared.text-with-color', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.article': SharedArticle;
      'shared.banner': SharedBanner;
      'shared.list': SharedList;
      'shared.meta-tag': SharedMetaTag;
      'shared.product-card': SharedProductCard;
      'shared.proven-result': SharedProvenResult;
      'shared.testimonial': SharedTestimonial;
      'shared.text-with-color': SharedTextWithColor;
      'shared.why-choose-gly-med-plus': SharedWhyChooseGlyMedPlus;
    }
  }
}
