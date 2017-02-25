const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://www.reifax.com/')
  .click('li#menu-login > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)')
  .click('div#contentPrincipal > div.panel:nth-child(2) > div.center.panelMyProducts:nth-child(1) > a.buttongreen.bigbutton:nth-child(3)')
  .click('a#ext-gen24 > em.x-tab-left:nth-child(1) > span.x-tab-strip-inner:nth-child(1) > span.x-tab-strip-text:nth-child(1)')
  .click('div#ext-gen200 > div.x-grid3-row.x-grid3-row-alt.x-grid3-row-selected:nth-child(2) > table.x-grid3-row-table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td.x-grid3-col.x-grid3-cell.x-grid3-td-checker.x-grid3-cell-first:nth-child(1) > div.x-grid3-cell-inner.x-grid3-col-checker:nth-child(1) > div.x-grid3-row-checker:nth-child(1)')
  .click('div#ext-gen200 > div.x-grid3-row.x-grid3-row-alt.x-grid3-row-selected:nth-child(2) > table.x-grid3-row-table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td.x-grid3-col.x-grid3-cell.x-grid3-td-4:nth-child(5) > div.x-grid3-cell-inner.x-grid3-col-4:nth-child(1) > a:nth-child(1) > img:nth-child(1)')
  .click('button#ext-gen277')
  .end()
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error('Error:', error);
    });