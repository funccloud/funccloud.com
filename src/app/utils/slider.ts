import { tns } from 'tiny-slider/src/tiny-slider';

function tinySlider(id: string) {

  let slider1 = document.getElementById(id)!;
  let sliderMode = slider1.getAttribute('data-mode') ? slider1.getAttribute('data-mode') : 'carousel';
  let sliderAxis = slider1.getAttribute('data-axis') ? slider1.getAttribute('data-axis') : 'horizontal';
  let sliderSpace = slider1.getAttribute('data-gutter') ? slider1.getAttribute('data-gutter') : 30;
  let sliderEdge = slider1.getAttribute('data-edge') ? slider1.getAttribute('data-edge') : 0;

  let sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 4; //option: number (items in all device)
  let sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItems); //option: number (items in 1200 to end )
  let sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
  let sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsLg); //option: number (items in 768 to 991 )
  let sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsMd); //option: number (items in 576 to 767 )
  let sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : Number(sliderItemsSm); //option: number (items in start to 575 )

  let sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
  let sliderautoWidth = slider1.getAttribute('data-autowidth') === 'true'; //option: true or false
  let sliderArrow = slider1.getAttribute('data-arrow') !== 'false'; //option: true or false
  let sliderDots = slider1.getAttribute('data-dots') !== 'false'; //option: true or false

  let sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false'; //option: true or false
  let sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 4000;
  let sliderHoverPause = slider1.getAttribute('data-hoverpause') === 'true'; //option: true or false
  let sliderLoop = slider1.getAttribute('data-loop') !== 'false'; //option: true or false
  let sliderRewind = slider1.getAttribute('data-rewind') === 'true'; //option: true or false
  let sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true'; //option: true or false
  let sliderfixedWidth = slider1.getAttribute('data-fixedwidth') === 'true'; //option: true or false
  let sliderTouch = slider1.getAttribute('data-touch') !== 'false'; //option: true or false
  let sliderDrag = slider1.getAttribute('data-drag') !== 'false'; //option: true or false
  // Check if document DIR is RTL
  let ifRtl = document.getElementsByTagName("html")[0].getAttribute("dir");
  let sliderDirection;
  if (ifRtl === 'rtl') {
    sliderDirection = 'rtl';
  }

  let tnsSlider = tns({
    container: slider1,
    mode: sliderMode as "carousel" | "gallery" | undefined,
    axis: sliderAxis as "horizontal" | "vertical" | undefined,
    gutter: parseInt(sliderSpace as string, 10) || 0,
    edgePadding: parseInt(sliderEdge as string, 10) || 0,
    speed: parseInt(sliderSpeed as string, 10) || 0,
    autoWidth: sliderautoWidth,
    controls: sliderArrow,
    nav: sliderDots,
    autoplay: sliderAutoPlay,
    autoplayTimeout: sliderAutoPlayTime ? Number(sliderAutoPlayTime) : 0,
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
    fixedWidth: sliderfixedWidth as number | false | undefined,
    touch: sliderTouch,
    mouseDrag: sliderDrag,
    arrowKeys: true,
    items: parseInt(sliderItems as string, 10) || 0,
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
}
// END: Tiny Slider
export { tinySlider }
