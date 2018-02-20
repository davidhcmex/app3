import * as React from 'react'
//import * as ReactDOM from 'react-dom'
import * as mapboxgl from 'mapbox-gl'
//import './mapbox-gl.css';
var data = require('./data.json');


(mapboxgl as any).accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


const options = [{
  name: 'Population',
  description: 'Estimated total population',
  property: 'pop_est',
  stops: [
    [0, '#f8d5cc'],
    [1000000, '#f4bfb6'],
    [5000000, '#f1a8a5'],
    [10000000, '#ee8f9a'],
    [50000000, '#ec739b'],
    [100000000, '#dd5ca8'],
    [250000000, '#c44cc0'],
    [500000000, '#9f43d7'],
    [1000000000, '#6e40e6']
  ]
}, {
  name: 'GDP',
  description: 'Estimate total GDP in millions of dollars',
  property: 'gdp_md_est',
  stops: [
    [0, '#f8d5cc'],
    [1000, '#f4bfb6'],
    [5000, '#f1a8a5'],
    [10000, '#ee8f9a'],
    [50000, '#ec739b'],
    [100000, '#dd5ca8'],
    [250000, '#c44cc0'],
    [5000000, '#9f43d7'],
    [10000000, '#6e40e6']
  ]
}]



export class Mapd extends React.Component<{},{active:any}> {
  

  constructor(props:any) {
    super(props);
    this.state = {
      active: options[0]
    };
  }

  componentDidUpdate() {
    this.setFill();
  }

  componentDidMount() {
    this['map'] = new mapboxgl.Map({
      container: this['mapContainer'],
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [5, 34],
      zoom: 1.5
    });

    this['map'].on('load', () => {
        this['map'].addSource('countries', {
        type: 'geojson',
        data
      });

      this['map'].addLayer({
        id: 'countries',
        type: 'fill',
        source: 'countries'
      }, 'country-label-lg'); // ID metches `mapbox/streets-v9`

      this.setFill();
    });
  }

  setFill() {
    const { property, stops } = this.state.active;
    this['map'].setPaintProperty('countries', 'fill-color', {
      property,
      stops
    });    
    this['map'].setPaintProperty('countries', 'fill-opacity', 0.5) 
  }

  render() {
    const { name, description, stops, property } = this.state.active;
    const renderLegendKeys = (stop:any, i:any) => {
      return (
        <div key={i} className='txt-s'>
          <span className='mr6 round-full w12 h12 inline-block align-middle' style={{ backgroundColor: stop[1] }} />
          <span>{`${stop[0].toLocaleString()}`}</span>
        </div>
      );
    }

    const renderOptions = (option:any, i:any) => {
      return (
        <label key={i} className="toggle-container">
          <input onChange={() => this.setState({ active: options[i] })} checked={option.property === property} name="toggle" type="radio" />
          <div className="toggle txt-s py3 toggle--active-white">{option.name}</div>
        </label>
      );
    }

    return (
      <div className="absolute top left right bottom mt60">
        <div ref={el => this['mapContainer'] = el } className= "absolute top left right bottom" />
        <div className="toggle-group absolute top left ml12 mt0 border border--2 border--white bg-white shadow-darken10 z1">
          {options.map(renderOptions)}
        </div>
        <div className="bg-white absolute bottom right mr12 mb12 py12 px12 shadow-darken10 round z1 wmax180">
          <div className='mb6'>
            <h2 className="txt-bold txt-s block">{name}</h2>
            <p className='txt-s color-gray'>{description}</p>
          </div>
          {stops.map(renderLegendKeys)}
        </div>
      </div>
    );
  }
}

export default Mapd

//ReactDOM.render(<Application />, document.getElementById('root'));