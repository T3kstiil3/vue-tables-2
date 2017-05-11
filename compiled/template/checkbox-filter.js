'use strict';

module.exports = function (h, that) {

  return function (column) {

    var checkboxs = [];
    var selected = void 0;

    var search = that.source == 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that);

    that.opts.checkboxColumns[column].map(function (checkbox) {
      checkboxs.push(h(
        'label',
        {
          attrs: { 'for': column + '_' + checkbox.id }
        },
        [h(
          'input',
          {
            attrs: { id: column + '_' + checkbox.id, type: 'checkbox', value: checkbox.id },
            on: {
              'change': search
            }
          },
          []
        ), checkbox.text]
      ));
    });

    return h(
      'div',
      { 'class': 'VueTables__checkbox-filter',
        attrs: { id: 'VueTables__' + column + '-filter' }
      },
      [checkboxs]
    );
  };
};