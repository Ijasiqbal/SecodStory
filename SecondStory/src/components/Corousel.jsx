import { Carousel } from "react-bootstrap";
import corousel1 from "../assets/corousel1.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

export default function Corousel() {
  const items = [
    { img: banner1, alt: "slide 1" },
    { img: banner2, alt: "slide 2" },
    { img: corousel1, alt: "slide 3" },
  ];

  return (
    <div className="carousalbase">
      <Carousel>
        {items.map((item, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={item.img} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
