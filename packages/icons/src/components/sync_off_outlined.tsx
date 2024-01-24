/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const SyncOffOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M2.25003 7C1.83582 7 1.50003 6.66421 1.50003 6.25C1.50003 5.83579 1.83582 5.5 2.25003 5.5H3.67788L2.64203 4.46415C2.34914 4.17126 2.34914 3.69639 2.64203 3.40349C2.93493 3.1106 3.4098 3.1106 3.70269 3.40349L11.8344 11.5352C12.1273 11.8281 12.1273 12.303 11.8344 12.5959C11.5415 12.8888 11.0667 12.8888 10.7738 12.5959L8.67788 10.5H4.06068L6.78035 13.2197C7.07325 13.5126 7.07325 13.9874 6.78035 14.2803C6.48746 14.5732 6.01259 14.5732 5.71969 14.2803L1.71969 10.2803C1.50519 10.0658 1.44103 9.74324 1.55711 9.46299C1.6732 9.18273 1.94667 9 2.25002 9L7.17788 9L5.17788 7H2.25003Z" fill={ colors[0] }/>
    <path d="M9.2992 7L7.7992 5.5H11.9394L9.2197 2.78033C8.92681 2.48744 8.92681 2.01256 9.2197 1.71967C9.51259 1.42678 9.98747 1.42678 10.2804 1.71967L14.2804 5.71967C14.4949 5.93417 14.559 6.25676 14.4429 6.53701C14.3269 6.81727 14.0534 7 13.75 7H9.2992Z" fill={ colors[0] }/>
    <path d="M11.2992 9L12.7992 10.5H13.75C14.1642 10.5 14.5 10.1642 14.5 9.75C14.5 9.33579 14.1642 9 13.75 9H11.2992Z" fill={ colors[0] }/>

  </>,
  name: 'sync_off_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M2.25003 7C1.83582 7 1.50003 6.66421 1.50003 6.25C1.50003 5.83579 1.83582 5.5 2.25003 5.5H3.67788L2.64203 4.46415C2.34914 4.17126 2.34914 3.69639 2.64203 3.40349C2.93493 3.1106 3.4098 3.1106 3.70269 3.40349L11.8344 11.5352C12.1273 11.8281 12.1273 12.303 11.8344 12.5959C11.5415 12.8888 11.0667 12.8888 10.7738 12.5959L8.67788 10.5H4.06068L6.78035 13.2197C7.07325 13.5126 7.07325 13.9874 6.78035 14.2803C6.48746 14.5732 6.01259 14.5732 5.71969 14.2803L1.71969 10.2803C1.50519 10.0658 1.44103 9.74324 1.55711 9.46299C1.6732 9.18273 1.94667 9 2.25002 9L7.17788 9L5.17788 7H2.25003Z', 'M9.2992 7L7.7992 5.5H11.9394L9.2197 2.78033C8.92681 2.48744 8.92681 2.01256 9.2197 1.71967C9.51259 1.42678 9.98747 1.42678 10.2804 1.71967L14.2804 5.71967C14.4949 5.93417 14.559 6.25676 14.4429 6.53701C14.3269 6.81727 14.0534 7 13.75 7H9.2992Z', 'M11.2992 9L12.7992 10.5H13.75C14.1642 10.5 14.5 10.1642 14.5 9.75C14.5 9.33579 14.1642 9 13.75 9H11.2992Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});