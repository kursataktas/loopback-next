// Copyright The LoopBack Authors 2020,2021. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Column, Entity, PrimaryGeneratedColumn} from '../../../';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  published: boolean;
}
