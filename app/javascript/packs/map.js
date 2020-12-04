import 'bootstrap/js/dist/popover';

$(document).ready(() => {
  const popoverShown = [false, null];

  $('[data-toggle="popover"]').popover({
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body row no-gutters justify-content-end"></div></div>',
    placement: 'top',
    html: true,
  });

  $('[data-toggle="popover"]').on('shown.bs.popover', (event) => {
    popoverShown[0] = true;
    popoverShown[1] = $(event.target);
  });

  $(document).on('click', (event) => {
    if (!popoverShown) {
      return;
    }

    const $target = $(event.target);
    if ($target.parents('.popover').length === 0) {
      if (popoverShown[1]) {
        popoverShown[1].popover('hide');
      }

      popoverShown[0] = false;
    }
  });
});
