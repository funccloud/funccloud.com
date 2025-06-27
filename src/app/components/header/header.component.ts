import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID,
  input,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  floating = input(false);
  solucoes = input(false);
  institucional = input(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const stickyNav = document.querySelector('.navbar-sticky') as HTMLElement;
      if (stickyNav) {
        const stickyHeight = stickyNav.offsetHeight;
        stickyNav.insertAdjacentHTML(
          'afterend',
          '<div id="sticky-space"></div>'
        );
        const stickySpace = document.querySelector(
          '#sticky-space'
        ) as HTMLElement;
        if (stickySpace) {
          document.addEventListener('scroll', () => {
            const scTop = window.scrollY || document.documentElement.scrollTop;
            if (scTop >= 100) {
              stickySpace.classList.add('active');
              stickySpace.style.height = stickyHeight + 'px';
              stickyNav.classList.add('navbar-sticky-on');
            } else {
              stickySpace.classList.remove('active');
              stickySpace.style.height = '0px';
              stickyNav.classList.remove('navbar-sticky-on');
            }
          });
        }
      }
    }
  }
}
