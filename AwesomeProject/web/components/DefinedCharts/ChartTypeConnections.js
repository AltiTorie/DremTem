import BasicDashboardComponent from './BasicDashboardComponent';
import DefaultDashboardComponent from './DefaultDashboardComponent';
import MoistureLightDashboardComponent from './MoistureLightDashboardComponent';
import TemperatureHumidityDashboardComponent from './TemperatureHumidityDashboardComponent';

export default {
  componentConnections: {
    TemperatureHumidityDashboardComponent:
      TemperatureHumidityDashboardComponent,
    MoistureLightDashboardComponent: MoistureLightDashboardComponent,
    TemperatureDashboardComponent: BasicDashboardComponent,
    HumidityDashboardComponent: BasicDashboardComponent,

    MoistureDashboardComponent: BasicDashboardComponent,
    LightDashboardComponent: BasicDashboardComponent,
    DefaultDashboardComponent: DefaultDashboardComponent,
    BasicDashboardComponent: DefaultDashboardComponent,
  },
  definedComplexCharts: [
    {
      id: '5',
      type: 'TemperatureHumidity',
      required_types: ['humid', 'temp'],
      chart_component: 'TemperatureHumidityDashboardComponent',
    },
    {
      id: '6',
      type: 'MoistureLight',
      required_types: ['moist', 'light'],
      chart_component: 'MoistureLightDashboardComponent',
    },
  ],
  definedSimpleCharts: [
    {
      id: '1',
      type: 'Temperature',
      required_types: ['temp'],
      chart_component: 'BasicDashboardComponent',
    },
    {
      id: '2',
      type: 'Humidity',
      required_types: ['humid'],
      chart_component: 'BasicDashboardComponent',
    },
    {
      id: '3',
      type: 'Moisture',
      required_types: ['moist'],
      chart_component: 'BasicDashboardComponent',
    },
    {
      id: '4',
      type: 'Light',
      required_types: ['light'],
      chart_component: 'BasicDashboardComponent',
    },
  ],
};
