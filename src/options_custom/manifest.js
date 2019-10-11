// SAMPLE
this.manifest = {
  name: 'Config - uniportifolio',
  icon: 'icon.png',
  settings: [
    {
      tab: i18n.get('information'),
      group: i18n.get('login'),
      name: 'username',
      type: 'text',
      label: i18n.get('username')
    },
    {
      tab: i18n.get('information'),
      group: i18n.get('login'),
      name: 'password',
      type: 'text',
      label: i18n.get('password'),

      masked: true
    },
    {
      tab: i18n.get('information'),
      group: i18n.get('login'),
      name: 'idprojeto',
      type: 'text',
      label: 'ID Projeto  '
    },
    {
      tab: i18n.get('information'),
      group: i18n.get('login'),
      name: 'projetoEmpresa',
      type: 'text',
      label: 'Projeto empresa'
    }

    // {
    //   tab: 'Details',
    //   group: 'Sound',
    //   name: 'noti_volume',
    //   type: 'slider',
    //   label: 'Notification volume:',
    //   max: 1,
    //   min: 0,
    //   step: 0.01,
    //   display: false,
    //   displayModifier: function(value) {
    //     return (value * 100).floor() + '%';
    //   }
    // },
    // {
    //   tab: 'Details',
    //   group: 'Sound',
    //   name: 'sound_volume',
    //   type: 'slider',
    //   label: 'Sound volume:',
    //   max: 100,
    //   min: 0,
    //   step: 1,
    //   display: false,
    //   displayModifier: function(value) {
    //     return value + '%';
    //   }
    // }
  ],
  alignment: [['username', 'password'] /*, ['noti_volume', 'sound_volume'] */]
};
