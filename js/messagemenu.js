// DASH MENU COMPONENT

'use strict';

var menu = {
    title: 'manage messages',
    menus: [
    {
      title: 'Inbox ',
      link: 'addsection.html',
      icon: 'fa fa-inbox',
      isActive: true
    },
    {
      title: 'Sent',
      link: 'editsections.html',
      icon: 'fa fa-paper-plane',
      isActive: false

    },
    {
      title: 'Trash',
      link: 'movesections.html',
      icon: 'fa fa-trash',
      isActive: false

    },
      {
      title: 'Archive',
      link: 'movesections.html',
      icon: 'fa fa-archive',
      isActive: false

    },
      {
      title: 'Favourites',
      link: 'movesections.html',
      icon: 'fa fa-star',
      isActive: false

    },
    ]
}


Vue.component('message-menu', {
  template: `<div class="dash-menu">
              <h3>{{ title }}</h3>
              <ul v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">
                    {{ menu.title }}
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

var messagesmenu = new Vue({
  el: '#messages'
})