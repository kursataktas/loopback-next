// Copyright The LoopBack Authors 2020,2021. All Rights Reserved.
// Node module: @loopback/cli
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {model, property} from '@loopback/repository';
import {IdModel} from './id-model.model';

@model()
export class CustomerInheritance extends IdModel {
  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<CustomerInheritance>) {
    super(data);
  }
}
