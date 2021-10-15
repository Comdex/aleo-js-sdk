import { AleoClient, AleoAuthClient } from './lib/aleo';
export * from './lib/aleo';
export * from './lib/response_type';

export default class AleoSDK {
  /**
   *
   *
   * @static
   * @param {string} uri - Aleo Public RPC Endpoints
   * @param {RequestInit} [options={}] - request extra info
   * @return {*}  {AleoClient}
   * @memberof AleoSDK
   */
  static getAleoClient(uri: string, options: RequestInit = {}): AleoClient {
    return new AleoClient(uri, options);
  }

  /**
   *
   *
   * @static
   * @param {string} uri - Aleo Private RPC Endpoints
   * @param {string} user- RPC Endpoints auth username
   * @param {string} password - RPC Endpoints auth password
   * @param {RequestInit} [options={}] - request extra info
   * @return {*}  {AleoAuthClient}
   * @memberof AleoSDK
   */
  static getAleoAuthClient(
    uri: string,
    user: string,
    password: string,
    options: RequestInit = {}
  ): AleoAuthClient {
    return new AleoAuthClient(uri, user, password, options);
  }
}
