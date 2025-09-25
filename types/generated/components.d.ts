import type { Schema, Struct } from '@strapi/strapi';

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

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
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

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
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
    displayName: 'Text With Color';
  };
  attributes: {
    Color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.list-item': SharedListItem;
      'shared.media': SharedMedia;
      'shared.product-card': SharedProductCard;
      'shared.proven-result': SharedProvenResult;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.testimonials': SharedTestimonials;
      'shared.text-with-color': SharedTextWithColor;
    }
  }
}
