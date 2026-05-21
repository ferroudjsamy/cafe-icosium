import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar.component/navbar.component";
import { HeroComponent } from "../../components/hero.component/hero.component";
import { FeaturesSectionComponent } from '../../components/features-section.component/features-section.component';

@Component({
  selector: 'app-home.page',
  imports: [NavbarComponent, HeroComponent, FeaturesSectionComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {

}
