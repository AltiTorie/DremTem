export default {
  TYPES: [
    {id: 1, name: 'Temperature', abbr: 'TEMP', unit: '°C'},
    {id: 2, name: 'Moisture', abbr: 'MOIST', unit: '%'},
    {id: 3, name: 'Humidity', abbr: 'HUMID', unit: '%'},
    {id: 4, name: 'Light', abbr: 'LIGHT', unti: 'lm'},
  ],
  definedCharts: [
    {
      id: '1',
      type: 'Default',
      required_types: [],
      chart_link: 'DefaultDashboard',
    },
    {
      id: '2',
      type: 'Temperature',
      required_types: ['TEMP'],
      chart_link: 'TemperatureDashboard',
    },
    {
      id: '3',
      type: 'Moisture',
      required_types: ['MOIST'],
      chart_link: 'MoistureDashboard',
    },
    {
      id: '4',
      type: 'Light',
      required_types: ['LIGHT'],
      chart_link: 'LightDashboard',
    },
    {
      id: '5',
      type: 'TemperatureMoisture',
      required_types: ['MOIST', 'TEMP'],
      chart_link: 'TemperatureMoistureDashboard',
    },
  ],
};
