import {fetchAuthSession, getCurrentUser} from 'aws-amplify/auth';
import {Injectable} from '@angular/core';
import {Counter, Counters} from './counter.model';

const BASE_URL = "<BASE-URL>";


@Injectable({
  providedIn: 'root'
})
export class CounterService {
  async getAccessToken() {
    const session = await fetchAuthSession();
    return session.tokens?.accessToken.toString();
  }

  async getUserName() {
    const user = await getCurrentUser();
    return user.username;
  }

  async getCounter(): Promise<Counters> {
    const userName = await this.getUserName();
    let data = {"user_id": userName}
    const accessToken = await this.getAccessToken();
    const response = await fetch(`${BASE_URL}/getCounter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
    return  await response.json();
  }

  async incrementCounter(userName: string): Promise<Counters> {
    const data = {"user_id": userName}
    const accessToken = await this.getAccessToken();
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'An error occurred while posting data for incrementCounter');
    }
    return await response.json();
  }

  async getAllCounters(): Promise<Counter[]> {
    const response = await fetch(`${BASE_URL}/getAllCounters`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return await response.json();
  }



}
