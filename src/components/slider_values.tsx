import * as React from 'react';

// props de SliderValue has a property called connectValue, the parent is going to access
// it, ConnectValue is a function that will be executed on the parent (map component)
export class SliderValue extends React.Component<{ connectValue: (a: number) => void }, { sliderValue: any }> {
    constructor(props: any) {
        super(props)
        this.handleSlide = this.handleSlide.bind(this)
        this.state = { sliderValue: 0 }
    }
    handleSlide(event: any) {
      
        this.props.connectValue(event.detail.ui.value)
        this.setState({ sliderValue: event.detail.ui.value })
    }
    componentDidMount() {
        window.addEventListener('slide', this.handleSlide)
    }
    componentWillUnmount() {
        window.removeEventListener('slide', this.handleSlide)
    }
    render() {
        return <div className="" >
            Value: {this.state.sliderValue}
        </div>
    }
}
