import {Component, OnInit} from '@angular/core';
import {Counter} from '../api/counter.model';
import {CounterService} from '../api/counter.service';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrl: './usage.component.css'
})
export class UsageComponent implements OnInit {
  counters: Counter[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private counterService: CounterService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.counters = await this.counterService.getAllCounters();
    } catch (err: any) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }
}
