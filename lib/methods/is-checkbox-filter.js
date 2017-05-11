module.exports = function(column) {
  return this.query.hasOwnProperty(column) &&
        this.opts.checkboxColumns.hasOwnProperty(column);
}
