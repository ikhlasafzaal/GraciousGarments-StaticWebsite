class CitiesSlider extends React.Component {
    constructor(props) {
      super(props);
  
      this.IMAGE_PARTS = 4;
  
      this.changeTO = null;
      this.AUTOCHANGE_TIME = 4000;
  
      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
  
    componentWillUnmount() {
      window.clearTimeout(this.changeTO);
    }
  
    componentDidMount() {
      this.runAutochangeTO();
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
    }
  
    runAutochangeTO() {
      this.changeTO = setTimeout(() => {
        this.changeSlides(1);
        this.runAutochangeTO();
      }, this.AUTOCHANGE_TIME);
    }
  
    changeSlides(change) {
      window.clearTimeout(this.changeTO);
      const { length } = this.props.slides;
      const prevSlide = this.state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      this.setState({ activeSlide, prevSlide });
    }
  
    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return (
        React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) },
        React.createElement("p", { className: "slider__top-heading" }, "Gracious Garments"),
        React.createElement("div", { className: "slider__slides" },
        this.props.slides.map((slide, index) =>
        React.createElement("div", {
          className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
          key: slide.city },
  
        React.createElement("div", { className: "slider__slide-content" },
        React.createElement("h3", { className: "slider__slide-subheading" }, slide.country || slide.city),
        React.createElement("h2", { className: "slider__slide-heading" },
        slide.city.split('').map(l => React.createElement("span", null, l))),
  
        React.createElement("p", { className: "slider__slide-readmore" }, "Explore more")),
  
        React.createElement("div", { className: "slider__slide-parts" },
        [...Array(this.IMAGE_PARTS).fill()].map((x, i) =>
        React.createElement("div", { className: "slider__slide-part", key: i },
        React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))),
  
  
  
  
  
  
        React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }),
        React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })));
  
  
    }}
  
  
  const slides = [
  {
    city: 'Cougar',
    country: 'Best Collection',
    img: 'cousli11.jpg' },
  
  {
    city: 'Cougar',
    country: 'Outstanding Era',
    img: 'cousli44.jpg' },
  
  {
    city: 'Cougar',
    country: 'Elegant Location',
    img: 'cousli33.jpg' },
  
  {
    city: 'Cougar',
    country: 'Best Garments',
    img: 'cousli5.jpg' },
  
  {
    city: 'Cougar',
    country: 'Looks Perfect',
    img: 'cousli66.jpg' }];
  
  
  
  ReactDOM.render(React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));
  












  // ----------------------------------explore-------------------------------------
 