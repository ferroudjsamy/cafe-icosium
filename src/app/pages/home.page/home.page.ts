import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar.component/navbar.component";
import { HeroComponent } from "../../components/hero.component/hero.component";
import { FeaturesSectionComponent } from '../../components/features-section.component/features-section.component';
import { MenuSectionComponent } from "../../components/menu-section.component/menu-section.component";
import { AboutSectionComponent } from "../../components/about-section.component/about-section.component";

@Component({
  selector: 'app-home.page',
  imports: [NavbarComponent, HeroComponent, FeaturesSectionComponent, MenuSectionComponent, AboutSectionComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {

}
