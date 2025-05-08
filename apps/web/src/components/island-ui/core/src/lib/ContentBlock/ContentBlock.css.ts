import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../../../theme';
import { mapToStyleProperty } from '../../../utils/mapToStyleProperty';

export const root = style({ margin: '0 auto' });

export const width = styleVariants(
  mapToStyleProperty(theme.contentWidth, 'maxWidth'),
);
