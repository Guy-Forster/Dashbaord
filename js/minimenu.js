// MINI MENU COMPONENT

'use strict';

var menu = {
    menus: [
    {
      link: 'settings.html',
      icon: 'fa fa-cog',
    },
    {
      link: 'logout.html',
      icon: 'fa fa-times',
    }
    ]
}


Vue.component('mini-menu', {
  template: `<div class="mini-menu">
              <ul v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" class="btn">
                    <i :class="menu.icon"></i>
                  </a>
                </li>
              </ul>
            </div>
            `,
  data: function() {
    return menu;
  }
})

var minimenu = new Vue({
  el: '#minimenu'
})