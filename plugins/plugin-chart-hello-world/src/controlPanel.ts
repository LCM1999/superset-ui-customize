/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t, validateInteger } from '@superset-ui/core';
import { ControlPanelConfig, formatSelectOptions } from '@superset-ui/chart-controls';

const NUMBER_LIMITS = [1, 5, 25, 125, 625, 'just for fun'];

const config: ControlPanelConfig = {
  controlPanelSections: [
    // Time dropdown select component
    //sections.legacyRegularTime,
    // 'Query' tab
    {
      label: t('Data Filter'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'nodes_label_choose',
            config: {
              type: 'AdhocFilterControl',
              label: t('nodes_label_choose'),
              default: null,
              description: 'Choose Nodes by Label',
              mapStateToProps: ({ datasource }) => ({
                columns: datasource?.columns.filter(c => c.filterable) || [],
              }),
            },
          },
        ],
        [
          {
            name: 'links_label_choose',
            config: {
              type: 'AdhocFilterControl',
              label: t('links_label_choose'),
              default: null,
              description: 'Choose Links by Label',
              mapStateToProps: ({ datasource }) => ({
                columns: datasource?.columns.filter(c => c.filterable) || [],
              }),
            },
          },
        ],
        //['adhoc_filters'],
        [
          {
            name: 'number_limit',
            config: {
              type: 'SelectControl',
              freeForm: true,
              label: t('number_limit'),
              validators: [validateInteger],
              choices: formatSelectOptions(NUMBER_LIMITS),
              description: t('Choose limit number for Nodes or Links which you query.'),
            },
          },
        ],
      ],
    },
    //Custom Tab
    {
      label: t('Hello Controls!'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'header_text',
            config: {
              type: 'TextControl',
              default: 'Hello, World!',
              renderTrigger: true,
              // ^ this makes it apply instantaneously, without triggering a "run query" button
              label: t('Header Text'),
              description: t('The text you want to see in the header'),
            },
          },
        ],
        [
          {
            name: 'bold_text',
            config: {
              type: 'CheckboxControl',
              label: t('Bold Text'),
              renderTrigger: true,
              default: true,
              description: t('A checkbox to make the '),
            },
          },
        ],
        [
          {
            name: 'header_font_size',
            config: {
              type: 'SelectControl',
              label: t('Font Size'),
              default: 'xl',
              choices: [
                // [value, label]
                ['xxs', 'xx-small'],
                ['xs', 'x-small'],
                ['s', 'small'],
                ['m', 'medium'],
                ['l', 'large'],
                ['xl', 'x-large'],
                ['xxl', 'xx-large'],
              ],
              renderTrigger: true,
              description: t('The size of your header font'),
            },
          },
        ],
      ],
    },
  ],
  controlOverrides: {},
};

export default config;
