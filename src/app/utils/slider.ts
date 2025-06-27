function tinySlider(id: string) {
  if (typeof document !== 'undefined') {
    import('tiny-slider/src/tiny-slider').then(module => {
      const { tns } = module;
      const slider1 = document.getElementById(id);
      if (!slider1) {
        return;
      }

      const sliderMode = slider1.getAttribute('data-mode') || 'carousel';
      const sliderAxis = slider1.getAttribute('data-axis') || 'horizontal';
      const sliderSpace = slider1.getAttribute('data-gutter') || 30;
      const sliderEdge = slider1.getAttribute('data-edge') || 0;

      const sliderItems = slider1.getAttribute('data-items') || 4;
      const sliderItemsXl = slider1.getAttribute('data-items-xl') || sliderItems;
      const sliderItemsLg = slider1.getAttribute('data-items-lg') || sliderItemsXl;
      const sliderItemsMd = slider1.getAttribute('data-items-md') || sliderItemsLg;
      const sliderItemsSm = slider1.getAttribute('data-items-sm') || sliderItemsMd;
      const sliderItemsXs = slider1.getAttribute('data-items-xs') || sliderItemsSm;

      const sliderSpeed = slider1.getAttribute('data-speed') || 500;
      const sliderautoWidth = slider1.getAttribute('data-autowidth') === 'true';
      const sliderArrow = slider1.getAttribute('data-arrow') !== 'false';
      const sliderDots = slider1.getAttribute('data-dots') !== 'false';

      const sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false';
      const sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') || 4000;
      const sliderHoverPause = slider1.getAttribute('data-hoverpause') === 'true';
      const sliderLoop = slider1.getAttribute('data-loop') !== 'false';
      const sliderRewind = slider1.getAttribute('data-rewind') === 'true';
      const sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true';
      const sliderfixedWidthAttr = slider1.getAttribute('data-fixedwidth');
      const sliderfixedWidth = sliderfixedWidthAttr && sliderfixedWidthAttr !== 'false' ? (Number(sliderfixedWidthAttr) || undefined) : false;
      const sliderTouch = slider1.getAttribute('data-touch') !== 'false';
      const sliderDrag = slider1.getAttribute('data-drag') !== 'false';

      tns({
        container: slider1,
        mode: sliderMode as "carousel" | "gallery" | undefined,
        axis: sliderAxis as "horizontal" | "vertical" | undefined,
        gutter: parseInt(sliderSpace.toString(), 10) || 0,
        edgePadding: parseInt(sliderEdge.toString(), 10) || 0,
        speed: parseInt(sliderSpeed.toString(), 10) || 500,
        autoWidth: sliderautoWidth,
        controls: sliderArrow,
        nav: sliderDots,
        autoplay: sliderAutoPlay,
        autoplayTimeout: Number(sliderAutoPlayTime) || 4000,
        autoplayHoverPause: sliderHoverPause,
        autoplayButton: false,
        autoplayButtonOutput: false,
        navPosition: "top",
        controlsText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ],
        loop: sliderLoop,
        rewind: sliderRewind,
        autoHeight: sliderAutoHeight,
        fixedWidth: sliderfixedWidth,
        touch: sliderTouch,
        mouseDrag: sliderDrag,
        arrowKeys: true,
        items: parseInt(sliderItems.toString(), 10) || 4,
        responsive: {
          0: {
            items: Number(sliderItemsXs)
          },
          576: {
            items: Number(sliderItemsSm)
          },
          768: {
            items: Number(sliderItemsMd)
          },
          992: {
            items: Number(sliderItemsLg)
          },
          1200: {
            items: Number(sliderItemsXl)
          }
        }
      });
    }).catch(error => console.error('Error loading tiny-slider', error));
  }
}
// END: Tiny Slider
export { tinySlider }
