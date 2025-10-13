import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./modules/share/footer/footer.component";
import { HeaderComponent } from './modules/share/header/header.component';
import { ShareModule } from './modules/share/share.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShareModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agenziaHermes';
}
