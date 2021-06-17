// Copyright The LoopBack Authors 2020,2021. All Rights Reserved.
// Node module: @loopback/example-binding-resolution
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Client} from '@loopback/testlab';
import {BindingDemoApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HomePage', () => {
  let app: BindingDemoApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('exposes a default home page', async () => {
    await client
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/);
  });

  it('exposes self-hosted explorer', async () => {
    await client
      .get('/explorer/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect(/<title>LoopBack API Explorer/);
  });
});
