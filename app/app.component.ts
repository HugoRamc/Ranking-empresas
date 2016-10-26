import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <main>
			<router-outlet></router-outlet>
        </main>
        `
})	
export class AppComponent {
}
