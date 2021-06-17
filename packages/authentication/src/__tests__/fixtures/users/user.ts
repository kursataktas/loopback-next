// Copyright The LoopBack Authors 2019,2021. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export interface User {
  id: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
