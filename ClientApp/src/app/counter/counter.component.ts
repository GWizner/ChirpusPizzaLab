import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public theMenuItems: MenuItem[] = [
    { ItemName: "Chicken Fingers", Category: "Dinner", Price: 11.99 },
    { ItemName: "Pizza", Category: "Dinner", Price: 11.99 },
    { ItemName: "Wings", Category: "Side", Price: 8.99 },
    { ItemName: "Breadsticks", Category: "Side", Price: 5.99 },
    { ItemName: "Caeser Salad", Category: "Salad", Price: 4.99 },
    { ItemName: "Cinnamon Roll", Category: "Dessert", Price: 8.99},
  ]
}
export class MenuItem {
  public ItemName: string = "";
  public Category: string = "";
  public Price: number = 0;
}
