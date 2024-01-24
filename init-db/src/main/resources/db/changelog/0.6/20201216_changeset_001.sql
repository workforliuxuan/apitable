-- APITable <https://github.com/apitable/apitable>
-- Copyright (C) 2022 APITable Ltd. <https://apitable.com>
--
-- This program is free software: you can redistribute it and/or modify
-- it under the terms of the GNU Affero General Public License as published by
-- the Free Software Foundation, either version 3 of the License, or
-- (at your option) any later version.
--
-- This program is distributed in the hope that it will be useful,
-- but WITHOUT ANY WARRANTY; without even the implied warranty of
-- MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
-- GNU Affero General Public License for more details.
--
-- You should have received a copy of the GNU Affero General Public License
-- along with this program.  If not, see <http://www.gnu.org/licenses/>.

CREATE TABLE `${table.prefix}resource_meta`
(
    `id`          bigint(20) unsigned NOT NULL COMMENT 'Primary Key',
    `resource_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Resource ID(node_id/..)',
    `meta_data`   json                                                         DEFAULT NULL COMMENT 'Meta Data',
    `revision`    bigint(20) unsigned NOT NULL                                 DEFAULT '0' COMMENT 'Version',
    `is_deleted`  tinyint(1) unsigned NOT NULL                                 DEFAULT '0' COMMENT 'Delete Tag(0: No, 1: Yes)',
    `created_by`  bigint(20)                                                   DEFAULT NULL COMMENT 'Create User',
    `updated_by`  bigint(20)                                                   DEFAULT NULL COMMENT 'Last Update User',
    `created_at`  timestamp           NOT NULL                                 DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
    `updated_at`  timestamp           NULL                                     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Update Time',
    PRIMARY KEY (`id`) USING BTREE,
    KEY `uk_resource_id` (`resource_id`) USING BTREE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci COMMENT ='Workbench - Resource Meta Table';
