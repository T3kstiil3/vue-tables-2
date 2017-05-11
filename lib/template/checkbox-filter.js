    module.exports = function(h, that) {

     return  function(column) {

      var checkboxs = [];
      let selected;

      var search = that.source=='client'?
      that.search.bind(that, that.data):
      that.serverSearch.bind(that);

      that.opts.checkboxColumns[column].map(function(checkbox) {
        checkboxs.push(<label for={column + '_' + checkbox.id}><input id={column + '_' + checkbox.id} on-change={search} type="checkbox" value={checkbox.id} />{checkbox.text}</label>)
      })

      return <div class="VueTables__checkbox-filter"
      id={'VueTables__' + column + '-filter'}>
      {checkboxs}
      </div>
    }

  }
