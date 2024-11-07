import {AfterViewInit, Component, Input} from '@angular/core';
import {CounterService} from '../api/counter.service';
import {Counters} from '../api/counter.model';

@Component({
  selector: 'app-klik-app',
  templateUrl: './klik-app.component.html',
  styleUrl: './klik-app.component.css',
})
export class KlikAppComponent implements AfterViewInit {
  @Input() username!: string;
  loading: boolean = true;
  error: string | null = null;
  userCount: number = 0;
  totalCount: number = 0;

  getPrettyUserName() {
    return this.username.charAt(0).toUpperCase() + this.username.slice(1).toLowerCase();
  }

  constructor(private counterService: CounterService) {}

  async ngAfterViewInit(): Promise<void> {
    try {
      const counters: Counters = await this.counterService.getCounter();
      this.userCount = counters.user_counter;
      this.totalCount = counters.total_counter;
    } catch (err: any) {
      this.error = err.message;
    }
  }

  async incrementCounter() {
    try {
      const data: Counters = await this.counterService.incrementCounter(this.username);
      this.userCount = data.user_counter;
      this.totalCount = data.total_counter;
    } catch (err: any) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }
}
