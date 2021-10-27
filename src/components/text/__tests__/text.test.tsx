/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Text } from '../index';

jest.mock('app/utils');

jest.useFakeTimers();

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Text', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Text', () => {
      const TextWithSizeCaption = renderer.create(
        <Text type="bold" size={'caption'}>
          Test text
        </Text>,
      );
      const TextWithSizeDescription = renderer.create(
        <Text type="bold" size={'description'}>
          Test text
        </Text>,
      );
      const TextWithSizeTitle = renderer.create(
        <Text type="bold" size={'title'}>
          Test text
        </Text>,
      );
      const TextWithSizeLargeTitle = renderer.create(
        <Text type="bold" size={'large_title'}>
          Test text
        </Text>,
      );
      const TextWithSizeSubtitle = renderer.create(
        <Text type="bold" size={'subtitle'}>
          Test text
        </Text>,
      );
      const TextWithStyle = renderer.create(
        <Text type="bold" size={'subtitle'} style={{ color: 'red' }}>
          Test text
        </Text>,
      );

      expect({
        TextWithSizeCaption,
        TextWithSizeDescription,
        TextWithSizeTitle,
        TextWithSizeLargeTitle,
        TextWithSizeSubtitle,
        TextWithStyle,
      }).toMatchSnapshot('Text snapshot');
    });
  });
});
