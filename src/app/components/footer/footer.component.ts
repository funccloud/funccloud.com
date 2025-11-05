import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CookiesComponent } from '../cookies/cookies.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CookiesComponent, RouterLink, NewsletterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  customCursor() {
    let c = document.querySelector('.cursor-dot') as HTMLElement;
    let cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector('.cursor-dot') as HTMLElement,
      $outline: document.querySelector('.cursor-dot-outline') as HTMLElement,
      dotSize: 0,
      outlineSize: 0,

      init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },

      updateCursor: function (e: MouseEvent) {
        let self = this;

        console.log(e);

        // Show the cursor
        self.cursorVisible = true;
        self.toggleCursorVisibility();

        // Position the dot
        self.endX = e.clientX;
        self.endY = e.clientY;
        self.$dot.style.top = self.endY + 'px';
        self.$dot.style.left = self.endX + 'px';
      },

      setupEventListeners: function () {
        let self = this;

        // Reposition cursor on window load
        window.addEventListener('load', (event) => {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });

        // Anchor hovering
        document.querySelectorAll('a, button').forEach((el: Element) => {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });

        // Click events
        document.addEventListener('mousedown', function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });

        document.addEventListener('mousemove', function (e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.clientX;
          self.endY = e.clientY;
          self.$dot.style.top = self.endY + 'px';
          self.$dot.style.left = self.endX + 'px';
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = '1';
          self.$outline.style.opacity = '1';
        });

        document.addEventListener('mouseleave', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = '0';
          self.$outline.style.opacity = '0';
        });
      },

      animateDotOutline: function () {
        let self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
      },

      toggleCursorSize: function () {
        let self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.6)';
        } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      },

      toggleCursorVisibility: function () {
        let self = this;

        if (self.cursorVisible) {
          self.$dot.style.opacity = '1';
          self.$outline.style.opacity = '1';
        } else {
          self.$dot.style.opacity = '0';
          self.$outline.style.opacity = '0';
        }
      },
    };
    if (isPlatformBrowser(this.platformId)) {
      cursor.init();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const fixedFooter = document.querySelector(
        '.footer-sticky'
      ) as HTMLElement;
      if (fixedFooter) {
        window.addEventListener('resize', () => {
          const screenWidth = window.outerWidth;
          const footerHeight = fixedFooter.offsetHeight - 1;
          if (screenWidth >= 768) {
            const mainElement = document.getElementsByTagName('main')[0];
            if (mainElement) {
              mainElement.style.marginBottom = footerHeight + 'px';
            }
          }
        });
        window.dispatchEvent(new Event('resize'));
      }

      const backBtn = document.querySelector('.back-top') as HTMLElement;
      if (backBtn) {
        const add_class_on_scroll = () =>
          backBtn.classList.add('back-top-show');
        const remove_class_on_scroll = () =>
          backBtn.classList.remove('back-top-show');
        window.addEventListener('scroll', () => {
          const scrollpos = window.scrollY;
          if (scrollpos >= 300) {
            add_class_on_scroll();
          } else {
            remove_class_on_scroll();
          }
        });
        backBtn.addEventListener('click', () =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        );
      }

      this.customCursor();
    }
  }
}
