# AngularTutorial

This repository is built to log everything I learnt while practicing Angular.

The learning path started from the **[Official document](https://angular.io/docs)** and the **[tutorial](https://angular.io/tutorial)**.

Some interesting notes about Angular or TypeScript would be logged below.

1. [Displaying a list by **\*ngFor**](https://angular.io/tutorial/toh-pt2#list-heroes-with-ngfor)

```
   <li *ngFor="let hero of heroes">
```

The [\*ngFor](https://angular.io/api/common/NgForOf) is Angular's repeater directive. It repeats the host element for each element in a list.

2. [conditionally include or exclude a block of HTML via **\*ngIf**](https://angular.io/tutorial/toh-pt2#the-fix---hide-empty-details-with-ngif)

```
    <div *ngIf="selectedHero">
        ....
    </div>
```

The [\*ngIf](https://angular.io/api/common/NgIf) is a structural directive that conditionally includes a template based on the value of an expression coerced to Boolean. When the expression evaluates to true, Angular renders the template provided in a then clause, and when false or null, Angular renders the template provided in an optional else clause. The default template for the else clause is blank.
